"use client"
import Link from "next/link" // Import Link
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import FooterContactLink from "@/components/footer-contact-link"
import { motion } from "framer-motion"
import OptimizedImage from "./optimized-image"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
  }

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.3, type: "spring", stiffness: 200 },
    }),
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  }

  return (
    <motion.footer
      className="bg-cream text-navy py-10 sm:py-16 border-t border-cream/30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-8 text-center">
        <motion.div className="max-w-md mx-auto mb-8" variants={fadeInUpVariants} custom={0}>
          <motion.div className="flex justify-center mb-4" whileHover={{ scale: 1.05 }}>
            <OptimizedImage
              src="/images/footer-logo.png"
              alt="1322 Legacy Strategies Logo"
              type="logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </motion.div>
          <motion.h3 className="font-playfair text-2xl mb-4" variants={fadeInUpVariants} custom={1}>
            13:22 Legacy Strategies
          </motion.h3>
          <motion.p className="text-navy/80 mb-6" variants={fadeInUpVariants} custom={2}>
            Control Your Capital. Build Your Legacy.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8"
          variants={fadeInUpVariants}
          custom={3}
        >
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Twitter, label: "Twitter" },
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Instagram, label: "Instagram" },
          ].map((social, index) => {
            const Icon = social.icon
            return (
              <motion.a
                key={social.label}
                href="#"
                className="text-navy/60 hover:text-navy transition-colors"
                aria-label={social.label}
                variants={socialIconVariants}
                custom={index}
                whileHover="hover"
              >
                <Icon size={20} />
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-x-4 sm:gap-x-8 gap-y-2 mb-6 sm:mb-8 text-xs sm:text-sm uppercase tracking-wider"
          variants={fadeInUpVariants}
          custom={4}
        >
          {[
            { name: "Home", path: "/" }, // Changed to / for home
            { name: "About", path: "/about" }, // Changed to /about
            { name: "Strategy", path: "/strategy" }, // Changed to /strategy
            { name: "Services", path: "/services" }, // Changed to /services
            { name: "Stories", path: "/client-stories" }, // Assuming this is a page
            { name: "Tools", path: "/resources" }, // Assuming tools are on resources page
            { name: "Contact", component: FooterContactLink },
            { name: "Blog", path: "/blog" },
          ].map((item, index) =>
            item.component ? (
              <motion.div key={item.name} variants={fadeInUpVariants} custom={index + 5} whileHover={{ y: -2 }}>
                <FooterContactLink />
              </motion.div>
            ) : (
              <motion.a // Changed to Link for internal navigation
                key={item.name}
                href={item.path} // Use href for external or direct links
                className="text-navy/80 hover:text-navy transition-colors"
                variants={fadeInUpVariants}
                custom={index + 5}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ),
          )}
        </motion.div>

        <motion.div className="text-navy/60 text-sm" variants={fadeInUpVariants} custom={11}>
          <p>&copy; {currentYear} 13:22 Legacy Strategies. All rights reserved.</p>
          <div className="mt-2 text-xs">
            <Link
              href="/legal/privacy-policy"
              className="text-navy/70 hover:text-navy hover:underline transition-colors mx-2"
            >
              Privacy Policy
            </Link>
            |
            <Link
              href="/legal/terms-and-conditions"
              className="text-navy/70 hover:text-navy hover:underline transition-colors mx-2"
            >
              Terms & Conditions
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
