# Roots On Rise - Implementation Plan

> **Project Codename**: CULTURAL-BOUTIQUE
> **Last Updated**: 2025-01-22
> **Status**: Ready for Implementation

---

## Executive Summary

Transform Roots On Rise from a basic Shopify migration into a distinctive, high-converting cultural products website that celebrates Hindu heritage while driving Amazon book sales.

---

## Requirements

### Business Goals
1. **Primary**: Increase Amazon book conversions
2. **Secondary**: Build email list for future product launches
3. **Tertiary**: Establish brand authority in cultural children's products

### User Requirements
| User | Need | Success Metric |
|------|------|----------------|
| Parents | Find quality Hindu cultural products | Time to purchase < 2 min |
| Grandparents | Easy navigation, clear CTAs | Mobile usability score > 90 |
| Educators | Product information, bulk options | Content depth satisfaction |

### Technical Requirements
- [ ] Page load < 3 seconds on 3G
- [ ] Lighthouse score > 90 all categories
- [ ] WCAG AA accessibility compliance
- [ ] Mobile-first responsive design
- [ ] SEO optimized for cultural product keywords

---

## Current State Analysis

### Strengths
- Clean Astro/Tailwind foundation
- Functional pages and navigation
- Amazon integration working
- Good content (testimonials, product info)

### Areas for Improvement
- Generic visual design (looks like default template)
- Hero section lacks cultural distinctiveness
- Product cards are basic
- No visual hierarchy guiding user journey
- Navigation could be more engaging
- Missing micro-interactions

---

## Implementation Phases

### Phase 1: Design System Foundation
**Branch**: `feature/design-system`
**Priority**: HIGH (blocks other work)

#### Deliverables
- [ ] Design tokens documentation
- [ ] Component inventory
- [ ] Animation/transition library
- [ ] Icon system (cultural motifs)
- [ ] Color usage guidelines with examples

#### Tasks
1. Audit existing components and styles
2. Document current design tokens (colors, spacing, typography)
3. Create missing utility classes for patterns
4. Establish component API standards
5. Add subtle cultural pattern assets (paisley, lotus, etc.)

#### Acceptance Criteria
- All colors reference CSS custom properties
- Component props documented
- Consistent spacing applied across all pages
- Cultural motifs integrated subtly

---

### Phase 2: Hero Section Redesign
**Branch**: `feature/hero-section`
**Priority**: HIGH (above-the-fold impact)

#### Deliverables
- [ ] Distinctive hero with cultural identity
- [ ] Animated elements (subtle, performant)
- [ ] Mobile-optimized layout
- [ ] Clear CTA hierarchy

#### Design Direction
```
┌─────────────────────────────────────────────────────────┐
│  [Cultural pattern border - subtle paisley/lotus]        │
│                                                          │
│     nurturing cultural roots                            │
│     ═══════════════════════                             │
│     Beautifully illustrated books that help             │
│     children discover Hindu mythology                    │
│                                                          │
│     [Shop Books]  [Our Story]                           │
│                                                          │
│  ┌─────────────────┐                                    │
│  │  Featured Book  │  ← Floating/angled presentation    │
│  │     Image       │                                    │
│  └─────────────────┘                                    │
│                                                          │
│  [Cultural pattern border]                               │
└─────────────────────────────────────────────────────────┘
```

#### Tasks
1. Create cultural border/pattern component
2. Add floating book presentation with subtle animation
3. Implement gradient backgrounds using brand colors
4. Add decorative elements (diyas, lotus, etc.)
5. Optimize hero image loading (preload, responsive)
6. Test on multiple screen sizes

#### Acceptance Criteria
- LCP < 2.5s
- Distinctively "Indian cultural" aesthetic
- Clear visual hierarchy
- Accessible contrast ratios

---

### Phase 3: Navigation Enhancement
**Branch**: `feature/navigation`
**Priority**: MEDIUM

#### Deliverables
- [ ] Sticky header behavior
- [ ] Enhanced mobile menu
- [ ] Active state indicators
- [ ] Smooth scroll integration

#### Tasks
1. Add scroll-aware sticky behavior
2. Improve mobile menu animation (slide-in drawer)
3. Add active page indicators
4. Implement smooth scroll for anchor links
5. Add keyboard navigation support
6. Consider mega-menu for future product expansion

#### Acceptance Criteria
- Header becomes sticky after scroll past hero
- Mobile menu is accessible and animated
- Current page clearly indicated
- All navigation keyboard accessible

---

### Phase 4: Product Cards Redesign
**Branch**: `feature/product-cards`
**Priority**: MEDIUM

#### Deliverables
- [ ] Enhanced product card component
- [ ] Hover interactions
- [ ] Coming soon state improvements
- [ ] Book format selector component

#### Design Direction
```
┌─────────────────────────────┐
│  ┌───────────────────────┐  │
│  │                       │  │
│  │      Product Image    │  │  ← Subtle hover zoom
│  │                       │  │
│  │   ★★★★★ (reviews)     │  │  ← Overlay on hover
│  └───────────────────────┘  │
│                              │
│  The Marvelous Hindu Deities │
│  Perfect for ages 0-5        │
│                              │
│  [$14.95] [View Details →]   │
│                              │
│  [Board Book] [Paperback]    │  ← Format tabs
└─────────────────────────────┘
```

#### Tasks
1. Create enhanced ProductCard with hover states
2. Build BookFormatSelector component
3. Add subtle scale/shadow transitions
4. Improve "Coming Soon" overlay design
5. Add quick-view capability (optional)
6. Integrate star ratings display

#### Acceptance Criteria
- Cards respond to hover with delight
- Format selection is intuitive
- Coming soon items clearly distinguished but enticing
- Consistent card heights in grid

---

## Phase 5: Content & Polish
**Branch**: `master` (after merging features)
**Priority**: LOW (after core features)

#### Deliverables
- [ ] Enhanced testimonials section
- [ ] Newsletter signup component
- [ ] FAQ section for books page
- [ ] 404 page with brand personality
- [ ] Loading states and skeletons

---

## Parallel Execution Strategy

```
Week 1-2:
├── [Agent 1] → feature/design-system (foundation)
│
├── After design-system basics established:
│   ├── [Agent 2] → feature/hero-section
│   ├── [Agent 3] → feature/navigation
│   └── [Agent 4] → feature/product-cards
│
Week 3:
└── Merge all features → master
    └── Phase 5: Content & Polish
```

### Worktree Boundaries
Each worktree operates on specific files to avoid conflicts:

| Worktree | Primary Files | Shared (Coordinate) |
|----------|---------------|---------------------|
| design-system | `global.css`, new token files | - |
| hero-section | `Hero.astro`, hero assets | `global.css` imports |
| navigation | `Header.astro`, nav scripts | - |
| product-cards | `ProductCard.astro`, card styles | - |

---

## Success Metrics

### Conversion
- [ ] Amazon click-through rate > 15%
- [ ] Average time on site > 2 minutes
- [ ] Bounce rate < 40%

### Performance
- [ ] Lighthouse Performance > 95
- [ ] Lighthouse Accessibility > 95
- [ ] Core Web Vitals all green

### Quality
- [ ] Zero accessibility violations
- [ ] No console errors
- [ ] Consistent visual design

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Worktree merge conflicts | Clear file boundaries, frequent communication |
| Over-engineering | Stick to defined scope, no scope creep |
| Performance regression | Test Lighthouse after each phase |
| Cultural insensitivity | Review cultural elements with domain knowledge |

---

## Definition of Done

A feature is complete when:
- [ ] Code follows CLAUDE.md guidelines
- [ ] Responsive on mobile, tablet, desktop
- [ ] Lighthouse scores maintained
- [ ] No TypeScript/ESLint errors
- [ ] Tested in Chrome, Safari, Firefox
- [ ] Committed with descriptive message
- [ ] Ready for merge to master

---

## Checkpoints

### Checkpoint 1: Design System Ready ✅
- [x] Tokens documented (design-tokens.css)
- [x] Pattern library established (PaisleyBorder, LotusAccent)
- [x] Team aligned on conventions (CLAUDE.md)
- [x] shadcn/ui component system added

### Checkpoint 2: Features Complete ✅
- [x] Hero section merged
- [x] Navigation merged
- [x] Product cards merged
- [x] No regressions
- [x] Digital downloads page live with FREE products

### Checkpoint 3: Polish Complete ✅
- [x] All pages using UI component system (digital-downloads migrated)
- [x] Performance validated (Lighthouse: 81/95/100/92)
- [x] Accessibility audited (WCAG AA: skip link, keyboard nav, aria-live)
- [x] Ready for production

---

## UI Component System (shadcn/ui)

**Status**: ✅ Implemented (2025-01-23)

### Architecture
```
src/
├── lib/
│   └── utils.ts           # cn() utility for class merging
└── components/
    └── ui/
        ├── index.ts       # Barrel exports
        ├── button.tsx     # Primary CTA component
        ├── badge.tsx      # Status badges (FREE, NEW, Coming Soon)
        ├── card.tsx       # Base card primitives
        ├── section.tsx    # Page section layout
        ├── section-header.tsx  # Section titles with highlight
        ├── download-card.tsx   # Free download product card
        └── feature-card.tsx    # Feature grid items
```

### Usage Pattern
```tsx
// Import from barrel file
import { Button, Badge, DownloadCard } from '@/components/ui';

// Components are server-rendered by default (zero client JS)
<DownloadCard
  title="Ganesha Mandala"
  description="..."
  image="/images/..."
  downloadUrl="/images/..."
  category="Coloring Sheets"
/>

// Add client:load for interactive components
<InteractiveComponent client:load />
```

### Available Components
| Component | Variants | Purpose |
|-----------|----------|---------|
| Button | default, amazon, outline, ghost, link | CTAs and actions |
| Badge | default, free, new, comingSoon, outline | Status indicators |
| Card | - | Container with header, content, footer |
| Section | light, dark, tertiary, gradient | Page sections |
| SectionHeader | left, center, right | Section titles |
| DownloadCard | - | Free download products |
| FeatureCard | default, centered, numbered | Feature grids |

### Dependencies
- `class-variance-authority` - Type-safe variants
- `clsx` + `tailwind-merge` - Class merging
- `lucide-react` - Icons
- `@radix-ui/react-slot` - Component composition

---

## Next Steps

1. ~~**Immediate**: Review and approve this plan~~
2. ~~**Start**: Begin with `feature/design-system` worktree~~
3. ~~**Parallel**: Once design tokens stable, start other features~~
4. ~~**Merge**: Integrate features to master~~
5. ~~**Deploy**: Push to Cloudflare Pages~~
6. ~~**Homepage**: Integrated HeroCarousel, TestimonialCarousel, NewsletterSection, AnnouncementBar~~
7. ~~**Current**: Code audit in progress (3 parallel agents reviewing components, pages, styles)~~
8. ~~**Next**: Apply audit findings, integrate ProductGrid into books page~~
9. ~~**Current**: Centralize product data (last remaining audit finding)~~
10. ~~**Checkpoint 3 Complete**: Polish, accessibility, performance (2026-01-23)~~
11. **Future**: Add more shadcn components as needed (Input, Dialog, etc.)

---

## Completed Audit (2026-01-23)

Parallel code review completed. Findings addressed:

### Fixed Issues
- [x] Hardcoded colors replaced with design tokens (Header, Hero, BookFormatSelector)
- [x] Missing CSS variables added (secondary-dark, tertiary-50, border, amazon colors)
- [x] Security: Added rel="noreferrer" to external Amazon links
- [x] Accessibility: Added prefers-reduced-motion to marquee and BookFormatSelector
- [x] DRY: Extracted containerClasses to shared constants.ts

### Remaining Work
- [x] Centralize product data to src/data/products.ts (audit/pages finding)
- [x] Remove unused imports from index.astro and about.astro
- [x] Create robots.txt for SEO
- [x] Add skip-to-main-content link (WCAG 2.4.1)
- [x] Add keyboard navigation to testimonial carousel
- [x] Fix newsletter form accessibility (aria-live)
- [x] Optimize LCP (preload hero image)
- [x] Migrate digital-downloads.astro to UI components
