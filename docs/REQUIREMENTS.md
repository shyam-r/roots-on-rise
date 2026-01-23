# Roots On Rise - Product Requirements Document

## Overview
Roots On Rise is an e-commerce platform for Hindu children's cultural products, primarily books. The site is built with Astro, Tailwind CSS v4, and React components (server-rendered).

## Design Inspiration
Primary inspiration: [Gloo Books](https://gloobooks.com) - a children's book publisher with clean, modern e-commerce design.

---

## Functional Requirements

### FR-01: Announcement Bar
**Priority:** High
**Status:** ✅ Implemented

**Description:**
A prominent announcement bar at the top of every page displaying promotional messages.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  FREE SHIPPING ON ORDERS OVER $50 | SHOP OUR BESTSELLERS   │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Primary color (#c47834)
- Text: Light color, centered, uppercase
- Height: 40px
- Clickable link to /books or promotional page
- Hover state: Darker primary (#a85d1c)

**Props:**
```typescript
interface AnnouncementBarProps {
  message: string;
  link?: string;
  className?: string;
}
```

---

### FR-02: Hero Section with Book Showcase
**Priority:** High
**Status:** ✅ Implemented

**Description:**
Full-width hero section with animated text and book image showcase.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ╭─────────────────╮    ┌─────────────┐                     │
│  │ nurturing       │    │             │                     │
│  │ CULTURAL        │    │  [Book      │                     │
│  │ roots           │    │   Image]    │                     │
│  │                 │    │             │                     │
│  │ Subtitle text   │    └─────────────┘                     │
│  │                 │         ↑ floating animation           │
│  │ [CTA] [CTA]     │                                        │
│  ╰─────────────────╯                                        │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Gradient background with warm tones
- Decorative wave borders (top and bottom)
- Floating decorative elements (lotus, circles)
- Text animations (fade-slide-up)
- Book image with gentle float animation
- Dual CTA buttons
- Responsive: Stack vertically on mobile

**Props:**
```typescript
interface HeroProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  bookImage?: string;
  bookImageAlt?: string;
}
```

---

### FR-03: Hero Carousel
**Priority:** Medium
**Status:** 🔄 In Progress

**Description:**
Rotating hero banner showcasing multiple books/products (like Gloo Books).

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  < │         [Book Image + Content]           │ >  │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
│                        ○ ● ○                                │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Auto-rotate every 5 seconds
- Pause on hover
- Navigation arrows (left/right)
- Dot indicators for slide position
- Smooth crossfade transition (500ms)
- Full-width responsive

**Props:**
```typescript
interface HeroCarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
  }[];
  autoRotate?: boolean;
  interval?: number;
  className?: string;
}
```

---

### FR-04: Collection Cards Grid
**Priority:** High
**Status:** ✅ Implemented

**Description:**
Grid of collection/category cards with images and hover effects.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│   SHOP COLLECTIONS:                                         │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│   │ [Image]  │  │ [Image]  │  │ [Image]  │                 │
│   │          │  │          │  │          │                 │
│   │ Category │  │ Category │  │ Category │                 │
│   │ SHOP NOW │  │ SHOP NOW │  │ SHOP NOW │                 │
│   └──────────┘  └──────────┘  └──────────┘                 │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Aspect ratio: Square or 4:5
- Image with gradient overlay (bottom)
- Title text at bottom
- CTA appears on hover
- Scale effect on hover (1.05x)
- Responsive: 1 col mobile, 2 tablet, 3 desktop

**Props:**
```typescript
interface CollectionCardProps {
  title: string;
  image: string;
  href: string;
  ctaText?: string;
  className?: string;
  variant?: "default" | "featured";
}
```

---

### FR-05: Scrolling Marquee
**Priority:** Medium
**Status:** ✅ Implemented

**Description:**
Infinite scrolling text marquee for brand messaging.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│ BOOKS TO NURTURE CULTURAL ROOTS • BOOKS TO NURTURE CULTURA │
│ ────────────────────────────────────────────────────────→   │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Infinite horizontal scroll animation
- Pause on hover
- Speed variants: slow (40s), normal (25s), fast (15s)
- Large, bold typography
- Duplicated content for seamless loop

**Props:**
```typescript
interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}
```

---

### FR-06: Testimonial Carousel
**Priority:** High
**Status:** ✅ Implemented

**Description:**
Customer testimonials with star ratings and carousel navigation.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│                    Happy Readers                            │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                 │
│   │ ★★★★★    │  │ ★★★★★    │  │ ★★★★★    │                 │
│   │ "Quote"  │  │ "Quote"  │  │ "Quote"  │                 │
│   │ — Name   │  │ — Name   │  │ — Name   │                 │
│   └──────────┘  └──────────┘  └──────────┘                 │
│                     < ● ● ● >                               │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Star rating display (1-5 filled stars)
- Quote text with decorative quotes
- Author name and title
- Navigation dots or arrows
- Optional auto-rotate
- Responsive: 1 card mobile, 3 desktop

**Props:**
```typescript
interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  rating: number;
  image?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  variant?: "default" | "minimal" | "featured";
  className?: string;
}
```

---

### FR-07: Newsletter Section
**Priority:** High
**Status:** ✅ Implemented

**Description:**
Email signup section with cultural imagery.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │   Stay Connected                                    │    │
│  │   Be the first to know about new books & products   │    │
│  │                                                     │    │
│  │   ┌─────────────────────────┐  ┌──────────┐        │    │
│  │   │ Enter your email        │  │ SIGN UP  │        │    │
│  │   └─────────────────────────┘  └──────────┘        │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Headline + description text
- Email input with placeholder
- Submit button with hover state
- Background variants: light, dark, primary
- Optional decorative image
- Form validation (email format)

**Props:**
```typescript
interface NewsletterSectionProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  variant?: "light" | "dark" | "primary";
  className?: string;
}
```

---

### FR-08: Product Grid
**Priority:** High
**Status:** 🔄 In Progress

**Description:**
Grid display of book products with quick-view hover states.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                   │
│   │[Img] │  │[Img] │  │[Img] │  │[Img] │                   │
│   │      │  │ SALE │  │      │  │      │                   │
│   │Title │  │Title │  │Title │  │Title │                   │
│   │$14.99│  │$9.99 │  │$14.99│  │$14.99│                   │
│   └──────┘  └──────┘  └──────┘  └──────┘                   │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Grid: 2 cols mobile, 3 tablet, 4 desktop
- Product cards with image, title, price
- Sale badge support (absolute positioned)
- Hover: lift effect + shadow
- Quick-view overlay option
- Loading skeleton state

**Props:**
```typescript
interface Product {
  id: string;
  title: string;
  image: string;
  price: string;
  salePrice?: string;
  href: string;
  badge?: string;
}

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  showQuickView?: boolean;
  className?: string;
}
```

---

### FR-09: Featured Banner
**Priority:** Medium
**Status:** 🔄 In Progress

**Description:**
Full-width promotional banner with text overlay.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────┐    │
│  │                                                     │    │
│  │  [Background Image]                                 │    │
│  │                                                     │    │
│  │     ╔═══════════════════════╗                      │    │
│  │     ║ Featured Headline     ║                      │    │
│  │     ║ Description text      ║                      │    │
│  │     ║ [CTA Button]          ║                      │    │
│  │     ╚═══════════════════════╝                      │    │
│  │                                                     │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Full-width background image
- Gradient overlay for text readability
- Headline + description + CTA
- Alignment variants: left, center, right
- Optional decorative border pattern
- Min-height: 400px

**Props:**
```typescript
interface FeaturedBannerProps {
  image: string;
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  align?: "left" | "center" | "right";
  overlay?: "light" | "dark" | "gradient";
  className?: string;
}
```

---

### FR-10: Book Detail Card
**Priority:** High
**Status:** ✅ Implemented

**Description:**
Detailed book display with image gallery, metadata, and purchase options.

**Visual Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  ┌──────────────┐   ┌────────────────────────────────────┐  │
│  │              │   │ [Format Badge]                     │  │
│  │  [Main       │   │ Book Title                         │  │
│  │   Image]     │   │ Subtitle                           │  │
│  │              │   │                                    │  │
│  │              │   │ $14.99  ̶$̶1̶9̶.̶9̶9̶                     │  │
│  └──────────────┘   │                                    │  │
│  [□][□][□][□]       │ 📖 Format  👶 Ages  📄 Pages       │  │
│                     │                                    │  │
│                     │ Description text...                │  │
│                     │                                    │  │
│                     │ [Buy on Amazon]                    │  │
│                     └────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Horizontal layout (image left, content right)
- Reverse option for alternating layouts
- Image gallery with thumbnails
- Sale badge on image
- Format badge (Hardcover, Paperback, etc.)
- Price with strikethrough for sales
- Metadata icons (format, age range, pages)
- Amazon buy button

**Props:**
```typescript
interface BookCardProps {
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
  isOnSale?: boolean;
  layout?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
}
```

---

## Non-Functional Requirements

### NFR-01: Performance
- Lighthouse score > 90 for Performance
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Image lazy loading on all below-fold images
- Optimized font loading (preconnect)

### NFR-02: Accessibility
- WCAG 2.1 AA compliance
- Proper heading hierarchy (H1-H6)
- Alt text on all images
- Focus states on all interactive elements
- Reduced motion support (@media prefers-reduced-motion)
- Keyboard navigation support

### NFR-03: SEO
- Unique, keyword-rich title tags (50-60 chars)
- Meta descriptions (150-160 chars)
- Open Graph tags for social sharing
- Twitter card meta tags
- Canonical URLs
- Structured data (JSON-LD) for products
- Semantic HTML

### NFR-04: Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Touch-friendly targets (min 44x44px)
- No horizontal scroll on mobile

### NFR-05: Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome for Android (last 2 versions)

---

## Design Tokens

### Colors
```css
--color-light: #fff;
--color-dark: #2d2d2d;
--color-primary: #c47834;      /* Warm orange */
--color-primary-dark: #a85d1c;
--color-secondary: #d4a574;    /* Muted gold */
--color-tertiary: #fdf5e6;     /* Cream background */
--color-accent: #8b4513;       /* Saddle brown */
```

### Typography
```css
--font-sans: "Inter", system-ui, sans-serif;
--font-title: "Plus Jakarta Sans", system-ui, sans-serif;
```

### Spacing Scale
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```

### Border Radius
```
sm: 4px, md: 8px, lg: 12px, xl: 16px, full: 9999px
```

### Shadows
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15);
```

---

## Page Structure

### Homepage
1. Announcement Bar (FR-01)
2. Header/Navigation
3. Hero Section (FR-02)
4. Featured Book Section
5. Mission Statement
6. Testimonials (FR-06)
7. Available Products
8. Coming Soon Products
9. Newsletter Section (FR-07)
10. Footer

### Books Page
1. Announcement Bar
2. Header
3. Page Hero (title + description)
4. Book Cards (FR-10) - alternating layout
5. CTA Section
6. Footer

### Category Pages (Wall Art, Games, etc.)
1. Announcement Bar
2. Header
3. Coming Soon Hero with badge
4. Preview Grid (FR-04)
5. Notify Section
6. Footer
