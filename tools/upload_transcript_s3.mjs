#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const [,, captureDirectory] = process.argv;
if (!captureDirectory || captureDirectory === "--help" || captureDirectory === "-h") {
  console.error("Usage: node tools/upload_transcript_s3.mjs <capture-directory>");
  console.error("Required env: FLUFFY_S3_ENDPOINT, FLUFFY_S3_BUCKET, FLUFFY_S3_ACCESS_KEY_ID, FLUFFY_S3_SECRET_ACCESS_KEY");
  process.exit(captureDirectory ? 0 : 2);
}

const required = [
  "FLUFFY_S3_ENDPOINT",
  "FLUFFY_S3_BUCKET",
  "FLUFFY_S3_ACCESS_KEY_ID",
  "FLUFFY_S3_SECRET_ACCESS_KEY",
];
for (const name of required) {
  if (!process.env[name]) throw new Error(`${name} is required; refusing an unscoped upload`);
}

const directory = path.resolve(captureDirectory);
const manifestPath = path.join(directory, "manifest.json");
const capturePath = path.join(directory, "capture.html");
const transcriptPath = path.join(directory, "transcript.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function sha256Bytes(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

const capture = fs.readFileSync(capturePath);
const transcript = fs.readFileSync(transcriptPath);
if (sha256Bytes(capture) !== manifest.raw_html_sha256) {
  throw new Error("capture.html hash does not match manifest; refusing upload");
}
if (sha256Bytes(transcript) !== manifest.normalized_json_sha256) {
  throw new Error("transcript.json hash does not match manifest; refusing upload");
}

const endpoint = new URL(process.env.FLUFFY_S3_ENDPOINT);
if (endpoint.protocol !== "https:") throw new Error("FLUFFY_S3_ENDPOINT must use HTTPS");
const bucket = process.env.FLUFFY_S3_BUCKET;
const region = process.env.FLUFFY_S3_REGION || "auto";
const prefix = (process.env.FLUFFY_S3_PREFIX || "fluffy-system").replace(/^\/+|\/+$/g, "");
const conversationId = manifest.conversation_id;
const objects = [
  {
    body: capture,
    contentType: "text/html; charset=utf-8",
    key: `${prefix}/raw-transcripts/chatgpt-share/${conversationId}/${manifest.raw_html_sha256}.html`,
    sha256: manifest.raw_html_sha256,
  },
  {
    body: transcript,
    contentType: "application/json; charset=utf-8",
    key: `${prefix}/raw-transcripts/chatgpt-share/${conversationId}/${manifest.normalized_json_sha256}.json`,
    sha256: manifest.normalized_json_sha256,
  },
];

function hmac(key, value) {
  return crypto.createHmac("sha256", key).update(value).digest();
}

function signingKey(secret, date) {
  return hmac(hmac(hmac(hmac(`AWS4${secret}`, date), region), "s3"), "aws4_request");
}

function canonicalPath(key) {
  return `${endpoint.pathname.replace(/\/$/, "")}/${encodeURIComponent(bucket)}/${key.split("/").map(encodeURIComponent).join("/")}`;
}

async function request(method, object, body = undefined) {
  const now = new Date();
  const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const shortDate = amzDate.slice(0, 8);
  const host = endpoint.host;
  const payloadHash = body === undefined
    ? sha256Bytes(Buffer.alloc(0))
    : object.sha256;
  const canonicalHeaders = `content-type:${object.contentType}\nhost:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = [method, canonicalPath(object.key), "", canonicalHeaders, signedHeaders, payloadHash].join("\n");
  const scope = `${shortDate}/${region}/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amzDate, scope, sha256Bytes(Buffer.from(canonicalRequest))].join("\n");
  const signature = crypto.createHmac("sha256", signingKey(process.env.FLUFFY_S3_SECRET_ACCESS_KEY, shortDate)).update(stringToSign).digest("hex");
  const authorization = `AWS4-HMAC-SHA256 Credential=${process.env.FLUFFY_S3_ACCESS_KEY_ID}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
  const url = new URL(endpoint);
  url.pathname = canonicalPath(object.key);
  const response = await fetch(url, {
    method,
    body,
    headers: {
      "content-type": object.contentType,
      host,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate,
      authorization,
    },
  });
  return response;
}

async function uploadAndVerify(object) {
  const put = await request("PUT", object, object.body);
  if (!put.ok && put.status !== 412) {
    throw new Error(`PUT failed for ${object.key}: HTTP ${put.status}`);
  }
  const get = await request("GET", object);
  if (!get.ok) throw new Error(`GET verification failed for ${object.key}: HTTP ${get.status}`);
  const readBack = Buffer.from(await get.arrayBuffer());
  const observed = sha256Bytes(readBack);
  if (observed !== object.sha256) throw new Error(`Read-back hash mismatch for ${object.key}`);
  return { key: object.key, sha256: observed, bytes: readBack.length, put_status: put.status };
}

const verified = [];
for (const object of objects) verified.push(await uploadAndVerify(object));
const receipt = {
  schema: "fluffy.chatgpt-share-s3-receipt.v1",
  conversation_id: conversationId,
  backend: "private_s3_compatible",
  endpoint_host: endpoint.host,
  bucket,
  verified_at: new Date().toISOString(),
  objects: verified,
};
fs.writeFileSync(path.join(directory, "s3-receipt.json"), JSON.stringify(receipt, null, 2) + "\n", "utf8");
console.log(JSON.stringify(receipt, null, 2));
