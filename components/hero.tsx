"use client"

import React, { useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import OptimizedImage from "./optimized-image"

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage: string
  id?: string
}

const Hero = ({ title, subtitle, backgroundImage, id }: HeroProps) => {
  const contentRef = useRef<HTMLDivElement>(null)

  const scrollToContent = () => {
    if (contentRef.current) {
      const yOffset = -80 // Header height offset
      const y = contentRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  // Split title into words for animation
  const titleWords = typeof title === "string" ? title.split(" ") : []

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center" id={id}>
        <motion.div
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <OptimizedImage
            src={backgroundImage || "/placeholder.svg"}
            alt="Hero background"
            type="hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="flex flex-col justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 leading-tight tracking-tight text-white">
            {typeof title === "string" ? (
              <motion.span
                className="inline-block text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {title}
              </motion.span>
            ) : (
              React.Children.map(title.props.children, (child, index) => {
                if (React.isValidElement(child)) {
                  // Check if child is a Fragment
                  const isFragment = child.type === React.Fragment

                  // Only add className if not a Fragment
                  const props = isFragment
                    ? { key: index }
                    : {
                        className: `${(child as React.ReactElement).props.className || ""} mb-2`,
                        key: index,
                      }

                  return React.cloneElement(
                    child as React.ReactElement,
                    props,
                    <motion.span
                      className="inline-block text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                    >
                      {(child as React.ReactElement).props.children}
                    </motion.span>,
                  )
                }
                return child
              })
            )}
          </h1>

          {subtitle && (
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-10 max-w-3xl mx-auto px-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer text-white"
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </section>

      <div ref={contentRef} />
    </>
  )
}

export default Hero
