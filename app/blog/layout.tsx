import type React from "react"
import "../globals.css"
import "./blog.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "IBC Blog | Infinite Banking Articles & Insights | 1322 Legacy Strategies",
  description:
    "Field notes for faithful stewards. Articles on Infinite Banking, family wealth strategies, Christian financial stewardship, and building multi-generational legacy.",
  keywords: [
    "infinite banking blog",
    "IBC articles",
    "family wealth blog",
    "christian finance",
    "generational wealth articles",
    "whole life insurance insights",
  ],
  openGraph: {
    title: "IBC Blog | Infinite Banking Articles & Insights",
    description:
      "Field notes for faithful stewards. Wisdom, stories, and strategies to control your capital and build lasting legacy.",
    url: "https://www.1322legacystrategies.com/blog",
  },
  alternates: {
    canonical: "https://www.1322legacystrategies.com/blog",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen">{children}</div>
}
