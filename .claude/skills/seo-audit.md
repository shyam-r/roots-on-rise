---
name: seo-audit
description: Comprehensive SEO audit for Roots On Rise. Use when checking site health, diagnosing ranking issues, or before major launches. Covers technical SEO, on-page optimization, structured data, and Core Web Vitals specific to this Astro/Cloudflare Pages e-commerce site.
---

# SEO Audit Skill — Roots On Rise

Perform comprehensive SEO audits tailored to this Astro static site selling Hindu children's books via Amazon affiliate links.

## When to Use

- Before major deployments or launches
- When diagnosing ranking or traffic issues
- Quarterly health checks
- After significant content or structural changes

## Audit Framework (Priority Order)

### 1. Crawlability & Indexation (Critical)

**Sitemap Verification**
```bash
# Check sitemap exists and is valid
curl -s https://rootsonrise.com/sitemap.xml | head -50

# Verify robots.txt references sitemap correctly
curl -s https://rootsonrise.com/robots.txt
```

**Checklist:**
- [ ] XML sitemap exists at `/sitemap.xml`
- [ ] `robots.txt` references sitemap with correct URL
- [ ] No critical pages blocked by robots.txt
- [ ] Sitemap includes all product and content pages
- [ ] Sitemap has `<lastmod>` dates

**Astro-Specific:** Ensure `@astrojs/sitemap` is installed and configured in `astro.config.mjs`:
```javascript
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://rootsonrise.com',
  integrations: [sitemap()],
});
```

### 2. Technical Foundations

**Core Web Vitals Targets (from CLAUDE.md):**
| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | PageSpeed Insights |
| INP | < 200ms | Chrome DevTools |
| CLS | < 0.1 | Lighthouse |
| Page Weight | < 500KB (excl. images) | DevTools Network |

**Check Commands:**
```bash
# Build and check output size
npm run build
du -sh dist/

# Check for unoptimized images
find public/images -name "*.jpg" -o -name "*.png" | head -20
```

**Image Optimization Checklist:**
- [ ] Hero images preloaded with `fetchpriority="high"`
- [ ] Below-fold images have `loading="lazy"`
- [ ] Images have explicit `width` and `height` attributes
- [ ] WebP versions exist for major images
- [ ] Alt text on all images (check components)

### 3. On-Page SEO

**Title Tags (50-60 chars):**
```
Pattern: [Page Topic] - [Benefit/Category] | Roots On Rise
Example: Children's Books - Mythology & Shloka Books for Kids | Roots On Rise
```

**Check each page in `src/pages/`:**
- [ ] Unique, keyword-rich title
- [ ] Title under 60 characters
- [ ] Primary keyword near the beginning

**Meta Descriptions (150-160 chars):**
- [ ] Unique per page
- [ ] Includes primary keyword
- [ ] Has clear value proposition
- [ ] Ends with soft CTA when appropriate

**Heading Hierarchy:**
- [ ] Single H1 per page
- [ ] H1 contains primary keyword
- [ ] Logical H2→H3→H4 nesting
- [ ] No skipped heading levels

**Check with:**
```bash
# Find all H1 tags in pages
grep -r "<h1" src/pages/ --include="*.astro"
```

### 4. Structured Data Audit

**Required Schemas (check `Layout.astro` and page files):**

| Schema | Location | Status |
|--------|----------|--------|
| Organization | Layout.astro | ✓ Implemented |
| WebSite | Layout.astro | ✓ Implemented |
| Book/Product | products.ts | ✓ Implemented |
| BreadcrumbList | Category pages | ❌ Missing |
| FAQPage | FAQ sections | ❌ Missing |

**Validation:**
```bash
# Test structured data
# Copy page HTML and paste into:
# https://search.google.com/test/rich-results
```

**BreadcrumbList Template (add to category pages):**
```javascript
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://rootsonrise.com" },
    { "@type": "ListItem", "position": 2, "name": "Books", "item": "https://rootsonrise.com/books" }
  ]
};
```

### 5. Content Quality

**Product Pages:**
- [ ] Unique descriptions (not copied from Amazon)
- [ ] Age range clearly stated
- [ ] Format differences explained
- [ ] Benefits articulated (not just features)

**E-E-A-T Signals:**
- [ ] About page with founder/author credentials
- [ ] Trust signals (review counts, testimonials)
- [ ] Contact information accessible
- [ ] Privacy policy and terms present

### 6. Internal Linking

**Check:**
- [ ] All main pages accessible within 3 clicks from homepage
- [ ] Related products link to each other
- [ ] Category pages link to product pages
- [ ] Footer contains key navigation links
- [ ] No orphan pages (pages with no internal links)

```bash
# Find internal links in components
grep -r 'href="/' src/components/ --include="*.astro" | grep -v "http"
```

### 7. Mobile & Accessibility

- [ ] Viewport meta tag present
- [ ] Touch targets >= 44x44px
- [ ] Text readable without zooming (16px+ base)
- [ ] Skip link present (`<a href="#main-content">`)
- [ ] ARIA labels on interactive elements

## Audit Report Template

```markdown
# SEO Audit Report — [Date]

## Executive Summary
[2-3 sentence overview of site health and critical issues]

## Critical Issues (Fix Immediately)
1. [Issue]: [Impact] — [File location]
2. ...

## High Priority (Fix This Week)
1. ...

## Medium Priority (Fix This Month)
1. ...

## Metrics Snapshot
| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Indexed Pages | X | Y | ⚠️ |
| LCP | Xs | <2.5s | ✅ |
| CLS | X | <0.1 | ✅ |

## Next Audit: [Date + 3 months]
```

## Quick Audit Commands

```bash
# Full build check
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Validate HTML structure
# (Use browser DevTools → Lighthouse → SEO audit)

# Check image sizes
find public/images -type f \( -name "*.jpg" -o -name "*.png" \) -exec ls -lh {} \; | awk '{print $5, $9}'
```

## Related Skills
- `page-cro` — Optimize pages for conversion after SEO fixes
- `ai-seo` — Optimize content for AI-powered search
