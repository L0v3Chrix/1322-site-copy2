"use client"

import { useEffect, useRef } from "react"
import { useInView, animate } from "framer-motion"

type AnimatedCounterProps = {
  from?: number
  to: number
  prefix?: string
  suffix?: string
  animationOptions?: Parameters<typeof animate>[2]
}

export default function AnimatedCounter({
  from = 0,
  to,
  prefix = "",
  suffix = "",
  animationOptions,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!isInView) return

    // Set initial value
    element.textContent = prefix + String(from) + suffix

    const controls = animate(from, to, {
      duration: 2,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = prefix + value.toFixed(0) + suffix
      },
    })

    return () => controls.stop()
  }, [ref, isInView, from, to, prefix, suffix, animationOptions])

  return <span ref={ref} />
}
