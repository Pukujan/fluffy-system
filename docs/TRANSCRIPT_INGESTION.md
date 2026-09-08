# Transcript ingestion and storage boundary

Fluffy is a public experiment and review repository. It is not the durable raw-transcript store.

For a shared ChatGPT conversation, the storage boundary is:

1. Capture the complete public-share payload without editing it.
2. Store the exact capture and the structured transcript in a private S3-compatible object store.
3. Verify the uploaded objects by reading them back and comparing SHA-256 hashes.
4. Commit only a public-safe receipt containing provenance, counts, hashes, and the private object keys. Derived briefs may be committed only after the evidence is classified and reviewed.

The raw object key must be content-addressed and must not contain a person’s name or transcript text:

```text
<namespace>/raw-transcripts/chatgpt-share/<conversation-id>/<raw-html-sha256>.html
<namespace>/raw-transcripts/chatgpt-share/<conversation-id>/<normalized-json-sha256>.json
```

An upload is not considered complete when a local file exists or when a GitHub receipt exists. The receipt must say `uploaded` only after a successful S3-compatible write and read-back verification. The uploader must use Fluffy-scoped variables (`FLUFFY_S3_ENDPOINT`, `FLUFFY_S3_BUCKET`, `FLUFFY_S3_ACCESS_KEY_ID`, and `FLUFFY_S3_SECRET_ACCESS_KEY`) and fail closed when any are absent. Cortex telemetry credentials are intentionally not valid substitutes.

The first capture receipt is [the Check Fossil Core shared conversation](../evidence/transcripts/6aa0562f-49c4-83e9-be78-b9b6419d5b1d.json). Its raw artifacts remain outside this public repository and are recorded in that receipt after scoped object-store verification.

After configuring the four required `FLUFFY_S3_*` variables, run `node tools/upload_transcript_s3.mjs <private-capture-directory>`. The command refuses missing scope, checks the two local hashes against the capture manifest, writes content-addressed objects, reads each object back, and emits `s3-receipt.json` only after both hashes match.

GitHub can independently verify an uploaded receipt with the manual `Verify transcript object storage` workflow. It reads the object keys and expected hashes from the committed receipt and uses only the repository’s Fluffy-scoped Actions secrets.
