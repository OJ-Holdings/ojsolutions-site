# OJ Solutions typography token diff — Round 2

Approved commercial identity alignment, 2026-10-26. Preserve navy/gold and operator imagery.

| Token/asset | Before | After |
|---|---|---|
| Heading family | Montserrat | **Inter Tight** (self-hosted @fontsource, Latin, weights 500/700/800) |
| Body family | Inter | **Inter** (unchanged, self-hosted Latin) |
| Italic editorial accent | Inherited / underline only | **Instrument Serif Italic**, self-hosted Latin 400, selectively applied |
| Numbered/small captions | Default sans | **JetBrains Mono**, self-hosted Latin 500, selectively applied |
| Navy | #0B1F3A | **Unchanged** |
| Gold | #C4A452 | **Unchanged** |
| Initial font preloads | Montserrat 700 and Inter 400 | **Only Inter Tight 700**, the headline weight |
| Old heading font | Montserrat shipped | Montserrat removed from dependencies and imports |

All font binaries remain in npm packages and are built as the site assets by Astro/Vite. No external Google Fonts request is necessary.

## Known tradeoffs and QA
- Stronger font identity may shift text line breaks. Monitor 320/375/768/1280px screens.
- Compare CLS and LCP to mobile Lighthouse baseline PR #18: 96 performance, 100 accessibility, 100 SEO, LCP 2.6s and CLS .001. Lab values vary by run.
- The body remains Inter to preserve readability, while the accent is only used sparingly.
- This patch changes type tokens, **not** the price, service conditions, conversion paths or brand palette.
