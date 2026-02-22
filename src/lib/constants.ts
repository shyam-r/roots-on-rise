/**
 * Shared constants for the Roots On Rise application
 *
 * These constants are centralized to avoid duplication across components.
 * IMPORTANT: Always import from this file instead of hardcoding values.
 */

// =============================================================================
// Container Classes (used by Section, Newsletter, Testimonial, etc.)
// =============================================================================

export const CONTAINER_CLASSES = {
  sm: "max-w-3xl mx-auto",
  md: "max-w-4xl mx-auto",
  lg: "max-w-5xl mx-auto",
  xl: "max-w-6xl mx-auto",
  full: "w-full",
} as const

export type ContainerSize = keyof typeof CONTAINER_CLASSES

// =============================================================================
// External URLs
// =============================================================================

export const AMAZON_BASE_URL = "https://www.amazon.com/dp/"
export const AMAZON_AFFILIATE_TAG = "rootsonrise06-20"
export const SITE_URL = "https://rootsonrise.com"
export const INSTAGRAM_URL = "https://www.instagram.com/rootsonrise"

// =============================================================================
// Animation Durations (match design-tokens.css)
// =============================================================================

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 200,
  slow: 300,
  slower: 500,
} as const

// =============================================================================
// Breakpoints (match Tailwind defaults)
// =============================================================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const
