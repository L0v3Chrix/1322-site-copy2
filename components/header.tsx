"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import OptimizedImage from "./optimized-image"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  // Check if we're on the founder page
  const isFounderPage = pathname === "/about/founder"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }

      // Update active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100 // Offset for header

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id") || ""
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Strategy", path: "#strategy" },
    { name: "Services", path: "#services" },
    { name: "Stories", path: "#client-stories" },
    { name: "Tools", path: "#tools" },
    { name: "Blog", path: "/blog" },
  ]

  // Determine header classes based on page and scroll state
  let headerClasses = scrolled ? "header-solid" : "header-transparent"

  // Force solid header on founder page
  if (isFounderPage && !scrolled) {
    headerClasses = "bg-navy text-white"
  }

  const logoTextColor = isFounderPage && !scrolled ? "text-cream" : scrolled ? "text-navy" : "text-cream"

  const navLinkColor =
    isFounderPage && !scrolled
      ? "text-cream hover:text-white"
      : scrolled
        ? "text-navy hover:text-copper"
        : "text-cream hover:text-white"

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (sectionId.startsWith("#")) {
      const element = document.querySelector(sectionId)
      if (element) {
        const yOffset = -80 // Header height offset
        const y = (element as HTMLElement).getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: "smooth" })
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <motion.div
              className="relative h-10 w-auto flex items-center -ml-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13%3B22-header-logo-wQ4XkXwQPSQI3hjC9Dx3e5qXuhrkR5.png"
                alt="1322 Legacy Strategies"
                type="logo"
                width={180}
                height={40}
                className="object-contain"
                style={{ marginTop: "-4px" }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Link
                  href={item.path}
                  className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${navLinkColor} ${
                    activeSection === item.path.replace("#", "") ? "border-b-2 border-current" : ""
                  }`}
                  onClick={(e) => item.path.startsWith("#") && scrollToSection(item.path, e)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/webinar"
                className={`inline-flex items-center px-6 py-3 text-sm font-medium tracking-wider uppercase transition-colors border ${
                  (isFounderPage && !scrolled) || !scrolled
                    ? "border-white text-white hover:bg-white hover:text-navy"
                    : "border-navy text-navy hover:bg-navy hover:text-white"
                }`}
              >
                Webinar
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden ${(isFounderPage && !scrolled) || !scrolled ? "text-white" : "text-navy"}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-cream absolute w-full z-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="container mx-auto px-4 py-4 sm:py-6 flex flex-col space-y-4 sm:space-y-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Link
                    href={item.path}
                    className={`text-navy hover:text-copper transition-colors text-sm uppercase tracking-wider font-medium ${
                      activeSection === item.path.replace("#", "") ? "border-b border-current" : ""
                    }`}
                    onClick={(e) => item.path.startsWith("#") && scrollToSection(item.path, e)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link
                  href="/webinar"
                  className="inline-block text-center w-full px-6 py-3 text-sm font-medium tracking-wider uppercase transition-colors border border-navy text-navy hover:bg-navy hover:text-white"
                >
                  Webinar
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
