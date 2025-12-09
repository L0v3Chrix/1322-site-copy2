# 1322 Legacy Strategies - Educational Platform

A content-heavy educational platform for Christian business owners learning the Infinite Banking Concept (IBC).

## Project Overview

**Client:** 1322 Legacy Strategies (Brad Raschke)
**Project Type:** Website Repositioning & Educational Platform Build
**Status:** Phase 1 In Progress
**Start Date:** November 2025
**Target Audience:** Analytical Type A Christian entrepreneurs, ages 30-50, $250K-$5M revenue

## Strategic Pivot

| FROM | TO |
|------|-----|
| Retirement planning (60-75 demographic) | IBC education (30-50 business owners) |
| Simple information site | Content-heavy educational platform |
| Quick sales funnel | Months-long education journey |
| Generic audience | Analytical Christian entrepreneurs |

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Typography:** Libre Baskerville (headings), Lora (body), IBM Plex Mono (data)
- **Colors:** Navy (#1A3A52), Cream (#F5F0E8), Gold, Copper
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Development server runs at: http://localhost:3000

## Project Structure

```
/app
├── /learn                    # Learning Center hub
│   ├── /foundations          # Beginner track (4 lessons)
│   │   ├── /what-is-ibc      # Lesson 1
│   │   └── /the-banking-problem # Lesson 2
│   ├── /deep-dives           # Intermediate track (planned)
│   ├── /videos               # Video library (planned)
│   └── /office-hours         # AMA archive (planned)
├── /tools                    # Calculator tools hub
│   └── /interest-bleed-calculator  # Interactive calculator
├── /case-studies             # Case studies hub
│   ├── /mikes-hvac           # HVAC case study
│   └── /sarahs-ecommerce     # E-commerce case study
├── /about                    # About page
├── /blog                     # Blog (existing, untouched)
└── /academy                  # Academy page

/components
├── header.tsx                # Navigation with mega menus
├── footer.tsx                # 4-column footer
└── [other components]

/docs                         # Project documentation
├── 2025-11-19-*.md          # Previous session docs
└── 2025-12-09-*.md          # Current session docs
```

## Documentation

All project documentation is in the `/docs` folder with timestamped markdown files. See:
- `CHANGELOG.md` - Version history and changes
- `/docs/` - Detailed session documentation and specifications

## Key Features

### Learning Center
- Three progressive learning tracks (Foundations, Deep Dives, Mastery)
- Long-form educational content (3,000-5,000 words per lesson)
- Progress tracking UI
- Scripture integration (Proverbs 13:22, 22:7)

### Interactive Tools
- Interest Bleed Calculator (live calculations)
- Family Bank Projector (planned)
- Policy Estimator (planned)
- Opportunity Cost Calculator (planned)

### Case Studies
- Detailed business owner stories
- Before/After comparisons
- Year-by-year results timelines
- Multi-generational projections

## Design Principles

- **Education-first:** No hard-sell tactics
- **Analytical depth:** Data, numbers, projections
- **Classical aesthetic:** Border-based, no rounded corners
- **Soft-sell CTAs:** "No pressure. No obligation."
- **Faith integration:** Scripture woven naturally

## External Integrations

- **Skool Academy:** https://www.skool.com/1322-ibc-academy
- **Discovery Booking:** https://discovery.1322legacystrategies.com/

## Contributing

This is a client project for Raize The Vibe. All work is documented in `/docs`.

## License

Proprietary - 1322 Legacy Strategies
