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
  isbn?: string;          // Primary identifier for physical books
  asin?: string;          // Only for Amazon-exclusive formats (Kindle)
  price: string;
  description?: string;
}

export interface BookMetadata {
  publisher?: string;
  publicationDate?: string;
  language?: string;
  printLength?: string;
  weight?: string;
  dimensions?: string;
  fileSize?: string;       // For e-books
  seriesName?: string;     // Amazon series association
}

export interface Book {
  id: number;
  seriesId: string;
  title: string;
  subtitle?: string;
  author?: string;
  description: string;
  longDescription?: string;
  image: string;
  images?: string[];
  regularPrice: string;
  salePrice?: string;
  isbn?: string;            // Primary identifier for physical books (ISBN-13)
  asin?: string;            // Only for Amazon-exclusive formats (Kindle e-books)
  format: string;
  ageRange: string;
  pages?: string;
  isOnSale: boolean;
  metadata?: BookMetadata;
}

export interface BookSeries {
  id: string;
  name: string;
  shortName: string;
  description: string;
  formats: BookFormat[];
}

export interface PublisherSeries {
  id: string;
  name: string;
  description: string;
}

// =============================================================================
// Publisher Series (Parent grouping for all books)
// =============================================================================

/**
 * The Hindu Gods Series - our flagship children's book series
 */
export const PUBLISHER_SERIES: PublisherSeries = {
  id: 'hindu-gods-series',
  name: 'The Hindu Gods Series',
  description: `This children's book series offers a gentle, age-appropriate introduction to Hindu culture, spirituality, and sacred traditions.

Created for young children and families, the books introduce Hindu shlokas, mantras, and deities through clear language, calm rhythm, and thoughtful storytelling. Each book is designed to help children listen carefully, chant with respect, and understand meaning at their own pace, without pressure to memorize or rush.

Through simple explanations, rich illustrations, and timeless stories from Hindu mythology, children begin to build familiarity with sacred sounds, symbols, and values in a way that feels natural and comforting.

Ideal for daily reading, quiet time, bedtime routines, or family chanting, this series supports focus, mindfulness, cultural learning, and positive habits from an early age.

A meaningful starting point for parents seeking Hindu children's books that nurture connection to heritage, identity, and tradition, one small step at a time.`,
};

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
    description: 'Teaches 15 traditional Hindu shlokas and Sanskrit mantras to children from baby to 14 years with pronunciation guides and simple meanings.',
    formats: [
      { id: 'hardcover', name: 'Hardcover', asin: 'B0GH1Z46BD', price: '$24.50', description: '78 pages with bonus coloring section' },
      { id: 'paperback-standard', name: 'Paperback', asin: 'B0GK15FLFJ', price: '$11.99', description: '72 pages, great value edition' },
      { id: 'paperback-premium', name: 'Premium Paperback', asin: 'B0GGRS2D5B', price: '$15.99', description: '81 pages, premium color + 10 coloring pages' },
      { id: 'kindle', name: 'Kindle E-Book', asin: 'B0GG84NQ35', price: '$9.99', description: 'Instant download, read anywhere' },
    ],
  },
  {
    id: 'marvelous-hindu-deities',
    name: 'The Marvelous Hindu Deities',
    shortName: 'Hindu Deities',
    description: 'Introduces 10 major Hindu gods and goddesses—including Ganesha, Krishna, and Lakshmi—to children from baby to 12 years through vibrant illustrations.',
    formats: [
      { id: 'board-book', name: 'Board Book', asin: '8195870724', price: '$14.99', description: '24 thick pages, toddler-proof for ages 2-12' },
      { id: 'paperback', name: 'Paperback', asin: 'B0CN4NXVVN', price: '$15.99', description: '44 pages with expanded stories' },
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
    description: 'A 78-page hardcover introducing 15 traditional Hindu shlokas and Sanskrit mantras for children from baby to 14 years. Includes pronunciation guides, simple meanings, and bonus coloring pages featuring deity illustrations.',
    longDescription: 'This special hardcover edition teaches 15 age-appropriate Hindu prayers including the Gayatri Mantra, Shanti Mantras, and deity shlokas. Each shloka includes simple transliteration for pronunciation, easy-to-understand meanings, and gentle repetition exercises. The 78 pages include a dedicated coloring section with deity illustrations, making learning peaceful and screen-free. Ideal for daily chanting routines, bedtime reading, and family prayer time.',
    image: '/images/books/shloka-mantra/hardcover/front-cover.jpg',
    images: [
      '/images/books/shloka-mantra/hardcover/front-cover.jpg',
      '/images/books/shloka-mantra/hardcover/back-cover.jpg',
      '/images/books/shloka-mantra/collage-interior-pages.png',
      '/images/books/shloka-mantra/hardcover/hero-shot-1.jpg',
      '/images/books/shloka-mantra/hardcover/hero-all.png',
    ],
    regularPrice: '24.50',
    asin: 'B0GH1Z46BD',
    format: 'Hardcover',
    ageRange: 'Baby - 14 years',
    pages: '78',
    isOnSale: false,
    metadata: {
      publisher: 'Independently published',
      publicationDate: 'January 15, 2026',
      language: 'English',
      printLength: '78 pages',
      weight: '6.1 ounces',
      dimensions: '6.24 x 0.38 x 9.24 inches',
      seriesName: 'The Hindu Gods Series',
    },
  },
  {
    id: 2,
    seriesId: 'shloka-mantra',
    title: 'My Little Shloka and Mantra Book - Standard Edition',
    subtitle: 'Sacred Words for Kids',
    description: 'A 72-page paperback teaching 15 Hindu shlokas and mantras to children ages 5-14. Features transliterations, simple meanings, and structured learning for first-time chanters. Great value edition.',
    longDescription: 'Designed for early childhood, this 72-page book presents 15 well-known Hindu shlokas and mantras with clear transliterations and age-appropriate meanings. The structured format uses gentle repetition to help children chant slowly and clearly. Focuses on understanding and pronunciation rather than memorization, building a strong foundation in Hindu prayer traditions. Best for children learning Sanskrit sounds for the first time.',
    image: '/images/books/shloka-mantra/paperback/front-cover.jpg',
    images: [
      '/images/books/shloka-mantra/paperback/front-cover.jpg',
      '/images/books/shloka-mantra/paperback/back-cover.jpg',
      '/images/books/shloka-mantra/collage-interior-pages.png',
      '/images/books/shloka-mantra/promo_shot_boy_reading_book.jpg',
      '/images/books/shloka-mantra/promo_shot_Mom_Daughter_read_book.jpg',
    ],
    regularPrice: '11.99',
    isbn: '979-8245747705',
    asin: 'B0GK15FLFJ',
    format: 'Paperback - Standard Edition',
    ageRange: '5 - 14 years',
    pages: '72',
    isOnSale: false,
    metadata: {
      publisher: 'Independently published',
      publicationDate: 'January 11, 2026',
      language: 'English',
      printLength: '72 pages',
      weight: '3.84 ounces',
      dimensions: '6 x 0.17 x 9 inches',
      seriesName: 'The Hindu Gods Series',
    },
  },
  {
    id: 7,
    seriesId: 'shloka-mantra',
    title: 'My Little Shloka and Mantra Book - Premium Edition',
    subtitle: 'Premium Color Pages + Activity Section',
    description: 'An 81-page premium paperback with high-quality color pages teaching 15 Hindu shlokas and mantras. Includes a kids activity coloring section with 10 deity illustrations.',
    longDescription: 'Our premium edition features 81 pages printed on high-quality premium color stock, presenting 15 well-known Hindu shlokas and mantras with clear transliterations and age-appropriate meanings. This edition includes a bonus kids activity section with 10 beautifully designed deity illustrations for coloring—keeping children engaged while they learn. The structured format uses gentle repetition to help children chant slowly and clearly.',
    image: '/images/books/shloka-mantra/paperback/front-cover.jpg',
    images: [
      '/images/books/shloka-mantra/paperback/front-cover.jpg',
      '/images/books/shloka-mantra/paperback/back-cover.jpg',
      '/images/books/shloka-mantra/collage-interior-pages.png',
      '/images/books/shloka-mantra/promo_shot_boy_reading_book.jpg',
      '/images/books/shloka-mantra/promo_shot_Mom_Daughter_read_book.jpg',
    ],
    regularPrice: '15.99',
    isbn: '979-8243474535',
    asin: 'B0GGRS2D5B',
    format: 'Paperback - Premium Edition',
    ageRange: '5 - 14 years',
    pages: '81',
    isOnSale: false,
    metadata: {
      publisher: 'Independently published',
      publicationDate: 'January 11, 2026',
      language: 'English',
      printLength: '81 pages',
      weight: '5 ounces',
      dimensions: '6 x 0.2 x 9 inches',
      seriesName: 'The Hindu Gods Series',
    },
  },
  {
    id: 3,
    seriesId: 'shloka-mantra',
    title: 'My Little Shloka and Mantra Book - E-Book',
    subtitle: 'Digital Edition',
    description: 'Digital Kindle edition of our shloka book with 15 Hindu mantras for children from baby to 14 years. Read on any device with the Kindle app.',
    longDescription: 'The complete Shloka and Mantra Book in digital format, featuring all 15 shlokas with transliterations and meanings. Perfect for reading on tablets, phones, or Kindle devices. Ideal for travel, bedtime routines on the go, and families wanting instant access. Available worldwide with no shipping required.',
    image: '/images/books/shloka-mantra/ebook/front-cover.jpg',
    images: [
      '/images/books/shloka-mantra/ebook/front-cover.jpg',
    ],
    regularPrice: '9.99',
    asin: 'B0GG84NQ35',
    format: 'E-Book (Kindle)',
    ageRange: 'Baby - 14 years',
    isOnSale: false,
    metadata: {
      seriesName: 'The Hindu Gods Series',
    },
  },
  // ===== THE MARVELOUS HINDU DEITIES =====
  {
    id: 4,
    seriesId: 'marvelous-hindu-deities',
    title: 'The Marvelous Hindu Deities - Board Book',
    subtitle: 'Special Illustrated Edition',
    author: 'Krithika Nayak',
    description: 'A 24-page board book introducing 10 Hindu gods and goddesses to children ages 2-12. Features Ganesha, Krishna, Lakshmi, Shiva, and 6 more deities with vibrant illustrations and simple descriptions.',
    longDescription: 'This durable board book introduces 10 major Hindu deities: Ganesha, Krishna, Lakshmi, Shiva, Vishnu, Saraswati, Hanuman, Durga, Brahma, and Parvati. Each deity is presented with a full-page vibrant illustration and age-appropriate description of their stories and significance. The 24 thick pages are designed for toddler handling, making it the bestselling choice for ages 2-5. Perfect as a first introduction to Hindu mythology.',
    image: '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
    images: [
      '/images/books/marvelous-hindu-deities/boardbook/board_book_front_cover.webp',
      '/images/books/marvelous-hindu-deities/boardbook/board_book_back_cover.webp',
      '/images/books/marvelous-hindu-deities/collage_interior_pages.png',
      '/images/books/marvelous-hindu-deities/boardbook/promo_shot_girl_reading.jpeg',
      '/images/books/marvelous-hindu-deities/boardbook/hero-shot-1.jpg',
    ],
    regularPrice: '19.99',
    salePrice: '14.99',
    asin: '8195870724',
    format: 'Board book',
    ageRange: '2 - 12 years',
    pages: '24',
    isOnSale: true,
    metadata: {
      publisher: 'Roots On Rise',
      publicationDate: 'January 1, 2024',
      language: 'English',
      printLength: '24 pages',
      weight: '6.4 ounces',
      dimensions: '1 x 5 x 7 inches',
    },
  },
  {
    id: 5,
    seriesId: 'marvelous-hindu-deities',
    title: 'The Marvelous Hindu Deities - Paperback',
    subtitle: 'An Enchanting Introduction to the World of Hindu Gods and Goddesses',
    author: 'Krithika Nayak',
    description: 'A 44-page paperback featuring vibrant pictures, informative descriptions, and entertaining rhymes for an enchanting introduction to Hindu deities. Now with bonus coloring pages!',
    longDescription: 'Filled with vibrant pictures, informative descriptions, and entertaining rhymes, this delightful read offers an enchanting introduction to the fascinating realm of Hindu deities. Through engaging visuals and carefully curated information, young readers can embark on an exciting journey, discovering the unique attributes and stories behind these revered figures. Now with bonus coloring pages that let young readers have fun while learning, helping cultivate a deep connection to culture through the power of creativity and play.',
    image: '/images/books/marvelous-hindu-deities/paperback/paperback_front_cover.png',
    images: [
      '/images/books/marvelous-hindu-deities/paperback/paperback_front_cover.png',
      '/images/books/marvelous-hindu-deities/collage_interior_pages.png',
      '/images/books/marvelous-hindu-deities/paperback/promo_shot_book_in_hands.png',
      '/images/books/marvelous-hindu-deities/paperback/promo_shot_8.jpg',
    ],
    regularPrice: '15.99',
    asin: 'B0CN4NXVVN',
    format: 'Paperback',
    ageRange: 'Baby - 12 years',
    pages: '44',
    isOnSale: false,
    metadata: {
      publisher: 'Independently published',
      publicationDate: 'November 9, 2023',
      language: 'English',
      printLength: '44 pages',
      weight: '4.5 ounces',
      dimensions: '7 x 0.11 x 10 inches',
    },
  },
  {
    id: 6,
    seriesId: 'marvelous-hindu-deities',
    title: 'The Marvelous Hindu Deities - E-Book',
    subtitle: 'Digital Edition',
    author: 'Krithika Nayak',
    description: 'Digital Kindle edition featuring 10 Hindu deities with vibrant illustrations for children from baby to 12 years. Instant download, read anywhere.',
    longDescription: 'The complete Marvelous Hindu Deities book in digital format, featuring all 10 deities with full-color illustrations. Perfect for reading on tablets, phones, or Kindle devices. Ideal for travel, grandparents who want digital copies, and families seeking instant access. Available worldwide with no shipping wait.',
    image: '/images/books/marvelous-hindu-deities/ebook/front-cover-ebook.jpg',
    images: [
      '/images/books/marvelous-hindu-deities/ebook/front-cover-ebook.jpg',
      '/images/books/marvelous-hindu-deities/ebook/hero-shot-announce-ebook.jpg',
    ],
    regularPrice: '7.99',
    asin: 'B0CLKYY3QC',
    format: 'E-Book (Kindle)',
    ageRange: 'Baby - 12 years',
    isOnSale: false,
    metadata: {
      publicationDate: 'November 7, 2023',
      language: 'English',
      fileSize: '34.3 MB',
      seriesName: 'The Hindu Gods Series',
    },
  },
];

// =============================================================================
// Featured Products (for homepage)
// =============================================================================

export const FEATURED_BOOK = {
  seriesId: 'marvelous-hindu-deities',
  title: 'The Marvelous Hindu Deities',
  description: 'A 24-page board book introducing 10 Hindu gods and goddesses to children ages 2-12. Bestselling choice for first-time readers.',
  image: '/images/books/marvelous-hindu-deities/boardbook/hero-shot-1.jpg',
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
    image: '/images/books/marvelous-hindu-deities/boardbook/promo_shot_7.jpg',
    title: 'discover the magic of hindu mythology',
    description: 'Beautifully illustrated books that bring ancient stories to life for young minds.',
    ctaText: 'Shop Books',
    ctaLink: '/books',
    badge: 'Featured Collection',
    productImage: '/images/books/marvelous-hindu-deities/boardbook/promo_shot_1.png',
  },
  {
    image: '/images/books/shloka-mantra/hardcover/hero-all.png',
    title: 'shloka & mantra book',
    description: 'Introduce your children to sacred Hindu shlokas and Sanskrit mantras with gentle repetition.',
    ctaText: 'Shop Now',
    ctaLink: '/books',
    badge: 'New Release',
    productImage: '/images/books/shloka-mantra/hardcover/front-cover.jpg',
  },
  {
    image: '/images/downloads-optimized/ganesha-mandala.webp',
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
    image: '/images/books/marvelous-hindu-deities/paperback/promo_shot_3.png',
    href: '/wall-art',
  },
  {
    title: 'Games & Toys',
    description: 'Educational games celebrating Hindu culture',
    image: '/images/books/marvelous-hindu-deities/boardbook/promo_shot_1.png',
    href: '/games-toys',
  },
];

export const AVAILABLE_PRODUCTS = [
  {
    title: 'Digital Downloads',
    description: 'Coloring sheets, mandalas & educational activities',
    image: '/images/downloads-optimized/ganesha-mandala.webp',
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
 * Get the purchase identifier for a book (ISBN for physical, ASIN for Kindle)
 */
export function getBookPurchaseId(book: Book): string {
  return book.isbn ?? book.asin ?? '';
}

/**
 * Get Amazon URL for a book using ISBN or ASIN
 * Note: ISBNs may contain hyphens for readability, but Amazon URLs require them stripped
 */
export function getAmazonUrl(identifier: string, affiliateTag = 'rootsonrise-20'): string {
  // Strip hyphens from ISBN (ASINs don't have hyphens, so this is safe for both)
  const cleanIdentifier = identifier.replace(/-/g, '');
  return `${AMAZON_BASE_URL}${cleanIdentifier}?tag=${affiliateTag}`;
}

/**
 * Get Amazon URL directly from a book object
 */
export function getBookAmazonUrl(book: Book, affiliateTag = 'rootsonrise-20'): string {
  return getAmazonUrl(getBookPurchaseId(book), affiliateTag);
}

/**
 * Get a specific book by ISBN
 */
export function getBookByIsbn(isbn: string): Book | undefined {
  return BOOKS.find((book) => book.isbn === isbn);
}

/**
 * Get a specific book by ASIN (for Kindle e-books)
 */
export function getBookByAsin(asin: string): Book | undefined {
  return BOOKS.find((book) => book.asin === asin);
}

/**
 * Get a book by any identifier (ISBN or ASIN)
 */
export function getBookByIdentifier(identifier: string): Book | undefined {
  return BOOKS.find((book) => book.isbn === identifier || book.asin === identifier);
}

/**
 * Get bestseller book (board book edition)
 */
export function getBestsellerBook(): Book | undefined {
  return BOOKS.find((book) => book.asin === '8195870724');
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
    answer: "All formats are suitable for children from baby to 12 years. The board book edition has thick, durable pages perfect for toddlers (ages 2-5). The paperback and Kindle editions include more detailed descriptions suitable for older children. All editions feature the same 10 Hindu deities with vibrant illustrations."
  },
  {
    question: "What's the difference between the board book and paperback?",
    answer: "The board book has 24 thick pages that withstand toddler handling, making it ideal for the youngest readers. The paperback has 44 pages with expanded stories and more detailed content. Both are suitable for ages baby to 12 years."
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
    answer: "The book is suitable for children from baby to 14 years. Parents often start reading it aloud to babies and toddlers, while older children can follow along with the transliterations independently. It works especially well for ages 4-7 when children are learning to read."
  },
  {
    question: "What's the difference between the hardcover and paperback editions?",
    answer: "We offer three print editions: The hardcover Special Edition (78 pages) includes a bonus coloring section. The Standard Paperback (72 pages, $11.99) is our great value option. The Premium Paperback (81 pages, $15.99) features high-quality premium color pages plus a kids activity section with 10 deity illustrations to color."
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
    answer: "The hardcover Special Edition makes the best gift—it's premium quality with bonus coloring pages. The Premium Paperback (81 pages) is also excellent for gifting, featuring expanded content and our bestseller status. The Standard Paperback offers great value for budget-conscious families."
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
          'url': getBookAmazonUrl(book),
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
