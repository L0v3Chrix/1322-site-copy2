"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MinimalFooter from "@/components/minimal-footer"

export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  // Check if the current path is part of the webinar funnel
  const isWebinarFunnel =
    pathname.startsWith("/webinar") || pathname.startsWith("/qualify") || pathname.startsWith("/schedule-call")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render header based on path */}
      {!isWebinarFunnel && <Header />}

      <main className="flex-grow">{children}</main>

      {/* Conditionally render footer based on path */}
      {isWebinarFunnel ? <MinimalFooter /> : <Footer />}
    </div>
  )
}
