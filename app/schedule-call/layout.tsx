import type React from "react"
import WebinarHeader from "@/components/webinar-header"
export const metadata = {
  title: "Schedule a Call | 13:22 Legacy Strategies",
  description: "Schedule a one-on-one call with our legacy planning experts.",
}

export default function ScheduleCallLayout({
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
