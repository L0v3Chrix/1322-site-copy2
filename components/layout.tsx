"use client"

import { type ReactNode, useEffect, useState } from "react"
import Header from "./header"
import Footer from "./footer"
import { motion, AnimatePresence } from "framer-motion"

interface LayoutProps {
  children: ReactNode
  isBlogPage?: boolean
}

export default function Layout({ children, isBlogPage = false }: LayoutProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <AnimatePresence mode="wait">
        {mounted && (
          <motion.main
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}
