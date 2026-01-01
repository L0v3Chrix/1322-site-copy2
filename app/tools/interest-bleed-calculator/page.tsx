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

// Calculate results based on inputs
const calculateResults = (
  annualFinancing: number,
  interestRate: number,
  loanTermYears: number,
  cyclesPerDecade: number
) => {
  const monthlyRate = interestRate / 100 / 12
  const numPayments = loanTermYears * 12

  // Calculate monthly payment using amortization formula
  const monthlyPayment = annualFinancing * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)

  // Total paid over loan term
  const totalPaid = monthlyPayment * numPayments
  const interestPerCycle = totalPaid - annualFinancing

  // Calculate for different time horizons
  const years = [5, 10, 20, 30]
  const projections = years.map(year => {
    const cyclesInPeriod = (year / 10) * cyclesPerDecade
    const totalInterestPaid = interestPerCycle * cyclesInPeriod

    // Opportunity cost: What if you invested that interest instead?
    // Assume 6% annual return on invested capital
    const opportunityReturn = 0.06
    let opportunityCost = 0

    for (let i = 0; i < cyclesInPeriod; i++) {
      const yearsRemaining = year - (i * (10 / cyclesPerDecade))
      opportunityCost += interestPerCycle * Math.pow(1 + opportunityReturn, yearsRemaining)
    }

    return {
      year,
      interestPaid: totalInterestPaid,
      opportunityCost: opportunityCost - totalInterestPaid,
      totalBleed: opportunityCost,
    }
  })

  return {
    monthlyPayment,
    interestPerCycle,
    projections,
  }
}

export default function InterestBleedCalculatorPage() {
  // Input state
  const [annualFinancing, setAnnualFinancing] = useState(80000)
  const [interestRate, setInterestRate] = useState(7.9)
  const [loanTermYears, setLoanTermYears] = useState(5)
  const [cyclesPerDecade, setCyclesPerDecade] = useState(2)

  // Calculate results
  const results = useMemo(() => {
    return calculateResults(annualFinancing, interestRate, loanTermYears, cyclesPerDecade)
  }, [annualFinancing, interestRate, loanTermYears, cyclesPerDecade])

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
              Interest Bleed Calculator
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              See exactly how much external financing costs you over time,
              including the opportunity cost of capital that could have stayed in your business.
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
                  Your Financing Details
                </h2>

                {/* Annual Financing Amount */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Annual Financing Amount
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="5000"
                      value={annualFinancing}
                      onChange={(e) => setAnnualFinancing(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-32 text-right">
                      {formatCurrency(annualFinancing)}
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    Equipment, vehicles, inventory, etc.
                  </p>
                </div>

                {/* Interest Rate */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Interest Rate
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {interestRate.toFixed(1)}%
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    Bank loan or equipment financing rate
                  </p>
                </div>

                {/* Loan Term */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Loan Term (Years)
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {loanTermYears} yr
                    </span>
                  </div>
                </div>

                {/* Financing Cycles */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Financing Cycles per Decade
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      step="1"
                      value={cyclesPerDecade}
                      onChange={(e) => setCyclesPerDecade(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {cyclesPerDecade}x
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    How often do you replace equipment/inventory?
                  </p>
                </div>

                {/* Monthly Payment Info */}
                <div className="border-t border-navy/10 pt-6 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm uppercase tracking-wider text-navy/60">
                      Monthly Payment
                    </span>
                    <span className="font-mono text-xl font-bold text-navy">
                      {formatCurrency(results.monthlyPayment)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="font-mono text-sm uppercase tracking-wider text-navy/60">
                      Interest per Cycle
                    </span>
                    <span className="font-mono text-xl font-bold text-red-600">
                      {formatCurrency(results.interestPerCycle)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="border-2 border-gold p-6 md:p-8 bg-gold/5">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                  Your Interest Bleed
                </h2>
                <p className="text-navy/60 mb-8">
                  The true cost of external financing over time
                </p>

                {/* Main Result */}
                <div className="mb-8">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    20-Year Total Bleed
                  </span>
                  <span className="block font-mono text-5xl md:text-6xl font-bold text-red-600">
                    {formatCurrency(results.projections[2].totalBleed)}
                  </span>
                  <p className="text-sm text-navy/60 mt-2">
                    Interest paid + opportunity cost
                  </p>
                </div>

                {/* Projections Table */}
                <div className="border-t border-navy/20 pt-6">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left">
                        <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3">Year</th>
                        <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3 text-right">Interest Paid</th>
                        <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3 text-right">Opp. Cost</th>
                        <th className="font-mono text-xs uppercase tracking-wider text-navy/60 pb-3 text-right">Total Bleed</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.projections.map((proj, index) => (
                        <tr key={proj.year} className="border-t border-navy/10">
                          <td className="py-3 font-mono font-bold text-navy">{proj.year}</td>
                          <td className="py-3 font-mono text-right text-navy/70">
                            {formatCurrency(proj.interestPaid)}
                          </td>
                          <td className="py-3 font-mono text-right text-navy/70">
                            {formatCurrency(proj.opportunityCost)}
                          </td>
                          <td className="py-3 font-mono text-right font-bold text-red-600">
                            {formatCurrency(proj.totalBleed)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Visual Bar */}
                <div className="mt-8 pt-6 border-t border-navy/20">
                  <span className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-4">
                    Where Your Money Goes
                  </span>
                  <div className="h-8 flex">
                    <div
                      className="bg-red-500 flex items-center justify-center text-white text-xs font-mono"
                      style={{ width: '60%' }}
                    >
                      Banks
                    </div>
                    <div
                      className="bg-navy/20 flex items-center justify-center text-navy text-xs font-mono"
                      style={{ width: '40%' }}
                    >
                      Lost Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Context */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              What Does This Mean?
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Interest Paid
                </h3>
                <p className="text-navy/70">
                  This is the direct cost you pay to banks and financing companies.
                  It&apos;s money that leaves your business and never comes back.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Opportunity Cost
                </h3>
                <p className="text-navy/70">
                  If that interest money had stayed in your business earning returns,
                  it would have compounded over time. This represents lost growth.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  The Alternative
                </h3>
                <p className="text-navy/70">
                  With a properly designed whole life policy, you could finance
                  these same purchases through your own &ldquo;family bank&rdquo; &mdash; keeping
                  the interest payments within your control and building wealth instead.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 border-2 border-navy/20 bg-cream">
              <p className="font-mono text-sm italic text-navy/70">
                &ldquo;The rich rule over the poor, and the borrower is slave to the lender.&rdquo;
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-gold mt-2">
                Proverbs 22:7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">
              Learn More
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/learn/foundations"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Next Step
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Foundations Track
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  Understand how IBC solves the banking problem
                </p>
              </Link>

              <Link
                href="/case-studies/mikes-hvac"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Real Example
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Mike&apos;s HVAC Story
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  See how one business owner stopped the bleed
                </p>
              </Link>

              <Link
                href="/tools/family-bank-projector"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Calculator
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  Family Bank Projector
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  Project your family bank growth potential
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
              Want a Personalized Analysis?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              This calculator provides general estimates. Your specific situation
              may have additional factors to consider.
            </p>
            <a
              href="https://www.skool.com/ibc-academy-5448"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
            >
              Book a Free Consultation
            </a>
            <p className="text-sm text-navy/50 mt-6 font-mono">
              No pressure. No obligation. Just an honest conversation.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
