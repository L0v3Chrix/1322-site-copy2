import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "IBC Education | Learn Infinite Banking for Entrepreneurs",
  description:
    "Complete guide to the Infinite Banking Concept (IBC) for Christian business owners. Learn how to reclaim control of your capital and build a family banking system.",
}

const ibcPrinciples = [
  {
    principle: "Banking Function",
    description:
      "Every dollar you spend passes through a banking function—either someone else's bank or yours. IBC teaches you to recapture that function.",
    benefit: "Control the interest, control the terms, control the timeline",
  },
  {
    principle: "Whole Life Insurance",
    description:
      "Properly designed whole life policies from mutual insurance companies create guaranteed cash value growth with contractual certainty.",
    benefit: "Predictable, tax-advantaged growth without market risk",
  },
  {
    principle: "Policy Loans",
    description:
      "Borrow against your policy's cash value to finance business needs—equipment, vehicles, real estate—while your policy continues growing uninterrupted.",
    benefit: "Your capital works twice: policy growth + deployed use",
  },
  {
    principle: "Interest Recapture",
    description:
      "Instead of enriching banks with $20K-$50K+ annually in interest, you pay yourself back through policy loans—keeping that interest in YOUR system.",
    benefit: "Reclaim lost wealth that was bleeding to institutions",
  },
]

const commonMyths = [
  {
    myth: "Whole life insurance is a bad investment",
    truth:
      "Whole life isn't an investment—it's a banking tool. You're not comparing it to stocks; you're comparing it to where you currently store and deploy capital (banks).",
  },
  {
    myth: "Term life is always better than whole life",
    truth:
      "Term life is pure insurance. Whole life is insurance + a family banking system. Different tools for different purposes. IBC entrepreneurs need both.",
  },
  {
    myth: "Policy loans hurt my death benefit",
    truth:
      "Policy loans are borrowed against your cash value, not withdrawn from it. Your death benefit adjusts for outstanding loans, but your policy continues growing.",
  },
  {
    myth: "I should just invest in the stock market instead",
    truth:
      "IBC isn't about beating the market. It's about reclaiming the banking function you're already using. It complements investments, not replaces them.",
  },
]

const implementationSteps = [
  {
    step: 1,
    title: "Business Cash Flow Analysis",
    description:
      "Map your current capital needs: equipment purchases, vehicle financing, real estate investments, working capital cycles.",
  },
  {
    step: 2,
    title: "Policy Design Session",
    description:
      "Work with an Authorized IBC Practitioner to design whole life policies optimized for maximum cash value accumulation.",
  },
  {
    step: 3,
    title: "Implementation & Funding",
    description:
      "Launch your policy with premiums structured around your business cash flow. Many entrepreneurs start with $2,000-$5,000/month.",
  },
  {
    step: 4,
    title: "Capital Deployment Strategy",
    description:
      "Create a systematic plan to replace bank financing with policy loans—starting with upcoming purchases.",
  },
  {
    step: 5,
    title: "Ongoing Stewardship",
    description:
      "Annual reviews to coordinate policy loans, repayment schedules, and multi-generational wealth planning.",
  },
]

export default function IBCEducationPage() {
  return (
    <main className="bg-cream text-navy">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-24 border-b border-navy">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            What Is Infinite Banking?
          </h1>
          <p className="text-2xl md:text-3xl text-cream/90 leading-relaxed font-heading">
            A complete education on IBC—how Christian entrepreneurs reclaim control of their capital, eliminate bank
            dependence, and build family banking systems that last generations.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section id="principles" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Four Core IBC Principles</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              The foundational concepts every entrepreneur must understand
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {ibcPrinciples.map((item, index) => (
              <div key={item.principle} className="border-l-4 border-gold pl-8 py-6">
                <h3 className="text-3xl font-heading font-bold text-navy mb-4">{item.principle}</h3>
                <p className="text-lg text-navy/80 mb-6 leading-relaxed">{item.description}</p>
                <div className="border-t border-navy/10 pt-4">
                  <p className="text-copper font-heading font-semibold text-lg">{item.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Myths vs Truth */}
      <section id="myths" className="py-24 bg-navy text-cream border-b border-cream/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Common IBC Myths (Debunked)
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-cream/80 max-w-3xl mx-auto">
              The truth about Infinite Banking vs what critics say
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {commonMyths.map((item, index) => (
              <div key={item.myth} className="border-2 border-cream/20 p-8">
                <div className="mb-6">
                  <p className="text-sm font-mono text-red-400 font-semibold uppercase tracking-wide mb-2">✗ Myth</p>
                  <p className="text-xl text-white font-heading font-bold">{item.myth}</p>
                </div>
                <div className="border-t border-cream/20 pt-6">
                  <p className="text-sm font-mono text-gold font-semibold uppercase tracking-wide mb-2">✓ Truth</p>
                  <p className="text-cream/90 leading-relaxed">{item.truth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section id="implementation" className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              How to Implement IBC in Your Business
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              The 5-step process from education to execution
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {implementationSteps.map((item, index) => (
              <div key={item.step} className="border-b border-navy/10 pb-12 last:border-b-0">
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-mono font-bold text-gold flex-shrink-0">{String(item.step).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-navy mb-3">{item.title}</h3>
                    <p className="text-lg text-navy/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Numbers Example */}
      <section className="py-24 bg-gold/10 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
              Real Example: $35K in Annual Interest Recaptured
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-12 border-2 border-navy/20">
            <div className="mb-12">
              <h3 className="text-3xl font-heading font-bold text-navy mb-4">Scenario: Plumbing Company Owner</h3>
              <p className="text-lg text-navy/80 leading-relaxed">
                Mike runs a $1.8M plumbing business in Tennessee. Every few years, he finances new service trucks and
                equipment through commercial loans.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="border-2 border-red-400 p-8">
                <h4 className="text-xl font-heading font-bold text-navy mb-6 pb-4 border-b border-navy/10">
                  ✗ Before IBC (Traditional Bank Loans)
                </h4>
                <ul className="space-y-4">
                  <li className="flex justify-between pb-3 border-b border-navy/10">
                    <span className="text-navy/80">Equipment financing:</span>
                    <span className="font-mono font-bold text-navy">$22K/year interest</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b border-navy/10">
                    <span className="text-navy/80">Truck loans:</span>
                    <span className="font-mono font-bold text-navy">$13K/year interest</span>
                  </li>
                  <li className="flex justify-between pt-4 font-bold">
                    <span>Total to banks annually:</span>
                    <span className="font-mono text-red-600 text-xl">$35K lost</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-gold p-8 bg-gold/5">
                <h4 className="text-xl font-heading font-bold text-navy mb-6 pb-4 border-b border-gold/30">
                  ✓ After IBC (Policy Loans)
                </h4>
                <ul className="space-y-4">
                  <li className="flex justify-between pb-3 border-b border-gold/30">
                    <span className="text-navy/80">Equipment via policy loan:</span>
                    <span className="font-mono font-bold text-navy">6% to policy</span>
                  </li>
                  <li className="flex justify-between pb-3 border-b border-gold/30">
                    <span className="text-navy/80">Trucks via policy loan:</span>
                    <span className="font-mono font-bold text-navy">6% to policy</span>
                  </li>
                  <li className="flex justify-between pt-4 font-bold">
                    <span>Total to family system:</span>
                    <span className="font-mono text-green-600 text-xl">$35K recaptured</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-navy text-white p-8 text-center border-t-4 border-gold">
              <p className="text-3xl font-heading font-bold mb-4">$35,000 Annually</p>
              <p className="text-lg text-cream/90 leading-relaxed">
                Redirected from enriching banks to building a family banking system that will fund his children's
                college and his grandchildren's homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="py-24 bg-navy text-cream">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
            Ready to Learn More About IBC?
          </h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Start with FREE education in the 1322 IBC Academy. 1,000+ Christian entrepreneurs are already learning
            inside. When you're ready to implement, book a strategy call.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.skool.com/1322-ibc-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy px-12 py-4 font-heading font-bold text-lg uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Join Free Academy
            </a>
            <a
              href="https://discovery.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-cream text-cream px-12 py-4 font-heading font-bold text-lg uppercase tracking-wider hover:bg-cream hover:text-navy transition-colors"
            >
              Book Strategy Call
            </a>
          </div>
          <p className="text-sm text-cream/60 mt-8">
            No pressure. No obligation. Just education and honest conversations.
          </p>
        </div>
      </section>
    </main>
  )
}
