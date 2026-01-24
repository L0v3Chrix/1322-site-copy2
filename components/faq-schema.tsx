"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

// FAQ Schema generator
export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// FAQ Component with built-in schema
export function FAQSection({ faqs, title = "Frequently Asked Questions" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-cream">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqs)),
        }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-12 text-center">
          {title}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-navy/10 rounded-lg overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cream/50 transition-colors"
              >
                <span className="font-heading font-semibold text-navy pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gold transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-navy/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pre-built FAQ content for common pages
export const ibcFAQs: FAQ[] = [
  {
    question: "What is the Infinite Banking Concept?",
    answer:
      "The Infinite Banking Concept (IBC) is a wealth-building strategy created by Nelson Nash that uses dividend-paying whole life insurance policies as a personal banking system. Instead of borrowing from banks and paying interest to financial institutions, you borrow against your policy's cash value while it continues to grow with guaranteed interest and potential dividends.",
  },
  {
    question: "How much money do I need to start Infinite Banking?",
    answer:
      "Most IBC practitioners recommend starting with a minimum premium of $500-$1,000 per month ($6,000-$12,000 annually). The key is designing a policy that maximizes cash value growth while fitting your budget. Premium amounts depend on your financial goals, income, and insurability.",
  },
  {
    question: "Is Infinite Banking a scam?",
    answer:
      "No, Infinite Banking is not a scam. It's a legitimate strategy based on dividend-paying whole life insurance policies from highly-rated mutual insurance companies. The concept was developed by Nelson Nash and has been used successfully for decades. However, success requires proper policy design by a qualified practitioner and isn't suitable for everyone.",
  },
  {
    question: "How long does it take to see results with IBC?",
    answer:
      "IBC is a long-term strategy. You can typically access policy loans within the first year, but the real power of IBC compounds over time. Most practitioners see significant benefits after 5-7 years, with exponential growth over 20-30+ years. The key is consistency and patience.",
  },
  {
    question: "Is whole life insurance a good investment?",
    answer:
      "Whole life insurance in IBC isn't positioned as a traditional investment—it's a financial tool for capital control and guaranteed growth. Unlike market investments, whole life provides guaranteed cash value growth, potential dividends, tax advantages, death benefit protection, and liquidity through policy loans. It's best suited for those who value certainty and control over maximum returns.",
  },
  {
    question: "What's the difference between IBC and traditional banking?",
    answer:
      "With traditional banking, you deposit money and earn minimal interest while the bank lends it out at much higher rates. With IBC, you fund a whole life policy, your cash value grows with guaranteed interest and dividends, and when you need capital, you borrow against your policy. Your money continues growing even while you use it, and interest payments go back into your system rather than to a bank.",
  },
  {
    question: "Can I use IBC to finance my business?",
    answer:
      "Yes, IBC is particularly powerful for business owners. You can finance equipment, real estate, inventory, or expansion through policy loans instead of traditional bank financing. The interest you pay goes back to your policy rather than a bank, and your business doesn't need to qualify for traditional loans.",
  },
  {
    question: "Is the money I put into IBC accessible?",
    answer:
      "Yes. One of the key benefits of IBC is liquidity. You can access your cash value through policy loans at any time, for any reason, without bank approval or credit checks. Loans are typically processed within days, and you set your own repayment terms.",
  },
]
