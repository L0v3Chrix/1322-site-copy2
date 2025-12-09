# 1322 Legacy Strategies: Principled Authority Rebrand

**Date:** November 19, 2025
**Project:** 2025-11-1322-website-repositioning
**Branch:** 001-initial-setup
**Status:** Typography System Complete, Homepage Rebuild Complete

---

## Context

This project represents a **complete rebrand and redesign** of the 1322 Legacy Strategies website—not just content repositioning. The shift includes:

1. **Demographic Pivot**: From retirement demographic (60-75) to Christian entrepreneurs (30-50, $500K-$5M revenue)
2. **Visual Identity**: From flowing, reverent legacy aesthetic to "Principled Authority" classical foundation
3. **Messaging Shift**: From holistic retirement planning to IBC (Infinite Banking Concept) education
4. **Philosophy Change**: From "Enduring Framework vs Shifting Sands" positioning

### Brand Book Specifications

**"Principled Authority" Visual System:**
- **Color Palette**:
  - Deep Navy (#1A3A52) - Already matches `--navy: 44 62 80`
  - Warm Cream (#F5F0E6) - Already matches `--cream: 245 240 230`
  - Heritage Gold (#3DDDD1) - For Academy branding
- **Typography**:
  - Headlines: Tiempos Headline (premium) → **Libre Baskerville** (Google Fonts alternative)
  - Body: "The Principled Authority Framework" → **Lora** (Google Fonts)
  - Data/Numbers: **IBM Plex Mono** (exact match from brand book)
- **Design Metaphor**: Classical architecture, old books, foundational building blocks
- **Three Pillars Framework**: Stewardship, Sovereignty, System (replaces 4-step journey)

---

## Changes Implemented

### 1. Typography System Update (COMPLETED)

**Files Modified:**
- `/app/layout.tsx`
- `/tailwind.config.ts`
- `/app/globals.css`

**Font Changes:**
```typescript
// OLD FONTS (Removed):
- Playfair Display (--font-playfair)
- Lato (--font-lato)

// NEW FONTS (Implemented):
- Libre Baskerville (--font-heading) - 400, 700 weights
- Lora (--font-body) - 400, 500, 600, 700 weights
- IBM Plex Mono (--font-mono) - 400, 500, 600 weights
```

**Tailwind Configuration:**
```typescript
fontFamily: {
  sans: ["var(--font-body)"],
  heading: ["var(--font-heading)"],
  body: ["var(--font-body)"],
  mono: ["var(--font-mono)"],
  // Legacy support (can be removed after full migration)
  playfair: ["var(--font-heading)"],
  lato: ["var(--font-body)"],
}
```

**CSS Base Styles:**
```css
body {
  @apply bg-cream text-navy font-body leading-relaxed text-[17px];
}

h1, h2, h3, h4, h5, h6 {
  @apply font-heading font-normal leading-tight tracking-tight;
}
```

---

### 2. /app/y1322/page.tsx - Entrepreneur Repositioning (COMPLETED)

**Metadata Updated:**
- Title: "Y1322 | 1322 Legacy Strategies"
- Description: Changed from "analytical retirees" to "Christian entrepreneurs trust us to build family banking systems through IBC"

**Key Content Changes:**
- **Subtitle**: "Holistic tax-savvy estate & retirement design for the 60–75 bracket" → "Build Your Family Bank. Fund Your Business. Secure Your Legacy."
- **Demographics**: "Pre-retirees & retirees age 60-75" → "Christian entrepreneurs ages 30–50 | $500K-$5M annual revenue"
- **Flagship Outcome**: Retirement planning → "Build family banking systems that fund business growth, eliminate bank dependence, and create multi-generational wealth"

**Impact Metrics Table Rewritten:**
| Area | Typical Result |
|------|----------------|
| Interest Recapture | $20K-$50K+ annual interest payments redirected from banks to your own family banking system |
| Capital Accessibility | Policy loans fund equipment, vehicles, real estate without bank approval—capital works twice (policy growth + deployed use) |
| Business Expansion Freedom | Self-financed growth without diluting ownership or surrendering equity to outside investors |

**Case Studies Replaced:**
1. **Mike's Plumbing Company** (Tennessee, $1.8M revenue)
   - Problem: $35K/year interest on trucks & equipment
   - Solution: IBC policy with $2,500/month premiums
   - Result: 3 years → $90K cash value, $0 to banks, funded college debt-free

2. **HVAC Fleet Transformation** (Arizona, $3.2M revenue)
   - Problem: $12K+ annually draining for 8 service vans
   - Solution: Financed fleet through IBC policy loans
   - Result: Saved $12K+ annually, now funding real estate

3. **Coffee Roaster's Equipment Strategy** (Colorado, $850K revenue)
   - Problem: Needed $120K equipment, SBA wanted 9.5% interest
   - Solution: Policy loan at 6%
   - Result: Paid herself back—interest stayed in HER policy

**CTA Updated:**
- Dual-button approach: "Join FREE Academy" (Skool) + "Book Strategy Call"
- Academy link: https://www.skool.com/1322-ibc-academy
- Discovery call: https://discovery.1322legacystrategies.com/

---

### 3. /app/page.tsx - Complete Homepage Rebuild (COMPLETED)

**New Structure:**

#### Hero Section
- **Title**: "Build on an Enduring Framework. Not Shifting Sands."
- **Subtitle**: "Master a timeless financial framework designed for your family's lasting legacy. Start for FREE."
- **Background Image**: `/images/classical-foundation.png` (placeholder for custom graphic)

#### Three Pillars Section
Replaced 4-step journey with three foundational pillars:

**1. Stewardship** (Icon: ScrollText)
- Subtitle: "Your Capital. Your Control."
- Key Points:
  - Eliminate dependence on banks for business financing
  - Control when, where, and how your capital is deployed
  - Build a system that works for you across generations
- Image: `/images/pillar-stewardship.png` (placeholder)

**2. Sovereignty** (Icon: Calculator)
- Subtitle: "Financial Independence by Design."
- Key Points:
  - Access capital without bank approval or credit checks
  - Fund equipment, real estate, and expansion debt-free
  - Keep interest payments flowing back to YOUR system
- Image: `/images/pillar-sovereignty.png` (placeholder)

**3. System** (Icon: BookOpen)
- Subtitle: "A Permanent Financial Foundation."
- Key Points:
  - Whole life policies designed for maximum cash value growth
  - Tax-advantaged wealth transfer to children and grandchildren
  - Predictable, guaranteed foundation for family legacy
- Image: `/images/pillar-system.png` (placeholder)

#### Cost of Not Knowing - Comparison Section
Side-by-side comparison on dark navy background:

**Shifting Sands (Traditional Finance):**
- Red X icons
- Problems: Bleed interest, beg for approval, Wall Street volatility, double taxation, market speculation
- Outcome: "Wealth dissipates by the 3rd generation"

**Enduring Framework (IBC):**
- Gold checkmarks
- Solutions: Recapture interest, instant access, control deployment, tax advantages, contractual guarantees
- Outcome: "Multi-generational wealth system"

#### Entrepreneur Success Stories
3-column grid with detailed case studies:
- Mike's Plumbing Company (Tennessee)
- HVAC Fleet Operation (Arizona)
- Coffee Roasting Company (Colorado)

Each story includes:
- Business/Location/Revenue
- The Problem (interest bleeding)
- The Solution (IBC implementation)
- The Result (capital recapture + family wealth)
- Placeholder images: `/images/story-[plumbing/hvac/coffee].png`

#### Why Choose 1322 - Statistics Section
4-column grid with monospace numbers (IBM Plex Mono):

| Number | Label | Description |
|--------|-------|-------------|
| 10+ | Years IBC Implementation | Authorized Infinite Banking Practitioner |
| 1,000+ | Entrepreneurs Educated | Through FREE 1322 IBC Academy |
| $0 | Cost for Strategy Consultation | Complementary discovery calls |
| 13:22 | Biblical Foundation | Proverbs 13:22 reference |

Includes biblical verse quotation:
> "A good man leaves an inheritance to his children's children." — Proverbs 13:22

#### Founder Message Section
2-column layout with Brad Raschke photo + story:
- **Grandfather's Legacy**: Funded 9 grandchildren's college through life insurance
- **Core Philosophy**: "Contractual certainty beats institutional dependence"
- **Mission**: Stop entrepreneurs from bleeding $20K-$50K annually to banks
- **Academy Mention**: FREE Skool community for IBC education
- **Credentials**: Founder & IBC Strategist, Authorized Infinite Banking Practitioner
- **Image**: `/images/brad-raschke-founder.png` (placeholder)

#### Final CTA Section
Gold background with dual-button approach:
- **Headline**: "Start with FREE Education. No Sales Pitch."
- **Description**: Join 1,000+ entrepreneurs in FREE Academy
- **Primary CTA**: "Join FREE Academy" → https://www.skool.com/1322-ibc-academy
- **Secondary CTA**: "Book Strategy Call" → https://discovery.1322legacystrategies.com/
- **Reassurance**: "No pressure. No obligation. Just an honest conversation."

**Removed Sections:**
- Old 4-step journey (Discovery, Strategy Design, Stewardship Walk, Legacy Handoff)
- Old retirement-focused story cards (Johnson Family, Martinez Legacy, etc.)
- Old "Tools & Services" table
- Old "How It Works" 4-step process

**Preserved:**
- TestimonialCarousel component (existing functionality)

---

## Specs & Instructions

### Typography Usage Guidelines

**Headings (Libre Baskerville):**
```tsx
<h1 className="font-heading">Build on an Enduring Framework</h1>
<h2 className="text-3xl font-heading font-bold">Three Pillars</h2>
```

**Body Text (Lora):**
```tsx
<p className="font-body text-lg">Regular paragraph content...</p>
// Note: font-body is the default, so it can be omitted
<p className="text-lg">This also uses Lora by default</p>
```

**Data/Statistics (IBM Plex Mono):**
```tsx
<div className="font-mono text-5xl font-bold">10+</div>
<p className="font-mono text-sm">Years IBC Implementation</p>
```

### Color System Reference

**Existing CSS Variables (No Changes Needed):**
```css
:root {
  --navy: 44 62 80;        /* #2C3E50 - Deep Navy */
  --gold: 196 154 108;     /* #C49A6C - Heritage Gold */
  --cream: 245 240 230;    /* #F5F0E6 - Warm Cream */
  --copper: 182 110 65;    /* #B66E41 - Copper accent */
  --olive: 125 143 105;    /* #7D8F69 - Olive accent */
  --dark-blue: #1f2d3d;    /* Dark Navy for sections */
}
```

**Tailwind Usage:**
```tsx
<div className="bg-navy text-cream">Navy background, cream text</div>
<div className="bg-gold/10 border-gold">Gold tint with gold border</div>
<span className="text-copper">Copper accent text</span>
```

### Image Placeholders Created

All placeholder image paths for custom graphics:
```
/images/classical-foundation.png     (Hero background - books, architecture)
/images/pillar-stewardship.png       (Pillar 1 visual)
/images/pillar-sovereignty.png       (Pillar 2 visual)
/images/pillar-system.png            (Pillar 3 visual)
/images/story-plumbing.png           (Case study 1)
/images/story-hvac.png               (Case study 2)
/images/story-coffee.png             (Case study 3)
/images/brad-raschke-founder.png     (Founder photo)
```

**Design Direction for Custom Graphics:**
- Classical authority aesthetic (old books, magnifying glass, building blocks)
- Serif typography overlays for emphasis
- Muted, professional color palette (navy, cream, copper)
- Avoid modern/digital aesthetic—lean into timeless, foundational imagery

### Component Architecture

**Preserved Components (No Changes):**
- `<Hero />` - Existing hero component with backgroundImage prop
- `<Section />` - Existing section wrapper
- `<OptimizedImage />` - Existing image optimization
- `<TestimonialCarousel />` - Existing testimonial functionality
- `<ContactButton />` - Existing CTA button component

**New Design Patterns:**
- **Three Pillars Layout**: Alternating left/right image placement using `md:order-2` and `md:order-1`
- **Comparison Cards**: Side-by-side dark/light contrast (Shifting Sands vs Enduring Framework)
- **Statistics Grid**: 4-column monospace number display
- **Story Cards**: 3-column grid with structured problem/solution/result format

---

## Current Position

### Completed (✅)
1. Typography system fully implemented and tested
2. `/app/y1322/page.tsx` completely repositioned for entrepreneurs
3. Homepage `/app/page.tsx` rebuilt with "Principled Authority" design
4. All new content data structures created (threePillars, comparisonData, entrepreneurStories, whyChoose1322)
5. Placeholder image paths established for custom graphics
6. Documentation created following spec-building protocol

### In Progress (🟡)
- Awaiting custom graphics from creative team for all placeholder images

### Not Started (⏸️)
- `/app/webinar/page.tsx` - Needs complete reframe (retirement → IBC education)
- `/components/founder-bio.tsx` - Needs entrepreneurial focus addition
- `/app/ibc-education/page.tsx` - New page creation needed
- `/app/academy/page.tsx` - 1322 IBC Academy landing page
- `/app/strategy/page.tsx` - Needs entrepreneur case studies update
- Navigation component - Needs Academy link addition
- Blog preservation check - Ensure blog remains untouched

---

## Next Steps

### Phase 1: Custom Graphics & Assets (HIGH PRIORITY)
**Responsibility:** Creative team

Required custom graphics (8 total):
1. ✅ Typography system fonts (completed with Google Fonts alternatives)
2. ⏸️ Hero background (`/images/classical-foundation.png`)
   - Aesthetic: Old leather books, classical architecture, building blocks
   - Overlay-friendly for white text
3. ⏸️ Three pillar visuals (3 images)
   - Stewardship: Scroll, ledger, classical record-keeping
   - Sovereignty: Keys, vault, independence imagery
   - System: Foundation stones, generational timeline, family tree
4. ⏸️ Entrepreneur story images (3 images)
   - Plumbing: Professional truck, tools, family business aesthetic
   - HVAC: Service fleet, commercial setting
   - Coffee: Roasting equipment, artisan business vibe
5. ⏸️ Brad Raschke founder photo
   - Professional headshot or environmental portrait
   - Classical, principled authority aesthetic

### Phase 2: Remaining Page Updates (MEDIUM PRIORITY)
**Responsibility:** Development (Claude Code)

1. **Webinar Page** (`/app/webinar/page.tsx`)
   - Current: "Retirement Was Never the Goal" (retirement demographic)
   - New: IBC education-focused webinar positioning
   - Integrate Academy mentions and FREE community CTA

2. **Founder Bio Component** (`/components/founder-bio.tsx`)
   - Add entrepreneurial focus to Brad's story
   - Emphasize business financing expertise
   - Update credentials and client demographic references

3. **Strategy Page** (`/app/strategy/page.tsx`)
   - Replace retirement case studies with entrepreneur examples
   - Align with three-pillar framework (Stewardship, Sovereignty, System)
   - Add IBC implementation examples for businesses

4. **New IBC Education Page** (`/app/ibc-education/page.tsx`)
   - Create comprehensive IBC education hub
   - Explain Infinite Banking Concept for entrepreneurs
   - Link to FREE Academy and resources

5. **Academy Landing Page** (`/app/academy/page.tsx`)
   - Dedicated page for 1322 IBC Academy (Skool community)
   - Benefits of joining FREE community
   - Course outline, learning path, community features
   - Integration with Skool platform

### Phase 3: Navigation & UX (LOW PRIORITY)
**Responsibility:** Development (Claude Code)

1. **Navigation Update**
   - Add "Academy" link to main navigation
   - Add "IBC Education" link to resources dropdown
   - Update footer links to include Academy

2. **Blog Preservation Verification**
   - Audit all blog routes to ensure zero changes
   - Verify blog styling remains consistent
   - Test blog navigation and permalinks

### Phase 4: Quality Assurance (BEFORE DEPLOYMENT)
**Responsibility:** Testing

1. **Visual Regression Testing**
   - Compare old vs new design across all updated pages
   - Verify typography rendering (Libre Baskerville, Lora, IBM Plex Mono)
   - Check responsive breakpoints (mobile, tablet, desktop)

2. **Content Accuracy Audit**
   - Verify all entrepreneur demographic references (30-50, $500K-$5M)
   - Confirm Academy links point to correct Skool URL
   - Validate case study numbers and outcomes

3. **Accessibility Testing**
   - Heading hierarchy (h1 → h6)
   - Color contrast ratios (navy on cream, gold on dark-blue)
   - Keyboard navigation
   - Screen reader compatibility

4. **Performance Optimization**
   - Lazy-load placeholder images when replaced with custom graphics
   - Optimize font loading (display: swap already implemented)
   - Check Core Web Vitals scores

---

## Technical Debt & Considerations

### Font Migration Path
**Current State:**
- New fonts implemented (Libre Baskerville, Lora, IBM Plex Mono)
- Legacy font utilities retained in Tailwind config for backwards compatibility:
  ```typescript
  playfair: ["var(--font-heading)"],  // Maps to Libre Baskerville
  lato: ["var(--font-body)"],         // Maps to Lora
  ```

**Future Cleanup:**
After all pages are updated to use new font classes (`font-heading`, `font-body`, `font-mono`), remove legacy utilities from `tailwind.config.ts`.

### Image Optimization Strategy
**Placeholder Pattern:**
All image paths use descriptive naming that reflects content purpose:
- ✅ Good: `/images/pillar-stewardship.png`
- ❌ Bad: `/images/img1.png`

When creative team delivers custom graphics:
1. Replace placeholder paths with final assets
2. Ensure proper image optimization (WebP format, responsive srcset)
3. Add descriptive alt text for accessibility
4. Implement lazy loading for below-fold images

### Content Consistency Guidelines
**Demographic References:**
- ✅ Always: "Christian entrepreneurs ages 30-50"
- ✅ Always: "$500K-$5M annual revenue"
- ❌ Never: "Retirees", "pre-retirees", "60-75 bracket"

**IBC Terminology:**
- ✅ "Infinite Banking Concept (IBC)"
- ✅ "Family banking system"
- ✅ "Policy loans" (not "policy borrowing")
- ✅ "Interest recapture" (not "interest savings")

**1322 IBC Academy References:**
- ✅ Always link to: https://www.skool.com/1322-ibc-academy
- ✅ Always emphasize: "FREE" community
- ✅ Always clarify: "No gatekeeping, no pressure, just education"

---

## Git Commit Strategy

**Current Branch:** `001-initial-setup`

**Recommended Commit Structure:**
```bash
# Commit 1: Typography System
git add app/layout.tsx tailwind.config.ts app/globals.css
git commit -m "feat: Implement Principled Authority typography system

- Replace Playfair Display with Libre Baskerville (headings)
- Replace Lato with Lora (body text)
- Add IBM Plex Mono for data/statistics
- Update Tailwind config with new font utilities
- Maintain legacy font mappings for backwards compatibility

Refs: /docs/2025-11-19-rebrand-principled-authority.md"

# Commit 2: Y1322 Page Repositioning
git add app/y1322/page.tsx
git commit -m "feat: Reposition Y1322 page for entrepreneur demographic

- Change target from retirees (60-75) to entrepreneurs (30-50)
- Update case studies to business financing examples
- Add 1322 IBC Academy CTA with dual-button approach
- Rewrite impact metrics for business owners

Refs: /docs/2025-11-19-rebrand-principled-authority.md"

# Commit 3: Homepage Rebuild
git add app/page.tsx
git commit -m "feat: Rebuild homepage with Principled Authority design

- Replace 4-step journey with three-pillar framework
- Add 'Cost of Not Knowing' comparison section
- Update entrepreneur success stories (3 case studies)
- Add 'Why Choose 1322' statistics section
- Rebuild founder message with entrepreneurial focus
- Update final CTA to emphasize FREE Academy

BREAKING CHANGE: Complete homepage structure overhaul

Refs: /docs/2025-11-19-rebrand-principled-authority.md"

# Commit 4: Documentation
git add docs/2025-11-19-rebrand-principled-authority.md
git commit -m "docs: Add comprehensive rebrand documentation

- Document typography system changes
- Catalog all placeholder images for custom graphics
- Outline remaining work (webinar, academy, navigation)
- Establish content consistency guidelines

Refs: /docs/2025-11-19-rebrand-principled-authority.md"
```

---

## Questions for Brad/Creative Team

1. **Custom Graphics Timeline**: When will placeholder images be replaced with final designs?
2. **Brad Founder Photo**: Should this be environmental portrait or traditional headshot?
3. **Academy Integration**: Should Academy page live at `/academy` or `/ibc-academy`?
4. **Webinar Positioning**: Keep existing webinar framework or create new IBC education webinar?
5. **Blog Styling**: Should blog inherit new typography or maintain separate styling?

---

## Success Metrics

**Completion Criteria for This Phase:**
- ✅ Typography system renders correctly across all browsers
- ✅ Y1322 page fully repositioned for entrepreneurs
- ✅ Homepage completely rebuilt with Principled Authority design
- ✅ All placeholder image paths documented
- ✅ Documentation created following spec-building protocol

**Next Phase Success Criteria:**
- ⏸️ All 8 custom graphics delivered and integrated
- ⏸️ Remaining 5 pages updated (webinar, founder bio, strategy, IBC education, academy)
- ⏸️ Navigation updated with Academy links
- ⏸️ Blog preservation verified (zero changes)
- ⏸️ Accessibility audit passed (WCAG 2.1 AA)

---

**End of Documentation**
*Last Updated: November 19, 2025*
*Next Review: Upon custom graphics delivery*
