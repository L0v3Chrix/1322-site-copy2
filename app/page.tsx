"use client"

import Hero from "@/components/hero"
import Section from "@/components/section"
import OptimizedImage from "@/components/optimized-image"
import Link from "next/link"
import { ArrowRight, Check, DollarSign, TrendingUp, Shield, Users } from "lucide-react"
import { motion } from "framer-motion"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ContactButton from "@/components/contact-button"

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

const storyCards = [
  {
    icon: DollarSign,
    title: "The Johnson Family",
    subtitle: "From Debt to Dynasty",
    description:
      "Eliminated $180,000 in mortgage payments while building a $2.3M family bank that will fund their children's education and business ventures.",
    achievement: "Created generational wealth in 7 years",
  },
  {
    icon: TrendingUp,
    title: "The Martinez Legacy",
    subtitle: "Tax-Free Retirement",
    description:
      "Replaced their 401(k) strategy with infinite banking, creating $85,000 in annual tax-free income while preserving $1.2M for their heirs.",
    achievement: "Zero taxes on retirement income",
  },
  {
    icon: Shield,
    title: "The Chen Enterprise",
    subtitle: "Business & Family Protection",
    description:
      "Protected their $3M business with key-person insurance while funding expansion through policy loans, keeping 100% ownership.",
    achievement: "Grew business debt-free",
  },
  {
    icon: Users,
    title: "The Williams Dynasty",
    subtitle: "Multi-Generational Planning",
    description:
      "Established a family banking system that will provide each grandchild with $250,000 at age 25, funded through strategic policy design.",
    achievement: "Secured 3rd generation legacy",
  },
]

const tools = [
  { concern: "Quick clarity on where you stand", tool: "Legacy Insight™ Report" },
  { concern: "Liquidity without the bank", tool: "Infinite Banking Concept™" },
  { concern: "Keep more, give less to IRS", tool: "Tax Coordination with our Tax Strategists" },
  { concern: "Teach the next generation", tool: "Annual Legacy Review" },
]

const howItWorksSteps = [
  {
    title: "Discovery Call (90 min)",
    description: "Share your goals; we listen.",
  },
  {
    title: "Legacy Blueprint",
    description: "See exactly how your dollars can fund life now and bless heirs later.",
  },
  {
    title: "Stewardship Implementation",
    description: 'Tools like the "Infinite Banking Concept™", coordinated trusts, and tax-smart income streams.',
  },
  {
    title: "Legacy Handoff",
    description: "Coaching heirs so they inherit wisdom with the wealth.",
  },
]

const whyChooseUsPoints = [
  "Everything under one roof—legal, tax, insurance, income. No finger-pointing between advisors.",
  "Boutique attention—fewer clients, deeper relationships.",
  "Faith-anchored wisdom without the preachiness.",
  "Over 70% of new families come from referrals.",
  "Supported by a team of CERTIFIED FINANCIAL PLANNERS® and Chartered Life Underwriters®.",
]

export default function Home() {
  return (
    <>
      <Hero
        id="home"
        title={
          <div>
            <span className="block">Control Your Capital.</span>
            <span className="block">Build Your Legacy.</span>
          </div>
        }
        subtitle="Make sure your money outlives you—with purpose."
        backgroundImage="/images/wheat-field.png"
      />

      <Section id="why-stewardship">
        <h2 className="section-title">Why Stewardship?</h2>
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

      <Section id="mission">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <OptimizedImage src="/images/family-generations.png" alt="Our mission" type="medium" className="h-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-normal mb-6">Our Mission: Legacy by Design</h3>
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
              <Link href="/about" className="btn-outline">
                Meet Your Guide <ArrowRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="journey">
        <h2 className="section-title">What to Expect: Your Journey of Stewardship</h2>
        <p className="section-subtitle subtitle-center">
          Faithful stewardship is not an event. It is a lifelong calling.
        </p>
        <div className="space-y-16">
          {journeySteps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                className={`${index % 2 === 1 ? "md:order-2" : ""} `}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gold/20 text-copper w-10 h-10 rounded-full flex items-center justify-center font-playfair font-bold text-lg mr-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-normal text-navy">{step.title}</h3>
                </div>
                <p className="text-lg mb-4 text-navy/80">{step.description}</p>
                <p className="text-lg italic text-copper">{step.emphasis}</p>
              </motion.div>
              <div className={`relative h-[300px] rounded-lg overflow-hidden ${index % 2 === 1 ? "md:order-1" : ""}`}>
                <OptimizedImage src={step.image} alt={step.title} type="medium" className="h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <ContactButton className="btn-outline" href="https://discovery.1322legacystrategies.com/">
            Walk The Journey <ArrowRight className="inline ml-2 h-4 w-4" />
          </ContactButton>
        </div>
      </Section>

      <Section id="services">
        <h2 className="section-title">Stories of Stewardship</h2>
        <p className="section-subtitle subtitle-center">
          Real families who chose to control their capital and build lasting legacies
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {storyCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gold/10 text-gold p-3 rounded-full mr-4">
                  <card.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{card.title}</h3>
                  <p className="text-copper mb-0">{card.subtitle}</p>
                </div>
              </div>
              <p className="text-navy/80 flex-grow">{card.description}</p>
              <div className="text-green-600 font-semibold flex items-center mt-4">
                <Check size={20} className="mr-2" />
                {card.achievement}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <TestimonialCarousel />

      <Section id="tools">
        <h2 className="section-title">Tools & Services</h2>
        <p className="section-subtitle subtitle-center">
          Each tool ties back to the four-step strategy—nothing "extra," everything coordinated.
        </p>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-navy text-white p-4 flex">
            <div className="w-1/2 font-bold">Your Concern</div>
            <div className="w-1/2 font-bold">1322 Tool</div>
          </div>
          {tools.map((tool, index) => (
            <div key={index} className="flex p-4 border-t border-gray-200 items-center">
              <div className="w-1/2 text-navy/90">{tool.concern}</div>
              <div className="w-1/2 text-navy font-semibold">{tool.tool}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-dark-blue text-cream" id="why-choose">
        <h2 className="section-title text-white">WHY FAMILIES CHOOSE 1322</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-4 text-lg">
            {whyChooseUsPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="text-center my-12">
            <p className="font-playfair text-2xl italic">
              “A good man leaves an inheritance to his children’s children.”
            </p>
            <p className="mt-2 text-cream/80">— Proverbs 13:22</p>
          </div>
          <p className="text-center text-sm">At 1322 Legacy Strategies, we help you do just that.</p>
        </div>
      </Section>

      <Section id="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
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
        <p className="section-subtitle subtitle-center">
          Plain-English promise: You'll understand every step well enough to explain it at the dinner table.
        </p>
      </Section>

      <Section className="text-center">
        <h2 className="text-3xl md:text-4xl text-navy/80 mb-4">
          Ready for a conversation that puts you back in the driver's seat?
        </h2>
        <p className="text-lg mb-8">Schedule Your Discovery Call and start controlling your capital.</p>
        <ContactButton className="btn-outline text-lg" href="https://discovery.1322legacystrategies.com/">
          Book My 90-Min Call <ArrowRight className="inline ml-2" />
        </ContactButton>
      </Section>
    </>
  )
}
