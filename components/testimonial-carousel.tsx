"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import AnimatedCounter from "./animated-counter"

const testimonials = [
  {
    quote:
      "Working with 1322 Legacy Strategies transformed how we think about our family's financial future. They didn't just sell us a policy—they educated us on becoming our own bank. Now we have control, liquidity, and a clear path to generational wealth.",
    achievement: "Created $2.3M family bank system",
    author: "Sarah & Michael Thompson",
    location: "Dallas, TX",
    tag: "Estate Planning",
  },
  {
    quote:
      "The clarity we gained from the Legacy Blueprint was invaluable. For the first time, we saw a tangible plan that aligned with our faith and values. It's a peace of mind you can't put a price on.",
    achievement: "Secured tax-free retirement income",
    author: "The Garcia Family",
    location: "Austin, TX",
    tag: "Retirement Planning",
  },
  {
    quote:
      "As a business owner, protecting my company and my family was paramount. 1322 helped us structure a plan that did both, using strategies I never knew existed. Their holistic approach is a game-changer.",
    achievement: "Funded business expansion with policy loans",
    author: "David Chen",
    location: "Houston, TX",
    tag: "Business Protection",
  },
]

const stats = [
  { value: 70, label: "New clients from referrals", suffix: "%+" },
  { value: 10, label: "In family bank systems created", prefix: "$", suffix: "M+" },
  { value: 10, label: "Years of infinite-banking expertise", suffix: "+" },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const currentTestimonial = testimonials[index]

  return (
    <div className="bg-dark-blue text-cream py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="section-title text-white">What Our Families Say</h2>
        <p className="section-subtitle !text-cream/80 text-right">
          Real results from families who chose stewardship over speculation
        </p>

        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bg-cream text-navy p-8 md:p-12 rounded-lg shadow-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold fill-current" />
                ))}
              </div>
              <p className="text-5xl font-playfair text-gold mb-6">"</p>
              <p className="text-lg md:text-xl mb-6">{currentTestimonial.quote}</p>
              <div className="inline-flex items-center bg-gold/10 text-gold font-semibold px-4 py-2 rounded-full mb-6">
                <CheckCircle className="mr-2" size={20} />
                {currentTestimonial.achievement}
              </div>
              <p className="font-bold text-lg">{currentTestimonial.author}</p>
              <p className="text-navy/70">{currentTestimonial.location}</p>
              <div className="absolute -top-4 right-4 bg-copper text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                {currentTestimonial.tag}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-3 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                i === index ? "bg-gold" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-5xl font-playfair text-gold mb-2">
                <AnimatedCounter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="text-cream/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
