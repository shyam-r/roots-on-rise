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

## Tech Debt Prevention Rules (MANDATORY)

**Zero tolerance for tech debt. Clean code is not optional.**

### Code Quality Standards

| Principle | Requirement |
|-----------|-------------|
| **DRY** | Extract repeated code (>2 occurrences) into components |
| **KISS** | Simplest solution that works; no over-engineering |
| **Single Responsibility** | One component = one purpose |
| **Type Safety** | All props typed; no `any` types |
| **Semantic HTML** | Appropriate tags (`<article>`, `<section>`, `<nav>`, `<main>`) |
| **Accessibility** | WCAG AA compliance; all images need `alt` |

### Anti-Patterns to Avoid

```
❌ NEVER:
• Duplicate data across files
• Use `!important` in CSS
• Ignore TypeScript errors
• Commit console.logs or debugger statements
• Hardcode URLs, prices, or API keys
• Use inline styles when Tailwind suffices
• Create "utils" files that become dumping grounds
• Leave TODO comments without issue links
• Mix concerns (data fetching in display components)
• Use magic numbers without constants
```

### Continuous Cleanup (MANDATORY)

**Every session must leave the codebase cleaner than found:**

1. **Before starting work:**
   - Run `npm run build` to verify clean baseline
   - Check for TypeScript errors
   - Review any existing TODO comments

2. **During work:**
   - Refactor adjacent code if it violates standards
   - Update types when modifying interfaces
   - Remove dead code immediately

3. **Before committing:**
   - Run `npm run build` (must pass)
   - No new TypeScript errors introduced
   - No new console.logs or debugger statements

### Documentation Currency

**Keep these files up to date:**

| File | Update When |
|------|-------------|
| `IMPLEMENTATION_PLAN.md` | Task completed, status changed, new task added |
| `CLAUDE.md` | New patterns, conventions, or requirements emerge |
| `.serena/memories/` | Complex context that future sessions need |
| Component JSDoc | API changes or new props added |

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

### Feature Branch Workflow (MANDATORY)

**All changes MUST go through feature branches. Never commit directly to master.**

```
┌─────────────────────────────────────────────────────────────────┐
│  FEATURE BRANCH REQUIREMENT                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. Create feature branch:  git checkout -b feature/your-name  │
│  2. Make changes and commit to feature branch                  │
│  3. Push feature branch:    git push -u origin feature/...     │
│  4. Merge to master:        git checkout master && git merge   │
│  5. Push to production:     git push origin master             │
│                                                                 │
│  Branch naming: feature/, fix/, refactor/, docs/               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Why feature branches:**
- Allows code review before production
- Easy rollback if issues found
- GitHub Actions only deploys on master merge
- Clean git history with meaningful merge commits

### Parallel Development (Worktrees)

**MANDATORY**: All parallel agents that write code MUST use git worktrees.

```
┌─────────────────────────────────────────────────────────────────┐
│  WORKTREE REQUIREMENT                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Before spawning parallel write agents:                         │
│  1. Invoke `using-git-worktrees` skill                         │
│  2. Each agent gets its own worktree + branch                  │
│  3. After completion, invoke `finishing-a-development-branch`  │
│                                                                 │
│  This is NOT optional. Parallel writes without worktrees       │
│  cause merge conflicts and lost work.                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Commit Style
```
<type>: <short description>

Types: feat, fix, style, refactor, docs, chore
```

---

## Session Continuity Protocol

**Problem**: Sessions stop mid-work, leaving uncommitted changes and no context for the next session.

**Solution**: Follow this protocol to ensure work persists across sessions.

### During Work

1. **Commit early, commit often** - Don't batch large changes
   - One logical change = one commit
   - If you've made progress, commit it

2. **Write Serena memories** for non-trivial context
   ```
   mcp__plugin_serena_serena__write_memory({
     memory_file_name: "current-work-state.md",
     content: "## Current State\n- Working on X\n- Next step: Y"
   })
   ```

3. **Update IMPLEMENTATION_PLAN.md** when tasks complete
   - Mark checkboxes as done
   - Update status in requirements table

### End of Session Checklist

Before ending ANY session, complete this checklist:

```
□ All working code committed (even if incomplete, commit to a WIP branch)
□ Push commits to origin
□ Update IMPLEMENTATION_PLAN.md with current status
□ Write Serena memory if context is complex
□ Note any blockers or next steps in commit message
```

### Session Handoff Format

When work is incomplete, end your response with:

```markdown
## Session Handoff

**Completed this session:**
- [x] Task 1
- [x] Task 2

**In progress (uncommitted):**
- [ ] Task 3 (file: path/to/file.tsx, status: 80% done)

**Next session should:**
1. Complete Task 3
2. Start Task 4

**Blockers:**
- None / [describe blocker]
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

### Collision Avoidance (MANDATORY)

**All parallel agents that write files MUST use worktrees:**

1. **Invoke `using-git-worktrees` skill** before spawning parallel write agents
2. **Each agent gets isolated worktree** - no shared state conflicts
3. **Invoke `finishing-a-development-branch` skill** after agents complete
4. **Merge conflicts resolved during integration**, not during active work

**Only skip worktrees for:**
- Read-only research tasks (grep, glob, exploration)
- Single-agent work (no parallelism)

**Sequential Fallback**: If worktrees aren't feasible, run agents sequentially

---

## Requirements Tracking

All features use requirement codes from `/docs/REQUIREMENTS.md`:

| Code | Feature | Status |
|------|---------|--------|
| FR-01 | Announcement Bar | ✅ Done |
| FR-02 | Hero Section | ✅ Done |
| FR-03 | Hero Carousel | ✅ Done |
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

## Context Management (Prevent Session Exhaustion)

Sessions have been stopping mid-work due to context exhaustion. Follow these rules:

### DO
- **Use Serena symbol tools** (`find_symbol`, `get_symbols_overview`) instead of reading whole files
- **Read specific line ranges** when you only need part of a file
- **Write Serena memories** for context that needs to persist (don't re-read docs every session)
- **Use targeted grep/glob** instead of exploratory whole-file reads

### DON'T
- **Don't read Playwright screenshots repeatedly** - they're 1-3MB each and consume massive context
- **Don't read planning docs multiple times** - read once, extract what you need, move on
- **Don't spawn many parallel agents** without considering their combined output size
- **Don't read both IMPLEMENTATION_PLAN.md files** - use the root one only (docs/ version is stale)

### Planning Document Hierarchy
```
CLAUDE.md          → Project rules (read at session start)
IMPLEMENTATION_PLAN.md → Current task state (read when needed)
docs/REQUIREMENTS.md   → Feature specs (reference only)
docs/IMPLEMENTATION_PLAN.md → DEPRECATED, ignore
```

### Context Budget Awareness
- Treat context like a budget
- Each file read, each agent response, each screenshot = cost
- Prefer surgical, targeted operations over broad exploration

---

*Last Updated: 2026-01-23*
