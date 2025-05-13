"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedText from "@/components/animated-text"
import HighlightText from "@/components/highlight-text"
import { motion } from "framer-motion"
import InfinityScroll from "@/components/about-infinity-scroll"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedText className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight text-center">
              Legacy by Design, Not by Default
            </AnimatedText>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image src="/images/family-generations.png" alt="Our mission" fill className="object-cover rounded-lg" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedText className="section-title" delay={0.2}>
                Our <HighlightText>Mission</HighlightText>:
              </AnimatedText>

              <AnimatedText className="text-lg mb-6" delay={0.3}>
                1322 Legacy Strategies exists to empower families to control their capital, steward their wealth
                faithfully, and build legacies that bless generations.
              </AnimatedText>

              <AnimatedText className="text-lg mb-6" delay={0.4}>
                Rooted in Proverbs 13:22, we believe wealth is not simply something to accumulate — it is something to
                steward.
              </AnimatedText>

              <AnimatedText className="text-lg font-bold mb-6" delay={0.5}>
                Faith. Family. Future.
              </AnimatedText>

              <AnimatedText className="text-lg mb-8" delay={0.6}>
                We don't believe in mass-market financial plans. We craft dynamic, relational strategies that honor your
                story, your calling, and your vision for the generations to come.
              </AnimatedText>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link href="/about/founder" className="btn-primary inline-flex items-center">
                  Meet Your Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinity Scroll starting with Meet the Founder */}
      <InfinityScroll />
    </div>
  )
}
