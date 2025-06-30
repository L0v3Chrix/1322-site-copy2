"use client"

import type React from "react"

import { useModal } from "@/context/modal-context"

interface ContactButtonProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export default function ContactButton({
  children,
  className = "btn-outline",
  title = "Schedule Your Discovery Call",
  description = "Take the first step toward building a legacy that blesses generations.",
}: ContactButtonProps) {
  const { openContactModal } = useModal()

  return (
    <button onClick={() => openContactModal(title, description)} className={className}>
      {children}
    </button>
  )
}
