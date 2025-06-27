"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Show success message
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight text-center">
              Begin Your Stewardship Journey
            </h1>

            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center">
              Every legacy begins with a single faithful step.
            </p>

            <p className="text-lg md:text-xl text-navy/80 mb-10 max-w-3xl mx-auto text-center">
              We would be honored to walk alongside you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-navy">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream border-navy/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-navy">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-cream border-navy/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-navy">
                    Phone (optional)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-cream border-navy/20"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-navy">
                    Tell us a little about your legacy vision
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-cream border-navy/20"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-cream py-6 font-medium text-lg">
                  Submit Your Story
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </Button>
              </form>
            ) : (
              <div className="bg-cream p-8 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4 text-navy">Thank You</h3>
                <p className="text-lg text-navy/80 mb-6">
                  Thank you for reaching out. You've taken the first step toward leading your legacy with wisdom and
                  purpose. We will be in touch soon.
                </p>
                <Button onClick={() => setSubmitted(false)} className="bg-navy hover:bg-navy/90 text-cream">
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
