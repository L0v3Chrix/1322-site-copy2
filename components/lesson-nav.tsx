import Link from "next/link"

interface LessonInfo {
  slug: string
  number: string
  title: string
  shortTitle?: string
}

interface TrackInfo {
  name: string
  basePath: string
  lessons: LessonInfo[]
}

// Foundations Track Data
export const foundationsTrack: TrackInfo = {
  name: "Foundations",
  basePath: "/learn/foundations",
  lessons: [
    { slug: "what-is-ibc", number: "01", title: "What is Infinite Banking?", shortTitle: "What is IBC?" },
    { slug: "the-banking-problem", number: "02", title: "The Banking Problem" },
    { slug: "whole-life-explained", number: "03", title: "Whole Life Explained" },
    { slug: "ibc-concept-explained", number: "04", title: "The IBC Concept Explained", shortTitle: "IBC Concept" },
  ],
}

// Deep Dives Track Data (Coming Soon)
export const deepDivesTrack: TrackInfo = {
  name: "Deep Dives",
  basePath: "/learn/deep-dives",
  lessons: [
    { slug: "policy-design-mechanics", number: "01", title: "Policy Design Mechanics" },
    { slug: "cash-value-accumulation", number: "02", title: "Cash Value Accumulation" },
    { slug: "capitalization-phase", number: "03", title: "The Capitalization Phase" },
    { slug: "business-applications", number: "04", title: "Business Applications" },
    { slug: "policy-loans-in-depth", number: "05", title: "Policy Loans In-Depth" },
    { slug: "working-with-your-agent", number: "06", title: "Working With Your Agent" },
  ],
}

// Mastery Track Data (Coming Soon)
export const masteryTrack: TrackInfo = {
  name: "Mastery",
  basePath: "/learn/mastery",
  lessons: [
    { slug: "multi-generational-strategies", number: "01", title: "Multi-Generational Strategies" },
    { slug: "policy-optimization", number: "02", title: "Policy Optimization" },
    { slug: "tax-implications", number: "03", title: "Tax Implications" },
    { slug: "estate-integration", number: "04", title: "Estate Integration" },
  ],
}

interface LessonNavProps {
  track: TrackInfo
  currentSlug: string
}

export default function LessonNav({ track, currentSlug }: LessonNavProps) {
  const currentIndex = track.lessons.findIndex((lesson) => lesson.slug === currentSlug)
  const prevLesson = currentIndex > 0 ? track.lessons[currentIndex - 1] : null
  const nextLesson = currentIndex < track.lessons.length - 1 ? track.lessons[currentIndex + 1] : null

  return (
    <section className="py-8 border-t-2 border-navy/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {prevLesson ? (
              <Link
                href={`${track.basePath}/${prevLesson.slug}`}
                className="group flex items-center gap-4 border-2 border-navy/20 p-4 hover:border-gold transition-colors flex-1"
              >
                <span className="font-mono text-2xl text-gold">←</span>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                    Previous Lesson
                  </span>
                  <span className="block font-heading font-bold text-navy group-hover:text-gold transition-colors">
                    {prevLesson.shortTitle || prevLesson.title}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href={track.basePath}
                className="group flex items-center gap-4 border-2 border-navy/20 p-4 hover:border-gold transition-colors flex-1"
              >
                <span className="font-mono text-2xl text-gold">←</span>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                    Back to Track
                  </span>
                  <span className="block font-heading font-bold text-navy group-hover:text-gold transition-colors">
                    {track.name} Track
                  </span>
                </div>
              </Link>
            )}

            {nextLesson ? (
              <Link
                href={`${track.basePath}/${nextLesson.slug}`}
                className="group flex items-center gap-4 border-2 border-navy/20 p-4 hover:border-gold transition-colors text-right md:text-left md:flex-row-reverse flex-1"
              >
                <span className="font-mono text-2xl text-gold">→</span>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                    Next Lesson
                  </span>
                  <span className="block font-heading font-bold text-navy group-hover:text-gold transition-colors">
                    {nextLesson.shortTitle || nextLesson.title}
                  </span>
                </div>
              </Link>
            ) : (
              <Link
                href="/qualify"
                className="group flex items-center gap-4 border-2 border-gold bg-gold/10 p-4 hover:bg-gold transition-colors text-right md:text-left md:flex-row-reverse flex-1"
              >
                <span className="font-mono text-2xl text-navy group-hover:text-navy">→</span>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                    Track Complete!
                  </span>
                  <span className="block font-heading font-bold text-navy group-hover:text-navy transition-colors">
                    Book Your Consultation
                  </span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Track Progress Sidebar Component
interface TrackProgressProps {
  track: TrackInfo
  currentSlug: string
  completedSlugs?: string[]
}

export function TrackProgress({ track, currentSlug, completedSlugs = [] }: TrackProgressProps) {
  return (
    <div className="border-2 border-navy/20 p-6">
      <h3 className="font-heading text-sm font-bold text-navy mb-4 uppercase tracking-wider">
        {track.name} Track
      </h3>
      <div className="space-y-3">
        {track.lessons.map((lesson, index) => {
          const isCurrent = lesson.slug === currentSlug
          const isCompleted = completedSlugs.includes(lesson.slug) ||
            track.lessons.findIndex((l) => l.slug === currentSlug) > index

          return (
            <div key={lesson.slug} className="flex items-center gap-3">
              <span
                className={`w-6 h-6 font-mono text-xs flex items-center justify-center ${
                  isCurrent
                    ? "bg-gold text-navy font-bold"
                    : isCompleted
                    ? "bg-gold/20 border border-gold text-gold"
                    : "border border-navy/20 text-navy/40"
                }`}
              >
                {isCompleted && !isCurrent ? "✓" : lesson.number.replace("0", "")}
              </span>
              <span
                className={`text-sm ${
                  isCurrent
                    ? "text-navy font-medium"
                    : isCompleted
                    ? "text-navy/60"
                    : "text-navy/40"
                }`}
              >
                {lesson.number}. {lesson.shortTitle || lesson.title}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
