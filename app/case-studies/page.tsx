"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

// Case studies data with filter categories
const caseStudies = [
  {
    slug: "mikes-hvac",
    industry: "HVAC Services",
    category: "Service Business",
    revenue: "$750K",
    name: "Mike",
    title: "How Mike Stopped Paying Banks $32,000/Year and Started Building Family Wealth Instead",
    summary: "Mike was financing $80K annually for service vehicles, paying 7.9% interest to banks. After implementing IBC, he now finances his fleet through his own family bank.",
    stats: [
      { label: "Annual Financing", value: "$80K" },
      { label: "Interest Saved", value: "$32K/yr" },
      { label: "Break Even", value: "18 months" },
      { label: "Vehicles Financed", value: "3" },
    ],
    featured: true,
  },
  {
    slug: "sarahs-ecommerce",
    industry: "E-commerce",
    category: "E-commerce",
    revenue: "$400K",
    name: "Sarah",
    title: "How Sarah Eliminated Inventory Financing Stress and Increased Profit Margins by 12%",
    summary: "Sarah was using high-interest credit lines to fund seasonal inventory purchases. Now she draws from her policy to fund inventory and pays herself back with interest.",
    stats: [
      { label: "Inventory Budget", value: "$120K" },
      { label: "Margin Increase", value: "12%" },
      { label: "Break Even", value: "24 months" },
      { label: "Seasons Funded", value: "4" },
    ],
    featured: true,
  },
  {
    slug: "davids-real-estate",
    industry: "Real Estate Investment",
    category: "Real Estate",
    revenue: "$1.2M",
    name: "David",
    title: "How David Uses His Family Bank for Bridge Financing and Closes Deals 3x Faster",
    summary: "David was missing deals waiting for bank approvals. Now he uses policy loans for bridge financing, closes quickly, and refinances at his pace.",
    stats: [
      { label: "Deal Size Avg", value: "$350K" },
      { label: "Deals/Year", value: "8" },
      { label: "Speed Increase", value: "3x" },
      { label: "Cash Available", value: "$180K" },
    ],
    featured: false,
  },
  {
    slug: "pastor-james-ministry",
    industry: "Ministry",
    category: "Ministry",
    revenue: "$600K",
    name: "Pastor James",
    title: "How Pastor James Built a Building Fund That Actually Builds Wealth",
    summary: "Pastor James needed a way to save for building expansion that aligned with biblical stewardship principles. His policy now serves dual purpose: building fund and legacy.",
    stats: [
      { label: "Monthly Contribution", value: "$5K" },
      { label: "Growth Rate", value: "4.2%" },
      { label: "Tax Benefit", value: "Significant" },
      { label: "Legacy Transfer", value: "Planned" },
    ],
    featured: false,
  },
  {
    slug: "thomas-manufacturing",
    industry: "Manufacturing",
    category: "Manufacturing",
    revenue: "$2.5M",
    name: "Thomas",
    title: "How Thomas Financed $400K in Equipment Without Banks and Kept Control of His Business",
    summary: "Thomas was tired of bank covenants and restrictions. He now finances major equipment purchases through his family bank with no outside oversight.",
    stats: [
      { label: "Equipment Budget", value: "$400K" },
      { label: "Bank Fees Avoided", value: "$45K" },
      { label: "Cash Flow Improved", value: "18%" },
      { label: "Covenants Eliminated", value: "All" },
    ],
    featured: true,
  },
]

// Filter categories
const filterCategories = [
  { id: "all", label: "All Industries" },
  { id: "Service Business", label: "Service Business" },
  { id: "E-commerce", label: "E-commerce" },
  { id: "Real Estate", label: "Real Estate" },
  { id: "Manufacturing", label: "Manufacturing" },
  { id: "Ministry", label: "Ministry" },
]

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredCaseStudies = useMemo(() => {
    if (activeFilter === "all") return caseStudies
    return caseStudies.filter((study) => study.category === activeFilter)
  }, [activeFilter])

  const studyCount = filteredCaseStudies.length

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-gold mb-4">
              Real Examples
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Business Owners Who Became Their Own Bankers
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8">
              See how entrepreneurs like you implemented IBC in their businesses.
              Real numbers. Real strategies. Real results.
            </p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Filter by Industry */}
      <section className="py-8 border-b border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 border-2 transition-colors ${
                  activeFilter === category.id
                    ? "border-gold bg-gold/10 text-navy"
                    : "border-navy/20 text-navy/60 hover:border-gold hover:text-navy"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <p className="text-center mt-4 font-mono text-xs text-navy/50">
            Showing {studyCount} case {studyCount === 1 ? "study" : "studies"}
            {activeFilter !== "all" && ` in ${activeFilter}`}
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {filteredCaseStudies.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-mono text-sm text-navy/50 uppercase tracking-wider">
                  No case studies found for this category
                </p>
              </div>
            ) : null}
            {filteredCaseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="block border-2 border-navy/20 hover:border-gold transition-colors group"
              >
                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-3 py-1 text-navy/60">
                      {study.industry}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-3 py-1 text-navy/60">
                      {study.revenue} Revenue
                    </span>
                    {study.featured && (
                      <span className="font-mono text-xs uppercase tracking-wider bg-gold px-3 py-1 text-navy">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-navy group-hover:text-gold transition-colors mb-4">
                    {study.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-navy/70 mb-6 max-w-3xl">
                    {study.summary}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-navy/10">
                    {study.stats.map((stat, index) => (
                      <div key={index} className="border-l-2 border-gold pl-4">
                        <span className="block font-mono text-2xl font-bold text-gold">
                          {stat.value}
                        </span>
                        <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Read More */}
                  <div className="mt-6 pt-6 border-t border-navy/10">
                    <span className="font-mono text-sm uppercase tracking-wider text-gold group-hover:text-navy transition-colors">
                      Read Full Case Study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Could This Work for Your Business?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Every business is different. These case studies show what&apos;s possible,
              but your specific situation needs a personalized analysis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/interest-bleed-calculator"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Run Your Numbers
              </Link>
              <a
                href="https://discovery.1322legacystrategies.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Book a Consultation
              </a>
            </div>

            <p className="text-sm text-navy/50 mt-6 font-mono">
              No pressure. No obligation. Just an honest conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
