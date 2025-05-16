import type React from "react"
import WebinarHeader from "@/components/webinar-header"
export const metadata = {
  title: "Qualify | 13:22 Legacy Strategies",
  description: "See if you qualify for our legacy planning services.",
}

export default function QualifyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <WebinarHeader />
      {children}
    </>
  )
}
