"use client"

import Link from "next/link"
import OptimizedImage from "./optimized-image"
import { motion } from "framer-motion"

export default function WebinarHeader() {
  return (
    <header className="bg-cream border-b border-navy/10 py-2">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-12">
          <Link href="https://www.1322legacystrategies.com/" className="flex items-center">
            <motion.div
              className="relative h-8 w-auto flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13%3B22-header-logo-wQ4XkXwQPSQI3hjC9Dx3e5qXuhrkR5.png"
                alt="1322 Legacy Strategies"
                type="logo"
                width={140}
                height={30}
                className="object-contain"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </header>
  )
}
