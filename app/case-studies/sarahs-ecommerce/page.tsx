import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sarah's E-commerce Story | Case Studies | 1322 Legacy Strategies",
  description: "How Sarah eliminated inventory financing stress and increased her profit margins by 12% through the Infinite Banking Concept.",
}

export default function SarahsEcommerceCaseStudy() {
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
                E-commerce
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                $400K Revenue
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-gold px-3 py-1 text-navy">
                Featured
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How Sarah Eliminated Inventory Financing Stress and Increased Profit Margins by 12%
            </h1>

            <p className="text-lg text-cream/80 max-w-2xl">
              An e-commerce entrepreneur discovers that the high-interest credit lines eating into her
              margins could be replaced with a system that actually builds wealth.
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
                <span className="block font-mono text-3xl font-bold text-gold">$120K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Inventory Budget
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">12%</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Margin Increase
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">24 mo</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Break Even Point
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">4</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Seasons Self-Funded
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
            {/* The Situation */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Situation
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                Sarah runs a growing e-commerce business selling handcrafted home goods, built from
                her garage six years ago into a thriving operation with $400,000 in annual revenue.
                Her products are sold through her own website, Etsy, and Amazon—with seasonal peaks
                around holidays driving the majority of her sales.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                The challenge every e-commerce owner knows: you have to buy inventory months before
                you sell it. For Sarah, that meant placing orders with suppliers in August and September
                for products she wouldn&apos;t sell until November through February.
              </p>
              <p className="text-navy/80 leading-relaxed">
                &ldquo;Every year,&rdquo; Sarah explained, &ldquo;I&apos;d max out my business credit line
                at 18% interest to fund inventory. Then I&apos;d spend January through April paying it
                down, only to do the same thing again. It felt like I was on a hamster wheel.&rdquo;
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Hidden Cost of &ldquo;Normal&rdquo; Inventory Financing
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                When we sat down with Sarah to analyze her financing costs, she was shocked at what
                the numbers revealed:
              </p>

              {/* Cost Breakdown */}
              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Annual Financing Cost Analysis</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-navy/10 pb-3">
                    <span className="text-navy/70">Average outstanding balance</span>
                    <span className="font-mono font-bold text-navy">$85,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-navy/10 pb-3">
                    <span className="text-navy/70">Interest rate (business credit line)</span>
                    <span className="font-mono font-bold text-navy">18%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-navy/10 pb-3">
                    <span className="text-navy/70">Annual interest paid</span>
                    <span className="font-mono font-bold text-red-600">$15,300</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-navy/10 pb-3">
                    <span className="text-navy/70">Credit line annual fee</span>
                    <span className="font-mono font-bold text-red-600">$495</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-navy font-bold">Total annual cost of financing</span>
                    <span className="font-mono font-bold text-red-600 text-xl">$15,795</span>
                  </div>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                That $15,795 represented nearly 4% of her gross revenue—money that went straight to
                the credit card company instead of her pocket. Over the six years she&apos;d been in
                business, Sarah had paid roughly <strong>$95,000 in interest and fees</strong> just
                to fund inventory.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;When I saw that number—$95,000—I actually cried. That&apos;s money I earned,
                  that my business created, and it just... left. It didn&apos;t build anything for
                  my family. It built American Express&apos;s shareholders&apos; wealth.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Sarah, E-commerce Business Owner</p>
              </div>
            </div>

            {/* The Solution */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The IBC Solution
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                Sarah spent four months in our free Academy learning the concepts. She attended
                Brad&apos;s Office Hours three times with specific questions about her situation.
                She ran her numbers through our Interest Bleed Calculator repeatedly, testing
                different scenarios.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                &ldquo;I&apos;m analytical,&rdquo; she told us. &ldquo;I needed to understand the math
                myself before I was comfortable moving forward. The Academy gave me the space to do
                that without any pressure.&rdquo;
              </p>

              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Sarah&apos;s Policy Design</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Monthly Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$1,500</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Annual Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$18,000</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Cash Value Strategy</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Maximized PUA</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Primary Use</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Inventory Funding</span>
                  </div>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                The key insight: Sarah&apos;s $18,000 annual premium was only slightly more than the
                $15,795 she was already paying in interest and fees. The difference? Those dollars
                now went to <em>her</em> system instead of a credit card company.
              </p>

              <p className="text-navy/80 leading-relaxed">
                Within 24 months, Sarah had enough cash value to fund her entire Q4 inventory buy
                through policy loans—at a policy loan rate of 5% versus 18% on her credit line.
              </p>
            </div>

            {/* The Results */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Results: Margin Transformation
              </h2>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="border-2 border-navy/20 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-navy/10">
                    Before IBC
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Credit Line Financing</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-navy/70">Inventory cost</span>
                      <span className="font-mono text-navy">$120,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy/70">Financing cost (18%)</span>
                      <span className="font-mono text-red-600">-$15,795</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy/70">Gross margin</span>
                      <span className="font-mono text-navy">45%</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-navy/10">
                      <span className="text-navy font-bold">Net margin after financing</span>
                      <span className="font-mono text-red-600 font-bold">41%</span>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gold bg-gold/5 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-gold/30">
                    After IBC
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Policy Loan Financing</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-navy/70">Inventory cost</span>
                      <span className="font-mono text-navy">$120,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy/70">Financing cost (5%)</span>
                      <span className="font-mono text-green-600">-$4,250*</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-navy/70">Gross margin</span>
                      <span className="font-mono text-navy">45%</span>
                    </div>
                    <div className="flex justify-between pt-3 border-t border-gold/30">
                      <span className="text-navy font-bold">Net margin after financing</span>
                      <span className="font-mono text-gold font-bold">53%</span>
                    </div>
                  </div>
                  <p className="text-xs text-navy/50 mt-4">
                    *Interest paid to insurance company, but policy continues to earn dividends on full cash value
                  </p>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                That 12-percentage-point improvement in effective margin translated to approximately
                <strong> $14,400 more profit annually</strong>—money that stayed in Sarah&apos;s
                business instead of flowing to credit card companies.
              </p>

              {/* Year by Year */}
              <div className="space-y-6 my-8">
                <div className="border-2 border-navy/20 p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-bold text-gold">Y1</span>
                    <div>
                      <h4 className="font-heading font-bold text-navy mb-2">Year One: Building Foundation</h4>
                      <p className="text-navy/70">
                        Funded $18,000 in premiums. Still used credit line for that year&apos;s inventory.
                        Cash value reached $11,500 by year-end.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-navy/20 p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-bold text-gold">Y2</span>
                    <div>
                      <h4 className="font-heading font-bold text-navy mb-2">Year Two: Partial Self-Funding</h4>
                      <p className="text-navy/70">
                        Cash value reached $28,000. Used $25,000 policy loan for half of inventory.
                        Credit line balance reduced by 50%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-navy/20 p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-bold text-gold">Y3</span>
                    <div>
                      <h4 className="font-heading font-bold text-navy mb-2">Year Three: Full Self-Funding</h4>
                      <p className="text-navy/70">
                        Cash value exceeded $50,000. Funded entire $45,000 September inventory buy
                        through policy. Credit line closed. Zero interest to banks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gold bg-gold/5 p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-2xl font-bold text-gold">Y4</span>
                    <div>
                      <h4 className="font-heading font-bold text-navy mb-2">Year Four: Expansion Mode</h4>
                      <p className="text-navy/70">
                        Cash value reached $75,000. Funded larger inventory order ($65,000) AND invested
                        in new product line development. System enabling growth she couldn&apos;t have
                        financed before.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Ripple Effect */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Ripple Effect: Beyond Inventory
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                What surprised Sarah most wasn&apos;t the direct savings—it was the psychological shift.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="border-2 border-navy/20 p-6">
                  <h4 className="font-heading font-bold text-navy mb-3">Before</h4>
                  <ul className="space-y-3 text-navy/70">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Stress every August about credit limits</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Conservative ordering to minimize debt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Frequent stock-outs on popular items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span>Missed wholesale discounts</span>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-gold bg-gold/5 p-6">
                  <h4 className="font-heading font-bold text-navy mb-3">After</h4>
                  <ul className="space-y-3 text-navy/70">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Confidence in available capital</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Bolder inventory decisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Deeper inventory on bestsellers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span>Captured early-order discounts (additional 3% savings)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;The best part isn&apos;t the money—it&apos;s the peace. For the first time in
                  six years, I didn&apos;t dread August. I actually looked forward to Q4 because I knew
                  I had the capital ready. That&apos;s worth more than any calculation.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Sarah</p>
              </div>
            </div>

            {/* Long-term Projection */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The 15-Year View
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                Sarah is 34 years old. If she maintains her current premium and continues using
                the system for inventory financing, here&apos;s what the next 15 years look like:
              </p>

              <div className="border-2 border-navy/20 p-6 mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-navy/10">
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Age</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Cash Value</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Death Benefit</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Cumulative Savings vs Credit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">39</td>
                        <td className="py-3 px-4 font-mono text-gold">$95,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$425,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$57,000</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">44</td>
                        <td className="py-3 px-4 font-mono text-gold">$185,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$520,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$115,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-navy">49</td>
                        <td className="py-3 px-4 font-mono text-gold font-bold">$295,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$645,000</td>
                        <td className="py-3 px-4 font-mono text-gold font-bold">$173,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-navy/50 mt-4 font-mono">
                  *Projections based on current dividend rates and consistent premium payments. Actual results may vary.
                </p>
              </div>

              <p className="text-navy/80 leading-relaxed">
                By age 49, Sarah will have nearly $300,000 in cash value—a liquid asset she can
                access for any purpose—plus $645,000 in death benefit protecting her family. And
                she&apos;ll have saved over $170,000 compared to continuing with credit line financing.
              </p>
            </div>

            {/* Key Lessons */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                Key Lessons from Sarah&apos;s Story
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Seasonal Businesses Are Ideal Candidates</h4>
                  <p className="text-navy/70">
                    The predictable cash flow pattern—needing capital in certain months, repaying in
                    others—matches perfectly with the policy loan cycle.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Compare Apples to Apples</h4>
                  <p className="text-navy/70">
                    Sarah&apos;s premium was close to what she was already paying in interest. The
                    difference? One builds wealth, one doesn&apos;t.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Patience Pays</h4>
                  <p className="text-navy/70">
                    Sarah didn&apos;t try to replace her credit line in year one. She built the system
                    properly, transitioned gradually, and now operates debt-free.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">The Psychological Shift Matters</h4>
                  <p className="text-navy/70">
                    Beyond the numbers, the confidence of knowing capital is available changes how you
                    run your business.
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
              Do You Have Seasonal Financing Needs?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Whether it&apos;s inventory, equipment, or project funding, IBC can help you break free
              from the interest bleed cycle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/tools/interest-bleed-calculator"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Calculate Your Interest Bleed
              </Link>
              <Link
                href="/learn/foundations"
                className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Start the Foundations Track
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
                  Mike&apos;s HVAC Story
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How Mike stopped paying banks $32,000/year in interest on vehicle financing.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Read Story →
                </span>
              </Link>

              <Link
                href="/case-studies/davids-real-estate"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    Real Estate
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    $1.2M Revenue
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  David&apos;s Bridge Financing
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How David closes real estate deals 3x faster using his family bank for bridge financing.
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
