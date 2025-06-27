import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

export default function StrategyPage() {
  const steps = [
    {
      title: "Discovery",
      description:
        "We begin by understanding your family's values, goals, and vision for the future. This is about more than just numbers—it's about your legacy.",
      details: [
        "Personal, one-on-one conversation",
        "Focus on your family's values and vision",
        "Understanding your current financial situation",
        "Identifying your legacy goals",
      ],
    },
    {
      title: "Strategy",
      description:
        "Together, we craft a customized stewardship plan that puts you in control of your capital and aligns with your family's values and long-term vision.",
      details: [
        "Customized Infinite Banking strategy",
        "Capital control and growth planning",
        "Tax-efficient wealth transfer design",
        "Values-based inheritance planning",
      ],
    },
    {
      title: "Stewardship",
      description:
        "We implement your strategy with a focus on faithful stewardship, ensuring your wealth serves your family's legacy goals.",
      details: [
        "Implementation guidance and support",
        "Regular strategy reviews and adjustments",
        "Ongoing education and resources",
        "Family stewardship coaching",
      ],
    },
    {
      title: "Legacy Handoff",
      description:
        "We help you prepare the next generation to receive not just wealth, but wisdom—ensuring your legacy continues for generations to come.",
      details: [
        "Next generation preparation",
        "Values and vision transfer",
        "Family stewardship meetings",
        "Legacy celebration and documentation",
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight">
              Your Legacy Strategy™
            </h1>

            <p className="text-lg md:text-xl text-navy/80 mb-10">
              Our proprietary process helps you take control of your capital and build a legacy that lasts for
              generations.
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Process</h2>
            <p className="text-xl max-w-3xl mx-auto text-navy/80">
              A step-by-step journey to build your family's legacy
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "order-2" : "order-1"} md:order-1`}>
                  <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="font-playfair font-bold text-2xl text-copper">{index + 1}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">{step.title}</h3>
                  <p className="text-lg mb-6 text-navy/80">{step.description}</p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <Check className="text-copper mr-3 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? "order-1" : "order-2"} md:order-2`}
                >
                  {index === 0 && (
                    <Image src="/images/family-legacy.png" alt="Step 1: Discovery" fill className="object-cover" />
                  )}
                  {index === 1 && (
                    <Image src="/images/financial-planning.png" alt="Step 2: Strategy" fill className="object-cover" />
                  )}
                  {index === 2 && (
                    <Image src="/images/wheat-field.png" alt="Step 3: Stewardship" fill className="object-cover" />
                  )}
                  {index === 3 && (
                    <Image
                      src="/images/legacy-handoff.png"
                      alt="Step 4: Legacy Handoff"
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infinite Banking Section */}
      <section className="bg-navy text-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gold">Infinite Banking Concept</h2>

              <p className="text-xl mb-6">
                At the core of our strategy is the Infinite Banking Concept—a proven approach that puts you in control
                of your capital and allows you to become your own banker.
              </p>

              <p className="mb-6">
                Traditional financial planning often leaves you dependent on Wall Street and financial institutions. The
                Infinite Banking Concept empowers you to:
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                  <span>Create your own banking system</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                  <span>Access capital on your terms</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                  <span>Build wealth outside of market volatility</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                  <span>Create a legacy that grows tax-efficiently</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                  <span>Pass wealth to future generations with minimal taxation</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/financial-planning.png"
                alt="Infinite Banking Concept"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="text-xl max-w-3xl mx-auto text-navy/80">
              Hear from families who have transformed their legacy with our strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-cream/70 p-8 rounded-lg border border-navy/10 shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt={`Client ${index}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">
                      The {index === 1 ? "Johnson" : index === 2 ? "Smith" : "Williams"} Family
                    </h3>
                    <p className="text-navy/70">Client since 20{18 + index}</p>
                  </div>
                </div>

                <p className="italic text-navy/80 mb-6">
                  "Working with 1322 Legacy Strategies has transformed how we think about our family's wealth. We're no
                  longer just planning for retirement—we're building a legacy that will bless our children and
                  grandchildren."
                </p>

                <div className="flex items-center text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">Ready to Begin Your Legacy Journey?</h2>

            <p className="text-xl mb-8 text-navy/80">
              Schedule your no-cost, no-obligation Legacy Strategy Call today.
            </p>

            <Link href="/contact" className="btn-primary inline-block">
              Schedule Your Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
