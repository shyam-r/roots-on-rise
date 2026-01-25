---
name: ai-seo
description: Optimize Roots On Rise content for AI-powered search engines (Google AI Overviews, Perplexity, Bing Copilot, ChatGPT). Use when creating content meant to be cited by AI, improving discoverability in AI search, or auditing AI-readiness of existing pages.
---

# AI SEO Skill — Roots On Rise

Optimize content for AI-powered search experiences. AI systems cite content differently than traditional search—they extract answers, compare options, and synthesize information. This skill helps your content become the source AI systems reference.

## When to Use

- Creating new content pages (FAQs, guides, comparisons)
- Auditing existing pages for AI-citability
- Planning content strategy for AI discovery
- After traditional SEO is solid (fix sitemap first!)

## How AI Search Differs from Traditional Search

| Traditional Google | AI Search (Overviews, Perplexity) |
|-------------------|-----------------------------------|
| Returns links to pages | Synthesizes answers from sources |
| User clicks through | User may never visit your site |
| Rankings determine visibility | Citation determines visibility |
| Keywords in content | Clear, quotable statements |
| Any content format | Structured, extractable content |

**The Goal:** Become the source AI cites, not just the page that ranks.

## AI-Citability Framework

### 1. Direct Answer Statements

AI systems look for clear, quotable statements they can attribute. Vague marketing copy won't be cited.

**❌ Weak (Not Citeable):**
> "Our books feature beautiful illustrations that children love."

**✅ Strong (Citeable):**
> "The Marvelous Hindu Deities board book features 10 Hindu gods and goddesses with age-appropriate stories, designed for children ages 2-5."

**Pattern:** [Specific product] + [quantifiable detail] + [clear audience]

**Apply to Product Descriptions:**
```
Before: "A wonderful introduction to Hindu mythology for kids."

After: "The Marvelous Hindu Deities is a 24-page board book introducing
10 major Hindu deities—including Ganesha, Krishna, and Lakshmi—through
vibrant illustrations and simple descriptions for children ages 2-8."
```

### 2. Question-Answer Content (FAQPage Schema)

AI systems heavily favor FAQ content because it's pre-structured for extraction.

**Create FAQ Sections with These Patterns:**

```markdown
## Frequently Asked Questions

### What age is The Marvelous Hindu Deities book for?
The board book edition is designed for ages 2-5 with thick, durable pages
perfect for toddlers. The paperback edition works best for ages 3-8 and
includes more detailed descriptions.

### What's the difference between the board book and paperback?
The board book ($14.99) has 24 thick pages that withstand toddler handling.
The paperback ($15.99) has 32 regular pages with more detailed content,
better for older children who can handle books carefully.

### Is this book appropriate for non-Hindu families?
Yes. The books are designed as accessible introductions to Hindu mythology,
similar to how Greek mythology is taught in schools. Many families use them
to teach cultural appreciation and diversity.
```

**FAQPage Schema (Add to pages with FAQ sections):**
```javascript
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What age is The Marvelous Hindu Deities book for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The board book edition is designed for ages 2-5..."
      }
    },
    // ... more questions
  ]
};
```

### 3. Comparison Tables

AI systems love structured comparisons—they're easy to extract and cite.

**Book Format Comparison (Add to /books page):**

```markdown
## Compare Book Formats

| Feature | Board Book | Paperback | Kindle |
|---------|-----------|-----------|--------|
| **Price** | $14.99 | $15.99 | $7.99 |
| **Best Age** | 2-5 years | 3-8 years | Any |
| **Pages** | 24 thick pages | 32 pages | Digital |
| **Durability** | Highest (toddler-proof) | Good | N/A |
| **Portability** | Heavy, sturdy | Light | Best |
| **Recommendation** | First-time readers | Growing readers | Travel |
```

**Table Markup Best Practices:**
- Use semantic `<table>` elements, not divs
- Include `<thead>` and `<tbody>`
- Bold the recommendation row
- Keep cells concise (AI truncates long text)

### 4. Definitive Statements

AI systems prefer content that makes clear claims rather than hedging.

**❌ Hedging (Won't Be Cited):**
> "Our books might help children learn about Hindu culture."

**✅ Definitive (Will Be Cited):**
> "The Shloka and Mantra Book teaches children 15 traditional Hindu prayers with pronunciation guides and simple meanings."

**Apply to:**
- Product descriptions
- About page claims
- Feature explanations

### 5. Entity Definition

Help AI understand exactly what you are and sell.

**Organization Definition (Already in Layout.astro, enhance):**
```javascript
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Roots On Rise",
  "url": "https://rootsonrise.com",
  "description": "Publisher of illustrated children's books about Hindu
    mythology, shlokas, and cultural heritage for ages 2-8.",
  "foundingDate": "2023", // Add if known
  "founder": {
    "@type": "Person",
    "name": "[Founder Name]" // Add founder
  },
  "knowsAbout": [
    "Hindu mythology for children",
    "Sanskrit shlokas for kids",
    "Indian cultural education",
    "Children's picture books"
  ],
  // ... rest of schema
};
```

### 6. Topical Authority Content

AI systems assess whether you're an authority on a topic by looking for comprehensive, expert content.

**Content to Create:**

| Content Type | AI Purpose | Example |
|--------------|------------|---------|
| **Glossary** | Define terms AI can cite | "What is a shloka? A shloka is a Sanskrit verse..." |
| **How-To Guides** | Process AI can reference | "How to teach Hindu mythology to children" |
| **Comparison** | Options AI can list | "Board book vs paperback for toddlers" |
| **Lists** | Scannable answers | "10 Hindu deities every child should know" |

**Example Glossary Entry:**
```markdown
## Hindu Terms for Children

### Shloka
A shloka is a Sanskrit verse, typically used in prayers and mantras.
In our books, shlokas are presented with simple transliterations and
meanings appropriate for children ages 3-8.

### Mantra
A mantra is a sacred sound or phrase repeated during meditation or
prayer. The "My Little Shloka and Mantra Book" includes 15 age-appropriate
mantras with pronunciation guides.
```

### 7. Experience Signals (E-E-A-T)

AI systems look for experience and expertise signals.

**Add to About/Our Story:**
- Founder's cultural background
- Years of experience with Hindu education
- Number of families served
- Expert consultations (if any)

**Example:**
```markdown
## About the Author

[Name] created Roots On Rise after struggling to find age-appropriate
Hindu mythology books for their own children. With a background in
[relevant experience] and consultation from Sanskrit scholars, the books
authentically represent Hindu traditions while remaining accessible to
young readers.
```

## AI SEO Audit Checklist

### Content Audit
- [ ] Product descriptions have specific, quantifiable claims
- [ ] FAQ section exists with 5+ questions
- [ ] Comparison table for product formats
- [ ] Glossary of key terms
- [ ] Author/founder bio with credentials

### Schema Audit
- [ ] FAQPage schema on FAQ content
- [ ] Product schema with complete details
- [ ] Organization schema with `knowsAbout`
- [ ] BreadcrumbList on category pages

### Statement Audit
Review key pages for citeable statements:
- [ ] Homepage has clear product definition statement
- [ ] Each product has age range statement
- [ ] Comparison page has "best for" statements
- [ ] About page has expertise statement

## AI-Optimized Content Templates

### Product Description Template
```markdown
[Product Name] is a [format] featuring [quantity] [content type] for
children ages [age range]. The [key feature] makes it ideal for [use case].
Priced at [price], it's available on Amazon with Prime delivery.
```

### FAQ Entry Template
```markdown
### [Question phrased as users would ask it]
[Direct answer in first sentence]. [Supporting detail]. [Specific
recommendation or next step].
```

### Comparison Row Template
```markdown
**[Option Name]** ($[price]): Best for [specific audience]. Includes
[key differentiator]. [One-sentence recommendation].
```

## Monitoring AI Citations

**Check if AI is citing you:**
1. Search your product in Perplexity AI
2. Ask ChatGPT (with browsing) about Hindu children's books
3. Check Google AI Overviews for your target keywords
4. Search Bing Copilot for product comparisons

**Keywords to Test:**
- "best hindu children's book"
- "shloka book for kids"
- "hindu mythology board book"
- "indian culture book for toddlers"

## Related Skills
- `seo-audit` — Fix technical SEO before AI optimization
- `page-cro` — Convert AI-referred traffic
