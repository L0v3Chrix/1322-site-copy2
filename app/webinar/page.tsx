"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { registerForWebinar } from "../actions/webinar-registration"
import Link from "next/link"

export default function WebinarPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isRegistered, setIsRegistered] = useState(false)
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate time until next Wednesday at 7pm CST
  useEffect(() => {
    const calculateTimeUntilNextWednesday = () => {
      const now = new Date()

      // Get the next Wednesday
      const nextWednesday = new Date(now)
      nextWednesday.setDate(now.getDate() + ((3 + 7 - now.getDay()) % 7))

      // Set to 7pm CST (which is UTC-6)
      nextWednesday.setHours(19, 0, 0, 0)

      // If it's already past 7pm on Wednesday, go to next week
      if (now > nextWednesday) {
        nextWednesday.setDate(nextWednesday.getDate() + 7)
      }

      // Calculate the difference
      const diff = nextWednesday.getTime() - now.getTime()

      // Convert to days, hours, minutes, seconds
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }

    // Calculate immediately
    calculateTimeUntilNextWednesday()

    // Update every second
    const interval = setInterval(calculateTimeUntilNextWednesday, 1000)

    // Clean up
    return () => clearInterval(interval)
  }, [])

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
      // Show confirmation page instead of resetting the form
      setIsRegistered(true)
    }
  }

  // If registered, show confirmation page
  if (isRegistered) {
    return (
      <div className="min-h-screen bg-[#F5F0E6] pt-20 pb-16 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-4">
          <div className="bg-navy text-white p-8 rounded-t-lg text-center">
            <h1 className="text-3xl font-bold mb-4">Thank You for Registering!</h1>
            <p className="text-lg">
              Your seat is confirmed for the upcoming 1322 Stewardship Webinar — Wednesday at 7:00 p.m. CST.
            </p>
          </div>

          <div className="relative bg-[#F5F0E6] aspect-video w-full">
            <video
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Thank%20You%20Webinar-UxSFfgpbsWu5xvEoVFt76tJvVIlTdW.mp4"
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              playsInline
            />
          </div>

          <div className="bg-white p-8 text-center">
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Add to your calendar:
              </h2>
              <button className="bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-2 px-4 rounded flex items-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Add to Calendar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-b-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-navy">Want to go deeper?</h2>
            <p className="text-lg mb-6 text-navy/80">
              Some families qualify for a one-on-one legacy session with Brad — before the webinar even starts.
            </p>
            <Link
              href="/qualify"
              className="inline-flex items-center bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-3 px-6 rounded font-medium"
            >
              See If You Qualify for Priority Access
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link href="/" className="text-navy/60 hover:text-navy transition-colors flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Main Site
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Video and Description */}
          <div>
            <div className="relative rounded-lg overflow-hidden mb-6 aspect-video">
              <video
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Welcome-AbnYBNpB3TvkIqn2k4waIwkijWTxah.mp4"
                title="Brad introduces the webinar"
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                playsInline
                controls
              />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Retirement Was Never the Goal.
              <br />
              Legacy Is.
            </h1>

            <p className="text-lg text-navy/80 mb-8">
              A stewardship webinar for families who want to control their capital, bless future generations, and build
              a legacy that lasts.
            </p>

            <div className="bg-white p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-navy">What You'll Learn</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-copper mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <span>Why most financial "plans" fall apart over time</span>
                </li>
                <li className="flex items-start">
                  <div className="text-copper mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span>How to align your legal, tax, and capital decisions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-copper mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <span>What it looks like to build a legacy of blessing — not just numbers</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div>
            <div className="bg-navy text-white p-6 rounded-t-lg text-center">
              <h2 className="text-xl font-bold mb-2">Next Live Webinar:</h2>
              <p className="mb-4">Wednesday at 7:00 p.m. CST</p>

              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">{countdown.days}</div>
                  <div className="text-sm">Days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{countdown.hours}</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{countdown.minutes}</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{countdown.seconds}</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-b-lg">
              {result && (
                <div
                  className={`p-4 mb-6 rounded ${result.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {result.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 font-medium text-navy">
                      First Name*
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-2 font-medium text-navy">
                      Last Name*
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full p-2 border border-gray-300 rounded"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-navy">
                    Email Address*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-navy">
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Your phone"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-copper hover:bg-copper/90 text-white py-3 rounded font-medium transition-colors"
                >
                  {isSubmitting ? "Reserving..." : "Reserve My Spot"}
                </button>

                <p className="text-xs text-navy/60 text-center">
                  By registering, you agree to receive communications about this and future events.
                </p>
              </form>
            </div>

            <div className="bg-white p-6 rounded-lg mt-8">
              <h2 className="text-xl font-bold mb-4 text-navy">Is This You?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>You've built wealth but want more than accumulation</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>You're thinking three generations ahead</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>You're tired of sales pitches — you want stewardship</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>You want clarity, not complexity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
