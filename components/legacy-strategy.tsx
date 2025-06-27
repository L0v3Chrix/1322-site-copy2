import { Check } from "lucide-react"

const LegacyStrategy = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "We begin by understanding your family's values, goals, and vision for the future. This is about more than just numbers—it's about your legacy.",
    },
    {
      title: "Strategy",
      description:
        "Together, we craft a customized stewardship plan that puts you in control of your capital and aligns with your family's values and long-term vision.",
    },
    {
      title: "Stewardship",
      description:
        "We implement your strategy with a focus on faithful stewardship, ensuring your wealth serves your family's legacy goals.",
    },
    {
      title: "Legacy Handoff",
      description:
        "We help you prepare the next generation to receive not just wealth, but wisdom—ensuring your legacy continues for generations to come.",
    },
  ]

  return (
    <section className="bg-navy text-cream py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Your Legacy Strategy™</h2>
          <p className="text-xl max-w-3xl mx-auto text-cream/80">
            Our proprietary process helps you take control of your capital and build a legacy that lasts for
            generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-navy/40 p-8 rounded-lg border border-gold/30 flex flex-col h-full">
              <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="font-playfair font-bold text-xl text-gold">{index + 1}</span>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gold">{step.title}</h3>
              <p className="text-cream/80">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy/40 p-8 md:p-12 rounded-lg border border-gold/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gold">The 1322 Difference</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p>Emphasis on Infinite Banking and capital control</p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p>Faith-based approach to wealth stewardship</p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p>Focus on generational impact, not just returns</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p>Customized strategies tailored to your family's values</p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p>Boutique, personalized service experience</p>
              </div>
              <div className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <p>Guidance for both financial and values-based inheritance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacyStrategy
