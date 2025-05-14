"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"
import OptimizedImage from "./optimized-image"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
  type?: "hero" | "medium" | "small" | "profile" | "logo"
}

export default function ParallaxImage({ src, alt, className = "", speed = 0.2, type = "medium" }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const { top } = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Only apply parallax when the element is in view
      if (top < windowHeight && top > -ref.current.offsetHeight) {
        const scrollPosition = window.scrollY
        const elementPosition = scrollPosition + top
        const relativeScroll = scrollPosition - elementPosition
        setOffset(relativeScroll * speed)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div
        style={{
          transform: `translateY(${offset}px)`,
          height: "calc(100% + 200px)",
          marginTop: "-100px",
          position: "absolute",
          inset: 0,
        }}
      >
        <OptimizedImage src={src} alt={alt} type={type} fill className="object-cover" />
      </div>
    </motion.div>
  )
}
