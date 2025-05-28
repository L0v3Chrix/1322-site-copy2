"use client"

import { useRef, useEffect, useState } from "react"
import ExpandableFounderBio from "./expandable-founder-bio"
import ExpandableFounderBioMobile from "./expandable-founder-bio-mobile"
import LegacyStrategy from "./legacy-strategy"
import Values from "./values"
import Contact from "./contact"

export default function InfinityScroll() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  // Define sections for the infinity scroll
  const sectionsConfig = [
    { id: "founder", label: "Meet the Founder" },
    { id: "strategy", label: "Legacy Strategy" },
    { id: "values", label: "Our Values" },
    { id: "contact", label: "Contact Us" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.current.forEach((section, index) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index)

          // Update URL without page reload
          const sectionId = sectionsConfig[index].id
          if (window.location.pathname !== `/about/${sectionId}`) {
            window.history.pushState({}, "", `/about/${sectionId}`)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionsConfig])

  // Render the appropriate component for each section
  const renderSection = (sectionId: string) => {
    switch (sectionId) {
      case "founder":
        return (
          <>
            <div className="hidden md:block">
              <ExpandableFounderBio />
            </div>
            <div className="md:hidden">
              <ExpandableFounderBioMobile />
            </div>
          </>
        )
      case "strategy":
        return <LegacyStrategy />
      case "values":
        return <Values />
      case "contact":
        return <Contact />
      default:
        return null
    }
  }

  return (
    <div className="infinity-scroll">
      {sectionsConfig.map((section, index) => (
        <div
          key={section.id}
          ref={(el) => (sectionRefs.current[index] = el)}
          id={section.id}
          className="section-container"
        >
          {renderSection(section.id)}
        </div>
      ))}
    </div>
  )
}
