"use client"

import type React from "react"

interface ContactButtonProps {
  children: React.ReactNode
  className?: string
  href: string
}

export default function ContactButton({ children, className = "btn-outline", href }: ContactButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}
