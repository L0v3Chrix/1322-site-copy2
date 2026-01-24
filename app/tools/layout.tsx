import type { Metadata } from "next"
import type React from "react"

export const metadata: Metadata = {
  title: "Financial Tools & Calculators | 1322 Legacy Strategies",
  description:
    "Free financial calculators to help you understand your interest bleed, project family bank growth, estimate policy values, and calculate opportunity costs.",
  keywords: [
    "infinite banking calculator",
    "interest bleed calculator",
    "family bank calculator",
    "policy estimator",
    "IBC calculator",
    "whole life insurance calculator",
  ],
  openGraph: {
    title: "Financial Tools & Calculators | 1322 Legacy Strategies",
    description:
      "Free calculators to help you understand your interest payments and project family bank growth.",
    url: "https://www.1322legacystrategies.com/tools",
  },
  alternates: {
    canonical: "https://www.1322legacystrategies.com/tools",
  },
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
