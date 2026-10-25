# OJ Solutions — Recorded demo and commercial media release

The website supports the founders' approved Round 2 media, but the exact edited demonstration recording has **not** been provided. This checklist prevents accidental publication of raw caller information.

## Prepared assets
The founder-supplied Round 2 media kit includes these files, ready for a binary-capable GitHub upload:
- public/media/commercial-hero.mp4 — optimized 32.106s commercial
- public/media/commercial-hero-poster.webp
- public/media/commercial-v2-cut15.mp4 — optimized 16.417s short cut
- public/media/commercial-v2-cut15-poster.webp
- public/media/oj-exterior-care-logo.webp — separate operating company, not a replacement OJ Solutions logo
- public/media/demo-call.json — sanitized public transcript/timing data, not yet paired with approved MP3

Once new v2 cuts and matching posters are present, both /commercials and the homepage's Operator Advantage media tile adopt them automatically. Until then they use the original, existing site videos.

## Missing MP3 and required checks
The uploaded source WAV lasts 174.74 seconds. The sanitized word-timing JSON lasts 147.72 seconds. The 147.72-second edited MP3 does not appear in the uploaded attachments. Do not rename or publish the unredacted WAV to make the player appear.

1. Produce or provide the **edited, 147.72-second demo-call.mp3** matching all word timestamps.
2. Listen through the edited audio and confirm the entire phone number and street address are muted or removed, including repeated address readbacks.
3. Review the spoken October 12 date as historical; the website must not make it seem like current availability.
4. Put the final MP3 in public/media/demo-call.mp3.
5. Compute SHA-256 of that exact MP3 and set audioSha256 in the JSON to the 64-character lowercase digest. Set audioRedactionReviewed true **only after an authorized human listens to and approves the redaction**.
6. Run node scripts/verify-media-integrity.mjs. If the file/hash/review/redaction state is inconsistent, the build fails; the recorded player also remains hidden at render time.
7. Check browser playback, word timing, backward seeking and staged lead-card reveals. Never show another caller's contact information in the transcript or in page source.

No real recorded-demo audio will autoplay. The existing fictional animation and live AI demonstration phone number remain available.

## Current status
Site copy, approved plan pricing and founder names are live. Commercial v2 binaries and correct recorded MP3 are **not** deployed. The media files still require a binary-capable upload and privacy review; this repo's GitHub text-file connector cannot transfer the existing binary videos directly. Do not claim that the new cuts or real recorded audio are live before checking the deployed files.
