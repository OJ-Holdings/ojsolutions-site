# Operator Advantage — OJ Solutions homepage

Updated October 25, 2026. This replaces the former small "We run businesses too" collage in `src/components/home/OwnWork.astro` while leaving the top AI call demonstration intact.

## Purpose
Make the founders' operational experience at OJ Exterior Care the primary trust proof. OJ Solutions offers websites, commercials, automation and AI receptionist systems because its founders actually operate a home-service business.

## Design structure
1. Full-bleed navy editorial introduction: "We don't just build for businesses. We run one." Serif italic gold accent. Real founder narrative; no invented results.
2. Photography-led asymmetrical gallery: actual OJ Exterior Care house-wash after image as hero; before image as secondary; genuine in-house commercial loop as smaller supporting card with pause button and link to `/commercials`.
3. Three plainspoken operator principles without fabricated customer stats.
4. Large concrete front-steps **before/after comparison slider** using original paired photos. Native range input exposes touch, mouse and keyboard interactions.
5. Supplemental existing siding before/after photo as additional authentic work evidence.
6. Explicit transition linking to `#front-desk` immediately before the AI receptionist features.

## Accessibility and performance
- Preserve original native Astro `Image` optimization and responsive `srcset`.
- Before/after comparison uses input `type=range` with accessible label and dynamic value text, no dependencies.
- CSS hover effects and scroll reveals respect `prefers-reduced-motion`. Core content remains visible if JS is off.
- Mute commercial playback, never autoplay sound; pause video off-screen; expose controls for reduced-motion users; play/pause toggle for others.
- Do not pull live customer data into portfolio. Use only original OJ Exterior Care images already in the repository.

## Future proofing
Replace any supplied imagery only with appropriately verified company-owned photographs. If adding proof numbers, reviews or outcome claims, verify the figures and permission first.

## QA before release
Vercel must build the latest commit. Review at mobile 360px/375px and desktop 1280px/1440px. Check comparison drag and arrow keys, image layout/crops, video controls and link to `#front-desk`, and no viewport horizontal scroll.
