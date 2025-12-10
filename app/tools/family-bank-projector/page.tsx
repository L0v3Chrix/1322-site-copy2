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

// Calculate family bank projections
const calculateProjections = (
  currentAge: number,
  annualPremium: number,
  generations: number,
  yearsToProject: number
) => {
  // Conservative assumptions for dividend-paying whole life
  const cashValueYear1Ratio = 0.65 // ~65% of premium goes to cash value year 1
  const cashValueGrowthRate = 0.045 // 4.5% guaranteed + dividends
  const deathBenefitMultiplier = 15 // Typical death benefit to premium ratio

  // Calculate year-by-year projections
  const yearlyProjections = []
  let cumulativePremiums = 0
  let cashValue = 0
  let totalDeathBenefit = annualPremium * deathBenefitMultiplier

  for (let year = 1; year <= yearsToProject; year++) {
    cumulativePremiums += annualPremium

    if (year === 1) {
      cashValue = annualPremium * cashValueYear1Ratio
    } else {
      // Cash value grows from compound growth + new premium contribution
      cashValue = (cashValue * (1 + cashValueGrowthRate)) + (annualPremium * 0.85)
    }

    // Loan availability (typically 90% of cash value)
    const loanAvailable = cashValue * 0.9

    yearlyProjections.push({
      year,
      age: currentAge + year,
      cumulativePremiums,
      cashValue,
      loanAvailable,
      deathBenefit: totalDeathBenefit,
    })
  }

  // Multi-generational impact calculation
  // Assume each generation adds a policy at age 30 with similar structure
  const generationalWealth = []
  let totalFamilyCashValue = cashValue

  for (let gen = 1; gen <= generations; gen++) {
    if (gen === 1) {
      generationalWealth.push({
        generation: gen,
        description: "You",
        cashValue: cashValue,
        deathBenefit: totalDeathBenefit,
      })
    } else {
      // Each subsequent generation starts with death benefit from prior gen
      // plus their own policy building
      const inheritedCapital = totalDeathBenefit * 0.8 // After estate planning
      const genOwnPolicy = cashValue * 0.6 // Younger generation smaller policy
      const genCashValue = inheritedCapital + genOwnPolicy
      const genDeathBenefit = totalDeathBenefit * 1.5 // Grows with inheritance

      generationalWealth.push({
        generation: gen,
        description: gen === 2 ? "Your Children" : gen === 3 ? "Grandchildren" : "Great-Grandchildren",
        cashValue: genCashValue,
        deathBenefit: genDeathBenefit,
      })

      totalFamilyCashValue += genCashValue
    }
  }

  return {
    yearlyProjections,
    generationalWealth,
    totalFamilyCashValue,
    year10: yearlyProjections[9] || yearlyProjections[yearlyProjections.length - 1],
    year20: yearlyProjections[19] || yearlyProjections[yearlyProjections.length - 1],
    year30: yearlyProjections[29] || yearlyProjections[yearlyProjections.length - 1],
  }
}

export default function FamilyBankProjectorPage() {
  // Input state
  const [currentAge, setCurrentAge] = useState(40)
  const [annualPremium, setAnnualPremium] = useState(24000)
  const [generations, setGenerations] = useState(2)
  const [yearsToProject, setYearsToProject] = useState(30)

  // Calculate results
  const results = useMemo(() => {
    return calculateProjections(currentAge, annualPremium, generations, yearsToProject)
  }, [currentAge, annualPremium, generations, yearsToProject])

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
              Family Bank Projector
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              Project your multi-generational wealth building potential. See how a properly
              designed policy can fund your business and secure your family&apos;s legacy.
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
                  Your Family Bank Setup
                </h2>

                {/* Current Age */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Your Current Age
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="25"
                      max="60"
                      step="1"
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {currentAge} yrs
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    Younger start = more compounding time
                  </p>
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
                    What you can comfortably commit annually
                  </p>
                </div>

                {/* Generations */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Generations to Include
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="4"
                      step="1"
                      value={generations}
                      onChange={(e) => setGenerations(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {generations}
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    {generations === 1 ? "Just you" :
                     generations === 2 ? "You + children" :
                     generations === 3 ? "You + children + grandchildren" :
                     "Full dynasty planning"}
                  </p>
                </div>

                {/* Years to Project */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Years to Project
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10"
                      max="40"
                      step="5"
                      value={yearsToProject}
                      onChange={(e) => setYearsToProject(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {yearsToProject} yrs
                    </span>
                  </div>
                </div>

                {/* Key Milestones */}
                <div className="border-t border-navy/10 pt-6 mt-6">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-4">
                    Key Milestones
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-navy">
                        {formatCurrency(results.year10?.cashValue || 0)}
                      </span>
                      <span className="text-xs text-navy/50">Year 10</span>
                    </div>
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-navy">
                        {formatCurrency(results.year20?.cashValue || 0)}
                      </span>
                      <span className="text-xs text-navy/50">Year 20</span>
                    </div>
                    <div className="text-center">
                      <span className="block font-mono text-2xl font-bold text-navy">
                        {formatCurrency(results.year30?.cashValue || 0)}
                      </span>
                      <span className="text-xs text-navy/50">Year 30</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="border-2 border-gold p-6 md:p-8 bg-gold/5">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                  Your Family Bank Potential
                </h2>
                <p className="text-navy/60 mb-8">
                  Projected wealth building across generations
                </p>

                {/* Main Result */}
                <div className="mb-8">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Total Family Wealth ({generations} Generation{generations > 1 ? 's' : ''})
                  </span>
                  <span className="block font-mono text-5xl md:text-6xl font-bold text-gold">
                    {formatCurrency(results.totalFamilyCashValue)}
                  </span>
                  <p className="text-sm text-navy/60 mt-2">
                    Combined cash value + legacy transfer
                  </p>
                </div>

                {/* Generational Breakdown */}
                <div className="border-t border-navy/20 pt-6">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-4">
                    Generational Breakdown
                  </span>
                  <div className="space-y-4">
                    {results.generationalWealth.map((gen) => (
                      <div key={gen.generation} className="flex justify-between items-center border-b border-navy/10 pb-3">
                        <div>
                          <span className="font-heading font-bold text-navy block">
                            {gen.description}
                          </span>
                          <span className="text-xs text-navy/50">
                            Generation {gen.generation}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="font-mono font-bold text-gold block">
                            {formatCurrency(gen.cashValue)}
                          </span>
                          <span className="text-xs text-navy/50">
                            DB: {formatCurrency(gen.deathBenefit)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Loan Capacity */}
                <div className="mt-8 pt-6 border-t border-navy/20">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-4">
                    Your Loan Capacity (Year {yearsToProject})
                  </span>
                  <div className="bg-navy text-cream p-4">
                    <span className="font-mono text-3xl font-bold text-gold">
                      {formatCurrency(results.yearlyProjections[results.yearlyProjections.length - 1]?.loanAvailable || 0)}
                    </span>
                    <p className="text-sm text-cream/60 mt-1">
                      Available to borrow against for business needs
                    </p>
                  </div>
                </div>

                {/* Timeline Visualization */}
                <div className="mt-8 pt-6 border-t border-navy/20">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-4">
                    Cash Value Growth
                  </span>
                  <div className="h-8 flex rounded-sm overflow-hidden">
                    <div
                      className="bg-gold/40 flex items-center justify-center text-navy text-xs font-mono"
                      style={{ width: '20%' }}
                    >
                      Yr 1-5
                    </div>
                    <div
                      className="bg-gold/60 flex items-center justify-center text-navy text-xs font-mono"
                      style={{ width: '25%' }}
                    >
                      Yr 6-10
                    </div>
                    <div
                      className="bg-gold/80 flex items-center justify-center text-navy text-xs font-mono"
                      style={{ width: '25%' }}
                    >
                      Yr 11-20
                    </div>
                    <div
                      className="bg-gold flex items-center justify-center text-navy text-xs font-mono"
                      style={{ width: '30%' }}
                    >
                      Yr 21+
                    </div>
                  </div>
                  <p className="text-xs text-navy/50 mt-2 text-center">
                    Growth accelerates as compounding takes hold
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Year-by-Year Table */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              Year-by-Year Projection
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="text-left border-b-2 border-navy/20">
                    <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3">Year</th>
                    <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3">Age</th>
                    <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3 text-right">Premiums Paid</th>
                    <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3 text-right">Cash Value</th>
                    <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3 text-right">Loan Available</th>
                  </tr>
                </thead>
                <tbody>
                  {results.yearlyProjections.filter((_, i) => i < 10 || (i + 1) % 5 === 0).map((proj) => (
                    <tr key={proj.year} className="border-b border-navy/10">
                      <td className="py-3 font-mono font-bold text-navy">{proj.year}</td>
                      <td className="py-3 font-mono text-navy/70">{proj.age}</td>
                      <td className="py-3 font-mono text-right text-navy/70">
                        {formatCurrency(proj.cumulativePremiums)}
                      </td>
                      <td className="py-3 font-mono text-right font-bold text-gold">
                        {formatCurrency(proj.cashValue)}
                      </td>
                      <td className="py-3 font-mono text-right text-navy/70">
                        {formatCurrency(proj.loanAvailable)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-sm text-navy/50 mt-4 font-mono">
              * Projections use conservative assumptions: 4.5% growth, 90% loan-to-value.
              Actual results may vary based on policy design and carrier performance.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              Understanding Your Family Bank
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Cash Value
                </h3>
                <p className="text-navy/70">
                  The living benefit of your policy. This is money you can access through policy loans
                  while your full balance continues to earn dividends. It&apos;s your personal banking reservoir.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Loan Capacity
                </h3>
                <p className="text-navy/70">
                  Typically 90% of your cash value is available for policy loans. Unlike traditional loans,
                  you set the repayment terms. Your cash value continues growing even while you have loans outstanding.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Multi-Generational Wealth
                </h3>
                <p className="text-navy/70">
                  When structured properly, your family bank can transfer wealth tax-efficiently to future generations.
                  Children and grandchildren can start their own policies, creating a dynasty of private banking.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 border-2 border-navy/20 bg-cream">
              <p className="font-mono text-sm italic text-navy/70">
                &ldquo;A good man leaves an inheritance to his children&apos;s children.&rdquo;
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-gold mt-2">
                Proverbs 13:22
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">
              Continue Learning
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/tools/interest-bleed-calculator"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Calculator
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Interest Bleed Calculator
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  See how much you&apos;re losing to banks now
                </p>
              </Link>

              <Link
                href="/learn/foundations/ibc-concept-explained"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Lesson
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  The IBC Concept
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  Understand how policy loans work
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
                  See IBC in action for business owners
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
              Ready to Build Your Family Bank?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              These projections are based on general assumptions. Let&apos;s discuss your specific situation
              and create a customized illustration for your family.
            </p>
            <a
              href="https://discovery.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Book a Free Consultation
            </a>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              No pressure. No obligation. Just an honest conversation about your legacy.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
