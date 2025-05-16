"use client"

import Link from "next/link"
import OptimizedImage from "./optimized-image"

export default function MinimalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#F5F0E6] py-6 border-t border-navy/10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          <Link href="/" className="inline-block">
            <OptimizedImage
              src="/images/footer-logo.png"
              alt="1322 Legacy Strategies Logo"
              type="logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        <p className="text-sm text-navy/60 mb-2">&copy; {currentYear} 13:22 Legacy Strategies. All rights reserved.</p>

        <div className="flex justify-center space-x-4 text-xs">
          <Link href="/privacy" className="text-navy/60 hover:text-navy transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-navy/60 hover:text-navy transition-colors">
            Terms of Service
          </Link>
          <Link href="https://www.1322legacystrategies.com/" className="text-navy/60 hover:text-navy transition-colors">
            Visit Main Site
          </Link>
        </div>
      </div>
    </footer>
  )
}
