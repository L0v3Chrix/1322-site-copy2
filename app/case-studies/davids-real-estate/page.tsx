import Link from "next/link"
import type { Metadata } from "next"
import CaseStudyDisclaimer from "@/components/case-study-disclaimer"

export const metadata: Metadata = {
  title: "David's Real Estate Story | Case Studies | 1322 Legacy Strategies",
  description: "How David eliminated hard money lender rates and created a private bridge financing system for his commercial real estate investments.",
}

export default function DavidsRealEstateCaseStudy() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/case-studies"
                className="font-mono text-xs uppercase tracking-wider text-gold hover:text-cream transition-colors"
              >
                ← Back to Case Studies
              </Link>
            </div>

            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                Real Estate
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                $1.2M Revenue
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                Bridge Financing
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How David Stopped Paying 12-15% to Hard Money Lenders and Built His Own Bridge Financing System
            </h1>

            <p className="text-lg text-cream/80 max-w-2xl">
              A commercial real estate investor discovers that the key to closing more deals
              faster isn&apos;t finding better lenders—it&apos;s becoming his own source of capital.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-b-2 border-navy/10 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$150K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Policy Cash Value (Year 3)
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$45K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Interest Saved Over 3 Years
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">4</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Properties Acquired
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">34%</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Net Worth Increase
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            <CaseStudyDisclaimer />

            {/* The Situation */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Situation
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                David is a commercial real estate investor in the Atlanta metro area, focusing on
                small multi-family properties and retail strip centers. His strategy: find undervalued
                properties, close quickly, stabilize or reposition them, then refinance into long-term
                financing.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                The challenge? Speed. The best deals go to buyers who can close fast. And for David,
                that meant hard money lenders—private financing companies that charge premium rates
                for quick capital access.
              </p>
              <p className="text-navy/80 leading-relaxed">
                &ldquo;I was paying 12-15% interest on bridge loans,&rdquo; David explained. &ldquo;Plus
                2-4 points at closing. For a $300,000 bridge loan, I might be paying $40,000-$50,000
                in fees and interest before I could refinance. It ate into my margins significantly.&rdquo;
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Problem David Faced
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                David was stuck in a cycle: he needed quick capital to compete for deals, but the
                cost of that capital was eroding his returns. Some properties barely made sense
                after factoring in hard money costs.
              </p>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="border-2 border-navy/20 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-navy/10">
                    Bridge Financing Reality
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Hard Money Lenders</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">12-15% annual interest</span>
                        <p className="text-sm text-navy/60">Plus points at closing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">Subject to lender approval</span>
                        <p className="text-sm text-navy/60">Can take days to fund</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">$40K-$50K cost per bridge loan</span>
                        <p className="text-sm text-navy/60">On typical $300K deal</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-gold bg-gold/5 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-gold/30">
                    Family Bank Advantage
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Policy Loan System</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">5% policy loan rate</span>
                        <p className="text-sm text-navy/60">Cash value keeps growing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">Same-day access to funds</span>
                        <p className="text-sm text-navy/60">No approval needed</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">Interest stays in his system</span>
                        <p className="text-sm text-navy/60">Building wealth, not paying fees</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed">
                David realized that over his career, he&apos;d paid more than $200,000 in hard money
                costs—money that went to other people&apos;s pockets instead of building his own wealth.
              </p>
            </div>

            {/* The Solution */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The IBC Solution
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                After learning about the Infinite Banking Concept, David saw immediately how it could
                solve his bridge financing problem. He didn&apos;t need to eliminate hard money lenders
                entirely—he needed a better alternative for smaller deals and partial funding.
              </p>

              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">David&apos;s Policy Design</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Monthly Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$4,166</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Annual Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$50,000</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Focus</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Max Cash Value</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Strategy</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Bridge Replacement</span>
                  </div>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                David designed his policy with maximum cash value accumulation in mind. With a
                $50,000 annual premium and maximized paid-up additions, his cash value grew
                quickly—giving him access to bridge capital within the first year.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;The first time I wired funds from my policy instead of calling a hard money
                  lender, I knew this changed everything. I wasn&apos;t begging for money anymore.
                  I had my own source of capital.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— David, Commercial Real Estate Investor</p>
              </div>
            </div>

            {/* The Results */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Results: Year by Year
              </h2>

              {/* Timeline */}
              <div className="space-y-8 mb-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y1
                    </div>
                    <div className="w-[2px] bg-gold/30 flex-1 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-bold text-navy mb-2">Year One: Building the Foundation</h4>
                    <p className="text-navy/70">
                      $50,000 premium invested. Cash value reached $32,000 by year-end. Closed one deal
                      using partial policy loan ($25,000) combined with hard money for the balance.
                      Saved approximately $8,000 vs. full hard money financing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y2
                    </div>
                    <div className="w-[2px] bg-gold/30 flex-1 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-bold text-navy mb-2">Year Two: Gaining Momentum</h4>
                    <p className="text-navy/70">
                      Cash value exceeded $90,000. Funded two smaller acquisitions entirely through
                      policy loans. Refinanced first property and repaid policy loan. Net cost savings
                      vs. hard money: $22,000.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y3
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2">Year Three: Full Independence</h4>
                    <p className="text-navy/70">
                      Cash value surpassed $150,000. Fourth property acquired entirely through policy
                      loan plus conventional financing. Hard money use reduced to 10% of previous levels.
                      Total interest saved over 3 years: $45,000+.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="bg-navy text-cream p-8">
                <h4 className="font-heading text-xl font-bold text-gold mb-6">
                  3-Year Summary: David&apos;s Bridge Financing System
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$150,000+</span>
                    <span className="block text-cream/70">Cash Value Built</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$45,000</span>
                    <span className="block text-cream/70">Hard Money Costs Avoided</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">4 Properties</span>
                    <span className="block text-cream/70">Acquired with System</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Real Advantage */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Real Advantage: Speed and Certainty
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                For David, the interest savings were significant—but the real game-changer was
                something else: speed and certainty.
              </p>

              <div className="border-2 border-navy/20 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Hard Money vs. Policy Loan: Speed Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-navy/10">
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Factor</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Hard Money</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-gold">Policy Loan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Application</td>
                        <td className="py-3 px-4 font-mono text-navy/70">Required</td>
                        <td className="py-3 px-4 font-mono text-gold">None</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Approval Time</td>
                        <td className="py-3 px-4 font-mono text-navy/70">1-5 days</td>
                        <td className="py-3 px-4 font-mono text-gold">Immediate</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Funding</td>
                        <td className="py-3 px-4 font-mono text-navy/70">3-7 days</td>
                        <td className="py-3 px-4 font-mono text-gold">Same day wire</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-navy">Certainty</td>
                        <td className="py-3 px-4 font-mono text-navy/70">Subject to approval</td>
                        <td className="py-3 px-4 font-mono text-gold">Guaranteed access</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                When David finds a deal, he can make an offer with confidence because he knows
                his capital is available. No phone calls, no applications, no waiting to see if
                he&apos;ll get approved. That certainty lets him negotiate from a position of strength.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;Sellers want certainty. When I can tell them I have the funds available today,
                  not &apos;pending approval,&apos; it often beats higher offers from less-certain buyers.
                  That competitive advantage is worth more than the interest savings.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— David</p>
              </div>
            </div>

            {/* Key Lessons */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                Key Lessons from David&apos;s Story
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Build Before You Need</h4>
                  <p className="text-navy/70">
                    David started building his policy before his next deal. When the opportunity came,
                    his capital was ready. The best time to start is before you need the money.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Partial Replacement Works</h4>
                  <p className="text-navy/70">
                    You don&apos;t need to replace hard money entirely from day one. David started by
                    using his policy for partial funding, gradually increasing as his cash value grew.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Repayment Builds the System</h4>
                  <p className="text-navy/70">
                    Every time David refinances a property and repays his policy loan, his system gets
                    stronger. He&apos;s not just avoiding hard money costs—he&apos;s building capital.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Speed Creates Opportunities</h4>
                  <p className="text-navy/70">
                    The certainty of available capital lets David act fast on deals others might miss.
                    The return on that speed often exceeds the hard money savings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Are You Paying Too Much for Bridge Capital?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Every real estate investor needs quick access to capital. The question is:
              are you building someone else&apos;s wealth or your own?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/tools/opportunity-cost"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Calculate Your Opportunity Cost
              </Link>
              <Link
                href="/learn/foundations"
                className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Start Learning
              </Link>
            </div>

            <p className="text-sm text-navy/50 font-mono">
              No pressure. No obligation. Just education.
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">
              More Case Studies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/mikes-hvac"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    HVAC Services
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    $750K Revenue
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Mike&apos;s Fleet Financing System
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How Mike stopped paying banks $32K/year and started building family wealth.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Read Story →
                </span>
              </Link>

              <Link
                href="/case-studies/thomas-manufacturing"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    Manufacturing
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    $2.5M Revenue
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Thomas&apos;s Equipment Strategy
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How Thomas financed $400K in CNC equipment and expanded production by 65%.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Read Story →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
