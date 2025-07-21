import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import ShieldLogo from "./shield-logo"

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
]

export default function Footer() {
  return (
    <footer className="bg-cream py-12">
      <div className="container mx-auto px-4 md:px-8 text-navy">
        <div className="flex justify-center mb-6">
          <ShieldLogo className="h-12 w-12 text-gold" />
        </div>
        <h3 className="text-2xl font-playfair mb-2 text-center">1322 Legacy Strategies</h3>
        <p className="mb-6 text-right">Control Your Capital. Build Your Legacy.</p>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-gold transition-colors"
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
        <div className="text-sm text-navy/70 space-x-6 text-center">
          <Link href="/legal/privacy-policy" className="hover:text-gold">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/legal/terms-and-conditions" className="hover:text-gold">
            Terms & Conditions
          </Link>
        </div>
        <p className="text-xs text-navy/50 mt-8 text-center">
          © {new Date().getFullYear()} 1322 Legacy Strategies. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
