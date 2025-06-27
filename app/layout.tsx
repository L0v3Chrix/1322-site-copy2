import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Lato } from "next/font/google"
import Script from "next/script" // Import the Script component
import "./globals.css"
import ClientLayout from "./client-layout"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
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
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-cream`}>
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
