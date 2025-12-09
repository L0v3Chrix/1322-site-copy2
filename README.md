# 1322 Legacy Strategies - Educational Platform

A content-heavy educational platform for Christian business owners learning the Infinite Banking Concept (IBC).

---

## Project Status: Phase 1 COMPLETE

**Last Updated:** December 9, 2025
**Branch:** `main` (revised site live)
**Backup Branch:** `old-site-backup-2025-12-09` (original site preserved)
**Deployment:** Vercel (pending environment variables)

---

## Quick Resume Checklist

When returning to this project, complete these steps:

### 1. Environment Setup
```bash
cd /Users/chrixcolvard/projects/2025-11-1322-website-repositioning
pnpm install
pnpm dev
```

### 2. Vercel Environment Variables (REQUIRED)
Copy values from `.env.local` to your Vercel project settings:
```
NOTION_TOKEN=<copy from .env.local>
NOTION_DATABASE_ID=<copy from .env.local>
NEXT_PUBLIC_SITE_URL=https://1322legacystrategies.com
```

**Note:** Credentials are stored locally in `.env.local` (not committed to git)

### 3. Verify Blog Works
Visit http://localhost:3000/blog - should show 49 posts from Notion

---

## Completion Status

### Phase 1: Foundation (COMPLETE)

| Task | Status | Path |
|------|--------|------|
| Navigation with mega menus | ✅ Complete | `/components/header.tsx` |
| Footer rebuild (4-column) | ✅ Complete | `/components/footer.tsx` |
| Learning Center hub | ✅ Complete | `/app/learn/page.tsx` |
| Foundations track landing | ✅ Complete | `/app/learn/foundations/page.tsx` |
| Lesson 1: What is IBC | ✅ Complete | `/app/learn/foundations/what-is-ibc/page.tsx` |
| Lesson 2: The Banking Problem | ✅ Complete | `/app/learn/foundations/the-banking-problem/page.tsx` |
| Tools hub | ✅ Complete | `/app/tools/page.tsx` |
| Interest Bleed Calculator | ✅ Complete | `/app/tools/interest-bleed-calculator/page.tsx` |
| Case Studies hub | ✅ Complete | `/app/case-studies/page.tsx` |
| Case Study: Mike's HVAC | ✅ Complete | `/app/case-studies/mikes-hvac/page.tsx` |
| Case Study: Sarah's E-commerce | ✅ Complete | `/app/case-studies/sarahs-ecommerce/page.tsx` |
| Homepage learning pathways | ✅ Complete | `/app/page.tsx` |
| Notion blog integration fix | ✅ Complete | `/lib/notion.ts` |
| pnpm lockfile sync | ✅ Complete | `pnpm-lock.yaml` |

### Phase 2: Content Expansion (NEXT)

| Task | Status | Priority |
|------|--------|----------|
| Lesson 3: Whole Life Explained | ⬜ Pending | P1 |
| Lesson 4: IBC Concept Explained | ⬜ Pending | P1 |
| Case Study: David's Real Estate | ⬜ Pending | P2 |
| Case Study: Pastor James Ministry | ⬜ Pending | P2 |
| Case Study: Thomas Manufacturing | ⬜ Pending | P2 |
| Family Bank Projector calculator | ⬜ Pending | P2 |
| Policy Estimator calculator | ⬜ Pending | P2 |
| Opportunity Cost calculator | ⬜ Pending | P3 |

### Phase 3: Deep Content (FUTURE)

| Task | Status | Priority |
|------|--------|----------|
| Deep Dives track (6 lessons) | ⬜ Pending | P2 |
| Mastery track (4 lessons) | ⬜ Pending | P3 |
| Video Library page | ⬜ Pending | P2 |
| Office Hours archive | ⬜ Pending | P2 |
| AMA banner integration | ⬜ Pending | P3 |

### Technical Debt

| Issue | Status | Notes |
|-------|--------|-------|
| Notion SDK version | ✅ Fixed | Locked to v2.3.0 (v5.4.0 breaks API) |
| pnpm/npm lockfile conflict | ✅ Fixed | Using pnpm only |
| Image placeholders | ⬜ Pending | Creative team will provide |

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** pnpm (NOT npm)
- **CMS:** Notion API (`@notionhq/client@2.3.0`)
- **Typography:** Libre Baskerville (headings), Lora (body), IBM Plex Mono (data)
- **Colors:** Navy (#1A3A52), Cream (#F5F0E8), Gold, Copper
- **Deployment:** Vercel

---

## Project Structure

```
/app
├── /learn                    # Learning Center hub
│   ├── /foundations          # Beginner track (4 lessons)
│   │   ├── /what-is-ibc      # ✅ Lesson 1
│   │   └── /the-banking-problem # ✅ Lesson 2
│   ├── /deep-dives           # ⬜ Intermediate track (planned)
│   ├── /videos               # ⬜ Video library (planned)
│   └── /office-hours         # ⬜ AMA archive (planned)
├── /tools                    # Calculator tools hub
│   └── /interest-bleed-calculator  # ✅ Interactive calculator
├── /case-studies             # Case studies hub
│   ├── /mikes-hvac           # ✅ HVAC case study
│   └── /sarahs-ecommerce     # ✅ E-commerce case study
├── /about                    # About page
├── /blog                     # ✅ Blog (Notion integration working)
├── /academy                  # Academy page
└── /ibc-education            # IBC education page

/components
├── header.tsx                # ✅ Navigation with mega menus
├── footer.tsx                # ✅ 4-column footer
└── [other components]

/lib
└── notion.ts                 # ✅ Notion API integration (fixed)

/docs                         # Project documentation
├── 2025-11-19-*.md          # Previous session docs
└── 2025-12-09-*.md          # Current session docs
```

---

## Commands

```bash
# Install dependencies (USE PNPM ONLY)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Development server runs at: http://localhost:3000

---

## Git Branches

| Branch | Purpose |
|--------|---------|
| `main` | Production - Revised educational platform |
| `old-site-backup-2025-12-09` | Backup of original site before repositioning |
| `feature/entrepreneur-repositioning` | Development branch (merged to main) |

---

## External Integrations

- **Skool Academy:** https://www.skool.com/1322-ibc-academy
- **Discovery Booking:** https://discovery.1322legacystrategies.com/
- **Notion Blog Database:** 20074dd017518166a4fef44e7233a282

---

## Design Principles

- **Education-first:** No hard-sell tactics
- **Analytical depth:** Data, numbers, projections
- **Classical aesthetic:** Border-based, no rounded corners
- **Soft-sell CTAs:** "No pressure. No obligation."
- **Faith integration:** Scripture woven naturally (Proverbs 13:22, 22:7)

---

## Known Issues & Solutions

### Notion SDK Breaking Change
**Problem:** Notion SDK v5.4.0 removed `databases.query()` method
**Solution:** Locked to `@notionhq/client@2.3.0` in package.json

### Package Manager Conflict
**Problem:** npm and pnpm lockfiles conflict causing Vercel deployment failures
**Solution:** Deleted `package-lock.json`, using `pnpm-lock.yaml` only

---

## Documentation

All project documentation is in the `/docs` folder with timestamped markdown files. See:
- `CHANGELOG.md` - Version history and changes
- `/docs/2025-12-09-phase1-implementation.md` - Phase 1 details

---

## License

Proprietary - 1322 Legacy Strategies
