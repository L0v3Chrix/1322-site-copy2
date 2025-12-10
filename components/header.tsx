"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import OptimizedImage from "./optimized-image"
import { AnimatedChevron } from "./ui/animated-icon"
import { dropdownMenu, mobileMenu } from "@/lib/animation-variants"

// Learn IBC dropdown items
const learnDropdown = [
  { name: "Learning Center", href: "/learn", description: "Start your education journey" },
  { name: "Foundations", href: "/learn/foundations", description: "Beginner concepts (4 lessons)" },
  { name: "Case Studies", href: "/case-studies", description: "Real entrepreneur examples" },
  { name: "Video Library", href: "/learn/videos", description: "Watch and learn" },
  { name: "Office Hours", href: "/learn/office-hours", description: "Brad's weekly AMA archive" },
]

// Tools dropdown items
const toolsDropdown = [
  { name: "Interest Bleed Calculator", href: "/tools/interest-bleed-calculator", description: "Cost of external financing" },
  { name: "Family Bank Projector", href: "/tools/family-bank-projector", description: "Multi-generational projections" },
  { name: "Policy Estimator", href: "/tools/policy-estimator", description: "Estimate policy parameters" },
  { name: "Opportunity Cost", href: "/tools/opportunity-cost", description: "Hidden costs revealed" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const headerClasses = isScrolled
    ? "bg-cream text-navy border-b border-navy/10"
    : "bg-navy text-cream"

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClasses}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-20" ref={dropdownRef}>
        <Link href="/" className="flex-shrink-0">
          <OptimizedImage
            src="/images/1322-header-logo.png"
            alt="1322 Legacy Strategies Logo"
            type="logo"
            width={150}
            height={50}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm uppercase tracking-wider font-medium py-1 relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>

          {/* Learn IBC Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("learn")}
              className="flex items-center text-sm uppercase tracking-wider font-medium py-1 group"
            >
              <span className="relative">
                Learn IBC
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </span>
              <AnimatedChevron
                isOpen={activeDropdown === "learn"}
                icon={<ChevronDown className="w-4 h-4" />}
                size="sm"
                colorClass="ml-1"
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "learn" && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-72 bg-cream border-2 border-navy/20 z-50 shadow-lg overflow-hidden"
                  variants={dropdownMenu}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {learnDropdown.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 hover:bg-gold/10 border-b border-navy/10 last:border-b-0 group/item transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="block text-sm font-heading font-bold text-navy group-hover/item:text-gold transition-colors">{item.name}</span>
                        <span className="block text-xs text-navy/60 mt-0.5">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tools Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("tools")}
              className="flex items-center text-sm uppercase tracking-wider font-medium py-1 group"
            >
              <span className="relative">
                Tools
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </span>
              <AnimatedChevron
                isOpen={activeDropdown === "tools"}
                icon={<ChevronDown className="w-4 h-4" />}
                size="sm"
                colorClass="ml-1"
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "tools" && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-72 bg-cream border-2 border-navy/20 z-50 shadow-lg overflow-hidden"
                  variants={dropdownMenu}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {toolsDropdown.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 hover:bg-gold/10 border-b border-navy/10 last:border-b-0 group/item transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <span className="block text-sm font-heading font-bold text-navy group-hover/item:text-gold transition-colors">{item.name}</span>
                        <span className="block text-xs text-navy/60 mt-0.5">{item.description}</span>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="https://www.skool.com/1322-ibc-academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-wider font-medium text-gold py-1 relative group"
          >
            Academy
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold" />
          </Link>

          <Link
            href="/about"
            className="text-sm uppercase tracking-wider font-medium py-1 relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>

          <Link
            href="/blog"
            className="text-sm uppercase tracking-wider font-medium py-1 relative group"
          >
            Blog
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="https://discovery.1322legacystrategies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-current text-sm uppercase tracking-wider font-heading font-bold hover:bg-gold hover:border-gold hover:text-navy transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-navy/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              className="lg:hidden bg-cream text-navy fixed top-20 right-0 bottom-0 w-80 max-w-full z-50 shadow-xl overflow-y-auto"
              variants={mobileMenu}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="flex flex-col py-6">
                <Link
                  href="/"
                  className="px-6 py-3 text-sm uppercase tracking-wider font-medium border-b border-navy/10 hover:bg-gold/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Learn Section */}
                <div className="border-b border-navy/10">
                  <div className="px-6 py-3 text-sm uppercase tracking-wider font-medium text-navy/60">
                    Learn IBC
                  </div>
                  {learnDropdown.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-8 py-2 text-sm hover:bg-gold/10 hover:text-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Tools Section */}
                <div className="border-b border-navy/10">
                  <div className="px-6 py-3 text-sm uppercase tracking-wider font-medium text-navy/60">
                    Tools
                  </div>
                  {toolsDropdown.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (learnDropdown.length + index) * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className="block px-8 py-2 text-sm hover:bg-gold/10 hover:text-gold transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <Link
                  href="https://www.skool.com/1322-ibc-academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-sm uppercase tracking-wider font-medium text-gold border-b border-navy/10 hover:bg-gold/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Academy (Free)
                </Link>

                <Link
                  href="/about"
                  className="px-6 py-3 text-sm uppercase tracking-wider font-medium border-b border-navy/10 hover:bg-gold/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/blog"
                  className="px-6 py-3 text-sm uppercase tracking-wider font-medium border-b border-navy/10 hover:bg-gold/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>

                <div className="px-6 py-4">
                  <Link
                    href="https://discovery.1322legacystrategies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 bg-gold text-navy text-sm uppercase tracking-wider font-heading font-bold hover:bg-gold/90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book a Call
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
