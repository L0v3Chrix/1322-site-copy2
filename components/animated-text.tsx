"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  once?: boolean
  delay?: number
  type?: "word" | "character" | "line"
}

export default function AnimatedText({
  children,
  className = "",
  once = true,
  delay = 0,
  type = "word",
}: AnimatedTextProps) {
  // Split text into words, characters, or keep as a single line
  const getAnimationItems = () => {
    if (typeof children !== "string") return [children]

    if (type === "character") return children.split("")
    if (type === "word") return children.split(" ")
    return [children]
  }

  const items = getAnimationItems()

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className={`inline-block ${type === "word" ? "mr-1" : ""}`}
          style={{ display: type === "character" ? "inline-block" : undefined }}
        >
          {item}
          {type === "word" && index !== items.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </motion.div>
  )
}
