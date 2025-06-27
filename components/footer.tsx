import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-soft-cream py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <Logo />
        <p className="text-sm text-deep-navy/80">
          &copy; {new Date().getFullYear()} 1322 Legacy Strategies. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="#" className="text-deep-navy/80 hover:text-deep-navy">
            Privacy Policy
          </Link>
          <Link href="#" className="text-deep-navy/80 hover:text-deep-navy">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
