import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "About Brad Raschke | Authorized Infinite Banking Practitioner | 1322 Legacy Strategies",
  description:
    "Meet Brad Raschke, founder of 1322 Legacy Strategies. Licensed insurance professional and Authorized Infinite Banking Practitioner helping Christian families build multi-generational wealth.",
  openGraph: {
    title: "About Brad Raschke | 1322 Legacy Strategies",
    description:
      "Meet Brad Raschke, founder of 1322 Legacy Strategies and Authorized Infinite Banking Practitioner.",
    url: "https://www.1322legacystrategies.com/about",
  },
  alternates: {
    canonical: "https://www.1322legacystrategies.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
