import type React from "react"
import type { Metadata } from "next"
import { Libre_Baskerville, Lora, IBM_Plex_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import ClientLayout from "./client-layout"
import { OrganizationJsonLd } from "@/components/json-ld"

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
  title: "Infinite Banking for Christian Entrepreneurs | 1322 Legacy Strategies",
  description:
    "Stop bleeding $20K-$50K/year to banks. Christian entrepreneurs earning $250K+ learn how to become their own banker and build multi-generational wealth through the Infinite Banking Concept.",
  keywords: [
    "infinite banking",
    "infinite banking concept",
    "IBC",
    "become your own banker",
    "christian entrepreneurs",
    "family banking",
    "whole life insurance",
    "wealth building",
    "generational wealth",
    "1322 legacy strategies",
  ],
  authors: [{ name: "Brad Raschke", url: "https://www.1322legacystrategies.com/about" }],
  creator: "1322 Legacy Strategies",
  publisher: "1322 Legacy Strategies",
  icons: {
    icon: "/images/shield-logo.jpeg",
  },
  generator: "v0.dev",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.1322legacystrategies.com",
    siteName: "1322 Legacy Strategies",
    title: "Infinite Banking for Christian Entrepreneurs | 1322 Legacy Strategies",
    description:
      "Stop bleeding $20K-$50K/year to banks. Learn how to become your own banker and build multi-generational wealth.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "1322 Legacy Strategies - Control Your Capital. Build Your Legacy.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Banking for Christian Entrepreneurs | 1322 Legacy Strategies",
    description:
      "Stop bleeding $20K-$50K/year to banks. Learn how to become your own banker and build multi-generational wealth.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://www.1322legacystrategies.com",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "verification-code-here",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${libreBaskerville.variable} ${lora.variable} ${ibmPlexMono.variable} font-body bg-cream`}>
        <OrganizationJsonLd />
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
