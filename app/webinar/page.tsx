"use client"

import type React from "react"

import { useState } from "react"
import { registerForWebinar } from "../actions/webinar-registration"
import Image from "next/image"

export default function WebinarPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 18,
    minutes: 14,
    seconds: 41,
  })

  // Handle form submission
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData(event.currentTarget)
    const result = await registerForWebinar(formData)

    setResult(result)
    setIsSubmitting(false)

    if (result.success) {
      setIsRegistered(true)
    }
  }

  // Confirmation page
  if (isRegistered) {
    return (
      <div className="min-h-screen bg-cream pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="bg-navy text-cream p-12 text-center border-b border-cream/20">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">You're Registered. Well Done.</h1>
            <p className="text-xl font-heading">
              Your seat is confirmed for the upcoming IBC Education Webinar
              <br />
              Wednesday at 7:00 p.m. CST
            </p>
          </div>

          {/* Video Section */}
          <div className="relative bg-cream aspect-video w-full border-b border-navy/10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wheat-field-sunset-1322-Rl9Yd9Iy9Yd9Iy9Yd9Iy.jpg"
              alt="Wheat field at sunset"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/40">
              <Image src="/images/footer-logo.png" alt="1322 Legacy Strategies" width={100} height={100} className="mb-6" />
              <div className="text-cream text-5xl font-heading font-bold mb-2">1322</div>
              <div className="text-cream text-2xl font-heading mb-12 tracking-wider">LEGACY STRATEGIES</div>

              <button className="bg-gold text-navy p-6 transition-colors hover:bg-gold/90" aria-label="Play video">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <p className="text-cream mt-6 font-heading">Brad thanking you for registering</p>
            </div>
          </div>

          {/* Calendar CTA */}
          <div className="bg-white p-12 text-center border-b border-navy/10">
            <h2 className="text-2xl font-heading font-bold mb-8 text-navy">Add to Your Calendar</h2>
            <button className="bg-gold text-navy px-12 py-4 font-heading font-bold uppercase tracking-wider hover:bg-gold/90 transition-colors">
              Add to Calendar
            </button>
          </div>

          {/* Academy CTA */}
          <div className="bg-gold/10 p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-6 text-navy">Want to Start Learning Now?</h2>
            <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join 1,000+ Christian entrepreneurs in the FREE 1322 IBC Academy. No gatekeeping. No pressure. Just generous
              IBC education.
            </p>
            <a
              href="https://www.skool.com/1322-ibc-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-cream px-12 py-4 font-heading font-bold uppercase tracking-wider hover:bg-navy/90 transition-colors"
            >
              Join Free Academy
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Registration page
  return (
    <div className="min-h-screen bg-cream pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Content */}
          <div>
            {/* Video */}
            <div className="relative mb-8 aspect-video border-2 border-navy/10">
              <iframe
                src="https://www.youtube.com/embed/gaTHe7bD8VI?rel=0&autoplay=1&mute=1"
                title="Brad introduces the webinar"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Title and Description */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6 leading-tight">
              Stop Bleeding Interest.
              <br />
              Become Your Own Bank.
            </h1>

            <p className="text-xl text-navy/80 mb-12 leading-relaxed">
              An IBC education webinar for Christian entrepreneurs who want to reclaim control of their capital, eliminate
              bank dependence, and build a family banking system.
            </p>

            {/* What You'll Learn */}
            <div className="border-2 border-navy/20 p-8 mb-8">
              <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-navy/20 text-navy">
                What You'll Learn
              </h2>
              <ul className="space-y-6">
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    How Infinite Banking lets you recapture $20K-$50K+ in annual interest payments
                  </span>
                </li>
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    The whole life policy design that creates your family banking system
                  </span>
                </li>
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    Real examples: Entrepreneurs financing trucks, equipment, and real estate through policy loans
                  </span>
                </li>
              </ul>
            </div>

            {/* Is This You */}
            <div className="border-2 border-navy/20 p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-navy/20 text-navy">Is This You?</h2>
              <ul className="space-y-6">
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    You run an established business ($250K-$5M revenue)
                  </span>
                </li>
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    You're tired of bleeding $10K-$50K+ annually in interest to banks
                  </span>
                </li>
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    You want to finance equipment, vehicles, and real estate without begging banks
                  </span>
                </li>
                <li className="flex items-start border-l-2 border-gold pl-6">
                  <span className="text-lg text-navy/80 leading-relaxed">
                    You're thinking multi-generationally (Proverbs 13:22)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Registration */}
          <div>
            {/* Countdown Timer */}
            <div className="bg-navy text-cream p-8 text-center border-b border-cream/20">
              <h2 className="text-2xl font-heading font-bold mb-2">Next Live Webinar</h2>
              <p className="text-lg font-heading mb-8">Wednesday at 7:00 p.m. CST</p>

              <div className="grid grid-cols-4 gap-6">
                <div className="border-r border-cream/20 last:border-r-0">
                  <div className="text-5xl font-mono font-bold text-gold">{countdown.days}</div>
                  <div className="text-sm font-mono uppercase tracking-wide mt-2">Days</div>
                </div>
                <div className="border-r border-cream/20 last:border-r-0">
                  <div className="text-5xl font-mono font-bold text-gold">{countdown.hours}</div>
                  <div className="text-sm font-mono uppercase tracking-wide mt-2">Hours</div>
                </div>
                <div className="border-r border-cream/20 last:border-r-0">
                  <div className="text-5xl font-mono font-bold text-gold">{countdown.minutes}</div>
                  <div className="text-sm font-mono uppercase tracking-wide mt-2">Min</div>
                </div>
                <div>
                  <div className="text-5xl font-mono font-bold text-gold">{countdown.seconds}</div>
                  <div className="text-sm font-mono uppercase tracking-wide mt-2">Sec</div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white p-8 border-2 border-navy/20">
              {result && (
                <div
                  className={`p-6 mb-8 border-2 ${result.success ? "border-green-600 bg-green-50 text-green-800" : "border-red-600 bg-red-50 text-red-800"}`}
                >
                  {result.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-mono text-sm uppercase tracking-wide text-navy/80">
                      First Name*
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full p-3 border-2 border-navy/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-mono text-sm uppercase tracking-wide text-navy/80">
                      Last Name*
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full p-3 border-2 border-navy/20 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-mono text-sm uppercase tracking-wide text-navy/80">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-3 border-2 border-navy/20 focus:border-gold focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-mono text-sm uppercase tracking-wide text-navy/80">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full p-3 border-2 border-navy/20 focus:border-gold focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="pt-4 border-t border-navy/10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-navy py-4 font-heading font-bold text-lg uppercase tracking-wider hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Reserving..." : "Reserve My Spot"}
                  </button>
                </div>

                <p className="text-xs text-navy/60 text-center leading-relaxed mb-4">
                  By registering, you agree to receive communications about this and future events.
                </p>
                <p className="text-xs text-navy/50 text-center leading-relaxed">
                  This is a FREE educational webinar. No sales pitch. Education first, always.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
