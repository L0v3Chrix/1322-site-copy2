"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="container mx-auto px-4 md:px-8"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.section>
  )
}
