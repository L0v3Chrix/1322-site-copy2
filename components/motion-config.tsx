"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { MotionConfig } from "framer-motion"

interface MotionConfigWrapperProps {
  children: React.ReactNode
}

export default function MotionConfigWrapper({ children }: MotionConfigWrapperProps) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mediaQuery.matches)

    const handleChange = () => setReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  return (
    <MotionConfig reducedMotion={reducedMotion ? "always" : "never"} transition={{ duration: 0.5 }}>
      {children}
    </MotionConfig>
  )
}
