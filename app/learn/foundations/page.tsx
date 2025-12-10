import Link from "next/link"
import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Foundations Track | 1322 Legacy Strategies",
  description: "Begin your IBC education with the fundamentals. Four lessons covering the banking problem, whole life basics, and the Infinite Banking Concept.",
}

// Lessons data
const lessons = [
  {
    number: "01",
    slug: "what-is-ibc",
    title: "What is Infinite Banking?",
    description: "An introduction to the Infinite Banking Concept and why it matters for business owners who think generationally.",
    duration: "25 min",
    topics: [
      "The origin of IBC",
      "Nelson Nash's discovery",
      "Why business owners are ideal candidates",
      "The shift from consumer to owner",
    ],
    available: true,
  },
  {
    number: "02",
    slug: "the-banking-problem",
    title: "The Banking Problem",
    description: "Understanding how traditional financing bleeds your business dry and transfers wealth away from your family.",
    duration: "30 min",
    topics: [
      "Interest bleed explained",
      "The compounding cost of borrowing",
      "What banks don't tell you",
      "The borrower vs lender dynamic",
    ],
    available: true,
  },
  {
    number: "03",
    slug: "whole-life-explained",
    title: "Whole Life vs Everything Else",
    description: "Why dividend-paying whole life insurance is the foundation of IBC, and how it differs from other insurance products.",
    duration: "35 min",
    topics: [
      "Term vs whole life basics",
      "Cash value accumulation",
      "Dividends and mutual companies",
      "Why not universal life?",
    ],
    available: true,
  },
  {
    number: "04",
    slug: "ibc-concept-explained",
    title: "The IBC Concept Explained",
    description: "Putting it all together: how to use your policy as your family's banking system for business financing.",
    duration: "40 min",
    topics: [
      "Policy loans explained",
      "The capitalization phase",
      "Recapturing interest",
      "Multi-generational wealth",
    ],
    available: true,
  },
]

export default function FoundationsPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-20 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-15">
          <OptimizedImage
            src="/images/foundations-track-hero.png"
            alt="Classical stone foundation"
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
                01
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-2">
                  Beginner Track • 4 Lessons • ~2 Hours
                </p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  Foundations
                </h1>
                <p className="text-lg text-cream/80 max-w-xl">
                  Understand the &ldquo;why&rdquo; before diving into the &ldquo;how.&rdquo;
                  These four lessons establish the core concepts every business owner needs to know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-6 border-b border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs uppercase tracking-wider text-navy/60">
                Your Progress
              </span>
              <span className="font-mono text-xs text-navy/60">
                0 of 4 Complete
              </span>
            </div>
            <div className="h-2 bg-navy/10">
              <div className="h-full bg-gold" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.slug}
                className={`border-2 ${lesson.available ? 'border-navy/20 hover:border-gold' : 'border-navy/10'} transition-colors ${!lesson.available ? 'opacity-60' : ''}`}
              >
                {lesson.available ? (
                  <Link href={`/learn/foundations/${lesson.slug}`} className="block p-6 md:p-8">
                    <LessonContent lesson={lesson} />
                  </Link>
                ) : (
                  <div className="p-6 md:p-8">
                    <LessonContent lesson={lesson} />
                    <div className="mt-4 pt-4 border-t border-navy/10">
                      <span className="font-mono text-xs uppercase tracking-wider text-navy/40">
                        Coming Soon
                      </span>
                    </div>
                  </div>
                )}
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
              After Completing Foundations
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You&apos;ll Understand
                </h3>
                <ul className="space-y-2 text-navy/70">
                  <li>• Why traditional financing works against you</li>
                  <li>• How whole life insurance can be a banking tool</li>
                  <li>• The difference between consumer and owner mindset</li>
                  <li>• Why IBC is ideal for business owners</li>
                </ul>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You&apos;ll Be Ready To
                </h3>
                <ul className="space-y-2 text-navy/70">
                  <li>• Use our calculators meaningfully</li>
                  <li>• Dive into the Deep Dives track</li>
                  <li>• Have informed conversations with advisors</li>
                  <li>• Evaluate if IBC fits your situation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Ready to Begin?
            </h2>
            <p className="text-navy/70 mb-8">
              Start with Lesson 1 to build your understanding from the ground up.
            </p>
            <Link
              href="/learn/foundations/what-is-ibc"
              className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Start Lesson 1
            </Link>
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
        <span className="font-mono text-4xl font-bold text-gold">
          {lesson.number}
        </span>
      </div>

      {/* Lesson Info */}
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="font-heading text-xl md:text-2xl font-bold text-navy">
            {lesson.title}
          </h3>
          <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-3 py-1 text-navy/60">
            {lesson.duration}
          </span>
        </div>

        <p className="text-navy/70 mb-4">
          {lesson.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-2">
          {lesson.topics.map((topic, index) => (
            <span
              key={index}
              className="text-xs text-navy/50 border border-navy/20 px-2 py-1"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      {lesson.available && (
        <div className="hidden md:flex items-center">
          <span className="font-mono text-gold text-xl">→</span>
        </div>
      )}
    </div>
  )
}
