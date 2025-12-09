import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn IBC | 1322 Legacy Strategies",
  description: "Master the art of becoming your own banker. Self-paced education for analytical minds who think generationally.",
}

// Learning tracks data
const learningTracks = [
  {
    number: "01",
    title: "Foundations",
    subtitle: "The Why",
    lessons: 4,
    duration: "~2 hours",
    href: "/learn/foundations",
    description: "Understand the banking problem and why IBC is the solution for business owners who think generationally.",
    topics: [
      "What is Infinite Banking?",
      "The Banking Problem",
      "Whole Life vs Everything Else",
      "The IBC Concept Explained",
    ],
  },
  {
    number: "02",
    title: "Deep Dives",
    subtitle: "The How",
    lessons: 6,
    duration: "~4 hours",
    href: "/learn/deep-dives",
    description: "Master the mechanics of policy design, cash value accumulation, and business applications.",
    topics: [
      "Policy Design Mechanics",
      "Cash Value Accumulation",
      "The Capitalization Phase",
      "Business Applications",
      "Policy Loans Explained",
      "Working with Your Agent",
    ],
  },
  {
    number: "03",
    title: "Mastery",
    subtitle: "The When",
    lessons: 4,
    duration: "~3 hours",
    href: "/learn/mastery",
    description: "Advanced strategies for multi-generational wealth building, optimization, and estate integration.",
    topics: [
      "Multi-Generational Strategies",
      "Policy Optimization",
      "Tax Implications",
      "Estate Integration",
    ],
  },
]

// Featured content data
const featuredContent = [
  {
    type: "Case Study",
    title: "How Mike's HVAC Business Stopped Bleeding $32K/Year to Banks",
    href: "/case-studies/mikes-hvac",
    readTime: "8 min read",
  },
  {
    type: "Calculator",
    title: "Interest Bleed Calculator",
    href: "/tools/interest-bleed-calculator",
    readTime: "Interactive",
  },
  {
    type: "Video",
    title: "Understanding the Capitalization Phase",
    href: "/learn/videos",
    readTime: "12 min watch",
  },
]

// Learning style options
const learningStyles = [
  {
    name: "Read",
    description: "Long-form articles and lessons",
    href: "/learn/foundations",
    icon: "articles",
  },
  {
    name: "Watch",
    description: "Video explanations",
    href: "/learn/videos",
    icon: "videos",
  },
  {
    name: "Calculate",
    description: "Interactive tools",
    href: "/tools",
    icon: "tools",
  },
  {
    name: "Discuss",
    description: "Join the Academy",
    href: "https://www.skool.com/1322-ibc-academy",
    icon: "community",
    external: true,
  },
]

export default function LearnPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-gold mb-4">
              Self-Paced Education
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Master the Art of Becoming Your Own Banker
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8">
              Comprehensive education for analytical minds. Take your time. Validate the concepts.
              Make informed decisions about your family&apos;s financial future.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Learning Tracks Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Choose Your Learning Path
              </h2>
              <p className="text-navy/70 max-w-xl mx-auto">
                Progress through structured tracks at your own pace. Each track builds on the previous one.
              </p>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            {/* Track Cards */}
            <div className="space-y-8">
              {learningTracks.map((track) => (
                <Link
                  key={track.number}
                  href={track.href}
                  className="block border-2 border-navy/20 hover:border-gold transition-colors group"
                >
                  <div className="grid md:grid-cols-[120px_1fr] gap-6 p-6 md:p-8">
                    {/* Track Number */}
                    <div className="flex flex-col items-center md:items-start">
                      <span className="font-mono text-5xl md:text-6xl font-bold text-gold">
                        {track.number}
                      </span>
                      <span className="font-mono text-xs uppercase tracking-wider text-navy/50 mt-2">
                        {track.subtitle}
                      </span>
                    </div>

                    {/* Track Content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy group-hover:text-gold transition-colors">
                          {track.title}
                        </h3>
                        <div className="flex gap-3">
                          <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-3 py-1 text-navy/60">
                            {track.lessons} Lessons
                          </span>
                          <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-3 py-1 text-navy/60">
                            {track.duration}
                          </span>
                        </div>
                      </div>

                      <p className="text-navy/70 mb-4 max-w-2xl">
                        {track.description}
                      </p>

                      {/* Topics Preview */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {track.topics.slice(0, 4).map((topic, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-gold/50 pl-3 py-1"
                          >
                            <span className="text-sm text-navy/60">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20 md:py-24 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Featured Content
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredContent.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
                >
                  <span className="font-mono text-xs uppercase tracking-wider text-gold">
                    {item.type}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-navy mt-2 mb-3 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-xs text-navy/50">
                    {item.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Styles Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                How Do You Learn Best?
              </h2>
              <p className="text-navy/70">
                Choose the format that works for you.
              </p>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {learningStyles.map((style) => (
                style.external ? (
                  <a
                    key={style.name}
                    href={style.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-navy/20 p-6 text-center hover:border-gold transition-colors group"
                  >
                    <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors">
                      {style.name}
                    </h3>
                    <p className="text-sm text-navy/60 mt-2">
                      {style.description}
                    </p>
                  </a>
                ) : (
                  <Link
                    key={style.name}
                    href={style.href}
                    className="border-2 border-navy/20 p-6 text-center hover:border-gold transition-colors group"
                  >
                    <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors">
                      {style.name}
                    </h3>
                    <p className="text-sm text-navy/60 mt-2">
                      {style.description}
                    </p>
                  </Link>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMA Banner Section */}
      <section className="py-16 bg-gold/10 border-y-2 border-gold/30">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
              Live Every Week
            </p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Brad&apos;s Office Hours
            </h2>
            <p className="text-navy/70 mb-6 max-w-xl mx-auto">
              Join our free Academy community for weekly live Q&A sessions.
              Ask questions, hear real examples, and learn from fellow entrepreneurs.
            </p>
            <a
              href="https://www.skool.com/1322-ibc-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-cream px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-gold hover:text-navy transition-colors"
            >
              Join Free Academy
            </a>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              When You&apos;re Ready
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              There&apos;s no pressure here. Take your time learning. When you have questions
              that need personalized answers, we&apos;re here for an honest conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discovery.1322legacystrategies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Book a Call
              </a>
              <Link
                href="/learn/foundations"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Start Learning
              </Link>
            </div>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              No pressure. No obligation. Just an honest conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
