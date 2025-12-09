import Link from "next/link"
import ShieldLogo from "./shield-logo"

const learnLinks = [
  { name: "Learning Center", href: "/learn" },
  { name: "Foundations", href: "/learn/foundations" },
  { name: "Deep Dives", href: "/learn/deep-dives" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Video Library", href: "/learn/videos" },
]

const toolLinks = [
  { name: "Interest Bleed Calculator", href: "/tools/interest-bleed-calculator" },
  { name: "Family Bank Projector", href: "/tools/family-bank-projector" },
  { name: "Policy Estimator", href: "/tools/policy-estimator" },
  { name: "Opportunity Cost", href: "/tools/opportunity-cost" },
]

const communityLinks = [
  { name: "Free Academy", href: "https://www.skool.com/1322-ibc-academy", external: true },
  { name: "Office Hours", href: "/learn/office-hours" },
  { name: "Blog", href: "/blog" },
  { name: "About Brad", href: "/about" },
]

const connectLinks = [
  { name: "Book a Call", href: "https://discovery.1322legacystrategies.com/", external: true },
  { name: "Privacy Policy", href: "/legal/privacy-policy" },
  { name: "Terms & Conditions", href: "/legal/terms-and-conditions" },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Learn Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-6">Learn</h4>
            <ul className="space-y-3">
              {learnLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-6">Tools</h4>
            <ul className="space-y-3">
              {toolLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/70 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-6">Community</h4>
            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-6">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-gold transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Scripture & Branding Section */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <ShieldLogo className="h-10 w-10 text-gold mb-4" />

            <p className="font-heading text-lg text-cream/90 max-w-xl mb-2">
              &ldquo;A good man leaves an inheritance to his children&apos;s children.&rdquo;
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-gold">
              Proverbs 13:22
            </p>

            <p className="text-cream/60 text-sm mt-6 max-w-lg">
              Build Your Family Bank. Fund Your Business. Secure Your Legacy.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <p className="text-xs text-cream/40 text-center">
            &copy; {new Date().getFullYear()} 1322 Legacy Strategies. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
