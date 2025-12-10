import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Mastery Track | 1322 Legacy Strategies",
  description: "Advanced strategies for multi-generational wealth building, policy optimization, tax implications, and estate integration.",
}

// Lessons data
const lessons = [
  {
    number: "01",
    slug: "multi-generational-strategies",
    title: "Multi-Generational Strategies",
    description: "How to structure your family banking system to benefit children, grandchildren, and beyond. Legacy planning that lasts.",
    duration: "50 min",
    topics: [
      "Insuring children and grandchildren",
      "Ownership structures for generations",
      "Teaching the next generation",
      "Legacy documentation",
    ],
    available: false,
  },
  {
    number: "02",
    slug: "policy-optimization",
    title: "Policy Optimization",
    description: "Advanced techniques for maximizing cash value growth, managing existing policies, and knowing when to add new ones.",
    duration: "45 min",
    topics: [
      "Paid-up additions strategies",
      "1035 exchanges explained",
      "Policy performance monitoring",
      "When to add another policy",
    ],
    available: false,
  },
  {
    number: "03",
    slug: "tax-implications",
    title: "Tax Implications",
    description: "Understanding the tax treatment of whole life policies—what&apos;s taxable, what&apos;s not, and how to stay compliant.",
    duration: "40 min",
    topics: [
      "Tax-free death benefits",
      "Policy loan tax treatment",
      "Modified endowment contracts (MECs)",
      "Working with your CPA",
    ],
    available: false,
  },
  {
    number: "04",
    slug: "estate-integration",
    title: "Estate Integration",
    description: "Integrating your IBC policies with your broader estate plan, including trusts, wills, and business succession.",
    duration: "55 min",
    topics: [
      "Irrevocable life insurance trusts (ILITs)",
      "Estate tax considerations",
      "Business succession planning",
      "Coordinating with estate attorneys",
    ],
    available: false,
  },
]

export default function MasteryPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <OptimizedImage
            src="/images/mastery-track-hero.png"
            alt="Mastery and legacy building"
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
                03
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-2">
                  Advanced Track • 4 Lessons • ~3 Hours
                </p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Mastery
                </h1>
                <p className="text-lg text-cream/80 max-w-xl">
                  Build wealth that outlasts you. These advanced lessons cover multi-generational
                  planning, optimization strategies, and integration with your broader financial picture.
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
                  Complete both Foundations and Deep Dives tracks before starting Mastery.
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href="/learn/foundations"
                  className="inline-block border-2 border-navy text-navy px-4 py-2 font-heading font-bold uppercase tracking-wider text-sm hover:bg-navy hover:text-cream transition-colors"
                >
                  Foundations
                </Link>
                <Link
                  href="/learn/deep-dives"
                  className="inline-block border-2 border-navy text-navy px-4 py-2 font-heading font-bold uppercase tracking-wider text-sm hover:bg-navy hover:text-cream transition-colors"
                >
                  Deep Dives
                </Link>
              </div>
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
              After Completing Mastery
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You&apos;ll Understand
                </h3>
                <ul className="space-y-2 text-navy/70">
                  <li>• How to structure policies for multiple generations</li>
                  <li>• Advanced policy optimization techniques</li>
                  <li>• Tax implications and how to stay compliant</li>
                  <li>• How IBC integrates with estate planning</li>
                </ul>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You&apos;ll Be Ready To
                </h3>
                <ul className="space-y-2 text-navy/70">
                  <li>• Build a multi-generational wealth system</li>
                  <li>• Coordinate with CPAs and estate attorneys</li>
                  <li>• Optimize existing policies for better performance</li>
                  <li>• Teach your family the principles of IBC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Track Is For */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
              Who Is This Track For?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gold/30 p-6 text-center">
                <span className="font-mono text-4xl font-bold text-gold">5+</span>
                <p className="text-navy/70 mt-2">
                  Years of IBC policy ownership with proven banking activity
                </p>
              </div>

              <div className="border-2 border-gold/30 p-6 text-center">
                <span className="font-mono text-4xl font-bold text-gold">$1M+</span>
                <p className="text-navy/70 mt-2">
                  Net worth and serious about legacy planning
                </p>
              </div>

              <div className="border-2 border-gold/30 p-6 text-center">
                <span className="font-mono text-4xl font-bold text-gold">2+</span>
                <p className="text-navy/70 mt-2">
                  Generations you want to impact with your wealth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Sign-up Section */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Get Notified When Mastery Launches
            </h2>
            <p className="text-navy/70 mb-8">
              Join our free Academy community to be the first to know when these advanced lessons go live.
              Plus, get access to weekly live Q&A where Brad answers your most complex questions.
            </p>
            <a
              href="https://www.skool.com/1322-ibc-academy"
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

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Ready for Advanced Planning?
            </h2>
            <p className="text-navy/70 mb-8">
              If you&apos;re already implementing IBC and want to discuss multi-generational
              strategies for your specific situation, let&apos;s talk.
            </p>
            <a
              href="https://discovery.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Schedule a Strategy Session
            </a>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              For serious practitioners ready for next-level planning.
            </p>
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
