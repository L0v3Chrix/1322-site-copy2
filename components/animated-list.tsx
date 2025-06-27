"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedListProps {
  items: {
    icon?: ReactNode
    content: ReactNode
  }[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
}

export default function AnimatedList({
  items,
  className = "",
  itemClassName = "",
  staggerDelay = 0.1,
}: AnimatedListProps) {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <motion.li
          key={index}
          className={`flex items-start ${itemClassName}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * staggerDelay }}
        >
          {item.icon && <div className="mr-3 mt-1 flex-shrink-0">{item.icon}</div>}
          <div>{item.content}</div>
        </motion.li>
      ))}
    </ul>
  )
}
