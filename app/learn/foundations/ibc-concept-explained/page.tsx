import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "The IBC Concept Explained | Foundations | 1322 Legacy Strategies",
  description: "Putting it all together: how to use your policy as your family's banking system for business financing.",
}

export default function IBCConceptExplainedPage() {
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
                Lesson 4 of 4
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-cream/60">
                40 min read
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The IBC Concept Explained
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              Putting it all together: how to use your policy as your family&apos;s banking
              system for business financing.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-4 border-b border-navy/10 sticky top-20 bg-cream z-40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-1 bg-navy/10">
              <div className="h-full bg-gold transition-all" style={{ width: '75%' }}></div>
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
                      <strong>Policy Loan:</strong> Borrowing from the insurance company using your cash value as collateral
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Capitalization Phase:</strong> The first 3-7 years when you focus on building policy cash value
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>The Infinite Loop:</strong> Deposit → Grow → Borrow → Repay → Repeat
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Uninterrupted Compounding:</strong> Your cash value grows even while you have loans outstanding
                    </li>
                  </ul>
                </div>

                {/* Introduction */}
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                  Nelson Nash&apos;s Discovery
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  In the previous lessons, you learned about the banking problem, how interest bleeds
                  wealth from your family, and why whole life insurance from a mutual company is the
                  ideal vehicle for IBC. Now it&apos;s time to put it all together.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  R. Nelson Nash didn&apos;t invent whole life insurance or policy loans &mdash; those
                  had existed for over a century. What he did was recognize how to use them
                  systematically to replicate the banking function within a family.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  His insight was simple but profound: <strong>if banks profit by being in the middle
                  of every financial transaction, you can capture that profit by becoming your own
                  banker</strong>.
                </p>

                {/* Quote Block */}
                <div className="border-l-4 border-gold pl-6 my-10 not-prose">
                  <p className="font-heading text-xl italic text-navy/90 mb-2">
                    &ldquo;The need for finance is so great that if you don&apos;t do it yourself,
                    you&apos;re going to have to hire someone to do it for you.&rdquo;
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold">
                    R. Nelson Nash, &ldquo;Becoming Your Own Banker&rdquo;
                  </p>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Core Principle: Becoming Your Own Banker
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Every business owner needs capital. You finance equipment, inventory, vehicles,
                  real estate, and sometimes even payroll during slow periods. The question isn&apos;t
                  whether you&apos;ll need financing &mdash; it&apos;s where that financing comes from.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Your three options are:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Pay cash</strong> &mdash; You interrupt your money&apos;s
                    compounding and lose the opportunity cost of what that capital could have earned.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Use traditional financing</strong> &mdash; You pay
                    interest to a bank, permanently transferring wealth out of your family.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Be your own banker</strong> &mdash; You borrow from
                    your policy, your cash value keeps compounding, and the interest you pay goes back
                    into your own system.
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  IBC is option three &mdash; systematically using your whole life policy as the
                  financing source for major purchases, then paying yourself back with interest.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Banking Equation
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  To understand IBC, you need to understand how banking works. Every bank performs
                  three basic functions:
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-10 not-prose">
                  <div className="border-2 border-navy/20 p-6">
                    <span className="block font-mono text-4xl font-bold text-gold mb-2">1</span>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2">Accept Deposits</h3>
                    <p className="text-sm text-navy/70">
                      They take in capital from depositors, paying them a small rate of interest.
                    </p>
                  </div>
                  <div className="border-2 border-navy/20 p-6">
                    <span className="block font-mono text-4xl font-bold text-gold mb-2">2</span>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2">Make Loans</h3>
                    <p className="text-sm text-navy/70">
                      They lend that capital to borrowers at a higher rate of interest.
                    </p>
                  </div>
                  <div className="border-2 border-navy/20 p-6">
                    <span className="block font-mono text-4xl font-bold text-gold mb-2">3</span>
                    <h3 className="font-heading text-lg font-bold text-navy mb-2">Profit from Spread</h3>
                    <p className="text-sm text-navy/70">
                      The difference between what they pay and what they charge is profit.
                    </p>
                  </div>
                </div>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  With IBC, you replicate this process within your own family. Your premium payments
                  are the &ldquo;deposits.&rdquo; Your policy loans are the &ldquo;lending function.&rdquo;
                  And the growth of your cash value plus the interest you pay yourself represents your
                  &ldquo;profit.&rdquo;
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  How Policy Loans Work
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  This is where many people get confused, so let&apos;s be precise. When you take a
                  policy loan, you&apos;re not actually withdrawing your cash value. Here&apos;s what
                  really happens:
                </p>

                <ol className="space-y-6 my-8 not-prose">
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Step 1:</strong> You request a loan from the
                    insurance company. This can be done with a simple phone call or online form
                    &mdash; no credit check, no application, no questions about why you need the money.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Step 2:</strong> The insurance company sends you
                    a check from their general fund. Your cash value is pledged as collateral, but
                    it stays in your policy, continuing to earn interest and dividends.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Step 3:</strong> You use the money for whatever
                    purpose you need &mdash; business equipment, real estate, or even personal expenses.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Step 4:</strong> You repay the loan on your own
                    schedule. There&apos;s no set repayment term &mdash; you control the pace.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Step 5:</strong> As you repay, your loan balance
                    decreases and your available credit increases for the next use.
                  </li>
                </ol>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  The key insight: <strong>your cash value never stopped growing</strong>. While you
                  had the loan outstanding, your policy continued to earn interest and dividends as
                  if you had never touched it. This is what Nelson Nash called &ldquo;uninterrupted
                  compounding.&rdquo;
                </p>

                {/* Stats Box */}
                <div className="grid grid-cols-2 gap-6 my-10 not-prose">
                  <div className="border-2 border-navy/20 p-6 text-center">
                    <span className="block font-mono text-4xl font-bold text-gold">24-48 hrs</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mt-2">
                      Typical time to receive policy loan funds
                    </span>
                  </div>
                  <div className="border-2 border-navy/20 p-6 text-center">
                    <span className="block font-mono text-4xl font-bold text-gold">$0</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mt-2">
                      Required minimum monthly payment
                    </span>
                  </div>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Infinite Loop Explained
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  The &ldquo;infinite&rdquo; in Infinite Banking refers to the cycle you can repeat
                  indefinitely once your system is established:
                </p>

                <div className="border-2 border-gold/30 bg-gold/5 p-6 my-10 not-prose">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">Deposit</span>
                      <span className="block text-sm text-navy/60">Pay premiums</span>
                    </div>
                    <span className="text-gold text-2xl">→</span>
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">Grow</span>
                      <span className="block text-sm text-navy/60">Earn dividends</span>
                    </div>
                    <span className="text-gold text-2xl">→</span>
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">Borrow</span>
                      <span className="block text-sm text-navy/60">Use capital</span>
                    </div>
                    <span className="text-gold text-2xl">→</span>
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">Repay</span>
                      <span className="block text-sm text-navy/60">With interest</span>
                    </div>
                    <span className="text-gold text-2xl">→</span>
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-gold">Repeat</span>
                      <span className="block text-sm text-navy/60">Forever</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  Each cycle strengthens your family bank. Your cash value grows, your borrowing
                  capacity increases, and the wealth that used to leave your family for traditional
                  banks now stays in your control. Over generations, this creates a self-perpetuating
                  family financial system.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Your First 5 Years: Realistic Expectations
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  IBC is not a get-rich-quick scheme. Here&apos;s what to realistically expect in
                  your first years:
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  Year 1: The Foundation
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Your first-year cash value will typically be 60-80% of your premium, depending
                  on policy design. This isn&apos;t a loss &mdash; it&apos;s the cost of acquiring
                  a lifelong asset. You&apos;ll have some borrowing capacity, but this year is
                  primarily about establishing your system.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  Years 2-3: The Capitalization Phase
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Your cash value accelerates due to dividends and the design of your policy.
                  By year 3, most policies have broken even &mdash; meaning your cash value equals
                  or exceeds your total premiums paid. Your borrowing capacity is now substantial.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  Years 4-5: Active Banking
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  This is when IBC truly comes alive. You have significant cash value, your policy
                  is generating meaningful dividends, and you can use your family bank for major
                  purchases. The system is now self-sustaining.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  Year 10 and Beyond: Generational Wealth
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  A decade into IBC, your cash value is substantial, your dividends are significant,
                  and you&apos;ve likely recaptured thousands in interest that would have gone to
                  banks. Now you can start thinking about policies for your children and
                  grandchildren, extending the system across generations.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Common Implementation Mistakes
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Even understanding IBC conceptually, many people make these mistakes when
                  implementing it:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Not paying yourself back:</strong> If you borrow
                    but never repay, you&apos;re just using your policy as a piggy bank, not a banking
                    system. Discipline is essential.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Wrong policy design:</strong> Traditional whole
                    life policies prioritize death benefit over cash value. IBC policies are
                    designed differently. Work with an IBC-trained advisor.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Underfunding:</strong> A policy that&apos;s too
                    small won&apos;t generate enough cash value to be useful. Premium capacity
                    matters.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Impatience:</strong> Some people give up before
                    the capitalization phase completes. IBC requires a long-term perspective.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Borrowing too early:</strong> Heavy borrowing
                    in year 1-2 can stress a new policy. Let it build first.
                  </li>
                </ul>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Is IBC Right for You?
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  IBC works best for business owners who:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Have stable, predictable income</strong> &mdash;
                    You need to fund premiums consistently for years.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Regularly need capital</strong> &mdash; If you
                    finance equipment, vehicles, or inventory, IBC captures the interest.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Think long-term</strong> &mdash; This is a
                    multi-generational strategy, not a short-term hack.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Value control</strong> &mdash; You want to make
                    financial decisions without bank approval or market volatility.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Want to leave a legacy</strong> &mdash; You&apos;re
                    building for your children&apos;s children, not just yourself.
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  If these describe you, IBC is worth serious consideration. If they don&apos;t,
                  there&apos;s no shame in that &mdash; this strategy isn&apos;t for everyone.
                </p>

                {/* Scripture Block */}
                <div className="border-2 border-gold/30 bg-gold/5 p-6 my-10 not-prose">
                  <p className="font-heading text-lg italic text-navy/90 mb-2">
                    &ldquo;Whoever can be trusted with very little can also be trusted with much,
                    and whoever is dishonest with very little will also be dishonest with much.
                    So if you have not been trustworthy in handling worldly wealth, who will trust
                    you with true riches?&rdquo;
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold">
                    Luke 16:10-11
                  </p>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Key Takeaways
                </h2>

                <div className="border-2 border-navy/20 p-6 my-8 not-prose">
                  <ol className="space-y-4">
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">1.</strong> IBC replicates the banking function
                      within your family using whole life insurance as the vehicle.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">2.</strong> Policy loans allow you to access
                      capital while your cash value continues growing uninterrupted.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">3.</strong> The first 3-5 years are the
                      capitalization phase &mdash; focus on building your policy before heavy borrowing.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">4.</strong> Discipline in repaying yourself is
                      essential. This is a banking system, not a piggy bank.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">5.</strong> IBC is a generational strategy best
                      suited for business owners with stable income and regular capital needs.
                    </li>
                  </ol>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Congratulations &mdash; Foundations Complete!
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  You&apos;ve completed the Foundations track. You now understand:
                </p>

                <ul className="space-y-2 my-6 not-prose">
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    What Infinite Banking is and why it matters
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    How traditional financing bleeds wealth from your family
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    Why whole life from a mutual company is essential
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    How the IBC concept works in practice
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  Ready to go deeper? The <strong>Deep Dives track</strong> covers policy design,
                  cash value mechanics, and business applications in detail. Or, if you&apos;re
                  ready to see how IBC might work for your specific situation, book a discovery
                  call with our team.
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
                        Nelson Nash&apos;s Discovery
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        The Core Principle
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        The Banking Equation
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        How Policy Loans Work
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        The Infinite Loop
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Your First 5 Years
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Common Mistakes
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Is IBC Right for You?
                      </a>
                    </nav>
                  </div>

                  {/* Discovery Call CTA */}
                  <div className="border-2 border-gold/30 bg-gold/5 p-6">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-gold mb-2">
                      Ready for Next Steps?
                    </h3>
                    <p className="text-sm text-navy/70 mb-4">
                      Let&apos;s discuss how IBC could work for your situation.
                    </p>
                    <a
                      href="https://discovery.1322legacystrategies.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-gold text-navy px-4 py-2 font-mono text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
                    >
                      Book a Call
                    </a>
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
                href="/learn/foundations/whole-life-explained"
                className="font-heading text-navy hover:text-gold transition-colors"
              >
                ← Whole Life Explained
              </Link>
            </div>

            <Link
              href="/learn/deep-dives"
              className="bg-gold text-navy px-6 py-3 font-mono text-sm uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Next: Deep Dives Track →
            </Link>
          </div>
        </div>
      </section>

      {/* Completion CTA Section */}
      <section className="py-16 bg-navy text-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-wider text-gold mb-4 block">
              Foundations Complete
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              What&apos;s Next?
            </h2>
            <p className="text-cream/80 mb-8">
              You&apos;ve built a solid understanding of the Infinite Banking Concept.
              Continue your education with our Deep Dives track, or schedule a conversation
              to explore if IBC fits your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/learn/deep-dives"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-cream transition-colors"
              >
                Continue to Deep Dives
              </Link>
              <a
                href="https://discovery.1322legacystrategies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-cream text-cream px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-cream hover:text-navy transition-colors"
              >
                Book Discovery Call
              </a>
            </div>
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
                href="/case-studies"
                className="border-2 border-navy/20 bg-cream p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Explore</span>
                <h3 className="font-heading text-sm font-bold text-navy mt-1">All Case Studies</h3>
              </Link>
              <Link
                href="/tools/interest-bleed-calculator"
                className="border-2 border-navy/20 bg-cream p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Calculator</span>
                <h3 className="font-heading text-sm font-bold text-navy mt-1">Interest Bleed Calculator</h3>
              </Link>
              <a
                href="https://www.skool.com/1322-ibc-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy/20 bg-cream p-4 hover:border-gold transition-colors"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">Community</span>
                <h3 className="font-heading text-sm font-bold text-navy mt-1">Join Free Academy</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
