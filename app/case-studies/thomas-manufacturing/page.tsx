import Link from "next/link"
import type { Metadata } from "next"
import CaseStudyDisclaimer from "@/components/case-study-disclaimer"

export const metadata: Metadata = {
  title: "Thomas's Manufacturing Story | Case Studies | 1322 Legacy Strategies",
  description: "How Thomas financed $400K in CNC equipment without depleting cash reserves and expanded production by 65% using the Infinite Banking Concept.",
}

export default function ThomasManufacturingStudy() {
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
                Manufacturing
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                $2.5M Revenue
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                Equipment Financing
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How Thomas Financed $400K in Equipment, Preserved Cash Reserves, and Expanded Production by 65%
            </h1>

            <p className="text-lg text-cream/80 max-w-2xl">
              A precision machining company owner discovers that the key to growth isn&apos;t choosing
              between equipment and cash reserves—it&apos;s building a system that provides both.
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
                <span className="block font-mono text-3xl font-bold text-gold">$400K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Equipment Financed
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$350K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Cash Reserves Preserved
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">65%</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Production Increase
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$28K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Annual Interest Recaptured
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
                Thomas runs a precision machining company in Ohio&apos;s industrial corridor, serving
                aerospace and automotive clients with tight-tolerance parts. With $2.5M in annual
                revenue and a reputation for quality, his business was poised for growth—if he could
                expand capacity.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                The opportunity: a major aerospace client wanted to increase orders by 80%, but
                Thomas&apos;s current equipment couldn&apos;t handle the volume. He needed a new
                5-axis CNC machine—roughly $400,000 installed and ready to produce.
              </p>
              <p className="text-navy/80 leading-relaxed">
                The dilemma: Thomas had about $350,000 in cash reserves. He could pay cash for
                the machine but deplete his safety net. Or he could take a bank loan, keep his
                reserves, but pay 8% interest and tie up borrowing capacity he might need later.
              </p>
            </div>

            {/* The Dilemma */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Manufacturing Owner&apos;s Dilemma
              </h2>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="border-2 border-navy/20 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-navy/10">
                    Option A: Pay Cash
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Deplete Reserves</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">No interest payments</span>
                        <p className="text-sm text-navy/60">Equipment owned outright</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">Cash reserves depleted</span>
                        <p className="text-sm text-navy/60">Only ~$0 emergency fund</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">Lost opportunity cost</span>
                        <p className="text-sm text-navy/60">~$85,000 over 5 years if invested</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-navy/20 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-navy/10">
                    Option B: Bank Loan
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Traditional Financing</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">Cash reserves preserved</span>
                        <p className="text-sm text-navy/60">Keep emergency fund intact</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">8% interest on $400K</span>
                        <p className="text-sm text-navy/60">~$87,000 in interest over 5 years</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">Uses borrowing capacity</span>
                        <p className="text-sm text-navy/60">Less flexibility for future needs</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed">
                Thomas felt stuck. Both options required significant sacrifice. And a third option—
                leasing—meant even higher effective interest rates with no ownership at the end.
              </p>
            </div>

            {/* The IBC Solution */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The IBC Solution: A Third Path
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                A fellow business owner in Thomas&apos;s manufacturing network introduced him to the
                Infinite Banking Concept. The more Thomas learned, the more he saw a solution that
                didn&apos;t require choosing between equipment and reserves.
              </p>

              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Thomas&apos;s Policy Design</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Annual Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$60,000</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Monthly Premium</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$5,000</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Year 1 Cash Value</span>
                    <span className="block font-mono text-2xl font-bold text-gold">$39,000</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-navy/50">Policy Design</span>
                    <span className="block font-mono text-2xl font-bold text-gold">Max PUA Rider</span>
                  </div>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                Thomas committed $60,000 annually to building his family banking system—roughly what
                he&apos;d pay in principal and interest on a traditional loan. But instead of that money
                disappearing to a bank, it was building an asset he controlled.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;I realized I was looking at this wrong. The question wasn&apos;t &apos;how do I pay
                  for this machine?&apos; It was &apos;how do I build a system that funds equipment
                  purchases permanently?&apos; That shift in thinking changed everything.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Thomas, Manufacturing Owner</p>
              </div>
            </div>

            {/* The Implementation */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Implementation Strategy
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                Thomas couldn&apos;t wait 5 years to buy equipment. He needed the machine now to capture
                the aerospace contract. So he implemented a hybrid strategy:
              </p>

              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">Hybrid Financing Strategy</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 1: Start the Policy</span>
                    <p className="text-navy/70 text-sm">
                      Began $60,000/year policy immediately. Year 1 cash value: ~$39,000.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 2: Take Bank Loan (Smaller)</span>
                    <p className="text-navy/70 text-sm">
                      Took $320,000 bank loan for equipment (not full $400K). Kept $80K in cash reserves.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 3: Use Policy to Pay Down</span>
                    <p className="text-navy/70 text-sm">
                      As cash value grew, took policy loans to pay down bank loan faster.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 4: Transition to Full System</span>
                    <p className="text-navy/70 text-sm">
                      By year 3, bank loan paid off. Future equipment financed entirely through policy.
                    </p>
                  </div>
                </div>
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
                    <h4 className="font-heading font-bold text-navy mb-2">Year One: Foundation + Equipment</h4>
                    <p className="text-navy/70">
                      CNC machine installed and producing. Aerospace contract secured. Bank loan of
                      $320K at 8%. Policy premium started at $60K/year. Cash value reached $39,000.
                      Cash reserves maintained at $80K.
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
                    <h4 className="font-heading font-bold text-navy mb-2">Year Two: Aggressive Paydown</h4>
                    <p className="text-navy/70">
                      Policy cash value exceeded $100,000. Took $80,000 policy loan and applied to bank
                      loan principal. Bank balance reduced to $180,000. Increased production generated
                      extra cash flow for faster payments.
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
                    <h4 className="font-heading font-bold text-navy mb-2">Year Three: Bank Loan Gone</h4>
                    <p className="text-navy/70">
                      Policy cash value exceeded $170,000. Took additional policy loan to pay off
                      remaining bank balance. Total bank interest paid: ~$38,000 (vs. $87,000 projected).
                      Savings: $49,000.
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
                    <h4 className="font-heading font-bold text-navy mb-2">Year Four: Second Machine, No Bank</h4>
                    <p className="text-navy/70">
                      Cash value exceeded $250,000. Added second shift. Purchased second CNC machine
                      ($280,000) entirely through policy loan. No bank involvement. Production capacity
                      increased 65% from Year 1 baseline.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="bg-navy text-cream p-8">
                <h4 className="font-heading text-xl font-bold text-gold mb-6">
                  4-Year Summary: Thomas&apos;s Equipment System
                </h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$250,000+</span>
                    <span className="block text-cream/70">Cash Value Built</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$680K</span>
                    <span className="block text-cream/70">Total Equipment Financed</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$49,000</span>
                    <span className="block text-cream/70">Bank Interest Saved</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">65%</span>
                    <span className="block text-cream/70">Production Increase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Math That Matters */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Math That Changed Everything
              </h2>

              <div className="border-2 border-navy/20 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">5-Year Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-navy/10">
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Metric</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Pay Cash</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-navy/50">Bank Loan</th>
                        <th className="py-3 px-4 text-left font-mono text-xs uppercase tracking-wider text-gold">IBC Hybrid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Cash Reserves</td>
                        <td className="py-3 px-4 font-mono text-red-500">$0</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$350K</td>
                        <td className="py-3 px-4 font-mono text-gold">$350K + CV</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Interest Paid to Banks</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$0</td>
                        <td className="py-3 px-4 font-mono text-red-500">$87,000</td>
                        <td className="py-3 px-4 font-mono text-gold">$38,000</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Policy Cash Value</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$0</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$0</td>
                        <td className="py-3 px-4 font-mono text-gold">$280,000+</td>
                      </tr>
                      <tr className="border-b border-navy/5">
                        <td className="py-3 px-4 font-mono text-navy">Death Benefit</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$0</td>
                        <td className="py-3 px-4 font-mono text-navy/70">$0</td>
                        <td className="py-3 px-4 font-mono text-gold">$1.2M</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-navy">Future Flexibility</td>
                        <td className="py-3 px-4 font-mono text-red-500">Low</td>
                        <td className="py-3 px-4 font-mono text-navy/70">Medium</td>
                        <td className="py-3 px-4 font-mono text-gold">High</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                The IBC hybrid approach didn&apos;t just save Thomas money—it built a permanent
                equipment financing system. Every future purchase can be funded through his policy,
                and each repayment strengthens the system.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;I used to dread equipment decisions. Now I look forward to them. Every piece
                  of equipment I finance through my policy makes the system stronger. The next
                  machine will be even easier to fund than the last.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Thomas</p>
              </div>
            </div>

            {/* Key Lessons */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                Key Lessons from Thomas&apos;s Story
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Hybrid Strategies Work</h4>
                  <p className="text-navy/70">
                    You don&apos;t need to wait years to start benefiting from IBC. Thomas used a
                    bridge strategy combining bank financing with policy loans, transitioning
                    fully as his system matured.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Don&apos;t Sacrifice Reserves</h4>
                  <p className="text-navy/70">
                    Manufacturing businesses need cash reserves for unexpected equipment repairs,
                    supply chain disruptions, and opportunity purchases. IBC lets you preserve
                    that safety net while still accessing capital.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Build for the Future</h4>
                  <p className="text-navy/70">
                    Thomas isn&apos;t just funding today&apos;s equipment—he&apos;s building a system that
                    will fund equipment for the next 30 years. Each purchase makes the system
                    stronger.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Compounding Applies to Financing</h4>
                  <p className="text-navy/70">
                    When Thomas pays himself back, that money stays in his system and keeps growing.
                    The interest he would have paid to banks is now building family wealth instead.
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
              Facing an Equipment Decision?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              There may be a better way than choosing between cash reserves and bank loans.
              Explore how IBC could work for your manufacturing business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/tools/opportunity-cost"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Calculate Your Options
              </Link>
              <Link
                href="/learn/foundations"
                className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Learn the Fundamentals
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
                  David&apos;s Bridge Financing System
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How David eliminated hard money costs and built his own capital source.
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
