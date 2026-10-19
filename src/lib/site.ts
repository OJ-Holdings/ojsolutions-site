// Shared helpers that turn src/config.ts into links and labels.
// Business info belongs in src/config.ts, not here.
import { GHL_CALENDAR_EMBED } from "../config";

export type ServiceKey = "receptionist" | "website" | "commercial";

/** The three services. Header, footer, and home page cards read from this. */
export const SERVICES: {
  key: ServiceKey;
  name: string;
  href: string;
  problem: string;
}[] = [
  {
    key: "receptionist",
    name: "AI Receptionist",
    href: "/ai-receptionist",
    problem: "Every call you miss is a customer who calls the next business on the list.",
  },
  {
    key: "website",
    name: "Websites",
    href: "/websites",
    problem: "A slow, dated site sends visitors back to search for someone else.",
  },
  {
    key: "commercial",
    name: "Commercials",
    href: "/commercials",
    problem: "If you're not posting video, people scroll right past you.",
  },
];

/** True when a config value is actually filled in. */
export function filled(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "number") return Number.isFinite(value) && value > 0;
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value);
}

/**
 * A visible stand-in for an answer we don't have yet. The text always starts
 * with "PLACEHOLDER:" so it's easy to search for. Returns HTML, for FAQ answers.
 */
export function placeholder(what: string): string {
  return `<span class="placeholder">PLACEHOLDER: ${what}</span>`;
}

/** 1500 -> "$1,500" */
export function formatPrice(amount: number): string {
  return "$" + amount.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

/**
 * The GHL calendar embed, cleaned up. Accepts either the bare link or the
 * whole embed code pasted from GHL. Returns null when not set.
 */
export function calendarEmbed(): { src: string; id: string } | null {
  const raw = GHL_CALENDAR_EMBED.trim();
  if (!raw) return null;
  const src = raw.includes("<")
    ? (raw.match(/src\s*=\s*["']([^"']+)["']/i)?.[1] ?? "").trim()
    : raw;
  if (!/^https:\/\//i.test(src)) return null;
  const pastedId = raw.includes("<")
    ? raw.match(/<iframe[^>]*\sid\s*=\s*["']([^"']+)["']/i)?.[1]
    : undefined;
  const lastSegment = src.split("?")[0].split("/").filter(Boolean).pop() ?? "calendar";
  return { src, id: pastedId ?? `${lastSegment}_booking` };
}

/**
 * Where every "Book a call" button goes: always /book.
 * Service pages pass their service so the booking is tagged,
 * e.g. /book?service=website. /book shows the GHL calendar when
 * GHL_CALENDAR_EMBED is set, and the email address under it.
 */
export function bookingHref(service?: ServiceKey): string {
  return service ? `/book?service=${service}` : "/book";
}

/**
 * Turns a pasted link into a full web address, adding "https://" if it was
 * left off (e.g. "calendly.com/oj"). Returns null if it isn't a real link.
 */
export function webAddress(value: string): URL | null {
  const v = value.trim();
  if (!v) return null;
  try {
    const url = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
    return url.hostname.includes(".") ? url : null;
  } catch {
    return null;
  }
}

/** Pulls the video ID out of a YouTube ID or link. */
export function youtubeId(value: string): string | null {
  const v = value.trim();
  if (/^[\w-]{11}$/.test(v)) return v;
  const match = v.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/i,
  );
  return match ? match[1] : null;
}
