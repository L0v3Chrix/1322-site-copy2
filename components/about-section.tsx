"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section className="bg-cream py-16 md:py-24" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image src="/images/family-generations.png" alt="Our mission" fill className="object-cover" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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

            <div className="mt-8">
              <Link href="/about/founder" className="btn-primary inline-flex items-center">
                Meet Your Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
