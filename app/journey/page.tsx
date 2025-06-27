import Image from "next/image"
import { ArrowRight } from "lucide-react"
import ContactButton from "@/components/contact-button"

export default function JourneyPage() {
  const journeySteps = [
    {
      number: 1,
      title: "Discovery",
      description: "We listen deeply to your story, your values, your vision.",
      emphasis: "You are seen. You are heard.",
      image: "/images/family-legacy.png",
    },
    {
      number: 2,
      title: "Strategy Design",
      description: "Together, we craft a stewardship strategy designed to serve your family for generations.",
      emphasis: "You are the steward. We are your guide.",
      image: "/images/financial-planning.png",
    },
    {
      number: 3,
      title: "Stewardship Walk",
      description:
        "Through relational, annual touchpoints, we refine your strategy, nurture your capital, and celebrate milestones.",
      emphasis: "Stewardship is a living, breathing journey.",
      image: "/images/wheat-field.png",
    },
    {
      number: 4,
      title: "Legacy Handoff",
      description:
        "When the time comes, we help ensure your blessings are passed intentionally — with wisdom, clarity, and love.",
      emphasis: "Your legacy, faithfully prepared.",
      image: "/images/legacy-handoff.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight text-center">
              What to Expect: Your Journey of Stewardship
            </h1>

            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center">
              Faithful stewardship is not an event. It is a lifelong calling.
            </p>

            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center">
              Here's what your journey with 1322 Legacy Strategies will look like:
            </p>
          </div>
        </div>
      </section>

      {/* Journey Steps Section */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {journeySteps.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? "order-2" : "order-1"} md:order-1`}>
                  <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <span className="font-playfair font-bold text-2xl text-copper">{step.number}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy">{step.title}</h3>
                  <p className="text-lg mb-6 text-navy/80">{step.description}</p>

                  <p className="text-lg italic text-copper">{step.emphasis}</p>
                </div>

                <div
                  className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden ${
                    index % 2 === 1 ? "order-1" : "order-2"
                  } md:order-2`}
                >
                  <Image
                    src={step.image || "/placeholder.svg"}
                    alt={`Step ${step.number}: ${step.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <ContactButton
              title="Walk the Journey"
              description="Begin your legacy stewardship journey with us."
              className="inline-flex items-center"
            >
              Walk the Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </ContactButton>
          </div>
        </div>
      </section>
    </div>
  )
}
