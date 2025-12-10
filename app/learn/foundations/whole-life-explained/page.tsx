import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Whole Life Insurance Explained | Foundations | 1322 Legacy Strategies",
  description: "Why dividend-paying whole life insurance is the foundation of IBC, and how it differs from other insurance products.",
}

export default function WholeLifeExplainedPage() {
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
                Lesson 3 of 4
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-cream/60">
                35 min read
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Whole Life vs Everything Else
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              Why dividend-paying whole life insurance is the foundation of IBC, and how it
              differs from other insurance products.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-4 border-b border-navy/10 sticky top-20 bg-cream z-40">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="h-1 bg-navy/10">
              <div className="h-full bg-gold transition-all" style={{ width: '50%' }}></div>
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
                      <strong>Whole Life Insurance:</strong> Permanent life insurance with guaranteed level premiums, death benefit, and cash value accumulation
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Cash Value:</strong> The living benefit that grows tax-deferred and can be accessed through policy loans
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Dividends:</strong> Annual profit-sharing payments from mutual insurance companies to policyholders
                    </li>
                    <li className="border-l-2 border-gold/50 pl-4 text-navy/80">
                      <strong>Mutual Company:</strong> An insurance company owned by its policyholders, not shareholders
                    </li>
                  </ul>
                </div>

                {/* Introduction */}
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                  What Banks Know That You Don&apos;t
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Here&apos;s a fact that might surprise you: banks are some of the largest purchasers of
                  whole life insurance in the world. According to the FDIC, U.S. banks hold over $180 billion
                  in cash value life insurance on their balance sheets. They call it BOLI &mdash; Bank-Owned
                  Life Insurance.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Why would sophisticated financial institutions, with access to every investment vehicle
                  imaginable, park hundreds of billions in whole life insurance? Because they understand
                  something most financial advisors won&apos;t tell you: <strong>whole life insurance,
                  properly structured, is one of the safest and most predictable wealth-building tools in existence</strong>.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  In this lesson, we&apos;ll explore why dividend-paying whole life insurance is the
                  foundation of the Infinite Banking Concept, and why other insurance products simply
                  won&apos;t work for this strategy.
                </p>

                {/* Stats Box */}
                <div className="grid grid-cols-2 gap-6 my-10 not-prose">
                  <div className="border-2 border-navy/20 p-6 text-center">
                    <span className="block font-mono text-4xl font-bold text-gold">$180B+</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mt-2">
                      Bank-owned life insurance (BOLI) on U.S. bank balance sheets
                    </span>
                  </div>
                  <div className="border-2 border-navy/20 p-6 text-center">
                    <span className="block font-mono text-4xl font-bold text-gold">160+</span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mt-2">
                      Years of dividend payments by top mutual companies
                    </span>
                  </div>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Four Components of Whole Life Insurance
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  To understand why whole life works for IBC, you need to understand its four core components:
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  1. The Death Benefit
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  The death benefit is the amount paid to your beneficiaries when you pass away. Unlike
                  term insurance, which expires after a set period, whole life&apos;s death benefit is
                  guaranteed for your entire life &mdash; as long as you pay your premiums.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  For IBC purposes, the death benefit serves multiple functions: it provides family
                  protection, creates an inheritance, and completes your family&apos;s banking system
                  if you pass away before fully funding it. The death benefit is tax-free to your
                  beneficiaries under current law.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  2. The Cash Value
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  This is the &ldquo;living benefit&rdquo; that makes IBC possible. A portion of every
                  premium payment goes into a cash value account that grows tax-deferred. This growth
                  is guaranteed by the insurance company &mdash; it cannot go down, only up.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  The cash value is what you borrow against when you need capital. Importantly, when
                  you take a policy loan, <strong>your cash value continues to grow as if you never
                  touched it</strong>. This is the magic of IBC &mdash; your money is essentially
                  working in two places at once.
                </p>

                {/* Quote Block */}
                <div className="border-l-4 border-gold pl-6 my-10 not-prose">
                  <p className="font-heading text-xl italic text-navy/90 mb-2">
                    &ldquo;The cash value of a properly designed whole life policy is like a private
                    savings account that the government can&apos;t see and creditors can&apos;t reach
                    (in most states).&rdquo;
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold">
                    Nelson Nash, IBC Concepts
                  </p>
                </div>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  3. The Dividends
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  When you purchase whole life insurance from a <strong>mutual company</strong>, you
                  become a partial owner of that company. Each year, if the company performs well, it
                  shares its profits with policyholders in the form of dividends.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  These dividends are not guaranteed, but the top mutual companies have paid them
                  consistently for over 160 years &mdash; through the Great Depression, world wars,
                  market crashes, and every economic crisis in between.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  You can take dividends as cash, use them to reduce premiums, or &mdash; and this
                  is key for IBC &mdash; use them to purchase additional paid-up insurance, which
                  accelerates your cash value growth significantly.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  4. The Policy Loan Provision
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Every whole life policy includes a contractual right to borrow against your cash
                  value at any time, for any reason, with no questions asked. You don&apos;t have
                  to qualify, fill out applications, or explain your plans.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  The loan comes from the insurance company&apos;s general fund, using your cash
                  value as collateral. This is why your cash value keeps growing even when you
                  borrow &mdash; it&apos;s still there, still earning, just pledged as security.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Why NOT Term Insurance?
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  &ldquo;Buy term and invest the difference&rdquo; is one of the most common pieces
                  of financial advice. For pure insurance purposes, this might make sense. But for
                  IBC, term insurance is completely useless.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Here&apos;s why:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">No cash value:</strong> Term insurance has zero
                    cash value. There&apos;s nothing to borrow against.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">It expires:</strong> When the term ends (usually
                    10, 20, or 30 years), you have nothing &mdash; no coverage, no equity, nothing.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Increasing cost:</strong> If you want to renew,
                    your premiums will skyrocket based on your older age.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Not transferable:</strong> You can&apos;t pass
                    term insurance to your children as a banking tool.
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  Term insurance is like renting an apartment. Whole life is like owning a home
                  that appreciates in value. Both provide shelter, but only one builds equity.
                </p>

                {/* Comparison Table */}
                <div className="my-10 not-prose">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-gold mb-4">
                    Term vs. Whole Life for Banking Purposes
                  </h3>
                  <div className="grid grid-cols-3 gap-0 border-2 border-navy/20">
                    <div className="bg-navy/5 p-4 border-b border-r border-navy/20">
                      <span className="font-mono text-xs uppercase tracking-wider text-navy/60">Feature</span>
                    </div>
                    <div className="bg-red-50 p-4 border-b border-r border-navy/20">
                      <span className="font-mono text-xs uppercase tracking-wider text-red-600">Term</span>
                    </div>
                    <div className="bg-green-50 p-4 border-b border-navy/20">
                      <span className="font-mono text-xs uppercase tracking-wider text-green-600">Whole Life</span>
                    </div>

                    <div className="p-4 border-b border-r border-navy/10 text-sm text-navy/70">Cash Value</div>
                    <div className="p-4 border-b border-r border-navy/10 text-sm text-red-600">None</div>
                    <div className="p-4 border-b border-navy/10 text-sm text-green-600">Guaranteed Growth</div>

                    <div className="p-4 border-b border-r border-navy/10 text-sm text-navy/70">Policy Loans</div>
                    <div className="p-4 border-b border-r border-navy/10 text-sm text-red-600">Not Available</div>
                    <div className="p-4 border-b border-navy/10 text-sm text-green-600">Available Anytime</div>

                    <div className="p-4 border-b border-r border-navy/10 text-sm text-navy/70">Dividends</div>
                    <div className="p-4 border-b border-r border-navy/10 text-sm text-red-600">None</div>
                    <div className="p-4 border-b border-navy/10 text-sm text-green-600">Annual (from mutual co.)</div>

                    <div className="p-4 border-b border-r border-navy/10 text-sm text-navy/70">Duration</div>
                    <div className="p-4 border-b border-r border-navy/10 text-sm text-red-600">10-30 Years</div>
                    <div className="p-4 border-b border-navy/10 text-sm text-green-600">Lifetime</div>

                    <div className="p-4 border-r border-navy/10 text-sm text-navy/70">Generational Transfer</div>
                    <div className="p-4 border-r border-navy/10 text-sm text-red-600">Not Possible</div>
                    <div className="p-4 text-sm text-green-600">Built-in Feature</div>
                  </div>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  The Mutual Company Difference
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Not all whole life insurance is created equal. For IBC to work properly, you must
                  use a policy from a <strong>mutual insurance company</strong>, not a stock company.
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  The difference is fundamental:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Stock companies</strong> are owned by shareholders.
                    Their primary obligation is to maximize shareholder returns.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Mutual companies</strong> are owned by policyholders.
                    You literally own part of the company, and profits are returned to you as dividends.
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  The top mutual companies (companies like MassMutual, Northwestern Mutual, Guardian,
                  Penn Mutual, and New York Life) have been in continuous operation for over 150 years.
                  They&apos;ve paid dividends every single year, even during economic catastrophes that
                  destroyed other financial institutions.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Why Not Universal Life or Indexed Universal Life?
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  You might hear about Universal Life (UL) or Indexed Universal Life (IUL) as alternatives.
                  These products have cash value components, so why not use them for IBC?
                </p>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  The simple answer: <strong>they lack guarantees</strong>.
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">UL premiums are flexible</strong> &mdash; which sounds
                    good until you realize the insurance company can raise internal costs, potentially
                    requiring you to pay more or watch your policy lapse.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">IUL ties returns to market indexes</strong> &mdash;
                    with caps, floors, and participation rates that the company can change.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Neither pays dividends</strong> &mdash; you&apos;re
                    not an owner, just a customer.
                  </li>
                  <li className="border-l-2 border-red-400 pl-6 text-navy/80">
                    <strong className="text-navy">Death benefit can decrease</strong> &mdash; if
                    performance is poor, your coverage may shrink.
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  Nelson Nash was clear on this point: <strong>IBC requires whole life from a mutual
                  company</strong>. The guarantees are essential. Your family&apos;s banking system
                  can&apos;t be built on a foundation that might shift.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Reading an Illustration (Demystified)
                </h2>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  When you work with an IBC-focused advisor, they&apos;ll show you an &ldquo;illustration&rdquo;
                  &mdash; a projection of how your policy might perform. These documents can be
                  intimidating, but here&apos;s what really matters:
                </p>

                <ul className="space-y-4 my-8 not-prose">
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Premium:</strong> Your annual outlay &mdash; the
                    &ldquo;deposit&rdquo; into your family bank.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Guaranteed Cash Value:</strong> The minimum amount
                    you&apos;ll have, no matter what happens in the economy.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Non-Guaranteed Cash Value:</strong> What you might
                    have if dividends continue at current rates (they&apos;ve historically exceeded
                    guaranteed values significantly).
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Death Benefit:</strong> What your family receives
                    when you pass, tax-free.
                  </li>
                  <li className="border-l-2 border-gold pl-6 text-navy/80">
                    <strong className="text-navy">Loan Value:</strong> How much you can borrow against
                    your policy each year.
                  </li>
                </ul>

                <p className="text-lg text-navy/80 leading-relaxed mb-8">
                  A properly designed IBC policy maximizes cash value growth in the early years. This
                  is different from a traditional whole life policy, which prioritizes death benefit.
                  We&apos;ll cover policy design in detail in the Deep Dives track.
                </p>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Common Objections Answered
                </h2>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  &ldquo;Whole life is too expensive.&rdquo;
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Compared to term insurance, yes &mdash; the premiums are higher. But you&apos;re
                  comparing apples to oranges. Term gives you nothing back. Whole life builds an
                  asset you can use while you&apos;re alive and pass on when you&apos;re not. The
                  &ldquo;extra&rdquo; premium is actually your savings and investing in one vehicle.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  &ldquo;I can get better returns in the market.&rdquo;
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Maybe, over time. But can you access your 401(k) or brokerage account for business
                  financing without penalties, taxes, and market timing risk? Whole life isn&apos;t
                  an investment &mdash; it&apos;s infrastructure. The returns are modest but
                  guaranteed, and the liquidity is unmatched.
                </p>

                <h3 className="font-heading text-xl font-bold text-navy mt-8 mb-4">
                  &ldquo;It takes too long to build cash value.&rdquo;
                </h3>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  Traditional whole life policies do take years to build significant cash value.
                  But IBC policies are designed differently, with higher cash value in early years.
                  Still, this is a long-term strategy. If you need quick results, IBC isn&apos;t
                  for you. If you&apos;re thinking generationally, the timeline makes perfect sense.
                </p>

                {/* Scripture Block */}
                <div className="border-2 border-gold/30 bg-gold/5 p-6 my-10 not-prose">
                  <p className="font-heading text-lg italic text-navy/90 mb-2">
                    &ldquo;The wise store up choice food and olive oil, but fools gulp theirs down.&rdquo;
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-gold">
                    Proverbs 21:20
                  </p>
                </div>

                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-12 mb-6">
                  Key Takeaways
                </h2>

                <div className="border-2 border-navy/20 p-6 my-8 not-prose">
                  <ol className="space-y-4">
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">1.</strong> Whole life insurance has four
                      components: death benefit, cash value, dividends, and policy loans &mdash;
                      all essential for IBC.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">2.</strong> Term insurance has no cash value
                      and cannot be used for IBC. Don&apos;t let &ldquo;buy term, invest the
                      difference&rdquo; advice derail your banking strategy.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">3.</strong> Mutual companies are essential
                      because you become an owner and receive dividends. Stock companies serve
                      shareholders, not you.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">4.</strong> Universal and Indexed Universal
                      Life lack the guarantees needed for a reliable family banking system.
                    </li>
                    <li className="border-l-2 border-gold pl-6 text-navy/80">
                      <strong className="text-navy">5.</strong> Banks use whole life for their
                      own balance sheets. If it&apos;s good enough for them, it&apos;s worth
                      understanding for your family.
                    </li>
                  </ol>
                </div>

                <p className="text-lg text-navy/80 leading-relaxed mb-6">
                  In the next lesson, we&apos;ll put everything together and explain the Infinite
                  Banking Concept in detail &mdash; how policy loans work, the capitalization phase,
                  and what to expect in your first years of implementation.
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
                        What Banks Know That You Don&apos;t
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Four Components of Whole Life
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Why NOT Term Insurance?
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        The Mutual Company Difference
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Why Not UL or IUL?
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Reading an Illustration
                      </a>
                      <a href="#" className="block text-sm text-navy/60 hover:text-gold transition-colors">
                        Common Objections
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
                href="/learn/foundations/the-banking-problem"
                className="font-heading text-navy hover:text-gold transition-colors"
              >
                ← The Banking Problem
              </Link>
            </div>

            <Link
              href="/learn/foundations/ibc-concept-explained"
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
                href="https://www.skool.com/1322-ibc-academy"
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
