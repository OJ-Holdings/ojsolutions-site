# Launch-polish handoff

Branch `launch-polish` (from `main` after Oscar's 160 commits). Nothing is pushed. Dev server: `.claude/launch.json` config `dev-3002` (localhost:3002). Everything Jacob asked for in the launch-polish round is done and committed. What's below is the record plus the open questions.

## Session rules (from Jacob)

- Pricing is settled with Oscar. `CLAUDE.md`'s "Approved update" block now matches the site and `src/data/pricing.ts`, which stays the source of truth for every price. Follow `CLAUDE.md`.
- No review, audit, critique or verification subagents. No Lighthouse. Build subagents are fine (cheap model, max 2).
- Flat navy and gold, no gradients, glows or drop shadows. Every animation respects prefers-reduced-motion. No em dashes in any copy. All prices come from `src/data/pricing.ts`.
- Commit after each page. Don't push or deploy.
- Skills: impeccable and scroll-craft are linked in `.claude/skills` (same way as the GSAP skills) but have `disable-model-invocation`, so read their files directly. Don't run impeccable's launcher (it downloads a binary). GSAP is allowed on service pages for this work.

## Done (committed)

- `204b706` Sitewide positioning, `pricing.ts`, new homepage, /services cards.
- `a2db05c` /ai-receptionist rebuilt.
- `7dacef2` /websites rebuilt (build agent).
- `8313f83` Address blurred in both v2 commercial cuts and both v1 fallbacks, only for the frames it shows (v2 hero30 about 0:19 to 0:28, v2 cut15 about 0:12 to 0:13.5). Audio stream-copied.
- `273d12c` /commercials rebuilt as an editing suite (components in `src/components/commercials/`, frames and clip crops in `src/assets/commercials/`). The pinned GSAP timeline lives in `ClipsToAd.astro` + `clips-to-ad.ts`; phones, reduced motion and no-JS get a static four-step version.
- `aaed229` /about hero copy covers all three services.
- CLAUDE.md's Approved update block rewritten for the settled prices and three equal services; the /websites phone mockup shows (262) 515-3083 instead of a made-up 555 number.

## Open questions for Jacob

- `public/media/commercial-loop.mp4` (no page uses it) still shows the street address. Delete it or blur it.
- The commercial's audio says the address out loud; the spec kept audio untouched.
- `WEBSITE_EXAMPLES` in `src/config.ts` no longer feeds any page.
- `SHOOT_AREA` and `FAQ_ANSWERS.commercials*` in `src/config.ts` are no longer read by any page; left in place.
- `DESIGN.md`, and the Motion line further down `CLAUDE.md`, still say GSAP is homepage only; the Approved update block overrides that.
- `AGENTS.md` and `.claude/launch.json` changes predate this work and are not committed.

## Screenshot recipe

`npm run build`, start `prod-preview-3003`, measure page height in the browser pane, then headless Chrome with forward-slash Windows paths: `chrome.exe --headless=new --disable-gpu --hide-scrollbars --user-data-dir=C:/.../prof --force-prefers-reduced-motion --window-size=1440,<height> --virtual-time-budget=9000 --screenshot=C:/.../out.png <url>`. For 390 wide, screenshot a wrapper page with a 390px iframe at window width 600 and crop with ffmpeg. The body is `min-h-dvh`, so the window height must match the page height. Headless virtual time does not reliably capture a scrubbed ScrollTrigger state; check those in the browser pane.
