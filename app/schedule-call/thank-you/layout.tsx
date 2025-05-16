import type React from "react"
import WebinarHeader from "@/components/webinar-header"
export default function ScheduleThankYouLayout({
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
