import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interactive Tools | 1322 Legacy Strategies",
  description: "Calculate your interest bleed, project your family bank growth, and validate IBC concepts with our interactive tools.",
}

// Tools data
const tools = [
  {
    number: "01",
    name: "Interest Bleed Calculator",
    description: "See exactly how much external financing costs you. Calculate the true cost of bank dependency including opportunity cost over time.",
    href: "/tools/interest-bleed-calculator",
    inputs: ["Annual financing amount", "Interest rate", "Loan term", "Number of cycles"],
    outputs: ["Total interest paid", "Opportunity cost", "10/20/30 year projections"],
    featured: true,
  },
  {
    number: "02",
    name: "Family Bank Projector",
    description: "Project your multi-generational wealth building potential. See how a properly designed policy can fund your business and secure your legacy.",
    href: "/tools/family-bank-projector",
    inputs: ["Monthly premium capacity", "Current age", "Business financing needs"],
    outputs: ["Cash value timeline", "Policy loan capacity", "Multi-generational transfer potential"],
    featured: true,
  },
  {
    number: "03",
    name: "Policy Premium Estimator",
    description: "Get a rough estimate of policy design parameters based on your capacity and goals. Understand what's possible before your consultation.",
    href: "/tools/policy-estimator",
    inputs: ["Annual premium capacity", "Primary use case", "Time horizon"],
    outputs: ["Estimated cash value", "Loan availability timeline", "Comparison with alternatives"],
    featured: false,
  },
  {
    number: "04",
    name: "Opportunity Cost Calculator",
    description: "Quantify the hidden cost of bank dependency. See what your business could have earned if you kept your interest payments.",
    href: "/tools/opportunity-cost",
    inputs: ["Monthly bank payments", "Years in business", "Average ROI in your business"],
    outputs: ["Total opportunity cost", "Future projections", "What-if scenarios"],
    featured: false,
  },
]

export default function ToolsPage() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-gold mb-4">
              Interactive Calculators
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Validate the Concepts Yourself
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8">
              We believe analytical minds should be able to run the numbers themselves.
              Use these tools to see exactly how IBC could work for your situation.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {tools.map((tool) => (
                <Link
                  key={tool.number}
                  href={tool.href}
                  className="block border-2 border-navy/20 hover:border-gold transition-colors group"
                >
                  <div className="grid md:grid-cols-[100px_1fr] gap-6 p-6 md:p-8">
                    {/* Tool Number */}
                    <div className="flex flex-col items-center md:items-start">
                      <span className="font-mono text-5xl font-bold text-gold">
                        {tool.number}
                      </span>
                      {tool.featured && (
                        <span className="font-mono text-[10px] uppercase tracking-wider bg-gold text-navy px-2 py-1 mt-2">
                          Popular
                        </span>
                      )}
                    </div>

                    {/* Tool Content */}
                    <div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy group-hover:text-gold transition-colors mb-3">
                        {tool.name}
                      </h2>

                      <p className="text-navy/70 mb-6 max-w-2xl">
                        {tool.description}
                      </p>

                      {/* Inputs/Outputs Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-wider text-navy/50 mb-3">
                            You Provide
                          </h4>
                          <ul className="space-y-2">
                            {tool.inputs.map((input, index) => (
                              <li key={index} className="border-l-2 border-gold/50 pl-3 text-sm text-navy/70">
                                {input}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-wider text-navy/50 mb-3">
                            You Get
                          </h4>
                          <ul className="space-y-2">
                            {tool.outputs.map((output, index) => (
                              <li key={index} className="border-l-2 border-gold pl-3 text-sm text-navy/70">
                                {output}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t border-navy/10">
                        <span className="font-mono text-sm uppercase tracking-wider text-gold group-hover:text-navy transition-colors">
                          Open Calculator →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Educational Context Section */}
      <section className="py-20 md:py-24 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                Understand What You&apos;re Calculating
              </h2>
              <p className="text-navy/70 max-w-xl mx-auto">
                These tools are most powerful when combined with educational context.
              </p>
              <div className="w-24 h-1 bg-gold mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/learn/foundations"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Start Here
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Foundations Track
                </h3>
                <p className="text-sm text-navy/60">
                  Understand the &ldquo;why&rdquo; before diving into the numbers.
                </p>
              </Link>

              <Link
                href="/case-studies"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Real Examples
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Case Studies
                </h3>
                <p className="text-sm text-navy/60">
                  See how other business owners applied these concepts.
                </p>
              </Link>

              <a
                href="https://www.skool.com/1322-ibc-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Community
                </span>
                <h3 className="font-heading text-xl font-bold text-navy mt-2 mb-2 group-hover:text-gold transition-colors">
                  Free Academy
                </h3>
                <p className="text-sm text-navy/60">
                  Discuss your results with fellow entrepreneurs.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Questions About Your Results?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Our calculators provide general estimates. For a personalized analysis
              specific to your business situation, let&apos;s have a conversation.
            </p>
            <a
              href="https://discovery.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Book a Free Consultation
            </a>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              No pressure. No obligation. Just an honest conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
