# OJ Solutions website

**Current direction (October 25, 2026):** an AI-front-desk-first, mobile-first lead-generation website for local home-service business owners. The primary conversion is calling the live AI demonstration at **(262) 401-0826**, followed by requesting a consultation.

- **Flagship:** AI Receptionist Pro, $797/month + $2,000 one-time setup.
- **What it does:** AI answers and discloses it's an AI, captures caller/service/address/timeframe, books available on-site estimates, and sends owner lead alerts.
- **Trust:** founders operate OJ Exterior Care and built the receptionist for their own business first. Do not invent customer proof.
- **Supporting modules:** missed-call follow-up, CRM, booking, reviews, websites/forms, reporting.
- **Preview status:** final domain/email, real media, GHL calendar, legal text, and contract terms require founder review before going live.

The site uses **Astro + Tailwind CSS**, is deployed by Vercel from \`main\`, and keeps business values in \`src/config.ts\`. Full development instructions are in [CLAUDE.md](./CLAUDE.md).

## Local development

Requires Node >=22.22.0.

\`\`\`bash
npm ci
npm run check
npm run build
npm run dev
\`\`\`

Do not merge into \`main\` until the preview has passed mobile/accessibility checks and the launch blockers in CLAUDE.md are resolved.

