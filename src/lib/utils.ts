import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Split a text string on a highlight word, returning the parts before, matching, and after.
 *
 * Used by landing pages and section headers to wrap a keyword in a styled span.
 *
 * @param text - The full heading text
 * @param highlight - The word or phrase to split on (case-insensitive)
 * @returns An object with before, match, and after strings
 */
export function splitOnHighlight(text: string, highlight: string): { before: string; match: string; after: string } {
  const regex = new RegExp(`(${highlight})`, 'i');
  const parts = text.split(regex);
  if (parts.length >= 3) {
    return { before: parts[0], match: parts[1], after: parts.slice(2).join('') };
  }
  return { before: text, match: '', after: '' };
}
