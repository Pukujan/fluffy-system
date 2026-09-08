#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";

const [, , manifestPath] = process.argv;
if (!manifestPath || manifestPath === "--help" || manifestPath === "-h") {
  console.error("Usage: node tools/verify_transcript_s3.mjs <receipt-manifest>");
  process.exit(manifestPath ? 0 : 2);
}

for (const name of [
  "FLUFFY_S3_ENDPOINT",
  "FLUFFY_S3_BUCKET",
  "FLUFFY_S3_ACCESS_KEY_ID",
  "FLUFFY_S3_SECRET_ACCESS_KEY",
]) {
  if (!process.env[name]) throw new Error(`${name} is required; refusing an unscoped verification`);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const storage = manifest.durable_storage;
const endpoint = new URL(process.env.FLUFFY_S3_ENDPOINT);
if (endpoint.protocol !== "https:") throw new Error("FLUFFY_S3_ENDPOINT must use HTTPS");
if (process.env.FLUFFY_S3_BUCKET !== storage.bucket) throw new Error("Configured bucket differs from receipt bucket");
if (endpoint.host !== storage.endpoint_host) throw new Error("Configured endpoint differs from receipt endpoint");

function sha256Bytes(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function hmac(key, value) {
  return crypto.createHmac("sha256", key).update(value).digest();
}

function signingKey(secret, date, region) {
  return hmac(hmac(hmac(hmac(`AWS4${secret}`, date), region), "s3"), "aws4_request");
}

function canonicalPath(bucket, key) {
  return `${endpoint.pathname.replace(/\/$/, "")}/${encodeURIComponent(bucket)}/${key.split("/").map(encodeURIComponent).join("/")}`;
}

async function getObject(key, expectedHash) {
  const region = process.env.FLUFFY_S3_REGION || "auto";
  const now = new Date();
  const amzDate = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  const shortDate = amzDate.slice(0, 8);
  const host = endpoint.host;
  const payloadHash = sha256Bytes(Buffer.alloc(0));
  const contentType = "application/octet-stream";
  const canonicalHeaders = `content-type:${contentType}\nhost:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = ["GET", canonicalPath(process.env.FLUFFY_S3_BUCKET, key), "", canonicalHeaders, signedHeaders, payloadHash].join("\n");
  const scope = `${shortDate}/${region}/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amzDate, scope, sha256Bytes(Buffer.from(canonicalRequest))].join("\n");
  const signature = crypto.createHmac("sha256", signingKey(process.env.FLUFFY_S3_SECRET_ACCESS_KEY, shortDate, region)).update(stringToSign).digest("hex");
  const url = new URL(endpoint);
  url.pathname = canonicalPath(process.env.FLUFFY_S3_BUCKET, key);
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "content-type": contentType,
      host,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amzDate,
      authorization: `AWS4-HMAC-SHA256 Credential=${process.env.FLUFFY_S3_ACCESS_KEY_ID}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
    },
  });
  if (!response.ok) throw new Error(`GET failed for ${key}: HTTP ${response.status}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  const observedHash = sha256Bytes(bytes);
  if (observedHash !== expectedHash) throw new Error(`Hash mismatch for ${key}`);
  return { key, bytes: bytes.length, sha256: observedHash };
}

const objects = [
  { key: storage.raw_html_object_key, hash: manifest.capture_verification.raw_html_sha256 },
  { key: storage.normalized_json_object_key, hash: manifest.capture_verification.normalized_json_sha256 },
];
const verified = [];
for (const object of objects) verified.push(await getObject(object.key, object.hash));
console.log(JSON.stringify({
  schema: "fluffy.chatgpt-share-s3-github-verification.v1",
  conversation_id: manifest.source.conversation_id,
  endpoint_host: endpoint.host,
  bucket: process.env.FLUFFY_S3_BUCKET,
  verified_at: new Date().toISOString(),
  objects: verified,
}, null, 2));
