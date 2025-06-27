"use client"

import { motion } from "framer-motion"

export default function ToolsServices() {
  const tools = [
    {
      concern: "Quick clarity on where you stand",
      tool: "Legacy Insight™ Report",
    },
    {
      concern: "Liquidity without the bank",
      tool: "Infinite Banking Concept™",
    },
    {
      concern: "Protect & pass assets",
      tool: "Trust & Estate Design",
    },
    {
      concern: "Keep more, give less to IRS",
      tool: "Tax Coordination with our Tax Strategists",
    },
    {
      concern: "Teach the next generation",
      tool: "Annual Legacy Review",
    },
  ]

  return (
    <section className="bg-cream py-16 md:py-24" id="tools">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">TOOLS & SERVICES</h2>
          <p className="text-xl max-w-3xl mx-auto text-navy/80">
            Each tool ties back to the four-step strategy—nothing "extra," everything coordinated.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 bg-navy text-cream rounded-tl-lg">Your Concern</th>
                  <th className="text-left py-4 px-6 bg-navy text-cream rounded-tr-lg">1322 Tool</th>
                </tr>
              </thead>
              <tbody>
                {tools.map((item, index) => (
                  <motion.tr
                    key={index}
                    className={index % 2 === 0 ? "bg-cream" : "bg-cream/80"}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <td className="py-4 px-6 border-b border-navy/10">{item.concern}</td>
                    <td className="py-4 px-6 border-b border-navy/10 font-bold text-navy">{item.tool}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
