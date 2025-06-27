"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function FounderBioMobile() {
  return (
    <section className="bg-cream py-16 md:hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0752-sBN3IHQR9AJIfAUlk1wPxlvK0N97l4.jpeg"
                alt="Brad Raschke, Founder of 1322 Legacy Strategies"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <h1 className="text-3xl font-playfair font-bold text-navy mb-2">Brad Raschke</h1>
            <p className="text-xl text-navy/80 mb-6">Founder & Steward of Strategy, 1322 Legacy Strategies</p>

            <div className="border-l-4 border-gold pl-4 mb-8 italic text-gold">
              <p className="text-lg">"A good man leaves an inheritance to his children's children." – Proverbs 13:22</p>
            </div>

            <div className="space-y-4 text-navy/90">
              {/* Same content as the desktop version */}
              <p>
                I was raised in Lubbock, Texas — the oldest of three, in a home full of faith, football, and quiet
                faithfulness. My parents believed in showing up: for church, for family, for neighbors. I gave my life
                to Christ at 14. That decision didn't just shape my faith; it shaped how I lead, love, and steward
                everything I've been entrusted with — as a husband, father, and guide.
              </p>

              {/* Continue with the rest of the paragraphs */}
              {/* ... */}

              <div className="pt-4 font-playfair text-lg">
                <p>This is more than finance.</p>
                <p>This is stewardship by design.</p>
                <p className="font-bold text-gold">This is 1322.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
