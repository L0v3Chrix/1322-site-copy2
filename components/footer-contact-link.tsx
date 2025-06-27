"use client"

import type React from "react"
import { useModal } from "@/context/modal-context"

export default function FooterContactLink() {
  const { openContactModal } = useModal()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    openContactModal()
  }

  return (
    <button
      onClick={handleClick}
      className="text-navy/80 hover:text-navy transition-colors text-sm uppercase tracking-wider"
    >
      Contact
    </button>
  )
}
