"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function InfinityScrollNav() {
  const [activeSection, setActiveSection] = useState("founder")

  const sections = [
    { id: "founder", label: "Meet the Founder" },
    { id: "values", label: "Our Values" },
    { id: "contact", label: "Contact Us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const element = document.getElementById(section.id)
        if (!element) return

        const sectionTop = element.offsetTop
        const sectionBottom = sectionTop + element.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -80 // Header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-cream/80 backdrop-blur-sm p-3 rounded-full shadow-md">
        <div className="flex flex-col items-center space-y-6">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative"
              aria-label={section.label}
            >
              <div
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeSection === section.id ? "bg-gold" : "bg-navy/30 hover:bg-navy/50"
                }`}
              />

              {activeSection === section.id && (
                <motion.div
                  className="absolute left-5 whitespace-nowrap bg-cream/90 px-3 py-1 rounded text-sm text-navy"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {section.label}
                </motion.div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
