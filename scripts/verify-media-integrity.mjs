/**
 * Fail closed on partial or mismatched publication of the recorded demo.
 * Audio data is private until the exact edited, redacted MP3 is vetted.
 * This script does not certify acoustic redaction: listening review is mandatory.
 */
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createHash } from "node:crypto";
import assert from "node:assert/strict";

const media = resolve(process.cwd(), "public/media");
const recordingPath = resolve(media, "demo-call.mp3");
const transcriptPath = resolve(media, "demo-call.json");
const hasRecording = existsSync(recordingPath);
const hasTranscript = existsSync(transcriptPath);

if (!hasRecording && !hasTranscript) {
  console.log("Recorded demo gated: no matching MP3 and JSON installed.");
  process.exit(0);
}
assert.ok(hasRecording && hasTranscript, "Recorded demo must have BOTH public/media/demo-call.mp3 and demo-call.json.");
const t = JSON.parse(readFileSync(transcriptPath, "utf8"));
const hash = createHash("sha256").update(readFileSync(recordingPath)).digest("hex");
assert.equal(t.audio, "/media/demo-call.mp3", "Incorrect recorded-demo audio filename.");
assert.match(t.audioSha256 || "", /^[0-9a-f]{64}$/, "Transcript must pin the exact approved MP3 SHA-256.");
assert.equal(t.audioSha256, hash, "Recorded MP3 does not match the transcript-approved SHA-256.");
assert.equal(t.audioRedactionReviewed, true, "An authorized human must review audio redaction before release.");
assert.equal(t.version, 1);
assert.ok(t.duration > 20 && t.duration < 360, "Invalid demo duration.");
assert.ok(Array.isArray(t.utterances) && t.utterances.length > 10);
assert.ok(Array.isArray(t.leadCard?.fields));
for (const line of t.utterances) {
  assert.ok(["ai","caller"].includes(line.speaker));
  assert.ok(Array.isArray(line.words) && line.words.length, "Transcript line lacks aligned words.");
  assert.ok(line.start >= 0 && line.end <= t.duration && line.end >= line.start);
  for (const word of line.words) {
    assert.ok(word.start >= 0 && word.end >= word.start && word.end <= t.duration);
    assert.ok(word.start >= line.start - 0.05 && word.end <= line.end + 0.05);
  }
}
for (const field of t.leadCard.fields) {
  assert.ok(typeof field.label === "string" && typeof field.value === "string");
  assert.ok(field.t >= 0 && field.t <= t.duration);
}
assert.ok(t.leadCard.status.t >= 0 && t.leadCard.status.t <= t.duration);
const textual = [
  ...t.utterances.map(x => x.text),
  ...t.utterances.flatMap(x => x.words.map(w => w.w)),
  ...t.leadCard.fields.map(x=>x.value),
].join(" ").toLowerCase();
assert.doesNotMatch(textual, /\b4210\b|\blakeview\b/, "A supplied example street address must remain redacted.");
assert.doesNotMatch(textual, /\b\d{1,6}\s+[a-z][\w.-]*(?:\s+[a-z][\w.-]*){0,3}\s+(?:st|street|drive|dr|road|rd|ave|avenue|blvd|lane|ln)\b/i,
  "A physical street address appears in the public transcript.");
assert.doesNotMatch(textual, /(?:\+?1[\s.-]?)?\(?[2-9]\d{2}\)?[\s.-]?[2-9]\d{2}[\s.-]?\d{4}/, "A phone number appears in the public transcript.");
assert.match(t.edits || "", /edited for length|pauses/i);
assert.ok(t.utterances.some(x => x.words.some(w => w.redacted)), "No redacted token documented in the recorded demo.");
console.log("Recorded demo integrity passed: hash, complete word timing, explicit human audio review and text redaction.");
