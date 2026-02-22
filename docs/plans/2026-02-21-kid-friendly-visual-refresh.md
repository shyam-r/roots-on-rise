# Kid-Friendly Visual Refresh — All Pages

## Context

The site reads as a premium parent-facing boutique — warm saffron, cream, dark heroes, editorial typography. The products are for kids (ages 0-10) but the visual energy is missing. This plan adds colorful accents, playful animations, and kid-friendly touches across ALL pages without breaking the warm heritage brand.

## Execution Strategy

**Phase 1** — Global design tokens (must merge first, all other streams depend on it)
**Phase 2** — 4 parallel streams via worktrees (no file overlap)

---

## Phase 1: Global Tokens & Animations

**Files:** `src/styles/design-tokens.css`, `src/styles/global.css`

### design-tokens.css — Add kid-friendly accent colors to `@theme`
```css
--color-sky: #38bdf8;
--color-sky-light: #e0f6ff;
--color-coral: #fb7185;
--color-coral-light: #ffe4e8;
--color-lime: #34d399;
--color-lime-light: #d1fae5;
--color-marigold: #fbbf24;
--color-marigold-light: #fef9c3;
```

### global.css — Add keyframes + utility classes

**Keyframes** (after existing `marquee`):
- `float-gently` — gentle vertical float (translateY 0 → -10px), 5s infinite
- `wiggle` — rotate -3deg → 3deg, 0.4s ease-bounce (single trigger)
- `bounce-soft` — translateY 0 → -6px, 2s ease-bounce infinite

**Utility classes:**
- `.animate-float` / `.animate-wiggle-loop` / `.animate-bounce-soft`
- `.card-hover-bounce` — translateY(-4px) scale(1.02) on hover with `--ease-bounce`
- `.badge-sticker` — rotate(-2deg) + drop-shadow, hover straightens

**Reduced motion guards** for all new animations.

---

## Phase 2, Stream A: Homepage

**Files:** `src/pages/index.astro`, `src/components/ui/hero-carousel.tsx`

### hero-carousel.tsx — Lighten dark overlays
- `from-dark/90 via-dark/50 to-dark/20` → `from-dark/75 via-dark/35 to-dark/10`
- `from-dark/60` bottom gradient → `from-dark/45`
- Same change in static first-slide fallback in `index.astro` (lines 71-72)

### index.astro — Mission icon row
After the `<h2>our mission</h2>`, before the `<p>`, add a row of 4 floating emoji icons:
- Stories (book), Culture (lotus), Family, Heritage (globe)
- Each in a colored circle (`bg-primary/10`, `bg-sky/20`, `bg-lime/20`, `bg-marigold/20`)
- Staggered `animate-float` with animation-delay

### index.astro — Bouncy card hover
- Product cards in "Free for Your Family" grid: add `card-hover-bounce` to outer `<a>`

---

## Phase 2, Stream B: Books Page

**File:** `src/pages/books.astro`

### Hero — Decorative lotus accents
- Add `LotusAccent` on either side of the hero text
- `variant="outline"`, `size="lg"`, `opacity={0.25}`, hidden on mobile

### Format comparison table — Color-coded column headers
| Format | Header bg | Text color |
|--------|----------|------------|
| Board Book | `bg-lime/10` | `text-lime` |
| Hardcover | `bg-sky/10` | `text-sky` |
| Paperback | `bg-marigold/10` | `text-amber-700` |
| Kindle | `bg-coral/10` | `text-coral` |

### Tag cloud — Colored pills by category
- Deity pills: `bg-primary/8 border-primary/20 text-primary/80` → hover fills
- Festival pills: `bg-coral/10 border-coral/20 text-coral` → hover fills
- Topic pills: `bg-lime/10 border-lime/20 text-lime` → hover fills

### FAQ icons — Distinct colors per group

---

## Phase 2, Stream C: Games/Toys + Wall Art

**Files:** `src/pages/games-toys.astro`, `src/pages/wall-art.astro`, `src/components/ui/coming-soon-card.tsx`

### coming-soon-card.tsx — Warmer, more vivid
- Image opacity: `opacity-70` → `opacity-85`, hover: `opacity-90` → `opacity-95`
- Overlay: `bg-dark/30` → warm gradient
- Badge position: `items-center` → `items-end pb-6`

### games-toys.astro — Bright, energetic hero
- Playful emoji row with `animate-bounce-soft`
- Badge gets `badge-sticker` class
- Split heading color, colorful underline dots
- Notify section: warm gradient

### wall-art.astro — Same pattern, art theme

---

## Phase 2, Stream D: Our Story

**File:** `src/pages/our-story.astro`

- Pull-quote callout: `border-l-4 border-primary pl-10`
- Mission/Vision headings with `text-primary` spans
- Sign-off callout: `border-r-4 border-secondary`

---

## File Ownership (no overlap)

| Stream | Files | Worktree branch |
|--------|-------|----------------|
| Phase 1 | `global.css`, `design-tokens.css` | `feature/kidify-tokens` |
| A | `index.astro`, `hero-carousel.tsx` | `feature/kidify-homepage` |
| B | `books.astro` | `feature/kidify-books` |
| C | `games-toys.astro`, `wall-art.astro`, `coming-soon-card.tsx` | `feature/kidify-collections` |
| D | `our-story.astro` | `feature/kidify-our-story` |

## What Does NOT Change

Brand colors, Amazon buttons, affiliate links, product data, SEO meta, BookSeriesCard internals, MobileStickyBuy, ExitIntentPopup, DownloadUpsellPopup, fonts.
