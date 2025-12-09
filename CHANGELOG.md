# Changelog

All notable changes to the 1322 Legacy Strategies educational platform.

---

## Project Master Task List

### Phase 1: Foundation - COMPLETE

- [x] Navigation with mega menus (`/components/header.tsx`)
- [x] Footer rebuild - 4-column layout (`/components/footer.tsx`)
- [x] Learning Center hub (`/app/learn/page.tsx`)
- [x] Foundations track landing (`/app/learn/foundations/page.tsx`)
- [x] Lesson 1: What is IBC (`/app/learn/foundations/what-is-ibc/page.tsx`)
- [x] Lesson 2: The Banking Problem (`/app/learn/foundations/the-banking-problem/page.tsx`)
- [x] Tools hub (`/app/tools/page.tsx`)
- [x] Interest Bleed Calculator - interactive (`/app/tools/interest-bleed-calculator/page.tsx`)
- [x] Case Studies hub (`/app/case-studies/page.tsx`)
- [x] Case Study: Mike's HVAC (`/app/case-studies/mikes-hvac/page.tsx`)
- [x] Case Study: Sarah's E-commerce (`/app/case-studies/sarahs-ecommerce/page.tsx`)
- [x] Homepage learning pathways section (`/app/page.tsx`)
- [x] Notion blog integration fix (`/lib/notion.ts`)
- [x] pnpm lockfile sync for Vercel deployment

### Phase 2: Content Expansion - NEXT PRIORITY

- [ ] Lesson 3: Whole Life Explained (`/app/learn/foundations/whole-life-explained/page.tsx`)
- [ ] Lesson 4: IBC Concept Explained (`/app/learn/foundations/ibc-concept-explained/page.tsx`)
- [ ] Case Study: David's Real Estate ($1.2M, bridge financing)
- [ ] Case Study: Pastor James Ministry ($600K, building fund)
- [ ] Case Study: Thomas Manufacturing ($2.5M, equipment)
- [ ] Family Bank Projector calculator (`/app/tools/family-bank-projector/page.tsx`)
- [ ] Policy Estimator calculator (`/app/tools/policy-estimator/page.tsx`)

### Phase 3: Deep Content - FUTURE

- [ ] Deep Dives track landing (`/app/learn/deep-dives/page.tsx`)
- [ ] Deep Dives lessons x6 (4,000 words each)
- [ ] Mastery track landing (`/app/learn/mastery/page.tsx`)
- [ ] Mastery lessons x4 (4,000 words each)
- [ ] Opportunity Cost calculator (`/app/tools/opportunity-cost/page.tsx`)

### Phase 4: Video & Academy - FUTURE

- [ ] Video Library page (`/app/learn/videos/page.tsx`)
- [ ] Office Hours archive (`/app/learn/office-hours/page.tsx`)
- [ ] AMA banner component
- [ ] Academy page enhancements

### Technical Debt

- [x] Notion SDK locked to v2.3.0 (v5.4.0 breaks `databases.query()`)
- [x] Deleted `package-lock.json` (using pnpm only)
- [ ] Replace placeholder images with actual photography
- [ ] Mobile responsiveness audit
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Performance audit (Lighthouse 90+)

---

## [0.4.0] - 2025-12-09

### Fixed - Critical Bug Fixes

#### Notion Blog Integration
- **Fixed:** `TypeError: Cannot read properties of undefined (reading 'replace')` in formatNotionId
- **Fixed:** `notion.databases.query is not a function` - Notion SDK v5.4.0 breaking change
- **Solution:** Downgraded to `@notionhq/client@2.3.0` which has the traditional API
- **Result:** Blog now successfully fetches 49 posts from Notion database

#### Vercel Deployment
- **Fixed:** `ERR_PNPM_OUTDATED_LOCKFILE` - lockfile mismatch error
- **Solution:** Regenerated `pnpm-lock.yaml`, deleted conflicting `package-lock.json`
- **Package Manager:** Project now uses pnpm exclusively

### Changed - Branch Reorganization
- **main:** Now contains the revised educational platform
- **old-site-backup-2025-12-09:** Backup of original site before repositioning
- **feature/entrepreneur-repositioning:** Merged into main

### Technical Details
- Updated `lib/notion.ts` with lazy initialization pattern
- Added null handling for environment variables
- Notion client version: 2.3.0 (NOT 5.4.0)

---

## [0.3.0] - 2025-12-09

### Added - Educational Platform Core (Phase 1)

#### Navigation & Structure
- **Header with Mega Menus**: Dropdown navigation for "Learn IBC" and "Tools" sections
- **Footer Rebuild**: 4-column layout (Learn | Tools | Community | Connect) with Proverbs 13:22 quote
- **Homepage Learning Pathways**: New section with 4 cards linking to Learning Center, Calculators, Case Studies, and Academy

#### Learning Center (`/learn`)
- **Hub Page**: Three learning tracks visualization, featured content grid, learning style options
- **Foundations Track Landing** (`/learn/foundations`): 4-lesson overview with progress tracking
- **Lesson 1: What is IBC** (`/learn/foundations/what-is-ibc`): ~3,000 word educational content with sidebar, key concepts, scripture references
- **Lesson 2: The Banking Problem** (`/learn/foundations/the-banking-problem`): ~3,500 word content with stats tables, comparisons, volume of money concept

#### Interactive Tools (`/tools`)
- **Hub Page**: Four calculator listings with inputs/outputs descriptions
- **Interest Bleed Calculator** (`/tools/interest-bleed-calculator`): Fully interactive calculator with:
  - Real-time amortization calculations
  - 5/10/20/30 year projections
  - Opportunity cost calculations
  - Educational context sections

#### Case Studies (`/case-studies`)
- **Hub Page**: Five case studies with industry filtering UI
- **Mike's HVAC Case Study** (`/case-studies/mikes-hvac`): Full detailed story including:
  - Quick stats bar
  - Situation/Problem/Solution/Results structure
  - Before/After comparison tables
  - Year-by-year timeline
  - 20-year projection table
  - Multi-generational vision section
- **Sarah's E-commerce Case Study** (`/case-studies/sarahs-ecommerce`): Full detailed story with margin analysis

#### Homepage Updates
- Added "Learning Pathways" section with education-first approach
- Updated hero with dual CTAs (Start Learning + Join Academy)
- Revised final CTA to prioritize Learning Center over sales

### Changed
- Homepage hero text updated for education-first messaging
- Navigation restructured around learning pathways

---

## [0.2.0] - 2025-11-19

### Added - Classical Design Revision
- "Principled Authority" classical design aesthetic
- Border-based design system (no rounded corners)
- Gold accent color integration
- Typography system (Libre Baskerville, Lora, IBM Plex Mono)
- Testimonial carousel component
- Optimized image component

### Changed
- Complete visual redesign with classical aesthetic
- Color palette refined (Navy, Cream, Gold, Copper)
- All components updated to border-based styling

---

## [0.1.0] - 2025-11-19

### Added - Initial Setup
- Next.js 14 project scaffolding
- Basic page structure
- Initial content positioning
- Tailwind CSS configuration

---

## Version Guidelines

- **Major (X.0.0)**: Complete phase completion or major feature sets
- **Minor (0.X.0)**: New pages, features, or significant updates
- **Patch (0.0.X)**: Bug fixes, copy changes, minor adjustments

---

## Resume Instructions

When returning to this project:

1. **Start Here:**
   ```bash
   cd /Users/chrixcolvard/projects/2025-11-1322-website-repositioning
   pnpm install
   pnpm dev
   ```

2. **Check Vercel Environment Variables:**
   - NOTION_TOKEN
   - NOTION_DATABASE_ID
   - NEXT_PUBLIC_SITE_URL

3. **Verify Blog Works:**
   Visit http://localhost:3000/blog - should show 49 posts

4. **Next Tasks (Priority Order):**
   - Lesson 3: Whole Life Explained
   - Lesson 4: IBC Concept Explained
   - Remaining 3 case studies
   - Additional calculators

5. **Reference Files:**
   - `/docs/2025-12-09-phase1-implementation.md`
   - `/.claude/plans/atomic-doodling-scroll.md` (full project plan)
