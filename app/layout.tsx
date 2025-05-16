import type React from "react"
import type { Metadata } from "next"
import ClientComponent from "./client"

export const metadata: Metadata = {
  title: "13:22 Legacy Strategies",
  description: "Helping families build and preserve their legacy for generations to come.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientComponent>{children}</ClientComponent>
}


import './globals.css'