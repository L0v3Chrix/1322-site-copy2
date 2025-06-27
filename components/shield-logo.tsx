"use client"

import { motion } from "framer-motion"

interface ShieldLogoProps {
  className?: string
  width?: number
  height?: number
  animated?: boolean
}

export default function ShieldLogo({ className = "", width = 400, height = 480, animated = true }: ShieldLogoProps) {
  // Using the cream color from the website's color scheme
  const creamColor = "rgb(245, 240, 230)"
  const navyColor = "rgb(44, 62, 80)"
  const goldColor = "rgb(196, 154, 108)"

  // Animation variants
  const shieldVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  }

  const wheatVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield Border */}
      {animated ? (
        <motion.path
          d="M200 10
          C300 10 380 50 380 50
          L380 200
          C380 320 200 460 200 460
          C200 460 20 320 20 200
          L20 50
          C20 50 100 10 200 10Z"
          fill={creamColor}
          stroke={navyColor}
          strokeWidth="20"
          variants={shieldVariants}
          initial="hidden"
          animate="visible"
        />
      ) : (
        <path
          d="M200 10
          C300 10 380 50 380 50
          L380 200
          C380 320 200 460 200 460
          C200 460 20 320 20 200
          L20 50
          C20 50 100 10 200 10Z"
          fill={creamColor}
          stroke={navyColor}
          strokeWidth="20"
        />
      )}

      {/* Wheat Stalk */}
      <motion.g
        fill={goldColor}
        variants={animated ? wheatVariants : {}}
        initial={animated ? "hidden" : undefined}
        animate={animated ? "visible" : undefined}
      >
        {/* Top leaf */}
        <path d="M200 100 Q220 80 200 60 Q180 80 200 100" />

        {/* Second row leaves */}
        <path d="M200 140 Q230 120 210 90 Q190 110 200 140" />
        <path d="M200 140 Q170 120 190 90 Q210 110 200 140" />

        {/* Third row leaves */}
        <path d="M200 200 Q230 180 210 150 Q190 170 200 200" />
        <path d="M200 200 Q170 180 190 150 Q210 170 200 200" />

        {/* Fourth row leaves */}
        <path d="M200 260 Q230 240 210 210 Q190 230 200 260" />
        <path d="M200 260 Q170 240 190 210 Q210 230 200 260" />

        {/* Fifth row leaves */}
        <path d="M200 320 Q230 300 210 270 Q190 290 200 320" />
        <path d="M200 320 Q170 300 190 270 Q210 290 200 320" />

        {/* Stem */}
        <rect x="195" y="100" width="10" height="280" />
      </motion.g>
    </svg>
  )
}
