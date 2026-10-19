# Placeholders

Every answer the site is still waiting on shows on the page as text starting with `PLACEHOLDER:`. There are **9**, on 3 pages. Search the code for `PLACEHOLDER` or `placeholder(` to find them.

Most go away on their own once you fill in the matching value in `src/config.ts`. The ones marked "edit the page" need a small code change.

## /ai-receptionist (7)

| # | What it says | File | How to replace it |
|---|---|---|---|
| 1 | PLACEHOLDER: guarantee line (next to the Book a call button) | `src/pages/ai-receptionist.astro:128` | Set `GUARANTEE_TEXT` in `src/config.ts`. |
| 2 | PLACEHOLDER: demo call recording (audio player) | `src/pages/ai-receptionist.astro:161` | Put the file in `public/media/` and set `DEMO_AUDIO_SRC`. Optional: `DEMO_AUDIO_TRANSCRIPT`. |
| 3 | PLACEHOLDER: 20 to 30 second screen recording of the booking the call created | `src/pages/ai-receptionist.astro:175` | Put the mp4 in `public/media/` and set `DEMO_VIDEO_SRC`. |
| 4 | FAQ "What does it cost?": PLACEHOLDER: setup price and monthly price | `src/pages/ai-receptionist.astro:86` | Confirm `SETUP_PRICE` and `MONTHLY_PRICE`, then set `SHOW_PRICING = true`. |
| 5 | FAQ "Is there a guarantee?": PLACEHOLDER: the guarantee | `src/pages/ai-receptionist.astro:91` | Set `GUARANTEE_TEXT` (same value as #1). |
| 6 | FAQ "How long does setup take?": PLACEHOLDER: how long setup takes | `src/pages/ai-receptionist.astro:96` | Set `FAQ_ANSWERS.receptionistSetupTime`. |
| 7 | FAQ "What if I don't like the result?": PLACEHOLDER: what happens if you don't like the result | `src/pages/ai-receptionist.astro:101` | Edit the page: replace `placeholder(...)` with the answer text. |

## /websites (1)

| # | What it says | File | How to replace it |
|---|---|---|---|
| 8 | PLACEHOLDER: client website examples (Our work section) | `src/components/WebsiteExamples.astro:47` | Add real client sites to `WEBSITE_EXAMPLES`. Only real projects. |

## /book (1)

| # | What it says | File | How to replace it |
|---|---|---|---|
| 9 | PLACEHOLDER: GoHighLevel booking calendar goes here. | `src/pages/book.astro:59` | Set `GHL_CALENDAR_EMBED` (the link inside the GHL embed code's `src="..."`). |

## Still hidden, not placeholders

These questions stay hidden until answered, as before: "Where are you based?" (home), "Do I need a new phone number?" and "Is there a long contract?" (AI Receptionist), "Do I own the site?" and "How long does it take?" (Websites), "Do you come to us?" and "How long until it's ready?" (Commercials). They're in `FAQ_ANSWERS` in `src/config.ts`.
