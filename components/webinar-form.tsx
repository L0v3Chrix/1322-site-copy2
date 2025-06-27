"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export default function WebinarForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    agreeToTerms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean
    message: string
  } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | { name: string; value: boolean | string }) => {
    if ("target" in e) {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    } else {
      // For checkbox
      const { name, value } = e
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send data to our API route
      const response = await fetch("/api/webinar-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          source: "website_webinar_form",
          timestamp: new Date().toISOString(),
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus({
          success: true,
          message: result.message || "Thank you for registering! You'll receive webinar details shortly.",
        })
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          agreeToTerms: false,
        })
      } else {
        throw new Error(result.message || "Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus({
        success: false,
        message: "There was an error submitting your registration. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-cream p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-4 text-navy">Register for Our Webinar</h3>
      <p className="mb-6 text-navy/80">
        Learn how to control your capital and build a legacy that lasts for generations.
      </p>

      {submitStatus && (
        <div
          className={`p-4 mb-6 rounded ${
            submitStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block mb-2 font-medium text-navy">
              First Name*
            </label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full bg-white border-navy/20"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-2 font-medium text-navy">
              Last Name*
            </label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full bg-white border-navy/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-navy">
            Email Address*
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-white border-navy/20"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-medium text-navy">
            Phone Number*
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-white border-navy/20"
          />
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleChange({ name: "agreeToTerms", value: !!checked })}
            required
          />
          <label htmlFor="agreeToTerms" className="text-sm text-navy/80">
            I agree to receive communications about the webinar and related services from 1322 Legacy Strategies.
          </label>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || !formData.agreeToTerms}
          className="w-full bg-navy hover:bg-navy/90 text-cream py-6 font-medium"
        >
          {isSubmitting ? "Registering..." : "Register Now"}
        </Button>

        <p className="text-xs text-navy/60 text-center">
          Your information is secure and will never be shared with third parties.
        </p>
      </form>
    </div>
  )
}
