/**
 * ============================================================
 *  OJ SOLUTIONS: ALL EDITABLE BUSINESS INFO LIVES IN THIS FILE
 * ============================================================
 *
 * How this file works:
 * - Change the text between the quotes, save, and the site updates.
 * - If a value is empty ("" or [] or null), whatever depends on it is
 *   hidden from the site. Visitors never see a broken link, an empty
 *   player, or placeholder text.
 * - Anything marked TODO(Jacob) is waiting on an answer from you.
 */

/* ---------- Basics ---------- */

export const BUSINESS_NAME: string = "OJ Solutions";

// The registered name of the company, e.g. "OJ Solutions LLC".
// Used in the Privacy Policy and Terms. If empty, BUSINESS_NAME is used.
// TODO(Jacob): add the legal entity name once it's registered.
export const LEGAL_ENTITY: string = "";

export const EMAIL: string = "ojsolutionshq@gmail.com";

// Format it the way you want it shown, e.g. "(555) 123-4567".
// TODO(Jacob): add the business phone number. Hidden until set.
export const PHONE: string = "";

// The canonical address used for the sitemap, search results, and share previews.
export const SITE_URL: string = "https://ojsolutions.org";

/* ---------- Booking ---------- */

// The GoHighLevel calendar embed link. In GHL, open the calendar's embed
// code and copy the link inside src="...". It looks like:
// "https://api.leadconnectorhq.com/widget/booking/AbC123xyz"
// (Pasting the whole embed code also works.)
// When this is set, every "Book a call" button goes to /book, which shows
// the calendar right on our site.
// TODO(Jacob): paste the GHL calendar embed link.
export const GHL_CALENDAR_EMBED: string = "";

// A plain booking page link (for example a GHL booking link opened in its
// own page). Only used when GHL_CALENDAR_EMBED is empty.
// If both are empty, "Book a call" opens an email to EMAIL instead.
export const BOOKING_URL: string = "";

// The GoHighLevel chat widget code. Paste the whole <script ...></script>
// tag from GHL here. It gets added to every page.
export const GHL_CHAT_WIDGET: string = "";

/* ---------- AI Receptionist page ---------- */

// A real recorded call from our own AI receptionist.
// Put the file in public/media/ and set this to "/media/your-file.mp3".
// The player stays hidden until the file exists.
export const DEMO_AUDIO_SRC: string = "";

// Optional: the words spoken in the demo call, so people who can't play
// audio can read it. Shown in a "Read the transcript" dropdown.
export const DEMO_AUDIO_TRANSCRIPT: string = "";

// A short screen recording (mp4) of the calendar event and contact card
// that the demo call created. Put it in public/media/ too.
export const DEMO_VIDEO_SRC: string = "";

// Link to the 2025 CallRail survey (1,000 consumers: 78% abandoned a
// business after an unanswered call, 82% would call a competitor).
// The stats only show when this link is set. This is CallRail's own write-up
// of the survey (published September 25, 2025), checked against the numbers.
export const STATS_SOURCE_URL: string =
  "https://www.callrail.com/blog/missed-calls-cost-businesses-more-than-ever";

// Your guarantee, written exactly how you want it shown.
// Hidden if empty. TODO(Jacob): decide on a guarantee, if any.
export const GUARANTEE_TEXT: string = "";

// Pricing for the AI Receptionist. The prices only show when
// SHOW_PRICING is true.
export const SHOW_PRICING: boolean = false;
export const SETUP_PRICE: number = 1000;
export const MONTHLY_PRICE: number = 500;

/* ---------- Websites and Commercials pages ---------- */

// "Starting at" prices. Put a number like 1500, or leave null to show
// "we quote after a quick call" instead.
export const WEBSITE_PRICE_FROM: number | null = null;
export const COMMERCIAL_PRICE_FROM: number | null = null;

// Websites we've built. Only list real projects of ours.
// Example:
// { name: "Our Pressure Washing Co.", url: "https://example.com", description: "Booking site for our own pressure washing business." },
export const WEBSITE_EXAMPLES: WebsiteExample[] = [];

// Commercials we've made, as YouTube video IDs (the part after "v=" in
// the link) or full YouTube links. Only list our own real work.
// Example: ["dQw4w9WgXcQ", "https://youtu.be/abc123XYZ"]
export const COMMERCIAL_EXAMPLES: string[] = [];

// Where we film on site. Write it so it finishes the sentence
// "We film on site anywhere in ___.", e.g. "the Austin area".
// If empty, the site describes filming without promising to come to you.
// TODO(Jacob): set the shoot area, and answer how out-of-area clients
// work in FAQ_ANSWERS.commercialsComeToUs below.
export const SHOOT_AREA: string = "";

/* ---------- Home page ---------- */

// Optional photo for the "Why us" section. Put the image in
// src/assets/photos/ and set file to its name, e.g. "founders.jpg".
// alt describes what's in the photo, e.g. "Jacob and Oscar cleaning a
// storefront window". The photo only shows when both are set.
export const FOUNDERS_PHOTO: { file: string; alt: string } = {
  file: "",
  alt: "",
};

/* ---------- FAQ answers we still need ---------- */

// Each question stays hidden until it has an answer.
export const FAQ_ANSWERS = {
  // TODO(Jacob): Home page, "Where are you based?"
  whereBased: "",
  // TODO(Jacob): AI Receptionist, "Do I need a new phone number?"
  receptionistNewNumber: "",
  // TODO(Jacob): AI Receptionist, "How long does setup take?"
  receptionistSetupTime: "",
  // TODO(Jacob): AI Receptionist, "Is there a long contract?"
  receptionistContract: "",
  // TODO(Jacob): Websites, "Do I own the site?"
  websitesOwnership: "",
  // TODO(Jacob): Websites, "How long does it take?"
  websitesTimeline: "",
  // TODO(Jacob): Commercials, "Do you come to us?" (include how it works
  // for businesses outside SHOOT_AREA)
  commercialsComeToUs: "",
  // TODO(Jacob): Commercials, "How long until it's ready?"
  commercialsTimeline: "",
};

/* ---------- Social links ---------- */

// Remove a link (set it to "") to hide it.
export const SOCIAL_LINKS: { youtube: string; instagram: string; tiktok: string } = {
  youtube: "https://www.youtube.com/@ojsolutionshq",
  instagram: "https://www.instagram.com/ojsolutionshq",
  tiktok: "https://www.tiktok.com/@ojsolutionshq",
};

/* ---------- Types (no need to edit) ---------- */

export type WebsiteExample = {
  name: string;
  url: string;
  description: string;
};
