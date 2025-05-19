"use client"

import { useRef, useEffect, useState } from "react"
import ExpandableFounderBio from "./expandable-founder-bio"
import ExpandableFounderBioMobile from "./expandable-founder-bio-mobile"
import LegacyStrategy from "./legacy-strategy"
import Values from "./values"
import Contact from "./contact"
import { usePathname } from "next/navigation"

export default function InfinityScroll() {
  const [activeSection, setActiveSection] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const pathname = usePathname()
  const initialLoad = useRef(true)

  // Define sections for the infinity scroll
  const sectionsConfig = [
    { id: "founder", label: "Meet the Founder" },
    { id: "strategy", label: "Legacy Strategy" },
    { id: "values", label: "Our Values" },
    { id: "contact", label: "Contact Us" },
  ]

  // Force scroll to top on initial load
  useEffect(() => {
    if (initialLoad.current) {
      window.scrollTo(0, 0)
      initialLoad.current = false
    }
  }, [])

  // Handle URL-based section activation without scrolling on initial load
  useEffect(() => {
    if (pathname === "/about/founder") {
      setActiveSection(0) // Always set to first section (founder)
    } else if (pathname === "/about/strategy") {
      setActiveSection(1)
    } else if (pathname === "/about/values") {
      setActiveSection(2)
    } else if (pathname === "/about/contact") {
      setActiveSection(3)
    }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      // Don't update during initial load
      if (initialLoad.current) return

      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionRefs.current.forEach((section, index) => {
        if (!section) return

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index)

          // Update URL without page reload, but don't do this on initial load
          if (!initialLoad.current) {
            const sectionId = sectionsConfig[index].id
            if (window.location.pathname !== `/about/${sectionId}`) {
              window.history.pushState({}, "", `/about/${sectionId}`)
            }
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
