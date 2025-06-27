"use client"

import { useEffect } from "react"
import InfinityScroll from "@/components/infinity-scroll"

export default function FounderPage() {
  useEffect(() => {
    // Force scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-20 bg-navy">
      <InfinityScroll />
    </div>
  )
}
