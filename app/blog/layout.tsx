import type React from "react"
import "../globals.css"
import "./blog.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | 1322 Legacy Strategies",
  description: "Insights on legacy planning, stewardship, and wealth transfer strategies.",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen">{children}</div>
}
