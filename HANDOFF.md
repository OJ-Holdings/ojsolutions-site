# Launch-polish handoff

Branch `launch-polish` (from `main` after Oscar's 160 commits). Nothing is pushed. Dev server: `.claude/launch.json` config `dev-3002` (localhost:3002). Read this first, then do what's left in order.

## Session rules (from Jacob)

- Do NOT touch `CLAUDE.md`. Leave its "Approved update" block exactly as is ($797/$2,000, Kenosha) until Jacob aligns with Oscar. Keep building from `src/data/pricing.ts`.
- No review, audit, critique or verification subagents. No Lighthouse. Build subagents are fine (cheap model, max 2).
- Flat navy and gold, no gradients, glows or drop shadows. Every animation respects prefers-reduced-motion. No em dashes in any copy. All prices come from `src/data/pricing.ts`.
- Commit after each page. Don't push or deploy.
- Use impeccable for layout and polish and GSAP plus scroll-craft for motion. Both skills are linked in `.claude/skills` but have `disable-model-invocation`, so read their SKILL.md directly. Impeccable's launcher downloads a binary on first run, so don't run it; use `reference/craft-floor.md` and `reference/layout.md`. Scroll-craft is a standalone-site pipeline; apply its rules (one peak per page, varied devices, no scroll cues, no section counters, no eyebrows over every heading, transform/opacity/clip-path only, static story under reduced motion).
- Jacob explicitly allowed GSAP on service pages for this work, even though `CLAUDE.md` and `DESIGN.md` say homepage only.

## Done (committed)

- `204b706` Sitewide: locations removed, dashes and disclaimers removed, three-service positioning, `src/data/pricing.ts`, new homepage, /services cards.
- `a2db05c` /ai-receptionist rebuilt (call demo hero, missed-call phone stack, connected How it works flow, 8-item IconGrid, single plan card plus "Hear it first" panel, Built for strip, expanded FAQ, call-first final CTA). Shared pieces added: `Button` variants `outline`/`outline-navy`, `CallButton`, `IconGrid`, ~27 new icons in `Icon.astro` (exports `IconName`), `ServiceLayout` props/slots `callFirst`, `hero-note`, `problem-aside`, plan feature lists in `pricing.ts`.
- `7dacef2` /websites rebuilt by a build agent (device mockups, two-phone comparison, Our builds, 8-item grid, drawn connector, two pricing cards, 10-question FAQ). Not yet looked at by eye in this session; the agent checked 1440 and 390.

## Left to do, in order

### 1. VIDEO FIX (both commercial cuts, everywhere they're used)

Files: `public/media/OJ_Solutions_Commercial_v2_hero30.mp4` (1080x1920, 32.1s, ~24 MB) and `public/media/OJ_Solutions_Commercial_v2_cut15.mp4` (1080x1920, 16.4s). Used by `src/components/home/ProofSection.astro` and `src/pages/commercials.astro`. The older `commercial-30.mp4` / `commercial-15.mp4` (720x1280) are fallbacks and show the same address; decide whether to fix them too or report them.

Jacob's spec: extract frames from 0:11 to 0:21, find the lead card showing "4210 Lakeview Dr, Kenosha", and use ffmpeg to blur just that card region for exactly the seconds it's visible. Keep the rest of the video and the audio untouched (`-c:a copy`), keep quality as close to the original as possible (x264, low CRF, same size, pix_fmt and fps), and swap the fixed files in everywhere they're used. Re-extract frames from 0:12 to 0:20 afterward and confirm the address is unreadable.

Notes from a contact sheet of hero30: the lead card sits roughly x 60 to 1020, y 400 to 1010 (full 1080x1920 frame), and the address shows in it from about 0:12 to 0:20. The caller's white chat bubble lower down (roughly y 1230 to 1530) also says "4210 Lakeview Drive, Kenosha" around 0:12 to 0:18, so blur that too. Measure exact boxes and times from extracted frames before blurring. The audio may speak the address; you can't change it under the spec, so mention it.

### 2. PAGE 3: /commercials (nav label stays "Video Ads"). Commit after.

Rebuild it around how the service actually works. We do not film. The client tells us the idea and sends their own rough clips (phone footage is fine). We turn those clips into a finished ad with our AI-assisted editing workflow: hook, cuts, captions, music, motion graphics, and versions sized for every platform. Remove anything that implies we shoot on location, including "plan, film and edit", "Filming", "We handle the filming", "shot list", "We shoot it" and "Let's get you on camera".

Design direction: the page should feel like an editing suite. Fill the empty space with film and editing visuals built in code: film-strip sprocket borders on section dividers, a running timecode readout, a red REC dot, a playhead sweeping across a timeline. Red only for the REC dot and the missed-call accents already in the video. Use ffmpeg to pull 8 frames from the commercial for clip thumbnails, skipping the frames that show the address (or pull them from the fixed video).

1. Hero: keep "People scroll past photos. They stop for video." New subhead: "Send us your idea and the clips you already have. We turn them into a scroll-stopping ad for Reels, TikTok, Facebook and your website." Primary button "Request a call", secondary "See the example" scrolling to Our work. Frame the commercial player like an editing monitor with a timecode readout and REC dot above it. Caption: "Our own commercial, shot on real OJ Exterior Care jobs."
2. Signature section "Watch your clips become an ad" (GSAP ScrollTrigger, pinned, scroll-driven): raw clip thumbnails scattered at the top drop into an editing timeline with video, caption and music tracks; caption chips pop onto the caption track, a waveform draws on the music track, the playhead sweeps across, and it resolves into the finished 9:16 ad frame. On mobile and with reduced motion, show the same story as a static 4-step sequence.
3. Keep "If you're not on video, you're easy to miss." and fill its empty right side (`problem-aside` slot) with three phone frames in 9:16, 1:1 and 16:9 showing frames from the ad, labeled with where each runs.
4. "Our work": replace the single small thumbnail in a big empty band with a real showcase: full cut and short cut side by side as editing-monitor frames with timecode, and a film strip of frame thumbnails underneath.
5. "What's included", 6 items with icons (use `IconGrid`; icons exist: bulb, scissors, captions, music, sparkle, formats): Hook and concept (we shape your idea into an opener that stops the scroll); Edited from your clips (phone footage works); Captions on every video; Music and sound; Motion graphics and text; Every format (vertical for Reels, TikTok and Shorts, square and wide for feeds, ads and your website).
6. "How it works", 4 steps: 1. Tell us the idea: a quick call or message about what the ad should say and who it's for. 2. Send your clips: upload whatever you've got, rough is fine. 3. We edit: you get a first cut within 3 business days. 4. Approve and post: two rounds of revisions, then every format, ready to post or run as an ad.
7. Pricing from pricing.ts, two cards replacing "we quote after a quick call" (use `PricingOptions`, which already puts a Request a call button on each card): Single ad `money(PRICING.video.single)` with `PRICING.video.singleFeatures`. Monthly content plan `money(PRICING.video.contentPlan.monthly)`/month with `PRICING.video.contentPlan.features`.
8. FAQ:
   Do you film? "No. You send the clips and we handle everything after that. Phone footage works great."
   What should I send? "Clips of your work, your team and your results. A few seconds of each is plenty, and we'll tell you if anything's missing."
   Who comes up with the idea? "You bring the idea. We shape the hook and structure with you on a quick call."
   How fast is it? "First cut within 3 business days."
   How many revisions do I get? "Two rounds per video."
   Which platforms is it made for? "Reels, TikTok, YouTube Shorts, Facebook, and a version for your website."
   Can you run the ads for me? "We deliver ad-ready files. Running the ads isn't included."
   Do I own the videos? "Yes. Every finished video is yours to use anywhere."
9. Final CTA: "Got clips? Let's make an ad." with "Book a short call and tell us the idea."

Also drop the now-unused `SHOOT_AREA` / `FAQ_ANSWERS.commercials*` reads from the page (leave `src/config.ts` entries alone or clean them, your call; note it).

### 3. PAGE 4: /about, copy only. Commit after.

Update the hero body so it covers all three services: "Jacob Prahl and Oscar Johnston run OJ Exterior Care, an exterior cleaning company. Everything OJ Solutions sells, we built for our own business first: an AI receptionist that answers and books calls, a website that brings in customers, and video ads made from real job footage." Don't add photo placeholders. Founder photos come later.

### 4. AT THE END

One desktop (1440) and one 390px full-page screenshot of each of the four pages (/ai-receptionist, /websites, /commercials, /about), sent to Jacob with SendUserFile, then a short summary of anything you couldn't do or had to decide on your own.

Screenshot recipe that works here: run `npm run build`, start `prod-preview-3003` from `.claude/launch.json` (no dev toolbar), measure page height in the browser pane with `document.documentElement.scrollHeight`, then headless Chrome: `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --user-data-dir=<scratch>/chrome-profile --force-prefers-reduced-motion --window-size=1440,<height> --virtual-time-budget=8000 --screenshot=<file> <url>`. Chrome won't go below ~500px wide, so for 390 screenshot a wrapper HTML with `<iframe src=URL style="border:0;width:390px;height:<height>px">` at window 600 wide and crop to 390 with ffmpeg.

## Decisions to report in the final summary

- "Commercials" is labeled "Video Ads" in nav and footer; the URL stays /commercials.
- Receptionist page FAQ uses the receptionist-only cost answer; the homepage FAQ lists all three services.
- /ai-receptionist: the recorded-call and screen-recording PLACEHOLDER lines moved into the "Hear it first" panel (preview builds only). The worked example in How it works shows "Address: Saved" instead of a street address.
- /websites (agent): the comparison and connector use CSS plus a small script, not GSAP. It wrote the Our builds intro line and a fake 555-0123 number in the stalled phone. `WEBSITE_EXAMPLES` in `src/config.ts` and the "client website examples" row in `PLACEHOLDERS.md` no longer feed any page.
- The ojexteriorcare.com desktop screenshot shows "Southeast WI", so only its phone mockup is used; the browser mockups show our own ojsolutions.org.
- Commit `204b706` changed one line in `CLAUDE.md` (the config list now points at `pricing.ts` instead of the removed price constants). Jacob said not to touch CLAUDE.md going forward; offer to revert that line.
- `CLAUDE.md` and `DESIGN.md` still say GSAP is homepage only and still describe the old offer; Jacob is aligning with Oscar first.
- `AGENTS.md` and `.claude/launch.json` changes were in the working tree before this work started; they are not committed.
