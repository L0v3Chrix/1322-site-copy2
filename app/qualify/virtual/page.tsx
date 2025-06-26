"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function QualifyPage() {
  const [showCallNowForm, setShowCallNowForm] = useState(false)
  const router = useRouter()

  // If showing the call now form, render that instead
  if (showCallNowForm) {
    return <CallNowForm />
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] pt-20 pb-16 flex flex-col items-center justify-center">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Let's See If It's a Fit.</h1>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto mb-2">
            The Steward's Table isn't for everyone — and that's okay.
          </p>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            This short step helps us discern if now's the right time for a deeper conversation.
          </p>
        </div>

        <div className="relative bg-[#F5F0E6] aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wheat-field-sunset-1322-Rl9Yd9Iy9Yd9Iy9Yd9Iy.jpg"
            alt="Wheat field at sunset with 1322 logo"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Image src="/images/footer-logo.png" alt="1322 Legacy Strategies" width={80} height={80} className="mb-4" />
            <div className="text-navy text-4xl font-bold mb-2">1322</div>
            <div className="text-navy text-xl mb-8">LEGACY STRATEGIES</div>

            <button
              className="bg-navy/80 hover:bg-navy text-white rounded-full p-4 transition-colors"
              aria-label="Play video"
            >
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
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <p className="text-navy mt-4">Brad explaining how we protect your time</p>
          </div>

          {/* Audio control button in top right */}
          <button
            className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
            aria-label="Toggle audio"
          >
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
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-navy mb-4">I'm Ready Now</h2>
            <p className="text-navy/80 mb-4">
              We'll place a call to your phone immediately. This is a calm, thoughtful conversation — not a pitch.
            </p>
            <button
              onClick={() => setShowCallNowForm(true)}
              className="w-full bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-3 px-6 rounded font-medium transition-colors flex items-center justify-center"
            >
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Call Me Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-navy mb-4">Schedule My Call</h2>
            <p className="text-navy/80 mb-4">Prefer a human? Book a 10-minute conversation with a team member.</p>
            <Link
              href="/schedule-call"
              className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded font-medium transition-colors flex items-center justify-center"
            >
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
              Book a Time
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function CallNowForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      // GoHighLevel API configuration
      const GHL_API_KEY =
        process.env.GHL_API_KEY ||
        "ec12c208-bd75-4c45-a2f0-1b42265f38b4"

      // Prepare contact data for GHL
      const contactData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phoneNumber,
        email: `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@callrequest.1322legacy.com`, // Placeholder email
        source: "call_me_now",
        tags: ["call-me-now", "urgent-lead", "qualification-page"],
        customFields: [
          {
            key: "request_type",
            value: "call_me_now",
          },
          {
            key: "submission_source",
            value: "qualification_page",
          },
          {
            key: "request_date",
            value: new Date().toISOString(),
          },
        ],
      }

      console.log("Sending call request to GHL:", contactData)

      // Send data to GoHighLevel API
      const response = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify(contactData),
      })

      const responseData = await response.json()
      console.log("GHL Response:", response.status, responseData)

      if (!response.ok) {
        console.error("GHL API Error:", responseData)
        throw new Error(`GHL API Error: ${response.status} - ${responseData.message || "Unknown error"}`)
      }

      console.log("Successfully created call request in GHL:", responseData.contact?.id)

      setResult({
        success: true,
        message: "Your call request has been submitted successfully! We'll call you shortly.",
      })
      setSubmitted(true)

      // Redirect to thank you page after 3 seconds
      setTimeout(() => {
        router.push("/qualify/thank-you")
      }, 3000)
    } catch (error) {
      console.error("Error submitting call request:", error)
      setResult({
        success: false,
        message: "There was an error submitting your request. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F0E6] pt-20 pb-16 flex flex-col items-center justify-center">
      <div className="container max-w-lg mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-navy p-6 text-white text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Let's Begin Right Now</h1>
            <p className="text-sm md:text-base">
              We'll place a call to your phone immediately. This is a calm, thoughtful conversation — not a pitch.
            </p>
          </div>

          <div className="p-6">
            <p className="text-navy/80 text-center mb-6">
              We respect your time. This won't be a sales call — just a calm qualification conversation.
            </p>

            {result && (
              <div
                className={`p-4 mb-6 rounded ${
                  result.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {result.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block mb-2 font-medium text-navy">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                  disabled={isSubmitting || submitted}
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block mb-2 font-medium text-navy">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                  disabled={isSubmitting || submitted}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block mb-2 font-medium text-navy">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded"
                  placeholder="(555) 123-4567"
                  disabled={isSubmitting || submitted}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-3 rounded font-medium transition-colors ${
                  isSubmitting || submitted ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Submitting..." : submitted ? "Submitted!" : "Call Me Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
