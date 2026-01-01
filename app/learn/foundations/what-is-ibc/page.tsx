import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What is Infinite Banking? | Foundations | 1322 Legacy Strategies",
  description: "An introduction to the Infinite Banking Concept and why it matters for business owners who think generationally.",
}

export default function WhatIsIBCPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Lesson Header */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/learn/foundations"
                className="font-mono text-xs uppercase tracking-wider text-gold hover:text-cream transition-colors"
              >
                ← Foundations Track
              </Link>
            </div>

            {/* Lesson Info */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1">
                Lesson 1 of 4
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-cream/60">
                25 min read
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              What is Infinite Banking?
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              An introduction to the Infinite Banking Concept and why it matters
              for business owners who think generationally.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-4 border-b border-navy/10 sticky top-20 bg-cream z-40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-1 bg-navy/10">
              <div className="h-full bg-gold transition-all" style={{ width: '0%' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Article Content */}
              <article className="prose-navy">
                {/* Key Concepts Box */}
                <div className="border-2 border-gold p-6 mb-12 not-prose">
                  <h2 className="font-mono text-xs uppercase tracking-wider text-gold mb-4">
                    Key Concepts in This Lesson
                  </h2>
                  <ul className="space-y-2">
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Infinite Banking Concept (IBC):</strong> A strategy for using dividend-paying whole life insurance as a personal banking system
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Policy Loans:</strong> Borrowing against your policy&apos;s cash value while it continues to grow
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Recapturing Interest:</strong> Paying yourself back instead of paying banks
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Generational Wealth:</strong> Building assets that transfer to future generations
                    </li>
                  </ul>
                </div>

                {/* Introduction */}
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                  The Discovery That Changed Everything
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  In 1980, a forestry consultant named R. Nelson Nash had a problem. He was deeply in debt,
                  paying enormous amounts of interest to banks, and watching his wealth transfer out of his
                  family and into the pockets of financial institutions.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  As a numbers man, Nash started asking uncomfortable questions: Where does money come from?
                  How do banks actually work? And most importantly &mdash; why was he always on the losing end
                  of every financial transaction?
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  His research led him to a startling realization: <strong>the banking function was the most
                  profitable business in existence</strong>, and he had been voluntarily giving that profit
                  away his entire life.
                </p>

                {/* Quote Block */}
                <div className="border-l-4 border-gold pl-6 my-10 not-prose">
                  <p className="font-heading text-xl italic text-navy/90 mb-2">
                    &ldquo;If you know what&apos;s happening, you&apos;ll know what to do.&rdquo;
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold">
                    R. Nelson Nash, &ldquo;Becoming Your Own Banker&rdquo;
                  </p>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  What Nash Discovered About Banking
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Nash realized that banks operate on a simple principle: they take in deposits, pay a small
                  amount of interest, lend that money out at a higher rate, and pocket the difference. The
                  spread between what they pay and what they charge is pure profit.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  But here&apos;s what most people miss: <strong>you don&apos;t need a building and a charter
                  to perform the banking function</strong>. You just need a pool of capital that grows
                  consistently and that you can borrow against.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  Nash found that vehicle in dividend-paying whole life insurance from mutual companies.
                  The policy builds cash value that grows tax-deferred, pays dividends, and can be borrowed
                  against while continuing to grow &mdash; creating what he called the &ldquo;Infinite Banking
                  Concept.&rdquo;
                </p>

                {/* Stats Box */}
                <div className="grid grid-cols-2 gap-6 my-10 not-prose">
                  <div className="border-2 border-navy/20 p-6 text-center">
                    <span className="block font-mono text-4xl font-bold text-gold">$600B+</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mt-2">
                      Annual interest paid to banks by U.S. businesses
                    </span>
                  </div>
                  <div className="border-2 border-navy/20 p-6 text-center">
                    <span className="block font-mono text-4xl font-bold text-gold">100%</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mt-2">
                      Of that interest leaves your family forever
                    </span>
                  </div>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Why Business Owners Are Ideal Candidates
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Nash&apos;s concept isn&apos;t just for wealthy individuals. It&apos;s particularly powerful
                  for business owners who regularly need capital for:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Equipment purchases</strong> &mdash; Vehicles, machinery, tools, and technology
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Inventory financing</strong> &mdash; Seasonal stock, raw materials, supplies
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Real estate</strong> &mdash; Office space, warehouses, investment properties
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Business expansion</strong> &mdash; New locations, acquisitions, hiring
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Emergency reserves</strong> &mdash; Cash flow gaps, unexpected opportunities
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  Every time you finance one of these through a bank, you pay interest that leaves your
                  family permanently. With IBC, you still pay interest &mdash; but you pay it to yourself,
                  and your policy continues growing as if you never borrowed.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Consumer vs. Owner Mindset
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  This is perhaps the most important shift Nash teaches. Most people think like consumers:
                  they earn money, spend it, and whatever is left over (if anything) goes into savings.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Owners think differently. They understand that <strong>every dollar has a job</strong>,
                  and the most important job is to multiply. When you need to make a purchase, the question
                  isn&apos;t &ldquo;can I afford the payment?&rdquo; but rather &ldquo;how can I make this
                  purchase while keeping my capital working for me?&rdquo;
                </p>

                {/* Comparison Table */}
                <div className="my-10 not-prose">
                  <div className="grid grid-cols-2 gap-0 border-2 border-navy/20">
                    <div className="bg-red-50 p-6 border-b border-r border-navy/20">
                      <span className="font-mono text-xs uppercase tracking-wider text-red-600">Consumer Mindset</span>
                    </div>
                    <div className="bg-green-50 p-6 border-b border-navy/20">
                      <span className="font-mono text-xs uppercase tracking-wider text-green-600">Owner Mindset</span>
                    </div>
                    <div className="p-4 border-b border-r border-navy/10 text-sm text-navy/70">
                      Pay cash, lose opportunity cost
                    </div>
                    <div className="p-4 border-b border-navy/10 text-sm text-navy/70">
                      Use policy loan, keep capital growing
                    </div>
                    <div className="p-4 border-b border-r border-navy/10 text-sm text-navy/70">
                      Finance through bank, pay interest out
                    </div>
                    <div className="p-4 border-b border-navy/10 text-sm text-navy/70">
                      Borrow from yourself, pay interest back
                    </div>
                    <div className="p-4 border-r border-navy/10 text-sm text-navy/70">
                      Wealth transfers to institutions
                    </div>
                    <div className="p-4 text-sm text-navy/70">
                      Wealth stays in the family
                    </div>
                  </div>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Generational Perspective
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  At 1322 Legacy Strategies, we named our company after Proverbs 13:22: &ldquo;A good man
                  leaves an inheritance to his children&apos;s children.&rdquo; This verse captures the
                  essence of what IBC is really about.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  It&apos;s not just about optimizing your own finances. It&apos;s about building a system
                  that your children will use, that their children will use, and that grows stronger with
                  each generation.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  When you understand IBC through this lens, the question isn&apos;t &ldquo;is this worth
                  it for me?&rdquo; but rather &ldquo;what kind of financial foundation am I building for
                  my descendants?&rdquo;
                </p>

                {/* Scripture Block */}
                <div className="border-2 border-gold/30 bg-gold/5 p-6 my-10 not-prose">
                  <p className="font-heading text-lg italic text-navy/90 mb-2">
                    &ldquo;A good man leaves an inheritance to his children&apos;s children, but the sinner&apos;s
                    wealth is laid up for the righteous.&rdquo;
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold">
                    Proverbs 13:22
                  </p>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  What IBC Is Not
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Before we go further, let&apos;s clear up some common misconceptions:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">It&apos;s not a get-rich-quick scheme.</strong> Building a
                    functional family bank takes years of consistent funding.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">It&apos;s not about the insurance.</strong> The death
                    benefit is important, but it&apos;s a secondary benefit to the living benefits.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">It&apos;s not for everyone.</strong> You need stable income
                    and the discipline to pay yourself back.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">It&apos;s not a magic solution.</strong> It requires
                    understanding, commitment, and proper policy design.
                  </li>
                </ul>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Key Takeaways
                </h2>

                <div className="border-2 border-navy/20 p-6 my-8 not-prose">
                  <ol className="space-y-4">
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">1.</strong> IBC uses dividend-paying whole life insurance
                      as a personal banking system for financing major purchases.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">2.</strong> The goal is to recapture the interest you
                      would otherwise pay to banks and keep it in your family.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">3.</strong> Business owners are ideal candidates because
                      they regularly need capital for equipment, inventory, and expansion.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">4.</strong> The ultimate purpose is building
                      multi-generational wealth &mdash; an inheritance for your children&apos;s children.
                    </li>
                  </ol>
                </div>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  In the next lesson, we&apos;ll dive deeper into &ldquo;The Banking Problem&rdquo; &mdash;
                  understanding exactly how traditional financing bleeds your business dry and transfers
                  wealth away from your family.
                </p>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  {/* Table of Contents */}
                  <div className="border-2 border-navy/20 p-6 mb-6">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-gold mb-4">
                      In This Lesson
                    </h3>
                    <nav className="space-y-2">
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        The Discovery That Changed Everything
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        What Nash Discovered About Banking
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Why Business Owners Are Ideal
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Consumer vs. Owner Mindset
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        The Generational Perspective
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        What IBC Is Not
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Key Takeaways
                      </a>
                    </nav>
                  </div>

                  {/* Calculator CTA */}
                  <div className="border-2 border-gold/30 bg-gold/5 p-6">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-gold mb-2">
                      Interactive Tool
                    </h3>
                    <p className="text-sm text-navy/70 mb-4">
                      See how much interest you&apos;re currently paying to banks.
                    </p>
                    <Link
                      href="/tools/interest-bleed-calculator"
                      className="block text-center bg-gold text-navy px-4 py-2 font-mono text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
                    >
                      Open Calculator
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Navigation */}
      <section className="py-8 border-t border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div className="text-left">
              <span className="block font-mono text-xs uppercase tracking-wider text-navy/40 mb-1">
                Previous
              </span>
              <Link
                href="/learn/foundations"
                className="font-heading text-navy hover:text-gold transition-colors"
              >
                ← Back to Track
              </Link>
            </div>

            <Link
              href="/learn/foundations/the-banking-problem"
              className="bg-gold text-navy px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Next Lesson →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-xl font-bold text-navy mb-6">
              Related Content
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/case-studies/mikes-hvac"
                className="border-2 border-navy/20 bg-cream p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Case Study</span>
                <h3 className="font-heading text-sm font-bold text-navy mt-1">Mike&apos;s HVAC Story</h3>
              </Link>
              <Link
                href="/tools/interest-bleed-calculator"
                className="border-2 border-navy/20 bg-cream p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Calculator</span>
                <h3 className="font-heading text-sm font-bold text-navy mt-1">Interest Bleed Calculator</h3>
              </Link>
              <a
                href="https://www.skool.com/ibc-academy-5448"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy/20 bg-cream p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Community</span>
                <h3 className="font-heading text-sm font-bold text-navy mt-1">Discuss in Academy</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
