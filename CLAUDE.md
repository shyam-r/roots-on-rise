# Roots On Rise - Project Guidelines

## Project Overview

**Roots On Rise** is a cultural boutique e-commerce site helping families share Hindu heritage with children through beautifully illustrated books, wall art, games, and educational content.

- **Target Audience**: Parents, grandparents, and educators seeking authentic Hindu cultural products for children ages 0-10
- **Brand Voice**: Warm, welcoming, educational, celebratory of heritage
- **Primary Goal**: Convert visitors to Amazon book purchases; build community around cultural preservation

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro (Static Site Generator) |
| Styling | Tailwind CSS v4 |
| Hosting | Cloudflare Pages |
| E-commerce | Amazon Associates (affiliate links) |
| Fonts | Inter, Plus Jakarta Sans |

---

## Design System

### Brand Colors
```css
--color-primary: #c47834;    /* Warm saffron orange - sacred, auspicious */
--color-primary-dark: #a85d1c;
--color-secondary: #d4a574;  /* Soft gold - heritage, warmth */
--color-tertiary: #fdf5e6;   /* Cream - purity, softness */
--color-accent: #8b4513;     /* Deep brown - earthiness */
--color-dark: #2d2d2d;
--color-light: #fff;
```

### Typography
- **Headings**: Plus Jakarta Sans (bold, warm, approachable)
- **Body**: Inter (clean, readable)
- **Scale**: Use Tailwind's default scale (`text-sm` through `text-4xl`)

### Spacing
- Use Tailwind spacing scale consistently
- Section padding: `py-16 px-5` (mobile), adjust for desktop
- Max content width: `max-w-6xl mx-auto`

---

## Code Conventions

### File Structure
```
src/
  components/     # Reusable UI components
  layouts/        # Page layouts
  pages/          # Route pages
  styles/         # Global styles
public/           # Static assets (images, fonts)
```

### Component Guidelines

1. **Single Responsibility**: Each component does one thing well
2. **Props Interface**: Define clear props at the top of frontmatter
3. **Semantic HTML**: Use appropriate tags (`<article>`, `<section>`, `<nav>`)
4. **Accessibility**: All images need `alt`, interactive elements need labels

```astro
---
// Good: Clear props definition
interface Props {
  title: string;
  image: string;
  href: string;
  comingSoon?: boolean;
}
const { title, image, href, comingSoon = false } = Astro.props;
---
```

### Styling Rules

1. **Tailwind First**: Use utility classes, avoid custom CSS when possible
2. **No Inline Styles**: Extract to `@layer components` if truly needed
3. **Responsive**: Mobile-first (`md:`, `lg:` breakpoints)
4. **Consistency**: Use design system tokens, never hardcode colors

```astro
<!-- Good -->
<h2 class="font-title font-bold text-3xl md:text-4xl text-dark mb-4">

<!-- Bad: Hardcoded values -->
<h2 style="font-size: 32px; color: #333;">
```

### Data Management

1. **Single Source of Truth**: Product data in one location
2. **No Magic Strings**: Use constants for URLs, ASINs
3. **Type Safety**: Use TypeScript interfaces for data structures

```typescript
// Good: Centralized product data
const AMAZON_BASE_URL = 'https://www.amazon.com/dp/';
const PRODUCTS = {
  boardBook: { asin: '8195870724', price: '$14.95' },
  paperback: { asin: 'B0CN4NXVVN', price: '$12.95' },
  kindle: { asin: 'B0CLKYY3QC', price: '$4.99' }
};
```

---

## Content Guidelines

### Cultural Sensitivity

1. **Accurate Representation**: Verify deity names, stories, and symbolism
2. **Respectful Language**: Use appropriate honorifics and terminology
3. **Inclusive**: Welcome all families interested in Hindu heritage
4. **Educational**: Explain context without assuming prior knowledge

### Writing Style

- **Headlines**: Lowercase aesthetic with highlighted keywords
- **Tone**: Warm, inviting, celebratory (not academic or preachy)
- **CTAs**: Clear, action-oriented, benefit-focused

```astro
<!-- Pattern: lowercase title with highlighted keyword -->
<h2>nurturing <span class="text-primary">cultural</span> roots</h2>
```

---

## Tech Debt Prevention Rules

### MUST DO
- [ ] Extract repeated code into components
- [ ] Use semantic HTML elements
- [ ] Add `alt` text to all images
- [ ] Test on mobile devices
- [ ] Validate accessibility (WCAG AA)
- [ ] Optimize images before adding

### MUST NOT DO
- [ ] Don't add unused dependencies
- [ ] Don't duplicate data across files
- [ ] Don't use `!important` in CSS
- [ ] Don't ignore TypeScript errors
- [ ] Don't commit console.logs
- [ ] Don't hardcode URLs or prices

### Performance Budgets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Total Page Weight**: < 500KB (excluding images)

---

## Deployment

### What Gets Deployed (Cloudflare Pages)
- `dist/` folder (built by `npm run build`)
- Only `src/pages/` routes become pages
- `public/` assets are copied directly

### What Stays in GitHub Only
- `CLAUDE.md` (this file)
- `IMPLEMENTATION_PLAN.md`
- `.claude/` skills and settings
- `.serena/` memories
- Development tooling configs

### Build Command
```bash
npm run build  # Outputs to dist/
```

---

## Git Workflow

### Parallel Development (Worktrees)
Active feature branches for concurrent work:
- `feature/design-system` - Foundation tokens and documentation
- `feature/hero-section` - Homepage hero improvements
- `feature/navigation` - Header/nav enhancements
- `feature/product-cards` - Product display components

### Commit Style
```
<type>: <short description>

Types: feat, fix, style, refactor, docs, chore
```

---

## Quick Reference

### Common Patterns

**Section Container**
```astro
<section class="py-16 px-5 bg-light">
  <div class="max-w-6xl mx-auto">
    <!-- content -->
  </div>
</section>
```

**Section Heading**
```astro
<div class="text-center mb-12">
  <h2 class="font-title font-bold text-3xl md:text-4xl text-dark mb-4">
    <span class="text-primary">highlighted</span> word
  </h2>
  <p class="text-dark/60 max-w-xl mx-auto">
    Supporting description text.
  </p>
</div>
```

**CTA Button**
```astro
<a href="/path" class="cta">Button Text</a>
<a href="https://amazon.com/..." class="amazon-btn">Buy on Amazon</a>
```

---

## Parallel Agent Development Strategy

### When to Use Parallel Agents

```
┌─────────────────────────────────────────────────────────┐
│  PARALLEL AGENT EXECUTION RULES                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ✅ USE PARALLEL when:                                  │
│  • Multiple components need creation (different files)  │
│  • Research + implementation can happen simultaneously  │
│  • SEO, components, and pages are independent          │
│  • Testing different browsers/devices                   │
│  • Read-only research tasks                            │
│                                                         │
│  ❌ DO NOT PARALLELIZE when:                           │
│  • Tasks modify the same file                          │
│  • One task depends on another's output                │
│  • Shared state could cause conflicts                  │
│  • Sequential approval needed                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Agent Personas

| Agent Type | Description | Use For |
|------------|-------------|---------|
| **UX Designer** | Design component specs, layouts, interactions | New feature planning, UI mocks |
| **Frontend Dev** | Implement React/Astro components | Building components, pages |
| **SEO Specialist** | Meta tags, structured data, keywords | Search optimization |
| **QA Tester** | Test across browsers, accessibility | Pre-deployment validation |
| **Content Writer** | Product descriptions, copy | Marketing text |

### Invocation Pattern
```javascript
// Launch multiple agents in ONE message for parallelization
Task({ subagent_type: "general-purpose", prompt: "UX Designer: [task]" })
Task({ subagent_type: "general-purpose", prompt: "Frontend Dev: [task]" })
Task({ subagent_type: "general-purpose", prompt: "SEO Specialist: [task]" })
```

### Collision Avoidance
1. **File Partitioning** - Assign clear file ownership to each agent
2. **Worktrees** - Use git worktrees for major conflicting changes
3. **Sequential Fallback** - If risk of conflict, run sequentially

---

## Requirements Tracking

All features use requirement codes from `/docs/REQUIREMENTS.md`:

| Code | Feature | Status |
|------|---------|--------|
| FR-01 | Announcement Bar | ✅ Done |
| FR-02 | Hero Section | ✅ Done |
| FR-03 | Hero Carousel | 🔄 In Progress |
| FR-04 | Collection Cards | ✅ Done |
| FR-05 | Scrolling Marquee | ✅ Done |
| FR-06 | Testimonial Carousel | ✅ Done |
| FR-07 | Newsletter Section | ✅ Done |
| FR-08 | Product Grid | 🔄 In Progress |
| FR-09 | Featured Banner | 🔄 In Progress |
| FR-10 | Book Detail Card | ✅ Done |

---

## SEO Keywords (Target)

Primary:
- hindu children's books
- indian mythology books for kids
- shloka books for children
- mantra books for kids

Secondary:
- diwali gifts for kids
- hindu gods book for children
- sanskrit books for toddlers
- indian culture books for kids

---

*Last Updated: 2026-01-23*
