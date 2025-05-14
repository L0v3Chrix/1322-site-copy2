"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
}

export default function ContactFormModal({
  isOpen,
  onClose,
  title = "Begin Your Stewardship Journey",
  description = "We would be honored to walk alongside you.",
}: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    smsPermission: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { name: string; value: boolean },
  ) => {
    if ("target" in e) {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
    } else {
      // For checkbox
      const { name, value } = e
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    // Show success message
    setSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      smsPermission: false,
    })
    setSubmitted(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const formFields = [
    { id: "name", label: "Name", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: true, special: true },
    { id: "message", label: "Tell us a little about your legacy vision", type: "textarea", required: false },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-[500px] bg-cream max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-navy">{title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleClose} className="text-navy">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription className="text-navy/70">{description}</DialogDescription>
        </DialogHeader>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-6 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {formFields.map((field, index) => (
                <motion.div
                  key={field.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <label htmlFor={field.id} className="block mb-2 font-medium text-navy">
                    {field.label} {field.special && <span className="text-copper">*</span>}
                  </label>

                  {field.type === "textarea" ? (
                    <Textarea
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData] as string}
                      onChange={handleChange}
                      required={field.required}
                      rows={4}
                      className="w-full bg-cream/50 border-navy/20"
                    />
                  ) : (
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={formData[field.id as keyof typeof formData] as string}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full bg-cream/50 border-navy/20"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: formFields.length * 0.1, duration: 0.3 }}
              >
                <Checkbox
                  id="smsPermission"
                  checked={formData.smsPermission}
                  onCheckedChange={(checked) => handleChange({ name: "smsPermission", value: checked as boolean })}
                />
                <label htmlFor="smsPermission" className="text-sm text-navy/80">
                  I consent to receive SMS messages and calls via virtual calling systems from 1322 Legacy Strategies
                  regarding my legacy strategy.
                </label>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (formFields.length + 1) * 0.1, duration: 0.3 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-navy hover:bg-navy/90 text-cream py-6 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Your Story
                </Button>
              </motion.div>

              <motion.p
                className="text-xs text-navy/60 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (formFields.length + 2) * 0.1, duration: 0.3 }}
              >
                Your information is secure and will never be shared with third parties.
              </motion.p>
            </motion.form>
          ) : (
            <motion.div
              className="py-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-xl font-bold mb-4 text-navy"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                Thank You
              </motion.h3>
              <motion.p
                className="text-navy/80 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
              >
                Thank you for reaching out. You've taken the first step toward leading your legacy with wisdom and
                purpose. We will be in touch soon.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <Button
                  onClick={handleClose}
                  className="bg-navy hover:bg-navy/90 text-cream"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
