import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Learn Infinite Banking | Free IBC Education | 1322 Legacy Strategies",
  description:
    "Master the Infinite Banking Concept at your own pace. Free, comprehensive education for analytical minds who want to understand IBC before making policy decisions.",
  keywords: [
    "learn infinite banking",
    "IBC education",
    "infinite banking course",
    "become your own banker education",
    "IBC training",
    "free infinite banking education",
  ],
  openGraph: {
    title: "Learn Infinite Banking | Free IBC Education",
    description:
      "Master the Infinite Banking Concept at your own pace. Free education for analytical minds.",
    url: "https://www.1322legacystrategies.com/learn",
  },
  alternates: {
    canonical: "https://www.1322legacystrategies.com/learn",
  },
}

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
