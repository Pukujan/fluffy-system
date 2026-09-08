#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

function usage() {
  console.error("Usage: node tools/extract_chatgpt_share.mjs <captured-html> <output-directory>");
  process.exit(2);
}

const [, , inputPath, outputDirectory] = process.argv;
if (!inputPath || !outputDirectory) usage();

const html = fs.readFileSync(inputPath, "utf8");
const streamPattern = /streamController\.enqueue\("((?:\\.|[^"\\])*)"\)/g;
let match;
let encodedStream;
while ((match = streamPattern.exec(html))) {
  const candidate = JSON.parse(`"${match[1]}"`);
  if (candidate.startsWith("[")) {
    encodedStream = candidate;
    break;
  }
}
if (!encodedStream) throw new Error("No serialized router data stream found");

const table = JSON.parse(encodedStream);
const memo = new Map();
const active = new Set();

function resolveIndex(index) {
  if (index === -5) return undefined;
  if (index === -1) return null;
  if (typeof index !== "number") return index;
  if (index < 0) return index;
  if (memo.has(index)) return memo.get(index);
  // React Router's deduplicated table may contain shared/self-referential
  // metadata objects. The raw HTML remains canonical; use an explicit marker
  // in the JSON projection instead of recursing forever or silently dropping it.
  if (active.has(index)) return `[CYCLE ${index}]`;
  active.add(index);
  const value = resolveValue(table[index]);
  active.delete(index);
  memo.set(index, value);
  return value;
}

function resolveValue(value) {
  if (Array.isArray(value)) return value.map(resolveIndex);
  if (value && typeof value === "object") {
    const output = {};
    for (const [key, child] of Object.entries(value)) {
      if (key.startsWith("_")) output[String(resolveIndex(Number(key.slice(1))))] = resolveIndex(child);
      else output[key] = resolveValue(child);
    }
    return output;
  }
  return value;
}

const routerContext = resolveIndex(0);
const route = routerContext?.loaderData?.["routes/share.$shareId.($action)"];
const data = route?.serverResponse?.data;
if (!data?.mapping || !data.current_node) throw new Error("Decoded page has no conversation mapping/current node");

const chain = [];
const seen = new Set();
let nodeId = data.current_node;
while (nodeId) {
  if (seen.has(nodeId)) throw new Error(`Cycle in conversation mapping at ${nodeId}`);
  seen.add(nodeId);
  const node = data.mapping[nodeId];
  if (!node) throw new Error(`Missing parent node ${nodeId}`);
  chain.push(node);
  nodeId = node.parent;
}
chain.reverse();

const messages = chain
  .filter((node) => node.message)
  .map((node, index) => ({
    sequence: index,
    node_id: node.id,
    parent: node.parent ?? null,
    children: node.children ?? [],
    message: node.message,
  }));

const roleCounts = {};
for (const item of messages) {
  const role = item.message.author?.role ?? "unknown";
  roleCounts[role] = (roleCounts[role] ?? 0) + 1;
}

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function formatPart(part) {
  if (typeof part === "string") return part;
  return `\n\`\`\`json\n${JSON.stringify(part, null, 2)}\n\`\`\``;
}

const transcript = [
  `# ${data.title ?? "ChatGPT shared conversation"}`,
  "",
  `Source: https://chatgpt.com/share/${data.conversation_id}`,
  `Conversation ID: ${data.conversation_id}`,
  `Current node: ${data.current_node}`,
  "",
  "This is a deterministic rendering of the complete parent chain in the shared page's serialized conversation mapping. The captured HTML is the canonical raw source; this Markdown is a derived view.",
  "",
];
for (const item of messages) {
  const message = item.message;
  const role = message.author?.role ?? "unknown";
  const name = message.author?.name ? ` (${message.author.name})` : "";
  transcript.push(`## ${item.sequence + 1}. ${role}${name}`);
  transcript.push("");
  transcript.push(`Node: ${item.node_id}`);
  if (message.create_time !== undefined) transcript.push(`Create time: ${message.create_time}`);
  transcript.push("");
  const parts = message.content?.parts ?? [];
  if (parts.length === 0) transcript.push("[no content parts]");
  else for (const part of parts) transcript.push(formatPart(part));
  transcript.push("", "---", "");
}

const rawHtmlSha256 = sha256(html);
const normalizedJson = JSON.stringify({
  source: {
    url: `https://chatgpt.com/share/${data.conversation_id}`,
    conversation_id: data.conversation_id,
    title: data.title ?? null,
    current_node: data.current_node,
  },
  graph: {
    mapping_node_count: Object.keys(data.mapping).length,
    chain_node_count: chain.length,
  },
  role_counts: roleCounts,
  messages,
}, null, 2) + "\n";

const manifest = {
  schema: "fluffy.chatgpt-share-capture.v1",
  source_url: `https://chatgpt.com/share/${data.conversation_id}`,
  conversation_id: data.conversation_id,
  title: data.title ?? null,
  capture_kind: "serialized-public-share-page",
  evidence_status: "reconstructed",
  canonical_raw_source: "capture.html",
  raw_html_sha256: rawHtmlSha256,
  normalized_json_sha256: sha256(normalizedJson),
  transcript_markdown_sha256: sha256(transcript.join("\n")),
  mapping_node_count: Object.keys(data.mapping).length,
  chain_node_count: chain.length,
  message_count: messages.length,
  role_counts: roleCounts,
  current_node: data.current_node,
  note: "The share page contains redacted tool outputs where ChatGPT redacted them. No missing node was inferred or silently replaced.",
};

fs.mkdirSync(outputDirectory, { recursive: true });
fs.copyFileSync(inputPath, path.join(outputDirectory, "capture.html"));
fs.writeFileSync(path.join(outputDirectory, "transcript.json"), normalizedJson, "utf8");
fs.writeFileSync(path.join(outputDirectory, "transcript.md"), transcript.join("\n"), "utf8");
fs.writeFileSync(path.join(outputDirectory, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n", "utf8");

console.log(JSON.stringify({ ...manifest, output_directory: path.resolve(outputDirectory) }, null, 2));
