# Website design specification — OJ Solutions

**Approved direction:** premium, tactical, understated, operator-built. AI receptionist is the single flagship product.

## Tokens

| Token | Hex | Role |
| --- | --- | --- |
| ink | #0A0A0C | Primary background |
| bone | #F4F1EA | Light canvas and readable text |
| gold | #C4A452 | Primary CTA and highlight |
| navy | #12203A | Secondary dark sections |
| steel | #8A93A0 | Supporting type and borders |
| success | #1FBF6B | Call answered / lead captured state only |
| alert | #E5484D | Missed call state only |

## Typography

- Inter Tight: page and UI headings, 800–900 weight; body 400–500.
- Instrument Serif italic: a key headline phrase, used sparingly.
- JetBrains Mono: eyebrow labels, status, sample timestamps.
- Minimum body: 16px mobile, 18px for primary prose on desktop.
- Preferred heading scale: hero \`clamp(38px, 5.1vw, 77px)\`, section \`clamp(36px, 4.6vw, 65px)\`.
- Use high-contrast text, not gold body text on a light canvas.

## Layout

- Container max-width 1200px; 20px desktop minimum horizontal gutter; 16px mobile gutter.
- Section vertical spacing: 108px desktop, 76px tablet/mobile.
- CTA minimum height: 52px; visible click-to-call and secondary booking action in first mobile screen.
- Home section order: hero → missed-call problem → real demo → setup process → core features → add-on stack → founder proof → trades → pricing → FAQ → final CTA.
- No first-load popups, autoplay sound, decorative fake reviews, robots, or stock call-center photos.
- Interactive treatments: CSS-based call waveform, details/summary accordions, user-initiated audio player, and dataLayer-safe analytics hooks. Respect \`prefers-reduced-motion\`.

## Existing files and source of truth

- \`src/pages/index.astro\`: home copy, design, and behavioral UI.
- \`src/config.ts\`: contact, prices, GHL booking and demo media.
- \`src/layouts/BaseLayout.astro\`: SEO, site shell, old shared chrome for supporting pages.
- \`src/pages/ai-receptionist.astro\`: companion receptionist page with matching offer.

## Required quality gate

Before merge: Astro typecheck and build, responsive widths at 360/375/768/1440, link and phone tests, reduced-motion audit, media/consent review, booking fallback verification, and real-device demo line test. Performance/Lighthouse results need actual measurement; **do not claim verified scores**.

## Unresolved launch inputs

Domain \`[DOMAIN]\`, business email \`[EMAIL]\`, approved logo variants, six field photos, demo MP3 and transcript, GHL calendar URL, contract/cancellation/setup terms, reviewed legal disclosures, and analytics IDs.
