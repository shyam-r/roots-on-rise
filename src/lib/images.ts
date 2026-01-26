/**
 * Image utilities for optimized responsive images
 *
 * Images are pre-optimized to WebP in three sizes:
 * - hero: 1200px wide (hero banners, carousels)
 * - product: 800px wide (product cards, detail views)
 * - thumb: 400px wide (thumbnails, galleries)
 */

export type ImageSize = 'hero' | 'product' | 'thumb';

const OPTIMIZED_BASE = '/images/books-optimized';
const ORIGINAL_BASE = '/images/books';

/**
 * Get optimized image path
 * @param originalPath - Original image path (e.g., '/images/books/marvelous-hindu-deities/boardbook/cover.jpg')
 * @param size - Target size ('hero' | 'product' | 'thumb')
 * @returns Optimized WebP path
 */
export function getOptimizedImage(originalPath: string, size: ImageSize = 'product'): string {
  if (!originalPath.startsWith(ORIGINAL_BASE)) {
    return originalPath; // Return as-is for non-book images
  }

  // Extract path after /images/books/
  const relativePath = originalPath.replace(ORIGINAL_BASE + '/', '');

  // Remove extension and add size suffix
  const pathWithoutExt = relativePath.replace(/\.[^.]+$/, '');

  return `${OPTIMIZED_BASE}/${pathWithoutExt}-${size}.webp`;
}

/**
 * Get default optimized image (no size suffix, product quality)
 */
export function getOptimizedImageDefault(originalPath: string): string {
  if (!originalPath.startsWith(ORIGINAL_BASE)) {
    return originalPath;
  }

  const relativePath = originalPath.replace(ORIGINAL_BASE + '/', '');
  const pathWithoutExt = relativePath.replace(/\.[^.]+$/, '');

  return `${OPTIMIZED_BASE}/${pathWithoutExt}.webp`;
}

/**
 * Generate srcset for responsive images
 * @param originalPath - Original image path
 * @returns srcset string for use in img tags
 */
export function getImageSrcSet(originalPath: string): string {
  const thumb = getOptimizedImage(originalPath, 'thumb');
  const product = getOptimizedImage(originalPath, 'product');
  const hero = getOptimizedImage(originalPath, 'hero');

  return `${thumb} 400w, ${product} 800w, ${hero} 1200w`;
}

/**
 * Get image props for responsive loading
 */
export function getResponsiveImageProps(originalPath: string, sizes = '(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px') {
  return {
    src: getOptimizedImage(originalPath, 'product'),
    srcSet: getImageSrcSet(originalPath),
    sizes,
  };
}
