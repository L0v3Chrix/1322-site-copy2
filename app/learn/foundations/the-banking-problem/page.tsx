import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The Banking Problem | Foundations | 1322 Legacy Strategies",
  description: "Understand how traditional financing bleeds your business dry and transfers wealth away from your family. Learn the true cost of being a perpetual borrower.",
}

// Table of contents for this lesson
const tableOfContents = [
  { id: "introduction", title: "Introduction" },
  { id: "interest-as-invisible-tax", title: "Interest as Invisible Tax" },
  { id: "the-borrowers-dilemma", title: "The Borrower's Dilemma" },
  { id: "how-banks-profit", title: "How Banks Really Profit" },
  { id: "compounding-against-you", title: "Compounding Against You" },
  { id: "opportunity-cost", title: "The Hidden Opportunity Cost" },
  { id: "volume-of-money", title: "Volume of Money Concept" },
  { id: "breaking-free", title: "Breaking Free" },
  { id: "key-takeaways", title: "Key Takeaways" },
]

export default function TheBankingProblemPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/learn/foundations"
                className="font-mono text-xs uppercase tracking-wider text-gold hover:text-cream transition-colors"
              >
                ← Back to Foundations
              </Link>
            </div>

            {/* Lesson Header */}
            <div className="flex items-start gap-6">
              <span className="font-mono text-6xl md:text-7xl font-bold text-gold">
                02
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-2">
                  Foundations Track • Lesson 2 of 4 • 30 min read
                </p>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  The Banking Problem
                </h1>
                <p className="text-lg text-cream/80 max-w-xl">
                  Understanding how traditional financing bleeds your business dry
                  and transfers wealth away from your family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Concepts Box */}
      <section className="py-8 border-b-2 border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-gold bg-gold/5 p-6">
              <h2 className="font-heading text-lg font-bold text-navy mb-4 flex items-center gap-2">
                <span className="text-gold">◆</span> Key Concepts in This Lesson
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-2 border-gold/50 pl-4">
                  <h3 className="font-heading font-bold text-navy text-sm">Interest Bleed</h3>
                  <p className="text-sm text-navy/70">The continuous drain of wealth through interest payments to external institutions.</p>
                </div>
                <div className="border-l-2 border-gold/50 pl-4">
                  <h3 className="font-heading font-bold text-navy text-sm">Opportunity Cost</h3>
                  <p className="text-sm text-navy/70">What your money could have earned if it stayed in your control instead of flowing to banks.</p>
                </div>
                <div className="border-l-2 border-gold/50 pl-4">
                  <h3 className="font-heading font-bold text-navy text-sm">Volume of Money</h3>
                  <p className="text-sm text-navy/70">Nelson Nash&apos;s concept: it&apos;s not the rate of return, but the volume of dollars you control.</p>
                </div>
                <div className="border-l-2 border-gold/50 pl-4">
                  <h3 className="font-heading font-bold text-navy text-sm">Perpetual Borrower</h3>
                  <p className="text-sm text-navy/70">The cycle most business owners are trapped in: borrowing, repaying, borrowing again.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <article className="prose prose-lg max-w-none">
                {/* Introduction */}
                <section id="introduction" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    Introduction: The Invisible Drain
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Every business owner understands the need for capital. Whether you&apos;re financing equipment,
                    managing inventory, covering payroll during slow seasons, or seizing growth opportunities,
                    access to money is the lifeblood of your enterprise.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    But here&apos;s what most entrepreneurs never stop to calculate: <strong>how much of your
                    hard-earned profit flows out of your business—and your family—through interest payments
                    to banks?</strong>
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    This lesson isn&apos;t about demonizing banks. They serve a purpose in the economy.
                    Instead, it&apos;s about opening your eyes to a mathematical reality that affects every
                    financial decision you make. Once you understand "The Banking Problem," you&apos;ll never
                    look at a loan the same way again.
                  </p>

                  <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                    <p className="text-navy italic font-heading text-lg mb-2">
                      &ldquo;The rich ruleth over the poor, and the borrower is servant to the lender.&rdquo;
                    </p>
                    <p className="text-navy/60 font-mono text-sm">— Proverbs 22:7</p>
                  </div>

                  <p className="text-navy/80 leading-relaxed">
                    Scripture spoke this truth thousands of years ago. When you borrow, you become a servant
                    to the institution that lends. Your labor, your creativity, your risk-taking—a portion
                    of everything you build—flows to someone else&apos;s balance sheet.
                  </p>
                </section>

                {/* Interest as Invisible Tax */}
                <section id="interest-as-invisible-tax" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    Interest: The Invisible Tax on Your Success
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Business owners obsess over taxes—and rightfully so. You hire accountants, implement
                    strategies, and structure your affairs to minimize what you pay to the government.
                    Yet most entrepreneurs pay little attention to an expense that often rivals or exceeds
                    their tax burden: <strong>interest</strong>.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Consider a typical service business doing $750,000 in annual revenue. Let&apos;s say
                    they finance $80,000 worth of vehicles and equipment each year at 7.9% interest over
                    5-year terms. Here&apos;s what that looks like over time:
                  </p>

                  {/* Stats Box */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    <div className="border-2 border-navy/20 p-4 text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">$17,280</span>
                      <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">Interest per Cycle</span>
                    </div>
                    <div className="border-2 border-navy/20 p-4 text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">$34,560</span>
                      <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">Over 10 Years</span>
                    </div>
                    <div className="border-2 border-navy/20 p-4 text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">$69,120</span>
                      <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">Over 20 Years</span>
                    </div>
                    <div className="border-2 border-navy/20 p-4 text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">$103,680</span>
                      <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">Over 30 Years</span>
                    </div>
                  </div>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    And that&apos;s just the interest paid directly to the bank. It doesn&apos;t include the
                    opportunity cost—what those dollars could have earned if they stayed in your ecosystem.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Think about it this way: if you can earn 10% returns in your business (a modest
                    expectation for a successful entrepreneur), every dollar you pay in interest costs
                    you that dollar <em>plus</em> what it could have earned.
                  </p>

                  <div className="bg-navy/5 border-2 border-navy/10 p-6 my-8">
                    <h4 className="font-heading font-bold text-navy mb-3">The True Cost Formula</h4>
                    <p className="font-mono text-navy/80 mb-2">
                      True Cost = Interest Paid + Lost Opportunity on Interest + Lost Opportunity on Principal During Payment Period
                    </p>
                    <p className="text-sm text-navy/60">
                      When you factor in opportunity cost, that $103,680 in interest over 30 years
                      becomes closer to <strong>$350,000+</strong> in wealth that never reached your family.
                    </p>
                  </div>
                </section>

                {/* The Borrower's Dilemma */}
                <section id="the-borrowers-dilemma" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    The Borrower&apos;s Dilemma
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Most business owners find themselves in a recurring cycle:
                  </p>

                  <div className="my-8 space-y-4">
                    <div className="flex items-start gap-4 border-l-4 border-gold pl-4">
                      <span className="font-mono text-xl font-bold text-gold">1</span>
                      <div>
                        <h4 className="font-heading font-bold text-navy">You Need Capital</h4>
                        <p className="text-navy/70">A growth opportunity presents itself. New equipment is needed. A new vehicle is required.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-4 border-gold pl-4">
                      <span className="font-mono text-xl font-bold text-gold">2</span>
                      <div>
                        <h4 className="font-heading font-bold text-navy">You Go to a Bank</h4>
                        <p className="text-navy/70">You apply for financing, provide documentation, wait for approval, accept their terms.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-4 border-gold pl-4">
                      <span className="font-mono text-xl font-bold text-gold">3</span>
                      <div>
                        <h4 className="font-heading font-bold text-navy">You Make Payments</h4>
                        <p className="text-navy/70">For years, you send checks that include principal and interest.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 border-l-4 border-gold pl-4">
                      <span className="font-mono text-xl font-bold text-gold">4</span>
                      <div>
                        <h4 className="font-heading font-bold text-navy">You Finish—and Start Over</h4>
                        <p className="text-navy/70">The loan is paid off, but a new need arises. Back to step 1.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    This is the <strong>perpetual borrower cycle</strong>. It feels normal because everyone
                    around you does it. Car dealers, equipment vendors, and banks have built entire industries
                    around making this cycle seem inevitable.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    But here&apos;s the question successful business owners eventually ask: <em>What if the
                    money I&apos;m paying in interest stayed in my family instead?</em>
                  </p>
                </section>

                {/* How Banks Really Profit */}
                <section id="how-banks-profit" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    How Banks Really Profit (And Why You Should Care)
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Understanding how banks work illuminates why The Banking Problem exists—and suggests
                    an alternative approach.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Banks operate on a simple principle: <strong>they pool money from many sources and
                    lend it out at higher rates than they pay to acquire it</strong>. The difference—the
                    "spread"—is their profit.
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-2 border-navy/20">
                      <thead className="bg-navy/5">
                        <tr>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20">What Banks Do</th>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20">Their Cost</th>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20">What They Charge</th>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20">Their Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 text-navy/70">Accept deposits (savings accounts)</td>
                          <td className="p-4 font-mono text-navy/70">0.5% - 2%</td>
                          <td className="p-4 text-navy/70">-</td>
                          <td className="p-4 text-navy/70">-</td>
                        </tr>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 text-navy/70">Lend to consumers (auto loans)</td>
                          <td className="p-4 text-navy/70">-</td>
                          <td className="p-4 font-mono text-navy/70">6% - 12%</td>
                          <td className="p-4 font-mono text-gold font-bold">4% - 10%</td>
                        </tr>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 text-navy/70">Lend to businesses (equipment)</td>
                          <td className="p-4 text-navy/70">-</td>
                          <td className="p-4 font-mono text-navy/70">7% - 15%</td>
                          <td className="p-4 font-mono text-gold font-bold">5% - 13%</td>
                        </tr>
                        <tr>
                          <td className="p-4 text-navy/70">Lend for real estate (mortgages)</td>
                          <td className="p-4 text-navy/70">-</td>
                          <td className="p-4 font-mono text-navy/70">6% - 8%</td>
                          <td className="p-4 font-mono text-gold font-bold">4% - 6%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    But here&apos;s what&apos;s really interesting: banks don&apos;t just earn the spread on your
                    loan. Through <strong>fractional reserve banking</strong>, they can lend out significantly
                    more than they actually have in deposits. A bank with $1 million in deposits might have
                    $10 million or more in outstanding loans.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    This is perfectly legal—it&apos;s how the banking system works. But it means your interest
                    payments are generating returns far beyond what the bank paid to acquire that capital.
                  </p>

                  <div className="border-l-4 border-gold pl-6 my-8 py-2">
                    <p className="text-navy font-heading text-lg">
                      The question isn&apos;t &ldquo;Are banks evil?&rdquo; They&apos;re not—they&apos;re
                      doing exactly what banks do. The question is: <strong>&ldquo;Why am I always on the
                      borrowing side of this equation?&rdquo;</strong>
                    </p>
                  </div>
                </section>

                {/* Compounding Against You */}
                <section id="compounding-against-you" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    Compounding: A Force That Works For—or Against—You
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Einstein allegedly called compound interest the eighth wonder of the world. Whether
                    he actually said it or not, the math is undeniable: small amounts, given time, become
                    enormous sums.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    When you&apos;re saving and investing, compounding is your friend. A dollar today becomes
                    two dollars in 7-10 years at reasonable returns, then four, then eight, then sixteen.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    But when you&apos;re borrowing, <strong>compounding works against you</strong>. The interest
                    you pay represents dollars that can no longer compound in your favor. Worse, those
                    dollars compound in the bank&apos;s favor instead.
                  </p>

                  <div className="bg-navy text-cream p-8 my-8">
                    <h4 className="font-heading text-xl font-bold text-gold mb-6">The Compound Effect: A 30-Year Comparison</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-3">Scenario A: Keep Paying Banks</h5>
                        <ul className="space-y-2 text-cream/80">
                          <li>• Pay $103,680 in interest over 30 years</li>
                          <li>• That money compounds for the bank</li>
                          <li>• At 30 years: $0 remaining from interest payments</li>
                          <li>• Next generation starts from scratch</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-mono text-xs uppercase tracking-wider text-cream/60 mb-3">Scenario B: Recapture Interest</h5>
                        <ul className="space-y-2 text-cream/80">
                          <li>• Same dollars go into your system</li>
                          <li>• That money compounds for your family</li>
                          <li>• At 30 years: $350,000+ in family wealth</li>
                          <li>• Next generation starts with momentum</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt-6 text-cream/60 text-sm font-mono">
                      Assumes 7% annual compound growth. Actual results vary.
                    </p>
                  </div>

                  <p className="text-navy/80 leading-relaxed">
                    This is the fundamental insight behind Infinite Banking: <strong>it&apos;s not about
                    finding a better investment—it&apos;s about recapturing the banking function itself</strong>.
                  </p>
                </section>

                {/* Opportunity Cost */}
                <section id="opportunity-cost" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    The Hidden Opportunity Cost
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    When financial advisors talk about opportunity cost, they usually mean choosing
                    Investment A over Investment B. But the biggest opportunity cost for business owners
                    is far more fundamental: <strong>the money that leaves your ecosystem entirely</strong>.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Consider what you could do with the interest dollars you currently pay to banks:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="border-2 border-navy/20 p-6">
                      <h4 className="font-heading font-bold text-navy mb-3">Business Reinvestment</h4>
                      <ul className="space-y-2 text-navy/70">
                        <li>• Hire additional staff</li>
                        <li>• Invest in marketing</li>
                        <li>• Upgrade technology</li>
                        <li>• Expand operations</li>
                      </ul>
                    </div>
                    <div className="border-2 border-navy/20 p-6">
                      <h4 className="font-heading font-bold text-navy mb-3">Wealth Building</h4>
                      <ul className="space-y-2 text-navy/70">
                        <li>• Real estate investments</li>
                        <li>• Retirement contributions</li>
                        <li>• Children&apos;s education funds</li>
                        <li>• Emergency reserves</li>
                      </ul>
                    </div>
                    <div className="border-2 border-navy/20 p-6">
                      <h4 className="font-heading font-bold text-navy mb-3">Family Legacy</h4>
                      <ul className="space-y-2 text-navy/70">
                        <li>• Generational wealth transfer</li>
                        <li>• Family foundation funding</li>
                        <li>• Estate planning vehicles</li>
                        <li>• Charitable giving</li>
                      </ul>
                    </div>
                    <div className="border-2 border-navy/20 p-6">
                      <h4 className="font-heading font-bold text-navy mb-3">Quality of Life</h4>
                      <ul className="space-y-2 text-navy/70">
                        <li>• Reduced financial stress</li>
                        <li>• More family time</li>
                        <li>• Earlier retirement option</li>
                        <li>• Greater flexibility</li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-navy/80 leading-relaxed">
                    Every dollar of interest that leaves your family is a dollar—plus all its future
                    growth—that will never serve your mission, support your children, or fund your legacy.
                  </p>
                </section>

                {/* Volume of Money */}
                <section id="volume-of-money" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    Nelson Nash&apos;s &ldquo;Volume of Money&rdquo; Insight
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Nelson Nash, the creator of the Infinite Banking Concept, had a crucial insight that
                    most financial thinking misses entirely:
                  </p>

                  <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                    <p className="text-navy font-heading text-xl italic">
                      &ldquo;It&apos;s not the rate of return that matters most—it&apos;s the volume
                      of money that flows through your system.&rdquo;
                    </p>
                  </div>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    What does this mean? Consider two business owners:
                  </p>

                  <div className="overflow-x-auto my-8">
                    <table className="w-full border-2 border-navy/20">
                      <thead className="bg-navy/5">
                        <tr>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20"></th>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20">Owner A</th>
                          <th className="p-4 text-left font-heading font-bold text-navy border-b border-navy/20">Owner B</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 font-bold text-navy">Investment Return</td>
                          <td className="p-4 font-mono text-navy/70">12% annually</td>
                          <td className="p-4 font-mono text-navy/70">6% annually</td>
                        </tr>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 font-bold text-navy">Capital Invested</td>
                          <td className="p-4 font-mono text-navy/70">$100,000</td>
                          <td className="p-4 font-mono text-navy/70">$100,000</td>
                        </tr>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 font-bold text-navy">Interest Paid Out</td>
                          <td className="p-4 font-mono text-navy/70">$8,000/year (to banks)</td>
                          <td className="p-4 font-mono text-navy/70">$0 (to self)</td>
                        </tr>
                        <tr className="border-b border-navy/10">
                          <td className="p-4 font-bold text-navy">Net Retention</td>
                          <td className="p-4 font-mono text-navy/70">$4,000/year</td>
                          <td className="p-4 font-mono text-navy/70">$6,000/year</td>
                        </tr>
                        <tr>
                          <td className="p-4 font-bold text-navy">20-Year Result</td>
                          <td className="p-4 font-mono text-gold font-bold">~$180,000</td>
                          <td className="p-4 font-mono text-gold font-bold">~$320,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Owner A has the &ldquo;better&rdquo; investment return. But Owner B—by eliminating the
                    interest bleed—ends up with significantly more wealth. <strong>The volume of money
                    retained matters more than the rate of return on a smaller base.</strong>
                  </p>

                  <p className="text-navy/80 leading-relaxed">
                    This is why successful business owners eventually realize: the game isn&apos;t about
                    finding higher returns. It&apos;s about plugging the leaks where money escapes your system.
                  </p>
                </section>

                {/* Breaking Free */}
                <section id="breaking-free" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    Breaking Free: From Borrower to Banker
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    The Banking Problem isn&apos;t solved by finding a better bank, negotiating lower rates,
                    or avoiding financing altogether (which would limit your growth). The solution is
                    more fundamental: <strong>become your own banker</strong>.
                  </p>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    This is the core promise of the Infinite Banking Concept. Instead of paying interest
                    to outside institutions, you create your own banking system within your family. The
                    interest you pay goes to a system you control—and ultimately benefits your heirs.
                  </p>

                  <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                    <p className="text-navy italic font-heading text-lg mb-2">
                      &ldquo;A good man leaveth an inheritance to his children&apos;s children.&rdquo;
                    </p>
                    <p className="text-navy/60 font-mono text-sm">— Proverbs 13:22</p>
                  </div>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    We&apos;ll explore <em>how</em> this works in the next lessons. For now, the important
                    realization is this: <strong>the banking function is not optional in a business owner&apos;s
                    life</strong>. You will need capital. You will need financing. The only question is:
                    who benefits from that financing?
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <div className="border-2 border-navy/30 p-6 bg-navy/5">
                      <h4 className="font-heading font-bold text-navy mb-4">Traditional Path</h4>
                      <ul className="space-y-3 text-navy/70">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Bank benefits from your interest</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Compounding works against you</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Wealth transfers out of family</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600">✗</span>
                          <span>Each generation starts over</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border-2 border-gold p-6 bg-gold/5">
                      <h4 className="font-heading font-bold text-navy mb-4">IBC Path</h4>
                      <ul className="space-y-3 text-navy/70">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Your family benefits from interest</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Compounding works for you</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Wealth stays in family system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600">✓</span>
                          <span>Each generation builds on previous</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Key Takeaways */}
                <section id="key-takeaways" className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    Key Takeaways from This Lesson
                  </h2>

                  <div className="border-2 border-gold bg-gold/5 p-6">
                    <ol className="space-y-4">
                      <li className="flex items-start gap-4">
                        <span className="font-mono text-xl font-bold text-gold shrink-0">01</span>
                        <div>
                          <h4 className="font-heading font-bold text-navy">Interest is an invisible tax on your success</h4>
                          <p className="text-navy/70">Most business owners never calculate how much interest bleeds from their business each year—and across a lifetime.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="font-mono text-xl font-bold text-gold shrink-0">02</span>
                        <div>
                          <h4 className="font-heading font-bold text-navy">The perpetual borrower cycle is not inevitable</h4>
                          <p className="text-navy/70">Just because everyone finances through banks doesn&apos;t mean you have to. There&apos;s another way.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="font-mono text-xl font-bold text-gold shrink-0">03</span>
                        <div>
                          <h4 className="font-heading font-bold text-navy">Opportunity cost is the real killer</h4>
                          <p className="text-navy/70">The money you pay in interest isn&apos;t just lost—it&apos;s lost plus everything it could have earned for your family.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="font-mono text-xl font-bold text-gold shrink-0">04</span>
                        <div>
                          <h4 className="font-heading font-bold text-navy">Volume of money beats rate of return</h4>
                          <p className="text-navy/70">Keeping more money in your system matters more than chasing higher investment returns.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="font-mono text-xl font-bold text-gold shrink-0">05</span>
                        <div>
                          <h4 className="font-heading font-bold text-navy">The solution is becoming your own banker</h4>
                          <p className="text-navy/70">Instead of eliminating the banking function, recapture it for your family&apos;s benefit.</p>
                        </div>
                      </li>
                    </ol>
                  </div>
                </section>

                {/* Next Steps */}
                <section className="mb-12">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                    What&apos;s Next?
                  </h2>

                  <p className="text-navy/80 leading-relaxed mb-6">
                    Now that you understand The Banking Problem, you&apos;re ready to learn about the vehicle
                    that makes Infinite Banking possible. In the next lesson, we&apos;ll explore why
                    <strong> dividend-paying whole life insurance</strong>—and specifically policies from
                    mutual insurance companies—is the foundation of this strategy.
                  </p>

                  <p className="text-navy/80 leading-relaxed">
                    We&apos;ll address common objections, explain why other insurance products don&apos;t work
                    for this purpose, and help you understand what makes a policy &ldquo;IBC-ready.&rdquo;
                  </p>
                </section>
              </article>

              {/* Sidebar */}
              <aside className="hidden lg:block">
                <div className="sticky top-8 space-y-8">
                  {/* Table of Contents */}
                  <div className="border-2 border-navy/20 p-6">
                    <h3 className="font-heading text-sm font-bold text-navy mb-4 uppercase tracking-wider">
                      In This Lesson
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-navy/60 hover:text-gold transition-colors py-1 border-l-2 border-transparent hover:border-gold pl-3 -ml-[2px]"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Calculator CTA */}
                  <div className="border-2 border-gold bg-gold/5 p-6">
                    <h3 className="font-heading text-lg font-bold text-navy mb-2">
                      Calculate Your Interest Bleed
                    </h3>
                    <p className="text-sm text-navy/70 mb-4">
                      See exactly how much bank dependency costs your business over time.
                    </p>
                    <Link
                      href="/tools/interest-bleed-calculator"
                      className="block w-full bg-gold text-navy text-center px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
                    >
                      Open Calculator
                    </Link>
                  </div>

                  {/* Track Progress */}
                  <div className="border-2 border-navy/20 p-6">
                    <h3 className="font-heading text-sm font-bold text-navy mb-4 uppercase tracking-wider">
                      Foundations Track
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-gold/20 border border-gold text-gold font-mono text-xs flex items-center justify-center">✓</span>
                        <span className="text-sm text-navy/60">01. What is IBC?</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-gold text-navy font-mono text-xs flex items-center justify-center font-bold">2</span>
                        <span className="text-sm text-navy font-medium">02. The Banking Problem</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 border border-navy/20 text-navy/40 font-mono text-xs flex items-center justify-center">3</span>
                        <span className="text-sm text-navy/40">03. Whole Life Explained</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 border border-navy/20 text-navy/40 font-mono text-xs flex items-center justify-center">4</span>
                        <span className="text-sm text-navy/40">04. The IBC Concept</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Navigation */}
      <section className="py-8 border-t-2 border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <Link
                href="/learn/foundations/what-is-ibc"
                className="group flex items-center gap-4 border-2 border-navy/20 p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-2xl text-gold">←</span>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">Previous Lesson</span>
                  <span className="block font-heading font-bold text-navy group-hover:text-gold transition-colors">What is Infinite Banking?</span>
                </div>
              </Link>

              <Link
                href="/learn/foundations/whole-life-explained"
                className="group flex items-center gap-4 border-2 border-navy/20 p-4 hover:border-gold transition-colors text-right md:text-left md:flex-row-reverse"
              >
                <span className="font-mono text-2xl text-gold">→</span>
                <div>
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">Next Lesson</span>
                  <span className="block font-heading font-bold text-navy group-hover:text-gold transition-colors">Whole Life vs Everything Else</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">
              Related Content
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/tools/interest-bleed-calculator"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Tool</span>
                <h3 className="font-heading font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Interest Bleed Calculator
                </h3>
                <p className="text-sm text-navy/60">
                  Calculate exactly how much bank financing costs your business.
                </p>
              </Link>

              <Link
                href="/case-studies/mikes-hvac"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Case Study</span>
                <h3 className="font-heading font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Mike&apos;s HVAC Story
                </h3>
                <p className="text-sm text-navy/60">
                  How Mike stopped paying $32K/year in interest to banks.
                </p>
              </Link>

              <a
                href="https://www.skool.com/1322-ibc-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Community</span>
                <h3 className="font-heading font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Discuss This Lesson
                </h3>
                <p className="text-sm text-navy/60">
                  Join the free Academy and discuss with fellow entrepreneurs.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
