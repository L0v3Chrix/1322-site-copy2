import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Deep Dives Track | 1322 Legacy Strategies",
  description: "Master the mechanics of IBC policy design, cash value accumulation, and business applications. Six in-depth lessons for serious practitioners.",
}

// Lessons data
const lessons = [
  {
    number: "01",
    slug: "policy-design-mechanics",
    title: "Policy Design Mechanics",
    description: "Understand how dividend-paying whole life policies are structured and why design choices matter for your banking system.",
    duration: "45 min",
    topics: [
      "Base premium vs PUA riders",
      "Death benefit structures",
      "MEC limits explained",
      "Optimizing for cash value",
    ],
    available: false,
  },
  {
    number: "02",
    slug: "cash-value-accumulation",
    title: "Cash Value Accumulation",
    description: "Learn how cash value grows, what affects it, and how to project your policy's performance over decades.",
    duration: "40 min",
    topics: [
      "Guaranteed vs non-guaranteed values",
      "Dividend history and projections",
      "The power of uninterrupted compounding",
      "Reading your annual statement",
    ],
    available: false,
  },
  {
    number: "03",
    slug: "the-capitalization-phase",
    title: "The Capitalization Phase",
    description: "Why the first 5-7 years are critical and how to navigate this phase without making costly mistakes.",
    duration: "35 min",
    topics: [
      "Realistic expectations year by year",
      "Premium payment strategies",
      "Avoiding early withdrawals",
      "Building borrowing capacity",
    ],
    available: false,
  },
  {
    number: "04",
    slug: "business-applications",
    title: "Business Applications",
    description: "Practical ways to use your policy for equipment financing, real estate, inventory, and business expansion.",
    duration: "50 min",
    topics: [
      "Equipment financing strategies",
      "Real estate deal structuring",
      "Inventory and cash flow management",
      "Business acquisition funding",
    ],
    available: false,
  },
  {
    number: "05",
    slug: "policy-loans-explained",
    title: "Policy Loans In-Depth",
    description: "Advanced understanding of how policy loans work, including interest, repayment strategies, and tax implications.",
    duration: "45 min",
    topics: [
      "Loan mechanics and interest rates",
      "Direct recognition vs non-direct",
      "Repayment strategies",
      "Tax considerations",
    ],
    available: false,
  },
  {
    number: "06",
    slug: "working-with-your-agent",
    title: "Working with Your Agent",
    description: "How to evaluate agents, ask the right questions, and ensure your policy is designed for banking—not just death benefit.",
    duration: "30 min",
    topics: [
      "Finding IBC-trained agents",
      "Questions to ask before buying",
      "Red flags to avoid",
      "Ongoing relationship management",
    ],
    available: false,
  },
]

export default function DeepDivesPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <OptimizedImage
            src="/images/deep-dives-track-hero.png"
            alt="Deep exploration of financial concepts"
            type="hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/learn"
                className="font-mono text-xs uppercase tracking-wider text-gold hover:text-cream transition-colors"
              >
                ← Back to Learning Center
              </Link>
            </div>

            {/* Track Header */}
            <div className="flex items-start gap-6">
              <span className="font-mono text-6xl md:text-7xl font-bold text-gold">
                02
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-2">
                  Intermediate Track • 6 Lessons • ~4 Hours
                </p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Deep Dives
                </h1>
                <p className="text-lg text-cream/80 max-w-xl">
                  Master the mechanics behind IBC. These six lessons take you from understanding
                  to implementation—the technical knowledge you need to make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-6 bg-gold/10 border-b border-gold/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-sm uppercase tracking-wider text-navy/70">
              Coming Soon — Currently in Development
            </p>
          </div>
        </div>
      </section>

      {/* Prerequisites Section */}
      <section className="py-8 border-b border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-navy/60">
                  Prerequisites
                </span>
                <p className="text-navy/70 mt-1">
                  Complete the Foundations track before starting Deep Dives.
                </p>
              </div>
              <Link
                href="/learn/foundations"
                className="inline-block border-2 border-navy text-navy px-6 py-2 font-heading font-bold uppercase tracking-wider text-sm hover:bg-navy hover:text-cream transition-colors"
              >
                Review Foundations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {lessons.map((lesson) => (
              <div
                key={lesson.slug}
                className="border-2 border-navy/10 opacity-60"
              >
                <div className="p-6 md:p-8">
                  <LessonContent lesson={lesson} />
                  <div className="mt-4 pt-4 border-t border-navy/10">
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/40">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
              After Completing Deep Dives
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You&apos;ll Understand
                </h3>
                <ul className="space-y-2 text-navy/70">
                  <li>• How to evaluate policy illustrations critically</li>
                  <li>• The mechanics of policy loans and repayment</li>
                  <li>• How to apply IBC to your specific business needs</li>
                  <li>• What questions to ask potential agents</li>
                </ul>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You&apos;ll Be Ready To
                </h3>
                <ul className="space-y-2 text-navy/70">
                  <li>• Have detailed policy design conversations</li>
                  <li>• Structure your first policy loan</li>
                  <li>• Teach others the basics of IBC</li>
                  <li>• Move into the Mastery track</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Sign-up Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Get Notified When Deep Dives Launches
            </h2>
            <p className="text-navy/70 mb-8">
              Join our free Academy community to be the first to know when these lessons go live.
              Plus, get access to weekly live Q&A with Brad.
            </p>
            <a
              href="https://www.skool.com/ibc-academy-5448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Join Free Academy
            </a>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              Free to join. No spam. Just valuable IBC education.
            </p>
          </div>
        </div>
      </section>

      {/* In the Meantime Section */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                While You Wait
              </h2>
              <p className="text-navy/70">
                Continue your IBC education with these resources.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/tools/interest-bleed-calculator"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Calculator
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Interest Bleed Calculator
                </h3>
                <p className="text-sm text-navy/60">
                  See exactly how much bank financing costs you.
                </p>
              </Link>

              <Link
                href="/case-studies"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Real Examples
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Case Studies
                </h3>
                <p className="text-sm text-navy/60">
                  See how other business owners applied IBC.
                </p>
              </Link>

              <a
                href="https://www.skool.com/ibc-academy-5448"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Community
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Free Academy
                </h3>
                <p className="text-sm text-navy/60">
                  Join weekly live Q&A sessions with Brad.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Lesson content component
function LessonContent({ lesson }: { lesson: typeof lessons[0] }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-6">
      {/* Lesson Number */}
      <div className="flex-shrink-0">
        <span className="font-mono text-4xl font-bold text-gold/50">
          {lesson.number}
        </span>
      </div>

      {/* Lesson Info */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-navy/60">
            {lesson.title}
          </h3>
          <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-3 py-1 text-navy/40">
            {lesson.duration}
          </span>
        </div>

        <p className="text-navy/50 mb-4">
          {lesson.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {lesson.topics.map((topic, index) => (
            <span
              key={index}
              className="text-xs text-navy/40 border border-navy/10 px-2 py-1"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
