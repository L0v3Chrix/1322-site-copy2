"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import OptimizedImage from "./optimized-image"
import ContactButton from "./contact-button"

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/about" },
  { name: "Strategy", href: "/#journey" },
  { name: "Services", href: "/#services" },
  { name: "Tools", href: "/#tools" },
  { name: "Blog", href: "/blog" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const headerClasses = isScrolled ? "bg-cream text-navy shadow-md" : "bg-transparent text-white"

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex-shrink-0">
          <OptimizedImage
            src="/images/1322-header-logo.png"
            alt="1322 Legacy Strategies Logo"
            type="logo"
            width={150}
            height={50}
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-wider font-medium pb-1 border-b-2 border-transparent hover:border-current transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ContactButton className="btn-outline text-sm">Start</ContactButton>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-cream text-navy absolute top-full left-0 right-0 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://start.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-lg mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Start
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
