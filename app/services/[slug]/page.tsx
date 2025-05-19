"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import ContactButton from "@/components/contact-button"
import AnimatedText from "@/components/animated-text"
import HighlightText from "@/components/highlight-text"

// Sample service data - in a real app, this would come from your CMS or API
const servicesData = {
  discovery: {
    title: "Discovery & Values-Based Planning",
    description: "It all starts with your story.",
    fullContent: `
      <p>We begin with listening. Before numbers and projections, we seek to understand your values, vision, and family dynamics. Every great legacy starts here — rooted in purpose, not products.</p>
      <p class="italic">"The harvest of tomorrow is sown in the faithful stewardship of today."</p>
    `,
    image: "/images/discovery-new.png",
    details: [
      "Personal, one-on-one conversation",
      "Focus on your family's values and vision",
      "Understanding your current financial situation",
      "Identifying your legacy goals",
    ],
  },
  "stewardship-strategy": {
    title: "Custom Stewardship Strategy & Infinite Banking Implementation",
    description: "Where vision becomes strategy.",
    fullContent: `
      <p>Infinite Banking is not just a product — it is the heartbeat of capital control. We design and implement custom Whole Life insurance-based systems to help you:</p>
    `,
    image: "/images/strategy-design-new.png",
    details: ["Own your banking function", "Build liquidity and certainty", "Keep control of your capital"],
    additionalContent: `
      <p>This becomes the engine of your family's financial ecosystem, allowing you to steward with confidence and multiply blessings.</p>
    `,
  },
  "trust-estate-planning": {
    title: "Trust & Estate Planning",
    description: "Protect what matters. Preserve what endures.",
    fullContent: `
      <p>Your legacy must be protected from the uncertainties of tomorrow. We partner with families to:</p>
    `,
    image: "/images/legacy-preparation-new.png",
    details: [
      "Design trusts that honor your values",
      "Ensure legal clarity for wealth transfer",
      "Provide peace of mind for generations yet unseen",
    ],
    additionalContent: `
      <p>When trust meets strategy, legacy becomes inevitable.</p>
    `,
  },
  "tax-planning": {
    title: "Tax Planning & Preparation",
    description: "Reduce burdens. Release blessings.",
    fullContent: `
      <p>Tax efficiency is not about loopholes — it is about wisdom. As part of our holistic approach, we ensure:</p>
    `,
    image: "/images/financial-planning.png",
    details: [
      "Proactive planning aligned with your stewardship goals",
      "In-house preparation for seamless strategy integration",
      "Coordination with other aspects of your family's plan",
    ],
    additionalContent: `
      <p class="italic">"Wise stewards know every seed matters."</p>
    `,
  },
  "stewardship-partnership": {
    title: "Ongoing Stewardship Partnership & Legacy Reviews",
    description: "Stewardship is not a set-and-forget responsibility.",
    fullContent: `
      <p>Through annual Legacy Reviews and quarterly touchpoints, we:</p>
    `,
    image: "/images/stewardship-partnership-new.png",
    details: ["Revisit and refine your strategy", "Celebrate family milestones", "Adjust for new seasons of life"],
    additionalContent: `
      <p>We walk beside you — because legacies grow when tended faithfully.</p>
    `,
  },
  "generational-planning": {
    title: "Generational Legacy Planning & Family Stewardship Meetings",
    description: "Pass more than wealth. Pass wisdom.",
    fullContent: `
      <p>A true legacy is not just inherited — it is taught. Our family stewardship services prepare the next generation by:</p>
    `,
    image: "/images/family-generations.png",
    details: [
      "Facilitating intentional family meetings",
      "Sharing your story and stewardship philosophy",
      "Encouraging unity and generational alignment",
    ],
    additionalContent: `
      <p class="italic">"Legacy leadership does not happen by accident — it happens by design."</p>
    `,
  },
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [service, setService] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // In a real app, you would fetch this data from your API or CMS
    const fetchService = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300))

      const serviceData = servicesData[params.slug as keyof typeof servicesData]
      setService(serviceData || null)
      setLoading(false)
    }

    fetchService()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-pulse text-navy">Loading...</div>
      </div>
    )
  }

  if (!service) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-6">The service you're looking for doesn't exist.</p>
        <Link href="/#services" className="btn-primary">
          View All Services
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedText className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight text-center">
              {service.title}
            </AnimatedText>
            <AnimatedText className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center" delay={0.2}>
              {service.description}
            </AnimatedText>
          </div>
        </div>
      </section>

      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: service.fullContent }} />

              <ul className="space-y-3 my-8">
                {service.details.map((detail: string, index: number) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <Check className="text-copper mr-3 mt-1 flex-shrink-0" size={20} />
                    <span>{detail}</span>
                  </motion.li>
                ))}
              </ul>

              {service.additionalContent && (
                <motion.div
                  className="prose prose-lg max-w-none mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  dangerouslySetInnerHTML={{ __html: service.additionalContent }}
                />
              )}

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <ContactButton className="inline-flex items-center">
                  Schedule Your Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ContactButton>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative h-[400px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText className="text-2xl md:text-3xl font-normal mb-6">
              Ready to Begin Your <HighlightText>Legacy Journey</HighlightText>?
            </AnimatedText>
            <AnimatedText className="text-lg mb-8" delay={0.2}>
              Every great legacy begins with a conversation. Let's talk about your family's vision and values.
            </AnimatedText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ContactButton className="inline-flex items-center">
                Start Your Legacy Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </ContactButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
