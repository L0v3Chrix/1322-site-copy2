import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Lora, IBM_Plex_Mono } from "next/font/google"
import Script from "next/script" // Import the Script component
import "./globals.css"
import ClientLayout from "./client-layout"

// Principled Authority Typography System
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "13:22 Legacy Strategies | Control Your Capital. Build Your Legacy.",
  description:
    "13:22 Legacy Strategies helps families take control of their capital, steward their wealth faithfully, and build legacies that bless generations.",
  icons: {
    icon: "/images/shield-logo.jpeg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} ${lora.variable} ${ibmPlexMono.variable} font-body bg-cream`}>
        <ClientLayout>{children}</ClientLayout>

        {/* Google Tag Manager Scripts */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-17079193267" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17079193267');
            `,
          }}
        />
      </body>
    </html>
  )
}
