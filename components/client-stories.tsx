"use client"

import { motion } from "framer-motion"
import { ArrowRight, DollarSign, TrendingUp, Shield, Users } from "lucide-react"

export default function ClientStories() {
  const stories = [
    {
      icon: DollarSign,
      title: "The Johnson Family",
      subtitle: "From Debt to Dynasty",
      description:
        "Eliminated $180,000 in mortgage payments while building a $2.3M family bank that will fund their children's education and business ventures.",
      result: "Created generational wealth in 7 years",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
    {
      icon: TrendingUp,
      title: "The Martinez Legacy",
      subtitle: "Tax-Free Retirement",
      description:
        "Replaced their 401(k) strategy with infinite banking, creating $85,000 in annual tax-free income while preserving $1.2M for their heirs.",
      result: "Zero taxes on retirement income",
      color: "text-copper",
      bgColor: "bg-copper/10",
    },
    {
      icon: Shield,
      title: "The Chen Enterprise",
      subtitle: "Business & Family Protection",
      description:
        "Protected their $3M business with key-person insurance while funding expansion through policy loans, keeping 100% ownership.",
      result: "Funded $500K expansion debt-free",
      color: "text-navy",
      bgColor: "bg-navy/10",
    },
    {
      icon: Users,
      title: "The Williams Dynasty",
      subtitle: "Multi-Generational Planning",
      description:
        "Established a family banking system that will provide each grandchild with $250,000 at age 25, funded through strategic policy design.",
      result: "Secured 3 generations of wealth",
      color: "text-gold",
      bgColor: "bg-gold/10",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-cream" id="client-stories">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-navy">Stories of Stewardship</h2>
          <p className="text-xl max-w-3xl mx-auto text-navy/80">
            Real families who chose to control their capital and build lasting legacies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg border border-navy/10 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`${story.bgColor} p-3 rounded-lg flex-shrink-0`}>
                  <story.icon className={`w-6 h-6 ${story.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy mb-1">{story.title}</h3>
                  <p className="text-copper font-medium text-sm">{story.subtitle}</p>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">{story.description}</p>

              <div className="border-t border-navy/10 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-gold">✓ {story.result}</span>
                  <ArrowRight className="w-4 h-4 text-navy/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-navy/80 mb-6 text-lg">Ready to write your own success story?</p>
            <button className="bg-navy text-cream px-8 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-colors duration-300 inline-flex items-center">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
