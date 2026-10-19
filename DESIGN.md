# OJ Solutions design system

Direction A, navy-led. Built on the `redesign` branch, October 2026. Brand rules in `CLAUDE.md` still apply (colors, flat only, 8px max radius, no em dashes).

## Color

- Navy `#0B1F3A` owns most of every page: header, hero, footer, the final call to action, and every other band in between.
- White bands break the navy for reading-heavy sections (the problem, What's included, FAQ, pricing, legal text).
- Gold `#C4A452` is for accents only: buttons on navy, underline highlights, icon tiles, step markers, rules. Never gold text on white.
- On navy, secondary text uses `.text-soft` (white mixed 78% into navy) and lines use `.rule-soft` (white at 16%). On white, secondary text is `muted`, lines are `line`.
- Buttons: gold with navy text on navy, navy with white text on white.

## Type

- Montserrat (500, 700) for headings, Inter (400, 600) for body. Self-hosted.
- `.display-1`: page and hero headlines, `clamp(2.25rem, 1.4rem + 4.2vw, 4.5rem)`, tight tracking.
- `.display-2`: section headings, `clamp(1.875rem, 1.35rem + 2.4vw, 3.25rem)`.
- `.mark-gold`: the gold underline on the key words of a headline.
- No eyebrow labels above headings. The service pages show the service name with its icon tile as a nameplate.

## Pieces

- `Section` takes `tone="navy"` for a navy band. `SectionHeading` and `Steps` take the same `tone`.
- `Hero` (service pages) has an `aside` slot for proof beside the copy: the demo player, the commercial, the site screenshot.
- `Steps`: a numbered track, down the left on phones and across on wide screens.
- `FeatureGrid`: a ruled checklist, not cards.
- `PlaceholderBox` and `placeholder()`: visible stand-ins for missing answers, always starting with `PLACEHOLDER:`. See `PLACEHOLDERS.md`.
- Logo on navy: the mark sits on a small white tile (`Logo tone="navy"`).

## Motion

- Homepage only: GSAP, loaded on demand when the element scrolls into view. The hero call demo loops while on screen and has a pause button. The "How we work" underlines draw in once.
- Every other page: CSS only (hover states, small arrow nudges).
- `prefers-reduced-motion`: the call demo shows its finished state, the commercial loop stays on its poster with normal controls, underlines are drawn.
- Anything that loops for more than five seconds has a pause control.

## Media

- Photos: optimized copies in `src/assets/`, served by Astro as responsive AVIF/WebP. Originals stay in `_media-drop/`, which is not in git.
- Video: self-hosted in `public/media/`. The homepage loop is muted, under 1 MB, and only plays on screen. The Commercials page players use `preload="none"` with a poster.
