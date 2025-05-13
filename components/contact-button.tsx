"use client"

import type { ReactNode } from "react"
import { useModal } from "@/context/modal-context"
import { motion } from "framer-motion"
import Link from "next/link"

interface ContactButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary"
  title?: string
  description?: string
  href?: string
}

export default function ContactButton({
  children,
  className = "",
  variant = "primary",
  title,
  description,
  href,
}: ContactButtonProps) {
  const { openContactModal } = useModal()

  const handleClick = () => {
    if (!href) {
      openContactModal(title, description)
    }
  }

  if (href) {
    return (
      <Link href={href} className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  )
}
