import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "1322 IBC Academy | FREE Infinite Banking Education",
  description:
    "Join 1,000+ Christian entrepreneurs learning IBC through our FREE Skool community. No gatekeeping. No pressure. Just generous education on the Infinite Banking Concept.",
}

const academyBenefits = [
  {
    title: "Comprehensive IBC Curriculum",
    description:
      "Step-by-step lessons on whole life policy design, policy loans, interest recapture, and building your family banking system.",
  },
  {
    title: "Weekly Live Training",
    description:
      "Brad Raschke teaches live every week—covering real entrepreneur case studies, Q&A sessions, and IBC implementation strategies.",
  },
  {
    title: "Active Community Support",
    description:
      "Connect with 1,000+ Christian business owners who are implementing IBC. Ask questions, share wins, and learn from peers.",
  },
  {
    title: "No Sales Pitch Zone",
    description:
      "This is education-first. Brad provides generous IBC knowledge with no pressure. When you're ready to implement, you'll know exactly what to do.",
  },
]

const curriculumModules = [
  {
    module: "Module 1",
    title: "IBC Foundations",
    lessons: [
      "Why entrepreneurs bleed $20K-$50K+ in interest annually",
      "How Infinite Banking recaptures that lost interest",
      "The difference between term life and whole life insurance",
      "Understanding cash value vs death benefit",
    ],
  },
  {
    module: "Module 2",
    title: "Policy Design Mastery",
    lessons: [
      "Designing policies for maximum cash value growth",
      "The role of Paid-Up Additions (PUA) riders",
      "Choosing the right mutual insurance carrier",
      "Premium structuring for business owners",
    ],
  },
  {
    module: "Module 3",
    title: "Capital Deployment",
    lessons: [
      "Financing equipment, vehicles, and real estate through policy loans",
      "The 'pay yourself back' strategy for interest recapture",
      "Coordinating policy loans with business cash flow",
      "Tax advantages of policy loans vs bank loans",
    ],
  },
  {
    module: "Module 4",
    title: "Multi-Generational Wealth",
    lessons: [
      "Building family banking systems that last generations",
      "Funding children's college debt-free through IBC",
      "Helping grandchildren with down payments for homes",
      "Biblical stewardship and Proverbs 13:22 legacy planning",
    ],
  },
]

const studentWins = [
  {
    name: "Mike T.",
    business: "Plumbing Company, Tennessee",
    win: "Financed $85K in service trucks through my policy instead of a commercial loan. Saved $8K in interest the first year alone.",
  },
  {
    name: "Sarah K.",
    business: "Coffee Roasting, Colorado",
    win: "Used IBC to fund $120K roasting equipment. Paying myself back instead of an SBA lender—it's a game changer.",
  },
  {
    name: "David R.",
    business: "HVAC Services, Arizona",
    win: "Academy taught me how to structure premiums around my business cash flow. Now building a family bank that will last 3 generations.",
  },
]

export default function AcademyPage() {
  return (
    <main className="bg-cream text-navy">
      {/* Hero Section */}
      <section className="relative bg-navy text-cream py-24 border-b border-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            1322 IBC Academy
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-cream/90 font-heading leading-relaxed">
            FREE Infinite Banking education for Christian entrepreneurs.
            <br />
            No gatekeeping. No pressure. Just truth.
          </p>
          <div className="border-t border-cream/30 pt-12">
            <a
              href="https://www.skool.com/ibc-academy-5448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy px-12 py-4 font-heading font-bold text-lg uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Join 1,000+ Entrepreneurs (Free)
            </a>
          </div>
          <p className="text-sm text-cream/60 mt-6 font-mono">
            Hosted on Skool · Instant access · Cancel anytime (but it's free, so why would you?)
          </p>
        </div>
      </section>

      {/* What You Get Inside */}
      <section id="benefits" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">What You Get Inside</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Everything you need to understand IBC before implementing it in your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {academyBenefits.map((benefit, index) => (
              <div key={benefit.title} className="border-2 border-navy/20 p-8">
                <h3 className="text-2xl font-heading font-bold text-navy mb-4">{benefit.title}</h3>
                <p className="text-lg text-navy/80 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Complete IBC Curriculum</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              From foundational concepts to advanced implementation strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {curriculumModules.map((module, index) => (
              <div key={module.module} className="border-2 border-navy/20 p-8">
                <div className="mb-6">
                  <p className="text-sm font-mono text-copper font-semibold uppercase tracking-wide">
                    {module.module}
                  </p>
                  <h3 className="text-3xl font-heading font-bold text-navy mt-2">{module.title}</h3>
                </div>
                <ul className="space-y-4">
                  {module.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start border-l-2 border-gold pl-4">
                      <span className="text-navy/80 leading-relaxed">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Wins */}
      <section id="wins" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Real Wins from Academy Members</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Christian entrepreneurs implementing what they learned
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {studentWins.map((student, index) => (
              <div key={student.name} className="border-2 border-navy/20 p-8">
                <div className="mb-6">
                  <p className="font-heading font-bold text-xl text-navy">{student.name}</p>
                  <p className="text-sm text-copper font-mono mt-1">{student.business}</p>
                </div>
                <p className="text-navy/80 italic leading-relaxed">"{student.win}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 bg-navy text-cream border-b border-cream/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Is This Academy Right for You?
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start border-l-2 border-gold pl-6">
              <p className="text-xl leading-relaxed">
                You run an established business ($250K-$5M revenue) and are tired of bleeding interest to banks
              </p>
            </div>
            <div className="flex items-start border-l-2 border-gold pl-6">
              <p className="text-xl leading-relaxed">
                You have $2,000+ monthly cash flow available to build a family banking system
              </p>
            </div>
            <div className="flex items-start border-l-2 border-gold pl-6">
              <p className="text-xl leading-relaxed">
                You want to understand IBC thoroughly before making any policy decisions
              </p>
            </div>
            <div className="flex items-start border-l-2 border-gold pl-6">
              <p className="text-xl leading-relaxed">
                You value biblical stewardship (Proverbs 13:22) and multi-generational wealth planning
              </p>
            </div>
          </div>

          <div className="text-center mt-16 pt-16 border-t border-cream/20">
            <blockquote className="text-3xl md:text-4xl font-heading italic text-cream mb-6">
              "A good man leaves an inheritance to his children's children."
            </blockquote>
            <p className="text-cream/70 font-mono uppercase tracking-wide">Proverbs 13:22</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="cta" className="py-24 bg-gold/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
            Join the Academy. Start Learning Today.
          </h2>
          <p className="text-xl text-navy/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            1,000+ Christian entrepreneurs are already inside learning IBC. The community is active, Brad teaches
            weekly, and it costs you absolutely nothing.
          </p>
          <a
            href="https://www.skool.com/ibc-academy-5448"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-navy text-cream px-12 py-5 font-heading font-bold text-xl uppercase tracking-wider hover:bg-navy/90 transition-colors"
          >
            Join Free Academy Now
          </a>
          <p className="text-sm text-navy/60 mt-8">
            No credit card. No obligation. Just immediate access to the full curriculum.
          </p>
        </div>
      </section>
    </main>
  )
}
