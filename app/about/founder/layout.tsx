import type React from "react"
import InfinityScrollNav from "@/components/infinity-scroll-nav"

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <InfinityScrollNav />
      {children}
    </>
  )
}
