import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const fontLato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
})

export const metadata: Metadata = {
  title: "Legacy Strategies Webinar",
  description:
    "A stewardship webinar for families who want to control their capital, bless future generations, and build a legacy that lasts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-soft-cream font-lato antialiased", fontPlayfair.variable, fontLato.variable)}
      >
        {children}
      </body>
    </html>
  )
}
