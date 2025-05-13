"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface HighlightTextProps {
  children: ReactNode
  className?: string
}

export default function HighlightText({ children, className = "" }: HighlightTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ color: "rgb(44, 62, 80)" }}
      whileHover={{ color: "rgb(182, 110, 65)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="absolute -bottom-1 left-0 w-full h-[2px] bg-gold/50"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      {children}
    </motion.span>
  )
}
