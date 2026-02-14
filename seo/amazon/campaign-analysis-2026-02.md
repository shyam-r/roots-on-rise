# Amazon Ads Campaign Analysis — February 2026

## Overview

Analysis of Sponsored Products campaigns for:
- **The Marvelous Hindu Deities** (Board Book) — ASIN: 8195870724
- **My Little Shloka and Mantra Book** (Paperback) — ASIN: B0GK15FLFJ

---

## Campaign Architecture (Updated Feb 14, 2026)

| Campaign | ID | State | Budget | Strategy |
|----------|----|-------|--------|----------|
| TMHD Legacy | `488619109239365` | **ENABLED** | $10/day | 618 keywords (21 bleeders paused), wide discovery net |
| MLSAMB Shloka - Manual | `60439308988811` | **ENABLED** | $5/day | 33 keywords ($0.15-$0.35 bids) |
| Shloka Auto | `98223164798717` | **ENABLED** | $3/day | Auto-targeting discovery funnel |
| TMHD Board Book - Manual | `277349431885953` | PAUSED | $15/day | 40 curated keywords — underperforming, paused Feb 14 |
| TMHD Auto | `226160974877410` | PAUSED | $10/day | — |

**Total active daily budget**: $18/day ($10 TMHD Legacy + $5 Shloka Manual + $3 Shloka Auto)

---

## Feb 12 Optimization — Changes Made

### Phase 1: Campaign-Level Switches

| Action | Campaign | Before | After | Reason |
|--------|----------|--------|-------|--------|
| PAUSE | TMHD Legacy (`488619109239365`) | ENABLED $15/day | PAUSED | 618 unfocused keywords at $0.10, 37.2% ACOS |
| ENABLE | TMHD Optimized (`277349431885953`) | PAUSED | ENABLED $15/day | 40 curated keywords with proper bids |
| REDUCE | Shloka Manual (`60439308988811`) | ENABLED $12/day | ENABLED $5/day | 4.75% max ACOS makes $12/day too risky |

### Phase 2: Keyword Cleanup (21 keywords paused in Legacy)

| Keyword | Match Types Paused | Reason |
|---------|-------------------|--------|
| hindu | Broad, Exact, Phrase | Too generic — matches adult religious content |
| hinduism | Broad | Too generic |
| kids books | Exact, Phrase | 85.8% ACOS historically (Broad already paused) |
| hindu book | Phrase, Exact | 123.6% ACOS bleeder |
| board book | Exact, Phrase | Too generic — massive competition |
| baby board books | Broad, Phrase | Too generic |
| baby books 12-18 months | Exact, Phrase | Too generic |
| hindu gods coloring book | Broad, Phrase | Product mismatch (not a coloring book) |
| ramayana | Broad, Phrase | Off-topic for a deities board book |
| kids books 1-3 | Exact, Phrase | Too generic |
| tales from india | Exact | Off-topic |

---

## Performance Snapshot (Jan 29 – Feb 11, 14 days)

### Overall
| Metric | Value |
|--------|-------|
| Total Spend | $5.57 |
| Total Sales | $14.99 |
| Total Purchases | 1 |
| Overall ACOS | 37.2% (max target: 19.4%) |
| Budget Utilization | ~$0.40/day out of $27/day = 1.5% |

### Keywords With Spend (Legacy Campaign)

| Keyword | Match | Impressions | Clicks | Spend | Purchases | Sales | ACOS |
|---------|-------|-------------|--------|-------|-----------|-------|------|
| hindu books | Broad | 46 | 4 | $1.26 | 0 | $0.00 | --- |
| hindu mythology kids | Broad | 40 | 3 | $1.19 | 0 | $0.00 | --- |
| hindu god | Broad | 47 | 1 | $0.40 | 0 | $0.00 | --- |
| hinduism books | Broad | 19 | 1 | $0.40 | 0 | $0.00 | --- |
| hanuman chalisa | Broad | 14 | 1 | $0.35 | 0 | $0.00 | --- |
| krishna book | Broad | 33 | 1 | $0.35 | 0 | $0.00 | --- |
| hanuman books kids | Broad | 6 | 1 | $0.35 | 0 | $0.00 | --- |
| **krishna** | **Broad** | **11** | **1** | **$0.35** | **1** | **$14.99** | **2.3%** |
| ramayana kids | Broad | 10 | 1 | $0.26 | 0 | $0.00 | --- |
| indian god | Broad | 12 | 1 | $0.25 | 0 | $0.00 | --- |
| hindu baby gifts | Broad | 6 | 1 | $0.18 | 0 | $0.00 | --- |
| shlokas for kids | Phrase | 4 | 1 | $0.16 | 0 | $0.00 | --- |
| hinduism for kids | Broad | 16 | 1 | $0.07 | 0 | $0.00 | --- |

**Key Insight**: $0.10 bids were too low to win meaningful auctions — only 1.5% budget utilization. The optimized campaign has $0.15-$0.50 bids which should win competitive placements.

---

## Feb 14 Course Correction

### What happened with the Feb 12 changes

The TMHD Manual campaign (40 curated keywords, $0.15-$0.50 bids) was enabled Feb 12 to replace the Legacy campaign. After 2.5 days:

| Campaign | Impressions | Clicks | Spend | Sales | CTR |
|----------|-------------|--------|-------|-------|-----|
| TMHD Manual (new) | 219 | 0 | $0.00 | $0 | 0% |
| Shloka Manual | 60 | 1 | $0.35 | $0 | 1.7% |
| Shloka Auto | 1,869 | 8 | $1.11 | $0 | 0.43% |
| TMHD Legacy (paused) | 9 | 0 | $0.00 | $0 | — |

**Problem**: TMHD Manual got 219 impressions with zero clicks — ads were showing but nobody found them compelling enough to click. Meanwhile the Legacy campaign had been generating real clicks and a conversion before being paused.

### Changes Made (Feb 14)

| Action | Campaign | Before | After | Reason |
|--------|----------|--------|-------|--------|
| RE-ENABLE | TMHD Legacy (`488619109239365`) | PAUSED | ENABLED $10/day | Was generating clicks and conversions; wide keyword net catches long-tail terms |
| PAUSE | TMHD Manual (`277349431885953`) | ENABLED $15/day | PAUSED | Zero clicks in 2.5 days despite 219 impressions |
| ADD ASIN TARGETS | TMHD Legacy + Shloka Manual | — | 3 new competitor ASINs each | Discovered via Shloka Auto search terms |
| NEG. ASIN TARGET | All 3 active campaigns (all ad groups) | — | Block `B0BR2FXM28` | *I'm Not Black, I'm Indian* — Native American book, wrong audience |

### New Competitor ASINs Added (Feb 14)

Created "ASIN Targeting" ad groups in both TMHD Legacy and Shloka Manual (required — can't mix keyword + ASIN targets in same ad group).

| ASIN | Product | TMHD Bid | Shloka Bid |
|------|---------|----------|------------|
| `B0G1JYB73H` | *From Samosa to Saree* — Board Book, ages 0-3 | $0.30 | $0.25 |
| `9354405274` | *Sai Baba Board Book* — Wonder House Books, ages 2+ | $0.30 | $0.25 |
| `1800980027` | *The Story of Diwali: Rama & Sita* — ages 3-9 | $0.30 | $0.25 |

Ad Group IDs:
- TMHD Legacy ASIN Targeting: `509689756858664`
- Shloka Manual ASIN Targeting: `410162420950815`

### Lesson Learned

The Legacy campaign's 618 broad keywords acted as a **discovery net** — most keywords caught nothing, but occasional long-tail terms like "malibhagavatam: divine story of krishna for children" converted at 2.3% ACOS. A curated 40-keyword campaign was too narrow to catch these serendipitous searches. With the 21 known bleeders still paused, the Legacy at $10/day is a better balance between discovery and waste control.

---

## Search Term Report (Feb 1-14)

### Shloka Auto — 19 search terms

**Keyword matches (4):**

| Search Term | Clicks | Cost | Notes |
|-------------|--------|------|-------|
| hinduism for kids | 1 | $0.25 | Already in Shloka Manual |
| shlokas and mantras for kids | 1 | $0.06 | Already in Shloka Manual |
| shlokas for kids | 1 | $0.18 | Relevant niche term |
| sholakas and mantra for kids | 1 | $0.19 | Misspelling variant |

**ASIN/product targeting (15 clicks):**

Shoppers browsing competitor products clicked the Shloka ad. Notable ASINs:

| ASIN | Clicks | Cost | Notes |
|------|--------|------|-------|
| `9354405169` | 1 | $0.25 | Listed competitor — targeting working |
| `9358566132` | 1 | $0.09 | Listed competitor — targeting working |
| `b0cn4nxvvn` | 1 | $0.25 | **Own TMHD Paperback** — organic cross-sell |
| `9363243370` | 1 | $0.12 | New competitor to evaluate |
| `b0g1jyb73h` | 1 | $0.08 | New competitor to evaluate |
| `b0gjs78chy` | 1 | $0.09 | New competitor to evaluate |
| Other ASINs (9) | 9 | $1.99 | Various competitor pages |

### Legacy TMHD + Other — 16 search terms

Top click-getters:

| Search Term | Campaign | Clicks | Cost | Sales |
|-------------|----------|--------|------|-------|
| hindu mythology books for kids | Legacy TMHD | 3 | $1.19 | $0 |
| hindu deities book | Legacy TMHD | 2 | $0.56 | $0 |
| **malibhagavatam: divine story of krishna for children** | **Legacy TMHD** | **1** | **$0.35** | **$14.99** |
| hanuman books for kids | Legacy TMHD | 1 | $0.35 | $0 |
| hindu gods and goddesses | Legacy TMHD | 1 | $0.40 | $0 |
| little krishna board book | Legacy TMHD | 1 | $0.35 | $0 |
| gujarati books for kids hindu culture | Legacy TMHD | 1 | $0.35 | $0 |
| hinduism books for toddlers | Legacy TMHD | 1 | $0.40 | $0 |
| hinduism for kids | Shloka Manual | 1 | $0.07 | $0 |
| children's book hinduism | Shloka Manual | 1 | $0.35 | $0 |

---

## Historical Star Keywords (< 15% ACOS)

| Keyword | ACOS | Purchases |
|---------|------|-----------|
| hindu mythology kids | 1.0% | 1 |
| krishna | 2.3% | 1 |
| board books indian | 2.9% | 1 |
| ganesha book (Broad) | 3.4% | 2 |
| hindu baby gifts | 5.9% | 1 |
| hinduism books kids (Exact) | 7.0% | 2 |
| ganesha books for kids | 7.7% | 1 |
| hinduism books | 9.1% | 4 |
| ganesha book (Exact) | 9.2% | 1 |
| hindu children books | 10.7% | 1 |
| hindu kids | 12.2% | 1 |
| hindu god | 12.6% | 9 |
| diwali books kids (Broad) | 8.9% | 1 |
| diwali books kids (Phrase) | 13.6% | 1 |
| hindu gods | 14.3% | 2 |
| hinduism for kids | 14.2% | 2 |

---

## Profitability Analysis

### TMHD Board Book
- **Gross Profit**: $7.20 per book
- **Target Net Profit**: 20% of sale price = $3.00
- **Max Ad Spend**: $2.91 per book
- **Max ACOS**: 19.4%

### MLSAMB Shloka Book
- **Gross Profit**: $4.00 per book
- **Max Ad Spend**: $0.57 per book
- **Max ACOS**: 4.75%
- **Verdict**: Experimental/data-gathering only at $5/day

---

## Next Review Actions

- [x] ~~Check TMHD Optimized campaign performance after 7 days~~ — Checked Feb 14: zero clicks, paused
- [x] ~~Consider enabling Shloka Auto for search term discovery~~ — Already enabled, generating data
- [ ] Review TMHD Legacy performance after 7 days at $10/day (Feb 21)
- [ ] Verify Shloka Manual spend stays within 4.75% ACOS target
- [ ] Monitor "krishna" keyword — strong converter at 2.3% ACOS
- [ ] Evaluate new competitor ASINs from Shloka Auto search terms (`9363243370`, `b0g1jyb73h`, `b0gjs78chy`) — add to manual targeting if relevant
- [ ] Run next search term harvest from Shloka Auto (Feb 21) — promote high-intent keyword searches to Shloka Manual
- [ ] Consider adding "hindu mythology books for kids" and "hindu deities book" as Exact match to Legacy (high click volume)

---

*Analysis Date: 2026-02-12*
*Updated: 2026-02-14 — Legacy re-enabled, TMHD Manual paused, search term report added*
*Changes Applied: 2026-02-12, 2026-02-14 via Amazon Ads API*
