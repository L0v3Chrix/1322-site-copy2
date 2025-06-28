"use client"

import Hero from "@/components/hero"
import Section from "@/components/section"
import SectionTitle from "@/components/section-title"
import ContactButton from "@/components/contact-button"
import ParallaxImage from "@/components/parallax-image"
import { ArrowRight, Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

// Import the new components at the top of the file
import AnimatedText from "@/components/animated-text"
import AnimatedQuote from "@/components/animated-quote"
import ClientStories from "@/components/client-stories"
import ToolsServices from "@/components/tools-services"
import ClientTestimonials from "@/components/client-testimonials"
import FloatingVideoPlayer from "@/components/floating-video-player"

export default function Home() {
  // Journey steps data
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
    <div className="min-h-screen" style={{ backgroundColor: "#F5F0E6" }}>
      {/* Home Section */}
      <Hero
        id="home"
        title={
          <div>
            <span className="block">Control Your Capital.</span>
            <span className="block">Build Your Legacy.</span>
          </div>
        }
        subtitle={
          <>
            Make sure <strong>your</strong> money outlives <strong>you</strong>—with purpose.
          </>
        }
        backgroundImage="/images/wheat-field.png"
      />

      {/* Why Stewardship Section */}
      <Section className="bg-cream" id="why-stewardship">
        <SectionTitle>Why Stewardship?</SectionTitle>

        <motion.div
          className="max-w-prose-normal mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Most advisors "manage" money for a fee. We show families how to <strong>steward</strong> their own
            capital—with clarity, control, and purpose.
          </p>

          <p>Stewardship = ownership, liquidity, and a generational mindset.</p>
        </motion.div>
      </Section>

      {/* About Section */}
      <Section className="bg-cream" id="about">
        <SectionTitle>Legacy by Design, Not by Default</SectionTitle>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <ParallaxImage src="/images/family-generations.png" alt="Our mission" className="h-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-normal mb-6">Our Mission: Legacy by Design</h3>

            <p>
              To empower families to control their capital, steward their wealth faithfully, and build legacies that
              bless generations.
            </p>

            <p>
              Rooted in Proverbs 13:22, we believe wealth is not simply something to accumulate—it is something to
              steward.
            </p>

            <p>
              We don't believe in mass-market financial plans. We craft dynamic, relational strategies that honor your
              story, your calling, and your vision for the generations to come.
            </p>

            <div className="mt-8">
              <Link href="/about/founder" className="btn-primary inline-flex items-center">
                Meet Your Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Journey Section - Updated with improved layout */}
      <Section className="bg-cream" id="journey">
        <SectionTitle>What to Expect: Your Journey of Stewardship</SectionTitle>

        <p className="text-center max-w-prose-normal mx-auto mb-8">
          Faithful stewardship is not an event. It is a lifelong calling.
        </p>

        <div className="max-w-5xl mx-auto space-y-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-6 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`${index % 2 === 1 ? "order-2" : "order-1"} md:order-1`}>
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-playfair font-bold text-lg text-copper">{step.number}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-navy">{step.title}</h3>
                    <p className="text-base mb-3 text-navy/80 leading-relaxed">{step.description}</p>
                    <p className="text-base italic text-copper">{step.emphasis}</p>
                  </div>
                </div>
              </div>

              <div
                className={`relative h-[200px] md:h-[240px] rounded-lg overflow-hidden ${
                  index % 2 === 1 ? "order-1" : "order-2"
                } md:order-2`}
              >
                <ParallaxImage
                  src={step.image}
                  alt={`Step ${step.number}: ${step.title}`}
                  className="h-full object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <ContactButton
            title="Walk the Journey"
            description="Begin your legacy stewardship journey with us."
            className="inline-flex items-center"
          >
            Walk the Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </ContactButton>
        </div>
      </Section>

      {/* Client Stories Section */}
      <ClientStories />

      {/* Client Testimonials Section */}
      <ClientTestimonials />

      {/* Tools & Services Section */}
      <ToolsServices />

      {/* Why Choose Us Section */}
      <Section className="bg-navy text-cream" id="why-choose">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-6 leading-tight tracking-wide">
            WHY FAMILIES CHOOSE 1322
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <ul className="space-y-6">
            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Check className="text-gold mr-4 mt-1 flex-shrink-0" />
              <p className="text-cream text-lg">
                Everything under one roof—legal, tax, insurance, income. No finger-pointing between advisors.
              </p>
            </motion.li>

            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Check className="text-gold mr-4 mt-1 flex-shrink-0" />
              <p className="text-cream text-lg">Boutique attention—fewer clients, deeper relationships.</p>
            </motion.li>

            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Check className="text-gold mr-4 mt-1 flex-shrink-0" />
              <p className="text-cream text-lg">Faith-anchored wisdom without the preachiness.</p>
            </motion.li>

            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Check className="text-gold mr-4 mt-1 flex-shrink-0" />
              <p className="text-cream text-lg">Over 70% of new families come from referrals.</p>
            </motion.li>

            <motion.li
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Check className="text-gold mr-4 mt-1 flex-shrink-0" />
              <p className="text-cream text-lg">
                Supported by a team of CERTIFIED FINANCIAL PLANNERS and Chartered Life Underwriters.
              </p>
            </motion.li>
          </ul>

          <AnimatedQuote author="Proverbs 13:22" className="my-8">
            A good man leaves an inheritance to his children's children.
          </AnimatedQuote>

          <AnimatedText className="mt-4 text-center text-cream" delay={0.8}>
            At 1322 Legacy Strategies, we help you do just that.
          </AnimatedText>
        </div>
      </Section>

      {/* Strategy Section - Moved below Why Choose Us */}
      <Section className="bg-cream" id="strategy">
        <SectionTitle>HOW IT WORKS</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Discovery Call (30 min)",
              description: "Share your goals; we listen.",
            },
            {
              title: "Legacy Blueprint",
              description: "See exactly how your dollars can fund life now and bless heirs later.",
            },
            {
              title: "Stewardship Implementation",
              description:
                'Tools like the "Infinite Banking Concept" (properly structured whole-life insurance), coordinated trusts, and tax-smart income streams.',
            },
            {
              title: "Legacy Handoff",
              description: "Coaching heirs so they inherit wisdom with the wealth.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-navy/5 p-8 rounded-lg border border-navy/10 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <span className="font-playfair font-bold text-xl text-copper">{index + 1}</span>
              </div>

              <h3 className="text-xl font-bold mb-4 text-navy">{step.title}</h3>
              <p className="text-navy/80">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center max-w-prose-normal mx-auto">
          <p className="italic text-navy/80">
            <em>Plain-English promise:</em> You'll understand every step well enough to explain it at the dinner table.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-cream" id="cta">
        <SectionTitle>Ready for a conversation that puts you back in the driver's seat?</SectionTitle>

        <motion.div
          className="max-w-prose-normal mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p>Schedule Your Discovery Call and start controlling your capital.</p>

          <p className="text-sm italic mb-6">Control your capital. Build your legacy.</p>

          <div className="mt-8">
            <ContactButton
              title="Schedule Your Discovery Call"
              description="Take the first step toward building a legacy that blesses generations."
              className="inline-flex items-center"
            >
              Book My 30-Min Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </ContactButton>
          </div>
        </motion.div>
      </Section>

      <FloatingVideoPlayer />
    </div>
  )
}
