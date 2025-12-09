import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mike's HVAC Story | Case Studies | 1322 Legacy Strategies",
  description: "How Mike stopped paying banks $32,000 per year in interest and started building family wealth instead through the Infinite Banking Concept.",
}

export default function MikesHvacCaseStudy() {
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
                HVAC Services
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                $750K Revenue
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-gold px-3 py-1 text-navy">
                Featured
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How Mike Stopped Paying Banks $32,000/Year and Started Building Family Wealth Instead
            </h1>

            <p className="text-lg text-cream/80 max-w-2xl">
              A Tennessee HVAC business owner discovers that the money flowing out of his business
              to banks could have been building a family legacy all along.
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
                <span className="block font-mono text-3xl font-bold text-gold">$80K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Annual Financing Need
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$32K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Interest Saved Per Year
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">18 mo</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Break Even Point
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">3</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Vehicles Self-Financed
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
                Mike runs a successful HVAC service company in middle Tennessee, serving both
                residential and light commercial clients. With annual revenue around $750,000,
                his business requires a fleet of service vehicles—currently three trucks that
                need regular replacement every 4-5 years as they rack up miles.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                Like most service business owners, Mike had always financed his vehicles through
                a local bank. &ldquo;It&apos;s just what you do,&rdquo; he told us. &ldquo;You need
                a truck, you go get a loan. I never really questioned it.&rdquo;
              </p>
              <p className="text-navy/80 leading-relaxed">
                His typical financing arrangement: $80,000 annually at 7.9% interest over 5-year
                terms. The payments were manageable, and the trucks kept his technicians on the
                road serving customers.
              </p>
            </div>

            {/* The Problem */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Problem Mike Didn&apos;t See
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                When Mike sat down with our team to analyze his business finances, we ran the
                numbers on something he&apos;d never calculated: the true cost of his vehicle
                financing over his career.
              </p>

              {/* Before/After Comparison */}
              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="border-2 border-navy/20 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-navy/10">
                    What Mike Was Paying
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Traditional Bank Financing</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">$17,280 interest per vehicle cycle</span>
                        <p className="text-sm text-navy/60">Over the 5-year loan term</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">$32,000+ annual interest bleed</span>
                        <p className="text-sm text-navy/60">Across all financed vehicles</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">$480,000 over 15 years</span>
                        <p className="text-sm text-navy/60">Including opportunity cost</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-gold bg-gold/5 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-gold/30">
                    What Mike Captures Now
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Infinite Banking Strategy</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">Interest stays in his system</span>
                        <p className="text-sm text-navy/60">Paid to himself, not a bank</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">$32,000+ recaptured annually</span>
                        <p className="text-sm text-navy/60">Building family wealth instead</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">Projected $750,000+ over 15 years</span>
                        <p className="text-sm text-navy/60">Family bank value with compounding</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed">
                &ldquo;When I saw those numbers,&rdquo; Mike recalls, &ldquo;I felt sick. I&apos;d been
                in business for 12 years and never once thought about where all that interest was
                going. It wasn&apos;t building anything for my family—it was building the bank&apos;s
                shareholders&apos; wealth.&rdquo;
              </p>
            </div>

            {/* The Solution */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The IBC Solution
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                After six months of education through our Academy—watching videos, attending
                Brad&apos;s live Office Hours sessions, and running numbers through our calculators—Mike
                was ready to implement his family banking system.
              </p>

              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Mike&apos;s Policy Design</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Monthly Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$2,500</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Annual Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$30,000</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">PUA Rider</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Maximized</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Carrier</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Mutual Company</span>
                  </div>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                The policy was designed specifically for cash value optimization—maximizing the
                Paid-Up Additions rider to accelerate cash value growth in the early years. Within
                18 months, Mike had enough cash value to finance his first vehicle replacement
                through a policy loan.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;The moment I wrote myself a check from my policy instead of walking into
                  the bank, everything changed. I wasn&apos;t asking for permission anymore. I was
                  the bank.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Mike, HVAC Business Owner</p>
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
                    <h4 className="font-heading font-bold text-navy mb-2">Year One: Foundation</h4>
                    <p className="text-navy/70">
                      Built policy foundation with $30,000 annual premium. Cash value reached $18,500
                      by year-end. Still financed one vehicle through bank while building system.
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
                    <h4 className="font-heading font-bold text-navy mb-2">Year Two: First Self-Financed Vehicle</h4>
                    <p className="text-navy/70">
                      Cash value reached $42,000. Took $35,000 policy loan for first truck replacement.
                      Began paying himself back with interest—same payment he would have made to bank.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y3
                    </div>
                    <div className="w-[2px] bg-gold/30 flex-1 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-bold text-navy mb-2">Year Three: Momentum</h4>
                    <p className="text-navy/70">
                      Cash value exceeded $75,000. Financed second vehicle through policy. Loan payback
                      from first truck added to cash value. System beginning to compound.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2">Year Four: Full System</h4>
                    <p className="text-navy/70">
                      Cash value surpassed $110,000. Third vehicle financed through policy. Daughter&apos;s
                      first year of college funded through additional policy loan. Zero dollars to banks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="bg-navy text-cream p-8">
                <h4 className="font-heading text-xl font-bold text-gold mb-6">
                  4-Year Summary: Mike&apos;s Family Bank
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$110,000+</span>
                    <span className="block text-cream/70">Cash Value Built</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$128,000</span>
                    <span className="block text-cream/70">Interest Avoided</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">3 Trucks + Tuition</span>
                    <span className="block text-cream/70">Self-Financed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Multi-Generational Vision */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Multi-Generational Vision
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                But the real power of Mike&apos;s system isn&apos;t in what he&apos;s accomplished in
                four years—it&apos;s in what the next 20-30 years look like.
              </p>

              <div className="border-2 border-navy/20 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Projected 20-Year Trajectory</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-navy/10">
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Year</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Cash Value</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Death Benefit</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Cumulative Interest Saved</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Year 5</td>
                        <td className="py-3 px-4 font-mono text-gold">$145,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$650,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$160,000</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Year 10</td>
                        <td className="py-3 px-4 font-mono text-gold">$320,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$820,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$320,000</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Year 15</td>
                        <td className="py-3 px-4 font-mono text-gold">$520,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$1,050,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$480,000</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-navy">Year 20</td>
                        <td className="py-3 px-4 font-mono text-gold font-bold">$780,000</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$1,350,000</td>
                        <td className="py-3 px-4 font-mono text-gold font-bold">$640,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-navy/50 mt-4 font-mono">
                  *Projections based on current dividend rates. Actual results may vary.
                </p>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                Mike&apos;s daughter, now 19, is already learning about the family banking system.
                When she finishes college—debt-free, funded through policy loans—she&apos;ll understand
                the principles. And when she starts her own family or business, the system will be
                there to support her.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;I used to think leaving my kids the business was the inheritance. Now I
                  realize the real inheritance is teaching them to never be dependent on banks.
                  That&apos;s something they&apos;ll pass to their kids, too.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Mike</p>
              </div>
            </div>

            {/* Key Lessons */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                Key Lessons from Mike&apos;s Story
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Start Where You Are</h4>
                  <p className="text-navy/70">
                    Mike didn&apos;t wait until he could &ldquo;afford&rdquo; a huge premium. He designed
                    a policy around what his cash flow could sustain, and built from there.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Educate Yourself First</h4>
                  <p className="text-navy/70">
                    Mike spent six months learning before making a decision. He attended AMAs, used our
                    calculators, and asked questions. By the time he started, he understood exactly what
                    he was building.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Think Multi-Use</h4>
                  <p className="text-navy/70">
                    Mike&apos;s policy isn&apos;t just for trucks. It financed his daughter&apos;s education.
                    Next year, it may fund a real estate investment. The flexibility is the power.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Think Generational</h4>
                  <p className="text-navy/70">
                    This isn&apos;t a retirement plan. It&apos;s a family banking system that will outlive
                    Mike and serve his grandchildren. That perspective changes everything.
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
              Could This Work for Your Business?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Every situation is different. Start with our free tools and education
              to see if IBC makes sense for you.
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
                href="/case-studies/sarahs-ecommerce"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    E-commerce
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    $400K Revenue
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Sarah&apos;s E-commerce Transformation
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How Sarah eliminated inventory financing stress and increased profit margins by 12%.
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
                  Thomas&apos;s Manufacturing Expansion
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How Thomas financed $400K in equipment without banks and kept control of his business.
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
