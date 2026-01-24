/**
 * Centralized product data for Roots On Rise
 *
 * SINGLE SOURCE OF TRUTH for all product information.
 * Import from this file instead of hardcoding ASINs, prices, or product details.
 *
 * @example
 * import { BOOKS, getBooksBySeriesId, TESTIMONIALS } from '@/data/products';
 */

import { AMAZON_BASE_URL } from '@/lib/constants';

// =============================================================================
// Types
// =============================================================================

export interface BookFormat {
  id: string;
  name: string;
  asin: string;
  price: string;
  description?: string;
}

export interface Book {
  id: number;
  seriesId: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  regularPrice: string;
  salePrice?: string;
  amazonAsin: string;
  format: string;
  ageRange: string;
  pages?: string;
  isbn?: string;
  isOnSale: boolean;
}

export interface BookSeries {
  id: string;
  name: string;
  shortName: string;
  description: string;
  formats: BookFormat[];
}

export interface Testimonial {
  id: string | number;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

// =============================================================================
// Book Series (High-level grouping)
// =============================================================================

export const BOOK_SERIES: BookSeries[] = [
  {
    id: 'shloka-mantra',
    name: 'My Little Shloka and Mantra Book',
    shortName: 'Shloka & Mantra',
    description: 'A calm, age-appropriate introduction to Hindu shlokas and Sanskrit mantras for kids.',
    formats: [
      { id: 'hardcover', name: 'Hardcover', asin: 'B0GH1Z46BD', price: '$24.50', description: 'Special Edition with Coloring Pages' },
      { id: 'paperback', name: 'Paperback', asin: 'B0GGRS2D5B', price: '$14.99', description: 'Sacred Words for Kids' },
      { id: 'kindle', name: 'Kindle E-Book', asin: 'B0GG84NQ35', price: '$9.99', description: 'Digital Edition' },
    ],
  },
  {
    id: 'marvelous-hindu-deities',
    name: 'The Marvelous Hindu Deities',
    shortName: 'Hindu Deities',
    description: 'An enchanting introduction to the world of Hindu gods and goddesses.',
    formats: [
      { id: 'board-book', name: 'Board Book', asin: '8195870724', price: '$14.99', description: 'Perfect for little hands ages 0-5' },
      { id: 'paperback', name: 'Paperback', asin: 'B0CN4NXVVN', price: '$15.99', description: 'Full-size edition for ages 3+' },
      { id: 'kindle', name: 'Kindle E-Book', asin: 'B0CLKYY3QC', price: '$7.99', description: 'Read anywhere, anytime' },
    ],
  },
];

// =============================================================================
// All Books (Flat list for detailed views)
// =============================================================================

export const BOOKS: Book[] = [
  // ===== MY LITTLE SHLOKA AND MANTRA BOOK =====
  {
    id: 1,
    seriesId: 'shloka-mantra',
    title: 'My Little Shloka and Mantra Book - Hardcover',
    subtitle: 'Special Edition with Coloring Pages',
    description: 'A calm, age-appropriate introduction to Hindu shlokas and Sanskrit mantras for kids, created especially for young children and first-time learners.',
    longDescription: 'This hardcover edition includes a dedicated coloring section for kids, featuring thoughtfully designed illustrations inspired by Indian spiritual themes. Coloring alongside chanting helps children stay engaged, improves focus, and makes learning peaceful and screen-free. Perfect for family prayer time, daily chanting routines, bedtime reading, and quiet creative moments.',
    image: '/images/books/shloka-mantra/front-cover.jpg',
    images: [
      '/images/books/shloka-mantra/front-cover.jpg',
      '/images/books/shloka-mantra/back-cover.jpg',
      '/images/books/shloka-mantra/collage-interior-pages.png',
      '/images/books/shloka-mantra/hero-shot-1.jpg',
    ],
    regularPrice: '24.50',
    amazonAsin: 'B0GH1Z46BD',
    format: 'Hardcover',
    ageRange: '3-8 years',
    pages: '78',
    isOnSale: false,
  },
  {
    id: 2,
    seriesId: 'shloka-mantra',
    title: 'My Little Shloka and Mantra Book - Paperback',
    subtitle: 'Sacred Words for Kids',
    description: 'A calm, age-appropriate introduction to Hindu shlokas and Sanskrit mantras for kids, created especially for young children and first-time learners.',
    longDescription: 'Designed for early childhood, this book presents simple, well-known shlokas and mantras with easy meanings and gentle repetition, helping children chant slowly, clearly, and with respect. The focus is not memorization or speed, but understanding, pronunciation, and familiarity—building a strong foundation from the very beginning.',
    image: '/images/books/shloka-mantra/front-cover.jpg',
    images: [
      '/images/books/shloka-mantra/front-cover.jpg',
      '/images/books/shloka-mantra/hero-2.jpg',
      '/images/books/shloka-mantra/promo_shot_boy_reading_book.jpg',
    ],
    regularPrice: '14.99',
    amazonAsin: 'B0GGRS2D5B',
    format: 'Paperback',
    ageRange: '3-8 years',
    pages: '67',
    isOnSale: false,
  },
  {
    id: 3,
    seriesId: 'shloka-mantra',
    title: 'My Little Shloka and Mantra Book - E-Book',
    subtitle: 'Digital Edition',
    description: 'Enjoy our Shloka and Mantra book in digital format. Perfect for reading on tablets and e-readers.',
    longDescription: 'Take the sacred sounds of Hindu shlokas and mantras wherever you go. This digital edition includes all the gentle repetition and easy meanings, perfect for family prayer time and bedtime routines on any device.',
    image: '/images/books/shloka-mantra/front-cover.jpg',
    regularPrice: '9.99',
    amazonAsin: 'B0GG84NQ35',
    format: 'E-Book (Kindle)',
    ageRange: '3-8 years',
    isOnSale: false,
  },
  // ===== THE MARVELOUS HINDU DEITIES =====
  {
    id: 4,
    seriesId: 'marvelous-hindu-deities',
    title: 'The Marvelous Hindu Deities - Board Book',
    subtitle: 'Special Edition',
    description: 'An enchanting introduction to the world of Hindu gods and goddesses. With its dynamic illustrations, this special edition picture book is perfect for our young readers to delve into the captivating world of Hindu gods and goddesses.',
    longDescription: 'Filled with vibrant pictures and informative descriptions, this delightful read offers an enchanting introduction to the fascinating realm of Hindu deities. Through engaging visuals and carefully curated information, young readers can embark on an exciting journey, discovering the unique attributes and stories behind these revered figures.',
    image: '/images/books/marvelous-hindu-deities/board_book_front_cover.webp',
    images: [
      '/images/books/marvelous-hindu-deities/board_book_front_cover.webp',
      '/images/books/marvelous-hindu-deities/board_book_back_cover.webp',
      '/images/books/marvelous-hindu-deities/collage_interior_pages.png',
      '/images/books/marvelous-hindu-deities/promo_shot_girl_reading.jpeg',
    ],
    regularPrice: '19.99',
    salePrice: '14.99',
    amazonAsin: '8195870724',
    format: 'Board book',
    ageRange: '2-8 years',
    pages: '24',
    isOnSale: true,
  },
  {
    id: 5,
    seriesId: 'marvelous-hindu-deities',
    title: 'The Marvelous Hindu Deities - Paperback',
    subtitle: 'Classic Edition',
    description: 'The perfect children\'s book to delve into the captivating world of Hindu gods and goddesses. Filled with vibrant pictures and informative descriptions.',
    longDescription: 'This delightful read offers an enchanting introduction to the fascinating realm of Hindu deities. Through engaging visuals and carefully curated information, young readers can embark on an exciting journey, discovering the unique attributes and stories behind these revered figures. "The Marvelous Hindu Deities" invites children to explore and appreciate the rich tapestry of Hindu mythology.',
    image: '/images/books/marvelous-hindu-deities/paperback_front_cover.png',
    images: [
      '/images/books/marvelous-hindu-deities/paperback_front_cover.png',
      '/images/books/marvelous-hindu-deities/hero-shot-1.jpg',
    ],
    regularPrice: '15.99',
    amazonAsin: 'B0CN4NXVVN',
    format: 'Paperback',
    ageRange: '2-8 years',
    pages: '32',
    isbn: '979-8866694815',
    isOnSale: false,
  },
  {
    id: 6,
    seriesId: 'marvelous-hindu-deities',
    title: 'The Marvelous Hindu Deities - E-Book',
    subtitle: 'Digital Edition',
    description: 'Enjoy our beloved children\'s book in digital format. Perfect for reading on tablets and e-readers.',
    longDescription: 'Take the magic of Hindu mythology wherever you go with our digital edition. All the vibrant illustrations and engaging content, now available instantly on your favorite device.',
    image: '/images/books/marvelous-hindu-deities/front-cover-ebook.jpg',
    images: [
      '/images/books/marvelous-hindu-deities/front-cover-ebook.jpg',
    ],
    regularPrice: '7.99',
    amazonAsin: 'B0CLKYY3QC',
    format: 'E-Book (Kindle)',
    ageRange: '2-8 years',
    isOnSale: false,
  },
];

// =============================================================================
// Featured Products (for homepage)
// =============================================================================

export const FEATURED_BOOK = {
  seriesId: 'marvelous-hindu-deities',
  title: 'The Marvelous Hindu Deities',
  description: 'A colorful journey through Hindu mythology for young minds. Introduce your children to the fascinating world of Hindu deities.',
  image: '/images/books/marvelous-hindu-deities/hero-shot-1.jpg',
  price: '$14.99',
  features: [
    '10 beautifully illustrated Hindu deities',
    'Age-appropriate stories and descriptions',
    'Perfect for bedtime stories',
  ],
};

// =============================================================================
// Testimonials
// =============================================================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "I've been searching for books that introduce Hindu mythology to my kids in a fun, engaging way. This book is absolutely perfect! The illustrations are gorgeous and my children ask for it every night.",
    authorName: 'Priya M.',
    authorTitle: 'Parent of 2',
    rating: 5,
  },
  {
    id: 2,
    quote: 'Beautiful illustrations and simple text that captures the essence of each deity. My 4-year-old loves pointing out the different gods and learning their names.',
    authorName: 'Anita K.',
    authorTitle: 'Verified Amazon Purchase',
    rating: 5,
  },
  {
    id: 3,
    quote: "Finally, a book that helps connect my American-born kids to their Indian heritage. The quality is excellent and it's become a cherished part of our bedtime routine.",
    authorName: 'Raj S.',
    authorTitle: 'Parent',
    rating: 5,
  },
  {
    id: 4,
    quote: 'The Shloka book has become our morning ritual. My daughter loves chanting along and the pronunciations are so clear and easy to follow.',
    authorName: 'Meera T.',
    authorTitle: 'Verified Amazon Purchase',
    rating: 5,
  },
  {
    id: 5,
    quote: 'Perfect gift for my grandchildren in the US. They\'re learning about our culture and loving every page. The quality exceeded my expectations!',
    authorName: 'Sunita G.',
    authorTitle: 'Grandmother',
    rating: 5,
  },
];

// =============================================================================
// Hero Slides
// =============================================================================

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: '/images/books/marvelous-hindu-deities/hero-shot-1.jpg',
    title: 'Hindu children\'s books',
    description: 'Beautifully illustrated books celebrating Indian mythology, shlokas, and cultural heritage.',
    ctaText: 'Shop Books',
    ctaLink: '/books',
  },
  {
    image: '/images/books/shloka-mantra/hero-all.png',
    title: 'New: Shloka & Mantra Book',
    description: 'Introduce your children to sacred Hindu shlokas and Sanskrit mantras with gentle repetition.',
    ctaText: 'Learn More',
    ctaLink: '/books',
  },
  {
    image: '/images/downloads/ganesha-mandala.png',
    title: 'Free coloring sheets',
    description: 'Download beautifully designed Hindu deity coloring pages for your little ones.',
    ctaText: 'Get Free Downloads',
    ctaLink: '/digital-downloads',
  },
];

// =============================================================================
// Coming Soon / Available Products
// =============================================================================

export const COMING_SOON_PRODUCTS = [
  {
    title: 'Wall Art Prints',
    description: 'Beautiful Hindu deity art prints for your home',
    image: '/images/books/marvelous-hindu-deities/promo_shot_3.png',
    href: '/wall-art',
  },
  {
    title: 'Games & Toys',
    description: 'Educational games celebrating Hindu culture',
    image: '/images/books/marvelous-hindu-deities/promo_shot_1.png',
    href: '/games-toys',
  },
];

export const AVAILABLE_PRODUCTS = [
  {
    title: 'Digital Downloads',
    description: 'Coloring sheets, mandalas & educational activities',
    image: '/images/downloads/ganesha-mandala.png',
    href: '/digital-downloads',
    badge: 'Free!',
  },
];

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get all books in a series
 */
export function getBooksBySeriesId(seriesId: string): Book[] {
  return BOOKS.filter((book) => book.seriesId === seriesId);
}

/**
 * Get a book series by ID
 */
export function getSeriesById(seriesId: string): BookSeries | undefined {
  return BOOK_SERIES.find((series) => series.id === seriesId);
}

/**
 * Get formats for a book series (for format selectors)
 */
export function getSeriesFormats(seriesId: string): BookFormat[] {
  const series = getSeriesById(seriesId);
  return series?.formats ?? [];
}

/**
 * Get Amazon URL for an ASIN
 */
export function getAmazonUrl(asin: string, affiliateTag = 'rootsonrise-20'): string {
  return `${AMAZON_BASE_URL}${asin}?tag=${affiliateTag}`;
}

/**
 * Get a specific book by ASIN
 */
export function getBookByAsin(asin: string): Book | undefined {
  return BOOKS.find((book) => book.amazonAsin === asin);
}

/**
 * Get bestseller book (board book edition)
 */
export function getBestsellerBook(): Book | undefined {
  return BOOKS.find((book) => book.amazonAsin === '8195870724');
}

/**
 * Generate structured data schema for a list of books
 */
export function generateProductSchema(bookList: Book[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Hindu Children\'s Books Collection',
    'description': 'Beautifully illustrated Hindu mythology books and shloka books for children',
    'numberOfItems': bookList.length,
    'itemListElement': bookList.map((book, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'Book',
        'name': book.title,
        'description': book.description,
        'image': `https://rootsonrise.com${book.image}`,
        'author': {
          '@type': 'Organization',
          'name': 'Roots On Rise',
        },
        'publisher': {
          '@type': 'Organization',
          'name': 'Roots On Rise',
        },
        'offers': {
          '@type': 'Offer',
          'price': book.salePrice || book.regularPrice,
          'priceCurrency': 'USD',
          'availability': 'https://schema.org/InStock',
          'url': getAmazonUrl(book.amazonAsin),
        },
        'bookFormat': book.format.includes('E-Book')
          ? 'https://schema.org/EBook'
          : book.format.includes('Hardcover')
            ? 'https://schema.org/Hardcover'
            : book.format.includes('Board')
              ? 'https://schema.org/Hardcover'
              : 'https://schema.org/Paperback',
        'audience': {
          '@type': 'PeopleAudience',
          'suggestedMinAge': 2,
          'suggestedMaxAge': 8,
        },
      },
    })),
  };
}
