"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ShieldLogo from "./shield-logo"
import { fadeInUp, staggerContainer } from "@/lib/animation-variants"

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

// Animated footer link with underline effect
function FooterLink({
  href,
  children,
  external = false
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const linkClasses = "relative text-sm text-cream/70 hover:text-gold transition-colors group inline-block"
  const underlineClasses = "absolute left-0 bottom-0 w-full h-[1px] bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
      >
        {children}
        <span className={underlineClasses} />
      </a>
    )
  }

  return (
    <Link href={href} className={linkClasses}>
      {children}
      <span className={underlineClasses} />
    </Link>
  )
}

// Column animation variants
const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.0, 0.0, 0.2, 1],
    },
  }),
}

// Link stagger variants
const linkContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const linkItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.0, 0.0, 0.2, 1],
    },
  },
}

export default function Footer() {
  // Define link groups with their data
  const linkGroups = [
    { title: "Learn", links: learnLinks },
    { title: "Tools", links: toolLinks },
    { title: "Community", links: communityLinks },
    { title: "Connect", links: connectLinks },
  ]

  return (
    <footer className="bg-navy text-cream">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {linkGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              custom={groupIndex}
              variants={columnVariants}
            >
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold mb-6">
                {group.title}
              </h4>
              <motion.ul
                className="space-y-3"
                variants={linkContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.links.map((link) => (
                  <motion.li key={link.name} variants={linkItemVariants}>
                    <FooterLink
                      href={link.href}
                      external={"external" in link ? link.external : false}
                    >
                      {link.name}
                    </FooterLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scripture & Branding Section */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-4 md:px-8 py-12">
          <motion.div
            className="flex flex-col items-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Animated Shield Logo with hover glow */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <ShieldLogo className="h-10 w-10 text-gold mb-4 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(196,154,108,0.5)]" />
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="font-heading text-lg text-cream/90 max-w-xl mb-2"
            >
              &ldquo;A good man leaves an inheritance to his children&apos;s children.&rdquo;
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="font-mono text-xs uppercase tracking-wider text-gold"
            >
              Proverbs 13:22
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-cream/60 text-sm mt-6 max-w-lg"
            >
              Build Your Family Bank. Fund Your Business. Secure Your Legacy.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <motion.div
        className="border-t border-cream/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="container mx-auto px-4 md:px-8 py-6">
          <p className="text-xs text-cream/40 text-center">
            &copy; {new Date().getFullYear()} 1322 Legacy Strategies. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
