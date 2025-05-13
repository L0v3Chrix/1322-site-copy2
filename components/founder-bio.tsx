"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function FounderBio() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0752-sBN3IHQR9AJIfAUlk1wPxlvK0N97l4.jpeg"
                  alt="Brad Raschke, Founder of 1322 Legacy Strategies"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              className="bg-cream/70 p-8 rounded-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-navy mb-2">Brad Raschke</h1>
              <p className="text-xl text-navy/80 mb-6">Founder & Steward of Strategy, 1322 Legacy Strategies</p>

              <div className="border-l-4 border-gold pl-4 mb-8 italic text-gold">
                <p className="text-lg">
                  "A good man leaves an inheritance to his children's children." – Proverbs 13:22
                </p>
              </div>

              <div className="space-y-4 text-navy/90">
                <p>
                  I was raised in Lubbock, Texas — the oldest of three, in a home full of faith, football, and quiet
                  faithfulness. My parents believed in showing up: for church, for family, for neighbors. I gave my life
                  to Christ at 14. That decision didn't just shape my faith; it shaped how I lead, love, and steward
                  everything I've been entrusted with — as a husband, father, and guide.
                </p>

                <p>
                  For a long time, I thought I was going to be a doctor. That was the plan — mine, and my family's. I
                  entered college as a pre-med major chasing certainty. But somewhere between chemistry labs and biology
                  lectures, I began to feel a dissonance. I wasn't wired for that path. What stirred me most wasn't
                  science — it was story. History. Human behavior. Legacy.
                </p>

                <p>
                  So I paused. Waited tables. Listened. Grew up. Eventually, I found my way to Howard Payne University,
                  a small Baptist college back home in Texas. That season felt like a realignment — not just
                  academically, but spiritually. I earned my degree in U.S. history and prepared to teach.
                </p>

                <p className="font-bold">Then everything changed.</p>

                <p>
                  In 2011, I encountered the ideas of Ron Paul, which led me to the Mises Institute, Austrian economics,
                  and eventually, the Infinite Banking Concept. One seed at a time, God was planting a deeper conviction
                  in me: that financial strategy could be a tool of stewardship — a way to build families up instead of
                  holding them back.
                </p>

                <p>
                  I entered the insurance world in 2014 and found myself drawn to life insurance — not as a product, but
                  as a process. A means of reclaiming control. Of restoring dignity. Of designing legacy.
                </p>

                <p>
                  The turning point came when I discovered the work of Carlos Lara and Dr. Robert Murphy through the
                  Laura Murphy Report. That led me to Nelson Nash and the Infinite Banking movement. I trained under
                  James Nethery, a gifted mentor whose wisdom and integrity shaped me more than words can say. He didn't
                  just teach me how to use Infinite Banking — he showed me how to apply it with purpose.
                </p>

                <p>
                  I spent the next decade in the field, walking with families, refining my craft, and preparing to build
                  something that would last.
                </p>

                <p>
                  In 2019, my grandfather Ed Lookabaugh passed away. I was honored to deliver his eulogy. As I stood
                  before our family, I realized something profound: the most enduring legacy he left wasn't financial —
                  it was spiritual. Faith. Integrity. Work ethic. Joy. Discipline. Service. Blessing. That day, I spoke
                  the words of Proverbs 13:22… and 1322 Legacy Strategies was born.
                </p>

                <p>
                  I launched 1322 in his honor — and in service to families like ours, who want to lead with purpose and
                  pass on more than money.
                </p>

                <p>
                  Today, I live in Geneva, Illinois with my wife and son. Every day, I wake up with a fire to help
                  families steward what matters most.
                </p>

                <p>
                  At 1322, we don't sell products. We craft strategy — rooted in faith, built on Austrian economics, and
                  powered by Infinite Banking. We help families capitalize intentionally, protect what God has given
                  them, and prepare blessings for generations yet unseen.
                </p>

                <div className="pt-4 font-playfair text-lg">
                  <p>This is more than finance.</p>
                  <p>This is stewardship by design.</p>
                  <p className="font-bold text-gold">This is 1322.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
