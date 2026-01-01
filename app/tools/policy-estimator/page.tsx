"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

// Helper function to format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
}

// Health rating options
const healthRatings = [
  { value: "preferred-plus", label: "Preferred Plus", multiplier: 0.85, description: "Excellent health, no tobacco, ideal weight" },
  { value: "preferred", label: "Preferred", multiplier: 1.0, description: "Good health, no tobacco, minor conditions OK" },
  { value: "standard", label: "Standard", multiplier: 1.25, description: "Average health, manageable conditions" },
]

// Primary use case options
const useCases = [
  { value: "business-financing", label: "Business Financing", cashValueFocus: 0.9 },
  { value: "wealth-building", label: "Wealth Building", cashValueFocus: 0.8 },
  { value: "legacy-protection", label: "Legacy Protection", cashValueFocus: 0.6 },
  { value: "balanced", label: "Balanced Approach", cashValueFocus: 0.75 },
]

// Calculate policy estimates
const calculateEstimates = (
  age: number,
  healthRating: string,
  annualPremium: number,
  useCase: string
) => {
  const health = healthRatings.find(h => h.value === healthRating) || healthRatings[1]
  const focus = useCases.find(u => u.value === useCase) || useCases[3]

  // Base calculations adjusted for age and health
  const ageMultiplier = Math.max(0.5, 1 - ((age - 30) * 0.015)) // Decreases with age
  const baseDeathBenefit = annualPremium * 15 * ageMultiplier / health.multiplier

  // Cash value projections (conservative estimates)
  const year1CashValue = annualPremium * 0.65 * focus.cashValueFocus
  const year5CashValue = annualPremium * 4.2 * focus.cashValueFocus
  const year10CashValue = annualPremium * 9.5 * focus.cashValueFocus
  const year20CashValue = annualPremium * 24 * focus.cashValueFocus

  // Loan availability timeline
  const loanAvailableYear = age <= 40 ? 2 : age <= 50 ? 3 : 4

  // Internal rate of return estimate (conservative)
  const estimatedIRR = 4.0 + (focus.cashValueFocus * 0.5)

  // Comparison with alternatives
  const termCost = annualPremium * 0.15 // Term would cost ~15% of whole life for same death benefit
  const termSavingsDifference = annualPremium - termCost
  const investedDifference20Years = termSavingsDifference * 30 // Rough 20-year accumulated value

  return {
    deathBenefit: baseDeathBenefit,
    year1CashValue,
    year5CashValue,
    year10CashValue,
    year20CashValue,
    loanAvailableYear,
    loanCapacityYear10: year10CashValue * 0.9,
    loanCapacityYear20: year20CashValue * 0.9,
    estimatedIRR,
    termCost,
    investedDifference20Years,
    healthMultiplier: health.multiplier,
    focusDescription: focus.cashValueFocus >= 0.85 ? "Cash Value Maximized" :
                      focus.cashValueFocus >= 0.7 ? "Balanced Growth" :
                      "Death Benefit Focused",
  }
}

export default function PolicyEstimatorPage() {
  // Input state
  const [age, setAge] = useState(40)
  const [healthRating, setHealthRating] = useState("preferred")
  const [annualPremium, setAnnualPremium] = useState(24000)
  const [useCase, setUseCase] = useState("business-financing")

  // Calculate results
  const results = useMemo(() => {
    return calculateEstimates(age, healthRating, annualPremium, useCase)
  }, [age, healthRating, annualPremium, useCase])

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/tools"
              className="inline-block font-mono text-xs uppercase tracking-wider text-gold mb-4 hover:text-cream transition-colors"
            >
              ← Back to Tools
            </Link>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Policy Premium Estimator
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              Get a rough estimate of what&apos;s possible with a properly designed whole life policy.
              Understand the trade-offs before your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Input Panel */}
              <div className="border-2 border-navy/20 p-6 md:p-8">
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                  Your Profile
                </h2>

                {/* Age */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Your Age
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="25"
                      max="60"
                      step="1"
                      value={age}
                      onChange={(e) => setAge(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {age} yrs
                    </span>
                  </div>
                </div>

                {/* Health Rating */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-3">
                    Health Rating
                  </label>
                  <div className="space-y-2">
                    {healthRatings.map((rating) => (
                      <label
                        key={rating.value}
                        className={`flex items-start gap-3 p-3 border-2 cursor-pointer transition-colors ${
                          healthRating === rating.value
                            ? 'border-gold bg-gold/5'
                            : 'border-navy/10 hover:border-navy/30'
                        }`}
                      >
                        <input
                          type="radio"
                          name="health"
                          value={rating.value}
                          checked={healthRating === rating.value}
                          onChange={(e) => setHealthRating(e.target.value)}
                          className="mt-1 accent-gold"
                        />
                        <div>
                          <span className="font-heading font-bold text-navy block">
                            {rating.label}
                          </span>
                          <span className="text-sm text-navy/60">
                            {rating.description}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Annual Premium */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Annual Premium Capacity
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="6000"
                      max="100000"
                      step="1000"
                      value={annualPremium}
                      onChange={(e) => setAnnualPremium(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-32 text-right">
                      {formatCurrency(annualPremium)}
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    {formatCurrency(annualPremium / 12)}/month
                  </p>
                </div>

                {/* Primary Use Case */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-3">
                    Primary Goal
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {useCases.map((uc) => (
                      <button
                        key={uc.value}
                        onClick={() => setUseCase(uc.value)}
                        className={`p-3 border-2 text-center transition-colors ${
                          useCase === uc.value
                            ? 'border-gold bg-gold/10 text-navy'
                            : 'border-navy/10 text-navy/60 hover:border-navy/30'
                        }`}
                      >
                        <span className="font-heading font-bold text-sm block">
                          {uc.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Policy Focus Indicator */}
                <div className="border-t border-navy/10 pt-6 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm uppercase tracking-wider text-navy/60">
                      Policy Design Focus
                    </span>
                    <span className="font-mono text-sm font-bold text-gold">
                      {results.focusDescription}
                    </span>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="border-2 border-gold p-6 md:p-8 bg-gold/5">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                  Your Estimated Policy
                </h2>
                <p className="text-navy/60 mb-8">
                  Preliminary estimates based on your inputs
                </p>

                {/* Death Benefit */}
                <div className="mb-6 pb-6 border-b border-navy/20">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Estimated Death Benefit
                  </span>
                  <span className="block font-mono text-4xl font-bold text-navy">
                    {formatCurrency(results.deathBenefit)}
                  </span>
                </div>

                {/* Cash Value Projections */}
                <div className="mb-6 pb-6 border-b border-navy/20">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-4">
                    Estimated Cash Value
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm text-navy/60 block">Year 1</span>
                      <span className="font-mono text-xl font-bold text-gold">
                        {formatCurrency(results.year1CashValue)}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-navy/60 block">Year 5</span>
                      <span className="font-mono text-xl font-bold text-gold">
                        {formatCurrency(results.year5CashValue)}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-navy/60 block">Year 10</span>
                      <span className="font-mono text-xl font-bold text-gold">
                        {formatCurrency(results.year10CashValue)}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-navy/60 block">Year 20</span>
                      <span className="font-mono text-xl font-bold text-gold">
                        {formatCurrency(results.year20CashValue)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Loan Availability */}
                <div className="mb-6 pb-6 border-b border-navy/20">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Policy Loan Availability
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-navy">
                      Year {results.loanAvailableYear}
                    </span>
                    <span className="text-navy/60">onward</span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    Loan capacity at Year 10: {formatCurrency(results.loanCapacityYear10)}
                  </p>
                </div>

                {/* Estimated IRR */}
                <div className="mb-6">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Estimated Internal Rate of Return
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-3xl font-bold text-gold">
                      {results.estimatedIRR.toFixed(1)}%
                    </span>
                    <span className="text-navy/60">tax-advantaged</span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    Cash value growth rate over 20+ years
                  </p>
                </div>

                {/* Important Notice */}
                <div className="bg-navy text-cream p-4 mt-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-gold mb-2">
                    Important
                  </p>
                  <p className="text-sm text-cream/80">
                    These are rough estimates only. Actual policy values depend on
                    carrier, policy design, and underwriting. Request a custom illustration
                    for accurate numbers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8">
              Whole Life vs. &ldquo;Buy Term and Invest the Difference&rdquo;
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-2 border-navy/20 p-6 bg-cream">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">
                  Whole Life (This Estimate)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">+</span>
                    <span className="text-navy/70">Guaranteed cash value growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">+</span>
                    <span className="text-navy/70">Tax-advantaged access via loans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">+</span>
                    <span className="text-navy/70">Permanent death benefit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">+</span>
                    <span className="text-navy/70">Creditor protection (varies by state)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">+</span>
                    <span className="text-navy/70">Uninterrupted compounding</span>
                  </li>
                </ul>
              </div>

              <div className="border-2 border-navy/10 p-6 bg-cream/50">
                <h3 className="font-heading text-xl font-bold text-navy/60 mb-4">
                  Term + Invest Difference
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40 font-bold">~</span>
                    <span className="text-navy/50">Market-dependent returns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40 font-bold">~</span>
                    <span className="text-navy/50">Taxable withdrawals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40 font-bold">−</span>
                    <span className="text-navy/50">Coverage expires at term end</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40 font-bold">−</span>
                    <span className="text-navy/50">No creditor protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-navy/40 font-bold">−</span>
                    <span className="text-navy/50">Requires discipline to actually invest</span>
                  </li>
                </ul>
                <p className="text-sm text-navy/40 mt-4 pt-4 border-t border-navy/10">
                  Term cost for same death benefit: ~{formatCurrency(results.termCost)}/yr
                </p>
              </div>
            </div>

            <p className="text-sm text-navy/60 mt-6 text-center">
              The &ldquo;right&rdquo; choice depends on your goals, discipline, and need for liquidity.
              IBC practitioners prioritize the banking function over pure investment returns.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              Understanding the Estimates
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Why Age Matters
                </h3>
                <p className="text-navy/70">
                  Younger applicants get more death benefit per dollar because they&apos;re statistically
                  lower risk. But the real power of IBC comes from time—more years means more compounding.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Why Health Rating Matters
                </h3>
                <p className="text-navy/70">
                  Better health means lower insurance costs, which means more of your premium goes toward
                  cash value. But don&apos;t let imperfect health stop you—even standard rates work for IBC.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Policy Design Flexibility
                </h3>
                <p className="text-navy/70">
                  A properly designed IBC policy maximizes cash value through paid-up addition riders.
                  The base policy provides the death benefit; the PUA rider supercharges cash value growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">
              Continue Your Research
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/learn/foundations/whole-life-explained"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Lesson
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Whole Life Explained
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  Understand the product behind the estimates
                </p>
              </Link>

              <Link
                href="/tools/family-bank-projector"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Calculator
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Family Bank Projector
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  See multi-generational wealth potential
                </p>
              </Link>

              <Link
                href="/case-studies"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Real Examples
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Case Studies
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  See policies in action for businesses
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="py-16 md:py-20 border-t border-navy/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Ready for a Custom Illustration?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              These estimates give you a starting point. For actual numbers based on your health,
              carrier options, and specific goals, let&apos;s have a conversation.
            </p>
            <a
              href="https://www.skool.com/ibc-academy-5448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Request Custom Illustration
            </a>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              No obligation. No pressure. Just real numbers for your situation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
