import type React from "react"
import WebinarHeader from "@/components/webinar-header"
export const metadata = {
  title: "Webinar | 13:22 Legacy Strategies",
  description: "Join our webinar to learn about legacy planning strategies.",
}

export default function WebinarLayout({
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
