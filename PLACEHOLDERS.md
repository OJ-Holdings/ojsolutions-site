# Placeholders

Every answer the site is still waiting on shows as text starting with `PLACEHOLDER:`. There are **5**, on 3 pages. Search the code for `PLACEHOLDER` or `placeholder(` to find them.

**Placeholders only show on preview and local builds.** When Vercel builds production (`VERCEL_ENV` is `"production"`), they're hidden. The switch is `SHOW_PLACEHOLDERS` in `src/lib/site.ts`. The last column below says what production shows instead.

Most go away on their own once you fill in the matching value in `src/config.ts`.

## /ai-receptionist (3)

| # | What it says (preview) | File | How to replace it | On production |
|---|---|---|---|---|
| 1 | PLACEHOLDER: demo call recording (audio player) | `src/pages/ai-receptionist.astro:157` | Put the file in `public/media/` and set `DEMO_AUDIO_SRC`. Optional: `DEMO_AUDIO_TRANSCRIPT`. | Hidden. With no audio and no video, the whole "Hear a real call" panel is hidden. |
| 2 | PLACEHOLDER: 20 to 30 second screen recording of the booking the call created | `src/pages/ai-receptionist.astro:171` | Put the mp4 in `public/media/` and set `DEMO_VIDEO_SRC`. | Hidden (see #1). |
| 3 | FAQ "How long does setup take?": PLACEHOLDER: how long setup takes | `src/pages/ai-receptionist.astro:90` | Set `FAQ_ANSWERS.receptionistSetupTime`. | The question isn't shown. |

## /websites (1)

| # | What it says (preview) | File | How to replace it | On production |
|---|---|---|---|---|
| 4 | PLACEHOLDER: client website examples (Our work section) | `src/components/WebsiteExamples.astro:49` | Add real client sites to `WEBSITE_EXAMPLES`. Only real projects. | The whole Our work section is hidden. |

## /book (1)

| # | What it says (preview) | File | How to replace it | On production |
|---|---|---|---|---|
| 5 | PLACEHOLDER: GoHighLevel booking calendar goes here. | `src/pages/book.astro:76` | Set `GHL_CALENDAR_EMBED` (the link inside the GHL embed code's `src="..."`). | A "Book by email" button (opens an email to `EMAIL` with the subject "Book a call"), with the address written out under it. |

## Standby placeholder

- `src/pages/ai-receptionist.astro:122`: "PLACEHOLDER: guarantee line" only appears on preview if `GUARANTEE_TEXT` in `src/config.ts` is emptied again. It's set now, so it doesn't show.

## Still hidden, not placeholders

These questions stay hidden until answered: "Where are you based?" (home), "Do I need a new phone number?" and "Is there a long contract?" (AI Receptionist), "Do I own the site?" and "How long does it take?" (Websites), "Do you come to us?" and "How long until it's ready?" (Commercials). They're in `FAQ_ANSWERS` in `src/config.ts`.
