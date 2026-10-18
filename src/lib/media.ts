// Build-time checks for files referenced from src/config.ts.
import { existsSync } from "node:fs";
import { join } from "node:path";
import { filled } from "./site";

/**
 * True when a media path from config can actually be played.
 * Local paths ("/media/demo.mp3") must exist in public/.
 * Full links (https://...) are trusted.
 */
export function mediaAvailable(src: string): boolean {
  if (!filled(src)) return false;
  const value = src.trim();
  if (/^https:\/\//i.test(value)) return true;
  if (!value.startsWith("/")) return false;
  const clean = decodeURIComponent(value.split(/[?#]/)[0]);
  return existsSync(join(process.cwd(), "public", clean));
}
