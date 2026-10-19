# Redesign handoff

Status of the `redesign` branch. Read this before starting the next request.

## 1. What's committed so far

- Docs only. No page or section has been redesigned yet.
- `CLAUDE.md`: the site is on Vercel, not Netlify. GSAP is allowed on the homepage only. Every other page uses CSS for motion. All motion respects prefers-reduced-motion.
- `README.md`: Netlify notes removed. The file table lists `vercel.json` instead of `netlify.toml`.
- `netlify.toml`: deleted.
- `.gitignore`: ignores `.vercel/` instead of `.netlify/`.
- `CLAIMS.md`: every factual claim on the site that you need to confirm. Not acted on yet.
- `HANDOFF.md`: this file.

## 2. Decisions made

### Color direction

- Not picked yet. This is the first thing to settle before building the homepage.
- Three directions were mocked from the brand navy and gold, on the current homepage copy:
  - A, Navy-led: navy on almost every section.
  - B, Warm paper: a warm off-white (#F7F3EA) instead of flat white, with navy only on the final call to action.
  - C, Split shift: navy hero, warm paper and white sections, navy bands for rhythm.
- All text pairs in the three directions pass WCAG AA. Gold still fails as text on light backgrounds, including the warm off-white.
- On navy, the mark sits on a white tile, the same way the share image does it. The logo itself is not changed.
- The mocks and screenshots are in the session's temporary scratch folder, not in the repo. They may not survive. Rebuild them if they're gone.

### Media plan

- Commercial: two cuts, both vertical 1080x1920. One is 16.8 seconds, the other is the 34-second hero cut.
- The full 30-second commercial is not on YouTube. Self-host a compressed file with controls and a poster frame.
- The commercial is the centerpiece of the Commercials page, and it appears as proof on the homepage.
- For anything that autoplays: a short muted loop under about 5 MB, MP4, made with ffmpeg, with a poster frame. The loop segment isn't picked yet.
- The commercial is our own footage. It does not get privacy screening.
- `_media-drop/other/` is empty, so there are no photos of Jacob and Oscar yet.
- Only optimized copies go into the site. Images go through Astro's image tools as responsive AVIF/WebP, lazy-loaded below the fold. `_media-drop/` stays out of git (it's in `.git/info/exclude`).

### Photos

Every photo is OJ Exterior Care's own work. Label them that way, never as client results. They go in "We run businesses too".

Used (3):

- `0A769370-FE15-4843-83EC-6E29D91D5A61.jpg`: house wash of siding and the front entry, before on the left. The difference is faint at phone width side by side, so stack the halves or show it larger on phones.
- `5BAF8361-4917-408E-ABED-8E5A194A8993.jpg`: concrete front steps, before on the left. Reads clearly at phone width.
- `IMG_9951.jpg`: siding with algae on a gable wall. BEFORE and AFTER labels are already in the image. Export it at 1200px wide or less, so the electric meter's serial number can't be read.

Skipped (2):

- `3D0590FC-1E2D-464D-A0EC-71603A705295.jpg`: the house number 76 can be read on the porch post in both halves.
- `IMG_8620.jpg`: the window reflects a street sign and a road intersection, and you can see into the customer's home. It's also an after-only shot with no before.

These verdicts are final. No more photo review.

## 3. Findings to act on later

- Every Book a call button opens a blank email to ojsolutionshq@gmail.com, but "How we work" step 1 says "Pick a time that works for you."
- The Instagram and TikTok links in the footer go to profiles that don't exist. The YouTube channel exists but has no videos.
- The pressure washing company is the site's only real proof, but it's buried in section 4 as gray text. Move it up.

## 4. What's left, in order

1. The homepage. None of it is built yet: the color direction, the hero with the animated phone call, new layouts for "What we fix" and "How we work", and the proof section with the photos and the commercial.
2. The service pages: AI Receptionist, Websites, Commercials.
3. The /book page.
4. FAQs.
5. Commercials page media.
6. `vercel.json` headers: X-Content-Type-Options: nosniff and X-Frame-Options: SAMEORIGIN. Leave the /_astro cache alone. Vercel already sets it.

## 5. Your answers

- The commercial is not on YouTube. Self-host a compressed file with controls.
- Feature ojexteriorcare.com on the Websites page. No location text until you confirm one.

## 6. Vercel preview link

- None yet. The redesign branch hasn't been pushed.

## 7. Working rules

- No review, audit, critique, verification, privacy screening, or claims-checking agents. Do that work yourself.
- Subagents are for build work only, like writing a page or processing media. At most 2 at a time, on a cheaper model.
- Don't download the impeccable detector.
- Screenshots only when a section is finished.
- One page per request.

## 8. Autonomous run status (2026-10-19)

- Phase 1 done: homepage rebuilt in direction A (navy-led). Navy header and footer, navy hero with the animated example call (GSAP, homepage only), "We run businesses too" moved up with the 3 cleared OJ Exterior Care photos and a 1 MB muted loop of our commercial, new "What we fix" rows and "How we work" statement.
- Phase 2 done: /book is always built (PLACEHOLDER box until GHL_CALENDAR_EMBED is set, email shown plainly under it). Every Book a call button goes to /book (service pages add ?service=). Footer Instagram, TikTok, and YouTube links removed (cleared in SOCIAL_LINKS); email stays.
- Phase 3 done: AI Receptionist page restyled (shared navy service hero, step track, ruled checklist). Book a call sits at about 516px on a 375px phone. PLACEHOLDERs for the guarantee line, demo call audio, the 20 to 30 second screen recording, and FAQ answers on price, guarantee, setup time, and not liking the result.
- Phase 4 done: Commercials page. Full commercial self-hosted as the hero centerpiece (720x1280, 4.5 MB, controls, preload none, poster). The 15-second cut is a smaller second player in a navy Our work band. Pricing restyled on all service pages.
- Phase 5 done: Websites page. ojexteriorcare.com featured in the hero (one Playwright phone screenshot of its Services section, chosen because the top of the page shows location text, ratings, and job counts) with a link to the live site. Our work shows a PLACEHOLDER for client examples.
- Phase 6 done: 404, Privacy, and Terms restyled to match (navy title bands, ruled legal sections). vercel.json keeps cleanUrls and adds X-Content-Type-Options: nosniff and X-Frame-Options: SAMEORIGIN. /_astro caching untouched.
