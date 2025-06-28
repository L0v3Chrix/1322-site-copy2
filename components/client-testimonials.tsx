"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

export default function ClientTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      location: "Dallas, TX",
      category: "Estate Planning",
      quote:
        "Working with 1322 Legacy Strategies transformed how we think about our family's financial future. They didn't just sell us a policy—they educated us on becoming our own bank. Now we have control, liquidity, and a clear path to generational wealth.",
      rating: 5,
      result: "Created $2.3M family bank system",
    },
    {
      id: 2,
      name: "Robert & Jennifer Martinez",
      location: "Phoenix, AZ",
      category: "Tax Strategy",
      quote:
        "After years of watching our retirement accounts get hammered by taxes and market volatility, 1322 showed us a better way. Our whole life policies now provide tax-free growth and guaranteed income. It's like having a pension we control.",
      rating: 5,
      result: "Eliminated $180K in future tax liability",
    },
    {
      id: 3,
      name: "David & Lisa Chen",
      location: "Austin, TX",
      category: "Business Planning",
      quote:
        "As business owners, we needed strategies that worked for both our company and personal wealth. 1322's approach to infinite banking allowed us to fund business expansion while building our family legacy simultaneously.",
      rating: 5,
      result: "Funded $500K business expansion tax-free",
    },
    {
      id: 4,
      name: "James & Patricia Wilson",
      location: "Houston, TX",
      category: "Retirement Planning",
      quote:
        "We were skeptical about whole life insurance until 1322 showed us the numbers. Five years later, we're accessing tax-free income from our policies while our death benefit continues to grow. It's the best financial decision we've made.",
      rating: 5,
      result: "Generated $85K annual tax-free income",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-16 md:py-24 bg-navy" id="testimonials">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gold">What Our Families Say</h2>
          <p className="text-xl max-w-3xl mx-auto text-cream/90">
            Real results from families who chose stewardship over speculation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <motion.div
            key={currentIndex}
            className="bg-cream rounded-lg p-8 md:p-12 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <Quote className="w-12 h-12 text-gold" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-gold fill-current" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-navy text-center leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>

            {/* Result Highlight */}
            <div className="text-center mb-6">
              <div className="inline-block bg-gold/20 px-4 py-2 rounded-full">
                <span className="text-navy font-semibold text-sm">✓ {testimonials[currentIndex].result}</span>
              </div>
            </div>

            {/* Client Info */}
            <div className="text-center">
              <h4 className="text-xl font-bold text-navy mb-1">{testimonials[currentIndex].name}</h4>
              <p className="text-navy/70 mb-2">{testimonials[currentIndex].location}</p>
              <span className="inline-block bg-navy text-cream px-3 py-1 rounded-full text-sm">
                {testimonials[currentIndex].category}
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 gap-4">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="p-3 bg-cream text-navy rounded-full hover:bg-gold transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-gold" : "bg-cream/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="p-3 bg-cream text-navy rounded-full hover:bg-gold transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="text-center mt-4 md:hidden">
            <p className="text-cream/70 text-sm">Swipe or use arrows to see more testimonials</p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">70%+</div>
              <p className="text-cream/80">New clients from referrals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">$10M+</div>
              <p className="text-cream/80">In family bank systems created</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">10+</div>
              <p className="text-cream/80">Years of infinite banking expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
