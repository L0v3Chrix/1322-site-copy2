"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedQuoteProps {
  children: ReactNode
  author?: string
  className?: string
}

export default function AnimatedQuote({ children, author, className = "" }: AnimatedQuoteProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="absolute -left-4 top-0 text-gold text-6xl font-serif opacity-30"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        "
      </motion.div>
      <div className="relative z-10 italic">{children}</div>
      {author && (
        <motion.div
          className="mt-4 text-right text-gold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          — {author}
        </motion.div>
      )}
      <motion.div
        className="absolute -right-4 bottom-0 text-gold text-6xl font-serif opacity-30"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        "
      </motion.div>
    </motion.div>
  )
}
