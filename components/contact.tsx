"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Mail, Phone, Clock } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
    // Show success message
    alert("Thank you for reaching out. We'll be in touch soon to discuss your legacy strategy.")
  }

  return (
    <section className="bg-white py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="section-title">Start Here</h2>
            <p className="text-xl mb-8 text-navy/80">
              Schedule your Legacy Strategy Call. No cost, no obligation — just stewardship-driven strategy.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Calendar className="text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Personal Consultation</h3>
                  <p className="text-navy/80">
                    We begin with a conversation about your family's values and vision for the future.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">45-Minute Session</h3>
                  <p className="text-navy/80">
                    Discover how our stewardship approach can help you build a lasting legacy.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-navy/80">
                    <a href="mailto:info@1322legacy.com" className="text-copper hover:underline">
                      info@1322legacy.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-gold mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-navy/80">
                    <a href="tel:+15551234567" className="text-copper hover:underline">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cream p-8 rounded-lg border border-navy/10">
            <h3 className="text-2xl font-bold mb-6 text-navy">Schedule Your Legacy Strategy Call</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Tell us briefly about your legacy goals
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white"
                />
              </div>

              <Button type="submit" className="w-full bg-navy hover:bg-navy/90 text-cream">
                Schedule Your Call
              </Button>

              <p className="text-sm text-navy/70 text-center">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
