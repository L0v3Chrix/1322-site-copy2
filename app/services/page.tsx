"use client"

import Hero from "@/components/hero"
import Section from "@/components/section"
import SectionTitle from "@/components/section-title"
import ServiceCard from "@/components/service-card"
import ContactButton from "@/components/contact-button"
import AnimatedText from "@/components/animated-text"
import HighlightText from "@/components/highlight-text"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      title: "Discovery",
      image: "/images/discovery-new.png",
      slug: "discovery",
    },
    {
      title: "Strategy Design",
      image: "/images/strategy-design-new.png",
      slug: "strategy-design",
    },
    {
      title: "Stewardship Partnership",
      image: "/images/stewardship-partnership-new.png",
      slug: "stewardship-partnership",
    },
    {
      title: "Legacy Preparation",
      image: "/images/legacy-preparation-new.png",
      slug: "legacy-preparation",
    },
  ]

  return (
    <>
      <Hero
        title="Your Capitalization Strategy"
        subtitle="Stewardship requires intentional strategy — not surrender."
        backgroundImage="/images/wheat-field.png"
      />

      <Section className="bg-cream">
        <SectionTitle>
          <AnimatedText type="character" delay={0.05}>
            Our Services Include:
          </AnimatedText>
        </SectionTitle>

        <div className="card-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} image={service.image} slug={service.slug} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ContactButton
            title="Build Your Legacy Strategy"
            description="Let's craft a custom stewardship strategy for your family."
            className="inline-flex items-center"
          >
            Build Your <HighlightText>Legacy Strategy</HighlightText>
            <ArrowRight className="ml-2 h-4 w-4" />
          </ContactButton>
        </motion.div>
      </Section>
    </>
  )
}
