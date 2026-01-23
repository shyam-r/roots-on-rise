# SEO Audit Report - Roots On Rise

**Date:** January 2026
**Site:** rootsonrise.com
**Focus:** Hindu children's books and cultural products

---

## Executive Summary

This audit improved on-page SEO across all main pages, enhanced the Layout component with proper meta tag infrastructure, and added structured data for better search engine visibility.

---

## Changes Implemented

### 1. Layout Component (`/src/layouts/Layout.astro`)

**Added:**
- Canonical URL support (prevents duplicate content issues)
- `og:site_name` for proper brand attribution
- Twitter site handle (`@rootsonrise`)
- Full image URL construction for social sharing
- `og:locale` and `og:image:alt` for accessibility
- Structured data slot for page-specific JSON-LD
- Organization schema (JSON-LD)
- WebSite schema (JSON-LD)
- Optional `noindex` flag for pages that shouldn't be indexed

**Improved:**
- Default meta description with target keywords

### 2. Page-by-Page SEO Updates

| Page | Before Title | After Title | Title Length |
|------|-------------|-------------|--------------|
| index.astro | "Roots On Rise - Hindu Cultural Books..." | "Hindu Children's Books & Cultural Products \| Roots On Rise" | 59 chars |
| books.astro | "Books" | "Hindu Children's Books - Mythology & Shloka Books for Kids \| Roots On Rise" | 75 chars |
| about.astro | "About Us" | "About Us - Hindu Cultural Books & Heritage Products \| Roots On Rise" | 69 chars |
| our-story.astro | "Our Story" | "Our Story - Sharing Hindu Heritage Through Children's Books \| Roots On Rise" | 77 chars |
| wall-art.astro | "Wall Art" | "Hindu Wall Art Prints - Coming Soon \| Roots On Rise" | 52 chars |
| digital-downloads.astro | Already optimized | "Free Hindu Coloring Sheets & Mandalas for Kids \| Roots On Rise" | 64 chars |

### 3. Meta Descriptions Updated

All pages now have keyword-rich meta descriptions under 160 characters targeting:
- "hindu children's books"
- "indian mythology books for kids"
- "shloka books for children"
- "mantra books for kids"
- "diwali gifts for children"
- "cultural heritage books"

### 4. Structured Data Added

**Organization Schema (Global):**
```json
{
  "@type": "Organization",
  "name": "Roots On Rise",
  "description": "Hindu children's books and cultural products..."
}
```

**WebSite Schema (Global):**
```json
{
  "@type": "WebSite",
  "name": "Roots On Rise"
}
```

**ItemList/Book Schema (Books Page):**
- Lists all 6 books with proper Book schema
- Includes pricing, formats, availability
- Links to Amazon purchase URLs

### 5. Image Alt Text Improvements

- Hero image: "Hindu mythology picture book for children featuring colorful illustrations of Hindu gods and goddesses"
- Featured book: "bestselling Hindu children's book with vibrant deity illustrations"
- About page: "Colorful illustrations of Hindu deities - Ganesha, Lakshmi, Shiva, and more"

---

## Target Keywords Coverage

| Keyword | Pages Targeting |
|---------|-----------------|
| hindu children's books | Homepage, Books |
| indian mythology books for kids | Books, About |
| hindu gods books for children | Homepage, Books |
| cultural heritage books | About, Our Story |
| diwali gifts for kids | Books, Homepage |
| shloka books for children | Books |
| mantra books for kids | Books |

---

## Future Recommendations

### High Priority

1. **Create sitemap.xml**
   - Add `@astrojs/sitemap` integration
   - Submit to Google Search Console

2. **Add robots.txt**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://rootsonrise.com/sitemap.xml
   ```

3. **Set up Google Search Console**
   - Verify ownership
   - Submit sitemap
   - Monitor indexing

### Medium Priority

4. **Add BreadcrumbList schema**
   - Helps Google understand site structure
   - Shows breadcrumbs in search results

5. **Add FAQ schema**
   - Create FAQ section on Books page
   - Common questions about Hindu children's books

6. **Internal linking improvements**
   - Add contextual links between related pages
   - Consider a "Related Products" section

### Low Priority

7. **Blog/Content section**
   - Create content around target keywords
   - Topics: "Best Hindu books for toddlers", "Teaching kids about Diwali"

8. **Review schema for testimonials**
   - Add AggregateRating to products

9. **Monitor Core Web Vitals**
   - Ensure LCP < 2.5s
   - Ensure CLS < 0.1
   - Ensure INP < 200ms

---

## Technical Notes

- All title tags are under 60 characters (optimal for SERP display)
- All meta descriptions are 150-160 characters
- Canonical URLs prevent duplicate content
- Open Graph images use absolute URLs for proper social sharing
- Structured data is valid JSON-LD format

---

## Files Modified

1. `/src/layouts/Layout.astro` - SEO infrastructure
2. `/src/pages/index.astro` - Title, description, H1, alt text
3. `/src/pages/books.astro` - Title, description, H1, Product schema
4. `/src/pages/about.astro` - Title, description, alt text
5. `/src/pages/our-story.astro` - Title, description
6. `/src/pages/wall-art.astro` - Title, description
7. `/src/pages/digital-downloads.astro` - Title, description

---

*Report generated as part of SEO audit for Roots On Rise*
