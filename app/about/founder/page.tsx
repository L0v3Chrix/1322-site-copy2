"use client"

import { useEffect } from "react"
import InfinityScroll from "@/components/infinity-scroll"

export default function FounderPage() {
  // Force scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 min-h-screen">
      <InfinityScroll />
    </div>
  )
}
