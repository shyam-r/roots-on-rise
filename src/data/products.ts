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
  badge?: string;
  productImage?: string;
}

// =============================================================================
// Book Series (High-level grouping)
// =============================================================================

export const BOOK_SERIES: BookSeries[] = [
  {
    id: 'shloka-mantra',
    name: 'My Little Shloka and Mantra Book',
    shortName: 'Shloka & Mantra',
    description: 'Teaches 15 traditional Hindu shlokas and Sanskrit mantras to children ages 3-8 with pronunciation guides and simple meanings.',
    formats: [
      { id: 'hardcover', name: 'Hardcover', asin: 'B0GH1Z46BD', price: '$24.50', description: '78 pages with bonus coloring section' },
      { id: 'paperback', name: 'Paperback', asin: 'B0GGRS2D5B', price: '$14.99', description: '67 pages, perfect for daily practice' },
      { id: 'kindle', name: 'Kindle E-Book', asin: 'B0GG84NQ35', price: '$9.99', description: 'Instant download, read anywhere' },
    ],
  },
  {
    id: 'marvelous-hindu-deities',
    name: 'The Marvelous Hindu Deities',
    shortName: 'Hindu Deities',
    description: 'Introduces 10 major Hindu gods and goddesses—including Ganesha, Krishna, and Lakshmi—to children ages 2-8 through vibrant illustrations.',
    formats: [
      { id: 'board-book', name: 'Board Book', asin: '8195870724', price: '$14.99', description: '24 thick pages, toddler-proof for ages 2-5' },
      { id: 'paperback', name: 'Paperback', asin: 'B0CN4NXVVN', price: '$15.99', description: '32 pages with expanded stories' },
      { id: 'kindle', name: 'Kindle E-Book', asin: 'B0CLKYY3QC', price: '$7.99', description: 'Instant download, perfect for travel' },
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
    description: 'A 78-page hardcover introducing 15 traditional Hindu shlokas and Sanskrit mantras for children ages 3-8. Includes pronunciation guides, simple meanings, and bonus coloring pages featuring deity illustrations.',
    longDescription: 'This special hardcover edition teaches 15 age-appropriate Hindu prayers including the Gayatri Mantra, Shanti Mantras, and deity shlokas. Each shloka includes simple transliteration for pronunciation, easy-to-understand meanings, and gentle repetition exercises. The 78 pages include a dedicated coloring section with deity illustrations, making learning peaceful and screen-free. Ideal for daily chanting routines, bedtime reading, and family prayer time.',
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
    description: 'A 67-page paperback teaching 15 Hindu shlokas and mantras to children ages 3-8. Features transliterations, simple meanings, and structured learning for first-time chanters.',
    longDescription: 'Designed for early childhood, this 67-page book presents 15 well-known Hindu shlokas and mantras with clear transliterations and age-appropriate meanings. The structured format uses gentle repetition to help children chant slowly and clearly. Focuses on understanding and pronunciation rather than memorization, building a strong foundation in Hindu prayer traditions. Best for children ages 3-8 learning Sanskrit sounds for the first time.',
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
    description: 'Digital Kindle edition of our shloka book with 15 Hindu mantras for children ages 3-8. Read on any device with the Kindle app.',
    longDescription: 'The complete Shloka and Mantra Book in digital format, featuring all 15 shlokas with transliterations and meanings. Perfect for reading on tablets, phones, or Kindle devices. Ideal for travel, bedtime routines on the go, and families wanting instant access. Available worldwide with no shipping required.',
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
    description: 'A 24-page board book introducing 10 Hindu gods and goddesses to children ages 2-8. Features Ganesha, Krishna, Lakshmi, Shiva, and 6 more deities with vibrant illustrations and simple descriptions.',
    longDescription: 'This durable board book introduces 10 major Hindu deities: Ganesha, Krishna, Lakshmi, Shiva, Vishnu, Saraswati, Hanuman, Durga, Brahma, and Parvati. Each deity is presented with a full-page vibrant illustration and age-appropriate description of their stories and significance. The 24 thick pages are designed for toddler handling, making it the bestselling choice for ages 2-5. Perfect as a first introduction to Hindu mythology.',
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
    description: 'A 32-page paperback featuring 10 Hindu gods and goddesses for children ages 2-8. Includes detailed illustrations and stories of Ganesha, Krishna, Lakshmi, and more.',
    longDescription: 'This 32-page paperback edition features the same 10 Hindu deities as the board book—Ganesha, Krishna, Lakshmi, Shiva, Vishnu, Saraswati, Hanuman, Durga, Brahma, and Parvati—with expanded descriptions and additional story context. The larger format showcases vibrant illustrations and provides more detailed information suitable for ages 3-8. An excellent choice for children ready for regular book pages and deeper learning about Hindu mythology.',
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
    description: 'Digital Kindle edition featuring 10 Hindu deities with vibrant illustrations for children ages 2-8. Instant download, read anywhere.',
    longDescription: 'The complete Marvelous Hindu Deities book in digital format, featuring all 10 deities with full-color illustrations. Perfect for reading on tablets, phones, or Kindle devices. Ideal for travel, grandparents who want digital copies, and families seeking instant access. Available worldwide with no shipping wait.',
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
  description: 'A 24-page board book introducing 10 Hindu gods and goddesses to children ages 2-8. Bestselling choice for first-time readers.',
  image: '/images/books/marvelous-hindu-deities/hero-shot-1.jpg',
  price: '$14.99',
  features: [
    '10 deities: Ganesha, Krishna, Lakshmi, and more',
    'Thick board pages for toddler-safe handling',
    'Vibrant illustrations with simple descriptions',
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
    image: '/images/books/marvelous-hindu-deities/promo_shot_7.jpg',
    title: 'discover the magic of hindu mythology',
    description: 'Beautifully illustrated books that bring ancient stories to life for young minds.',
    ctaText: 'Shop Books',
    ctaLink: '/books',
    badge: 'Featured Collection',
    productImage: '/images/books/marvelous-hindu-deities/promo_shot_1.png',
  },
  {
    image: '/images/books/shloka-mantra/hero-all.png',
    title: 'shloka & mantra book',
    description: 'Introduce your children to sacred Hindu shlokas and Sanskrit mantras with gentle repetition.',
    ctaText: 'Shop Now',
    ctaLink: '/books',
    badge: 'New Release',
    productImage: '/images/books/shloka-mantra/front-cover.jpg',
  },
  {
    image: '/images/downloads/ganesha-mandala.png',
    title: 'free coloring sheets',
    description: 'Download beautifully designed Hindu deity coloring pages for your little ones.',
    ctaText: 'Get Free Downloads',
    ctaLink: '/digital-downloads',
    badge: 'Free Resources',
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

// =============================================================================
// FAQ Data (per book series for AI SEO and featured snippets)
// =============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

// FAQs for The Marvelous Hindu Deities
export const HINDU_DEITIES_FAQ: FAQItem[] = [
  {
    question: "What age is The Marvelous Hindu Deities book for?",
    answer: "The board book edition is designed for ages 2-5 with thick, durable pages perfect for toddlers. The paperback edition works best for ages 3-8 and includes more detailed descriptions. Both editions feature the same 10 Hindu deities with vibrant illustrations."
  },
  {
    question: "What's the difference between the board book and paperback?",
    answer: "The board book has 24 thick pages that withstand toddler handling, making it ideal for ages 2-5. The paperback has 32 regular pages with more detailed content, better suited for older children ages 3-8 who can handle books carefully."
  },
  {
    question: "How many deities are featured in The Marvelous Hindu Deities?",
    answer: "The book features 10 major Hindu deities: Ganesha, Krishna, Lakshmi, Shiva, Vishnu, Saraswati, Hanuman, Durga, Brahma, and Parvati. Each deity is presented with a full-page vibrant illustration and age-appropriate description of their stories and significance."
  },
  {
    question: "Is The Marvelous Hindu Deities appropriate for non-Hindu families?",
    answer: "Yes! The book is designed as an accessible introduction to Hindu mythology, similar to how Greek mythology is taught in schools. Many families use it to teach cultural appreciation, diversity, and world religions. The stories focus on universal values like courage, wisdom, and kindness."
  },
  {
    question: "Which format makes the best gift?",
    answer: "The board book is the most popular gift choice—it's durable, beautifully illustrated, and arrives ready to give. It's perfect for baby showers, Diwali, birthdays, and grandparents gifting to grandchildren. The Kindle edition is better for personal reading on-the-go."
  }
];

// FAQs for My Little Shloka and Mantra Book
export const SHLOKA_MANTRA_FAQ: FAQItem[] = [
  {
    question: "What age is the Shloka and Mantra Book for?",
    answer: "The book is designed for children ages 3-8. It works especially well for ages 4-7 when children are learning to read and can follow along with the transliterations. Parents often start reading it aloud to children as young as 2."
  },
  {
    question: "What's the difference between the hardcover and paperback?",
    answer: "The hardcover Special Edition has 78 pages and includes a bonus coloring section with deity illustrations—perfect for keeping kids engaged during learning. The paperback has 67 pages focused purely on the shlokas and mantras."
  },
  {
    question: "How many shlokas and mantras are included?",
    answer: "The book teaches 15 traditional Hindu prayers including the Gayatri Mantra, Shanti Mantras, and deity-specific shlokas. Each one includes the original Sanskrit, a simple transliteration for pronunciation, and an easy-to-understand meaning."
  },
  {
    question: "Do I need to know Sanskrit to use this book with my child?",
    answer: "Not at all! Every shloka includes a phonetic transliteration in English so parents can read and chant along even without Sanskrit knowledge. The pronunciations are designed to be learned together as a family."
  },
  {
    question: "Which format makes the best gift?",
    answer: "The hardcover Special Edition with coloring pages makes the best gift—it's premium quality, includes interactive activities, and arrives ready to give. It's ideal for Diwali, birthdays, and connecting grandchildren with their heritage."
  }
];

// Combined FAQ for general books page
export const GENERAL_FAQ: FAQItem[] = [
  {
    question: "How long does shipping take?",
    answer: "All our books are sold through Amazon. Prime members typically receive orders in 1-2 days with free shipping. Standard shipping usually takes 3-5 business days. Amazon's 30-day return policy applies to all purchases."
  },
  {
    question: "Are these books appropriate for non-Hindu families?",
    answer: "Yes! Our books are designed as accessible introductions to Hindu culture and mythology, similar to how Greek mythology is taught in schools. Many families use them to teach cultural appreciation and diversity."
  }
];

// Legacy export for backwards compatibility
export const BOOK_FAQ: FAQItem[] = [...HINDU_DEITIES_FAQ, ...SHLOKA_MANTRA_FAQ.slice(0, 2), ...GENERAL_FAQ];

/**
 * Get FAQ for a specific book series
 */
export function getFAQBySeriesId(seriesId: string): FAQItem[] {
  switch (seriesId) {
    case 'marvelous-hindu-deities':
      return HINDU_DEITIES_FAQ;
    case 'shloka-mantra':
      return SHLOKA_MANTRA_FAQ;
    default:
      return GENERAL_FAQ;
  }
}

// =============================================================================
// Schema Generators
// =============================================================================

/**
 * Generate BreadcrumbList schema for category pages
 */
export function generateBreadcrumbSchema(pageName: string, pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://rootsonrise.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': pageName,
        'item': `https://rootsonrise.com${pageUrl}`
      }
    ]
  };
}

/**
 * Generate FAQPage schema for SEO
 */
export function generateFAQSchema(faqItems: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };
}

/**
 * Generate structured data schema for a list of books
 */
export function generateProductSchema(bookList: Book[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Children\'s Books Collection',
    'description': 'Beautifully illustrated mythology books and shloka books for children',
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
