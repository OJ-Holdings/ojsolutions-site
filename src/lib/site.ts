// Shared helpers that turn src/config.ts into links and labels.
// Business info belongs in src/config.ts, not here.
import {
  BOOKING_URL,
  EMAIL,
  GHL_CALENDAR_EMBED,
} from "../config";

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
 * Where every "Book a call" button goes:
 * 1. /book when the GHL calendar embed is set
 * 2. otherwise BOOKING_URL
 * 3. otherwise an email to EMAIL
 * Service pages pass their service so the booking is tagged.
 * Returns null only if there is nowhere to send people.
 */
export function bookingHref(service?: ServiceKey): string | null {
  if (calendarEmbed()) {
    return service ? `/book?service=${service}` : "/book";
  }
  if (filled(BOOKING_URL)) {
    if (!service) return BOOKING_URL.trim();
    try {
      const url = new URL(BOOKING_URL.trim());
      url.searchParams.set("service", service);
      return url.toString();
    } catch {
      return BOOKING_URL.trim();
    }
  }
  if (filled(EMAIL)) {
    const subject = service
      ? `Book a call: ${SERVICES.find((s) => s.key === service)?.name}`
      : "Book a call";
    return `mailto:${EMAIL.trim()}?subject=${encodeURIComponent(subject)}`;
  }
  return null;
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
