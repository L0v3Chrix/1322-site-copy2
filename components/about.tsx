import Image from "next/image"

const About = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="section-title">About 1322</h2>

            <p className="text-lg mb-6">
              At 1322 Legacy Strategies, we believe that wealth is not merely something to accumulate — it is something
              to steward. Our mission is rooted in Proverbs 13:22: "A good man leaves an inheritance to his children's
              children."
            </p>

            <p className="text-lg mb-6">
              We partner with families who refuse to leave their future to chance — families who desire to lead with
              strategy, faith, and intentional stewardship. Unlike traditional financial planners who hand control to
              Wall Street, we craft customized strategies that empower our clients to capitalize wisely, own their
              banking function, and grow their legacy with purpose.
            </p>

            <p className="text-lg">
              Every plan we design is built to honor faith, family, and freedom. Our goal is not simply to grow wealth —
              it is to steward blessings for generations yet unseen. This is stewardship-driven strategy. This is legacy
              by design.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image src="/images/family-generations.png" alt="Family legacy" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
