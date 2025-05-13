"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionTitleProps {
  children: ReactNode
  subtitle?: ReactNode
  className?: string
}

export default function SectionTitle({ children, subtitle, className = "" }: SectionTitleProps) {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "40%",
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className={`mb-12 md:mb-16 text-center ${className}`}>
      <motion.div
        className="relative inline-block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 className="section-title" variants={titleVariants}>
          {children}
        </motion.h2>

        <motion.div className="h-[2px] bg-gold/50 mx-auto mt-2" variants={underlineVariants} />
      </motion.div>

      {subtitle && (
        <motion.p
          className="section-subtitle"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
