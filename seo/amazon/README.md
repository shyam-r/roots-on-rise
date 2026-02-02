# Amazon Advertising Assets

This folder contains keyword files and campaign data for Amazon KDP Ads.

**Not deployed** — this folder is excluded from the Astro build.

---

## Products

| Product | ASIN | Gross Profit | Break-Even ACOS | Max ACOS (20% Net) |
|---------|------|--------------|-----------------|---------------------|
| TMHD Board Book | 8195870724 | $7.20 | 48% | **19.4%** |
| MLSAMB Shloka | B0GK15FLFJ | $4.00 | 33% | 4.75% (not viable) |

---

## Files

### TMHD-Profitable-Keywords.csv
- 16 exact match keywords with historical ACOS < 15%
- Target ACOS: 10-15%
- Expected net margin: 20-25%

### Negative-Keywords.csv
- 11 negative keywords to block wasted spend
- Apply to all campaigns (manual + auto)

### campaign-analysis-2026-02.md
- Full analysis of Feb 2026 campaign data
- Historical performance by keyword
- Optimization recommendations

---

## Campaign Settings

### TMHD Board Book - Manual
- **Budget**: $10/day
- **Targeting**: Manual (Exact match only)
- **Bidding**: Dynamic bids - down only
- **Placement**: Limit off-Amazon spend

### MLSAMB Shloka
- **Recommendation**: Do not advertise
- Margin too thin for 20% net profit requirement

---

## Profitability Formula

```
Max Ad Spend = Gross Profit - (Target Net Profit ÷ (1 - Tax Rate))

TMHD Example:
- Gross Profit: $7.20
- Target Net (20% of $15): $3.00
- Pre-tax needed: $3.00 ÷ 0.70 = $4.29
- Max Ad Spend: $7.20 - $4.29 = $2.91
- Max ACOS: $2.91 ÷ $15 = 19.4%
```

---

## Historical Star Keywords (< 15% ACOS)

| Keyword | ACOS | Purchases |
|---------|------|-----------|
| hindu mythology kids | 1.0% | 1 |
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
| hinduism for kids | 14.2% | 2 (marginal) |

---

## Keywords to Avoid (> 25% ACOS)

| Keyword | ACOS | Reason |
|---------|------|--------|
| kids books | 85.8% | Too generic |
| hindu book | 123.6% | Too broad |
| goddess book | 90.0% | Low intent |
| god goddess book | 52.5% | Underperforming |
| indian mythology books kids | 58.7% | High CPC |
| mythology kids | 55.7% | Generic |

---

*Last updated: 2026-02-01*
