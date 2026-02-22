/**
 * Digital downloads data for Roots On Rise
 *
 * SINGLE SOURCE OF TRUTH for all free download products (coloring sheets, mandalas, etc.).
 * Import from this file instead of defining inline in page components.
 *
 * @example
 * import { DOWNLOADS, DOWNLOAD_FEATURES, DOWNLOAD_STEPS } from '@/data/downloads';
 */

// =============================================================================
// Types
// =============================================================================

export interface Download {
  title: string;
  description: string;
  image: string;
  downloadUrl: string;
  category: DownloadCategory;
}

export type DownloadCategory = 'Mandalas & Symbols' | 'Sacred Places' | 'Divine Symbols';

export interface DownloadFeature {
  icon: 'heart' | 'zap' | 'printer' | 'palette';
  title: string;
  description: string;
}

export interface DownloadStep {
  step: number;
  title: string;
  description: string;
}

// =============================================================================
// Download Categories (ordered for display)
// =============================================================================

export const DOWNLOAD_CATEGORIES: DownloadCategory[] = [
  'Mandalas & Symbols',
  'Sacred Places',
  'Divine Symbols',
];

// =============================================================================
// Digital Downloads — FREE coloring sheets
// Preview images use optimized WebP, downloads use original PNG for print quality
// =============================================================================

export const DOWNLOADS: Download[] = [
  // --- Mandalas & Symbols ---
  {
    title: 'Ganesha Mandala',
    description: 'Intricate mandala design featuring Lord Ganesha. Perfect for mindful coloring.',
    image: '/images/downloads-optimized/ganesha-mandala.webp',
    downloadUrl: '/images/downloads/ganesha-mandala.png',
    category: 'Mandalas & Symbols',
  },
  {
    title: 'Om Symbol Mandala',
    description: 'Sacred Om symbol surrounded by intricate mandala patterns.',
    image: '/images/downloads-optimized/om-mandala.webp',
    downloadUrl: '/images/downloads/om-mandala.png',
    category: 'Mandalas & Symbols',
  },
  {
    title: 'Intricate Om Mandala',
    description: 'Advanced mandala design for experienced colorists.',
    image: '/images/downloads-optimized/intricate-om.webp',
    downloadUrl: '/images/downloads/intricate-om.png',
    category: 'Mandalas & Symbols',
  },
  {
    title: 'Lotus Mandala',
    description: 'Beautiful lotus-inspired mandala with intricate petal patterns.',
    image: '/images/downloads-optimized/mandala.webp',
    downloadUrl: '/images/downloads/mandala.png',
    category: 'Mandalas & Symbols',
  },
  {
    title: 'Om Symbol',
    description: 'The sacred Om — universal sound of creation. Large outline perfect for coloring.',
    image: '/images/downloads-optimized/om-symbol.webp',
    downloadUrl: '/images/downloads/om-symbol.png',
    category: 'Mandalas & Symbols',
  },
  {
    title: 'Swastika Symbol',
    description: 'Ancient Hindu symbol of auspiciousness, prosperity, and good fortune.',
    image: '/images/downloads-optimized/swastika.webp',
    downloadUrl: '/images/downloads/swastika.png',
    category: 'Mandalas & Symbols',
  },
  // --- Sacred Places & Objects ---
  {
    title: 'Mount Kailasha',
    description: 'The sacred abode of Lord Shiva — majestic mountain scene with sunrise and pine trees.',
    image: '/images/downloads-optimized/kailasha.webp',
    downloadUrl: '/images/downloads/kailasha.png',
    category: 'Sacred Places',
  },
  {
    title: 'Kedarnath Temple',
    description: 'One of the twelve Jyotirlingas — the iconic Himalayan temple with snow-capped peaks.',
    image: '/images/downloads-optimized/kedarnath.webp',
    downloadUrl: '/images/downloads/kedarnath.png',
    category: 'Sacred Places',
  },
  {
    title: 'Shiva Linga',
    description: 'Sacred symbol of Lord Shiva representing the cosmic pillar of creation.',
    image: '/images/downloads-optimized/shiva-linga.webp',
    downloadUrl: '/images/downloads/shiva-linga.png',
    category: 'Sacred Places',
  },
  {
    title: 'Diya Oil Lamp',
    description: 'Traditional oil lamp lit during Diwali and daily puja. Symbol of light over darkness.',
    image: '/images/downloads-optimized/diya.webp',
    downloadUrl: '/images/downloads/diya.png',
    category: 'Sacred Places',
  },
  // --- Divine Instruments & Symbols ---
  {
    title: 'Trishul (Trident)',
    description: "Lord Shiva's trident with damaru drum — symbol of divine power and cosmic rhythm.",
    image: '/images/downloads-optimized/trishul.webp',
    downloadUrl: '/images/downloads/trishul.png',
    category: 'Divine Symbols',
  },
  {
    title: 'Shankha & Sudarshana Chakra',
    description: "Lord Vishnu's sacred conch shell and divine discus — symbols of protection and dharma.",
    image: '/images/downloads-optimized/shankha-chakra.webp',
    downloadUrl: '/images/downloads/shankha-chakra.png',
    category: 'Divine Symbols',
  },
  {
    title: 'Deity Symbols Collection',
    description: 'Trishul, chakra, lotus, flute, bow & arrow, gada — sacred items of Hindu deities.',
    image: '/images/downloads-optimized/deity-symbols.webp',
    downloadUrl: '/images/downloads/deity-symbols.png',
    category: 'Divine Symbols',
  },
  {
    title: 'Musical Instruments',
    description: 'Traditional Indian instruments — tabla, sitar, veena and more.',
    image: '/images/downloads-optimized/musical-instruments.webp',
    downloadUrl: '/images/downloads/musical-instruments.png',
    category: 'Divine Symbols',
  },
];

// =============================================================================
// Features — displayed as icon cards above the downloads grid
// =============================================================================

export const DOWNLOAD_FEATURES: DownloadFeature[] = [
  { icon: 'heart', title: 'Always Free', description: 'No payment, no signup, no catch' },
  { icon: 'zap', title: 'Instant Download', description: 'Click and save — ready in seconds' },
  { icon: 'printer', title: 'Print at Home', description: 'High-res files for crisp prints' },
  { icon: 'palette', title: 'Cultural Art', description: 'Authentic Hindu sacred designs' },
];

// =============================================================================
// How-to-use steps
// =============================================================================

export const DOWNLOAD_STEPS: DownloadStep[] = [
  { step: 1, title: 'Click Download', description: 'Click the download button on any design you like. No signup needed!' },
  { step: 2, title: 'Print at Home', description: 'Print the image on your home printer. Works great on regular paper!' },
  { step: 3, title: 'Color & Enjoy', description: 'Grab your favorite colors and start your mindful coloring journey!' },
];

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get downloads filtered by category
 */
export function getDownloadsByCategory(category: DownloadCategory): Download[] {
  return DOWNLOADS.filter(d => d.category === category);
}
