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

// Calculate opportunity cost analysis
const calculateOpportunityCost = (
  purchaseAmount: number,
  bankLoanRate: number,
  policyLoanRate: number,
  savingsRate: number,
  timeHorizon: number
) => {
  // Option 1: Pay Cash
  // You lose the growth on that capital
  const payCashResults = []
  let lostGrowth = purchaseAmount
  for (let year = 1; year <= timeHorizon; year++) {
    lostGrowth = lostGrowth * (1 + savingsRate / 100)
    payCashResults.push({
      year,
      balance: 0,
      totalPaid: purchaseAmount,
      lostGrowth: lostGrowth - purchaseAmount,
      trueCost: purchaseAmount + (lostGrowth - purchaseAmount),
    })
  }

  // Option 2: Bank Loan
  // Amortized loan with interest going to bank
  const monthlyBankRate = bankLoanRate / 100 / 12
  const numPayments = timeHorizon * 12
  const monthlyBankPayment = purchaseAmount * (monthlyBankRate * Math.pow(1 + monthlyBankRate, numPayments)) /
    (Math.pow(1 + monthlyBankRate, numPayments) - 1)
  const totalBankPaid = monthlyBankPayment * numPayments
  const totalBankInterest = totalBankPaid - purchaseAmount

  const bankLoanResults = []
  let bankBalance = purchaseAmount
  let bankInterestPaid = 0
  let bankPrincipalPaid = 0
  for (let year = 1; year <= timeHorizon; year++) {
    const yearlyPayments = monthlyBankPayment * 12
    const yearlyInterest = bankBalance * bankLoanRate / 100
    const yearlyPrincipal = Math.min(yearlyPayments - yearlyInterest, bankBalance)
    bankInterestPaid += yearlyInterest
    bankPrincipalPaid += yearlyPrincipal
    bankBalance = Math.max(0, bankBalance - yearlyPrincipal)
    bankLoanResults.push({
      year,
      balance: bankBalance,
      interestPaid: bankInterestPaid,
      totalPaid: bankPrincipalPaid + bankInterestPaid,
      trueCost: bankPrincipalPaid + bankInterestPaid,
    })
  }

  // Option 3: Policy Loan (IBC)
  // Loan against policy, cash value continues to grow
  const policyLoanResults = []
  let policyLoanBalance = purchaseAmount
  let policyInterestPaid = 0
  let policyCashValueGrowth = 0
  const assumedPolicyGrowth = 0.045 // 4.5% growth rate

  for (let year = 1; year <= timeHorizon; year++) {
    const yearlyInterest = policyLoanBalance * policyLoanRate / 100
    policyInterestPaid += yearlyInterest
    // Cash value continues to grow on full amount
    policyCashValueGrowth = purchaseAmount * (Math.pow(1 + assumedPolicyGrowth, year) - 1)
    policyLoanResults.push({
      year,
      loanBalance: policyLoanBalance,
      interestPaid: policyInterestPaid,
      cashValueGrowth: policyCashValueGrowth,
      netCost: policyInterestPaid - policyCashValueGrowth,
      trueCost: Math.max(0, policyInterestPaid - policyCashValueGrowth),
    })
  }

  // Summary comparison at end of period
  const payCashFinal = payCashResults[payCashResults.length - 1]
  const bankLoanFinal = bankLoanResults[bankLoanResults.length - 1]
  const policyLoanFinal = policyLoanResults[policyLoanResults.length - 1]

  return {
    payCash: {
      results: payCashResults,
      totalCost: payCashFinal.trueCost,
      lostGrowth: payCashFinal.lostGrowth,
    },
    bankLoan: {
      results: bankLoanResults,
      monthlyPayment: monthlyBankPayment,
      totalInterest: totalBankInterest,
      totalCost: totalBankPaid,
    },
    policyLoan: {
      results: policyLoanResults,
      totalInterest: policyInterestPaid,
      cashValueGrowth: policyCashValueGrowth,
      netCost: policyLoanFinal.netCost,
      trueCost: policyLoanFinal.trueCost,
    },
    winner: policyLoanFinal.trueCost < bankLoanFinal.trueCost && policyLoanFinal.trueCost < payCashFinal.trueCost
      ? 'policy'
      : bankLoanFinal.trueCost < payCashFinal.trueCost
        ? 'bank'
        : 'cash',
    savings: Math.max(payCashFinal.trueCost, bankLoanFinal.trueCost) - policyLoanFinal.trueCost,
  }
}

export default function OpportunityCostPage() {
  // Input state
  const [purchaseAmount, setPurchaseAmount] = useState(50000)
  const [bankLoanRate, setBankLoanRate] = useState(7.9)
  const [policyLoanRate, setPolicyLoanRate] = useState(5.0)
  const [savingsRate, setSavingsRate] = useState(6.0)
  const [timeHorizon, setTimeHorizon] = useState(5)

  // Calculate results
  const results = useMemo(() => {
    return calculateOpportunityCost(purchaseAmount, bankLoanRate, policyLoanRate, savingsRate, timeHorizon)
  }, [purchaseAmount, bankLoanRate, policyLoanRate, savingsRate, timeHorizon])

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
              Opportunity Cost Calculator
            </h1>
            <p className="text-lg text-cream/80 max-w-2xl">
              Compare three ways to finance a purchase: paying cash, taking a bank loan,
              or using your policy as collateral. See the true cost of each option.
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
                  Your Purchase Details
                </h2>

                {/* Purchase Amount */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Purchase Amount
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="10000"
                      max="500000"
                      step="5000"
                      value={purchaseAmount}
                      onChange={(e) => setPurchaseAmount(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-32 text-right">
                      {formatCurrency(purchaseAmount)}
                    </span>
                  </div>
                  <p className="text-sm text-navy/50 mt-2">
                    Equipment, vehicle, inventory, real estate down payment
                  </p>
                </div>

                {/* Time Horizon */}
                <div className="mb-8">
                  <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                    Time Horizon
                  </label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="3"
                      max="10"
                      step="1"
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(Number(e.target.value))}
                      className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                    />
                    <span className="font-mono text-xl font-bold text-gold w-20 text-right">
                      {timeHorizon} yrs
                    </span>
                  </div>
                </div>

                {/* Rate Assumptions */}
                <div className="border-t border-navy/10 pt-6 mt-6">
                  <h3 className="font-heading text-lg font-bold text-navy mb-4">
                    Rate Assumptions
                  </h3>

                  {/* Bank Loan Rate */}
                  <div className="mb-6">
                    <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                      Bank Loan Rate
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="5"
                        max="15"
                        step="0.1"
                        value={bankLoanRate}
                        onChange={(e) => setBankLoanRate(Number(e.target.value))}
                        className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                      />
                      <span className="font-mono text-lg font-bold text-navy w-20 text-right">
                        {bankLoanRate.toFixed(1)}%
                      </span>
                    </div>
                  </div>

                  {/* Policy Loan Rate */}
                  <div className="mb-6">
                    <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                      Policy Loan Rate
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="4"
                        max="8"
                        step="0.1"
                        value={policyLoanRate}
                        onChange={(e) => setPolicyLoanRate(Number(e.target.value))}
                        className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                      />
                      <span className="font-mono text-lg font-bold text-gold w-20 text-right">
                        {policyLoanRate.toFixed(1)}%
                      </span>
                    </div>
                    <p className="text-xs text-navy/50 mt-1">
                      Typical range: 4-6% for mutual company policies
                    </p>
                  </div>

                  {/* Your Savings/Investment Rate */}
                  <div className="mb-6">
                    <label className="block font-mono text-xs uppercase tracking-wider text-navy/60 mb-2">
                      Your Investment Return Rate
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min="3"
                        max="12"
                        step="0.5"
                        value={savingsRate}
                        onChange={(e) => setSavingsRate(Number(e.target.value))}
                        className="flex-1 h-2 bg-navy/10 appearance-none cursor-pointer accent-gold"
                      />
                      <span className="font-mono text-lg font-bold text-navy w-20 text-right">
                        {savingsRate.toFixed(1)}%
                      </span>
                    </div>
                    <p className="text-xs text-navy/50 mt-1">
                      Return you&apos;d get if cash stayed invested
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Panel */}
              <div className="border-2 border-gold p-6 md:p-8 bg-gold/5">
                <h2 className="font-heading text-2xl font-bold text-navy mb-2">
                  The True Cost Comparison
                </h2>
                <p className="text-navy/60 mb-8">
                  After {timeHorizon} years, here&apos;s what each option really costs
                </p>

                {/* Three Options Comparison */}
                <div className="space-y-6">
                  {/* Option 1: Pay Cash */}
                  <div className={`p-4 border-2 ${results.winner === 'cash' ? 'border-gold bg-gold/10' : 'border-navy/10'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-navy">Option 1: Pay Cash</h3>
                        <p className="text-sm text-navy/60">Use your savings directly</p>
                      </div>
                      {results.winner === 'cash' && (
                        <span className="font-mono text-xs uppercase tracking-wider bg-gold text-navy px-2 py-1">
                          Best Option
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <span className="text-xs text-navy/50 block">Amount Spent</span>
                        <span className="font-mono font-bold text-navy">{formatCurrency(purchaseAmount)}</span>
                      </div>
                      <div>
                        <span className="text-xs text-navy/50 block">Lost Growth</span>
                        <span className="font-mono font-bold text-red-600">{formatCurrency(results.payCash.lostGrowth)}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-navy/10">
                      <span className="text-xs text-navy/50 block">True Cost</span>
                      <span className="font-mono text-2xl font-bold text-navy">{formatCurrency(results.payCash.totalCost)}</span>
                    </div>
                  </div>

                  {/* Option 2: Bank Loan */}
                  <div className={`p-4 border-2 ${results.winner === 'bank' ? 'border-gold bg-gold/10' : 'border-navy/10'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-navy">Option 2: Bank Loan</h3>
                        <p className="text-sm text-navy/60">Traditional financing @ {bankLoanRate}%</p>
                      </div>
                      {results.winner === 'bank' && (
                        <span className="font-mono text-xs uppercase tracking-wider bg-gold text-navy px-2 py-1">
                          Best Option
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <span className="text-xs text-navy/50 block">Monthly Payment</span>
                        <span className="font-mono font-bold text-navy">{formatCurrency(results.bankLoan.monthlyPayment)}</span>
                      </div>
                      <div>
                        <span className="text-xs text-navy/50 block">Total Interest</span>
                        <span className="font-mono font-bold text-red-600">{formatCurrency(results.bankLoan.totalInterest)}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-navy/10">
                      <span className="text-xs text-navy/50 block">True Cost</span>
                      <span className="font-mono text-2xl font-bold text-navy">{formatCurrency(results.bankLoan.totalCost)}</span>
                    </div>
                  </div>

                  {/* Option 3: Policy Loan */}
                  <div className={`p-4 border-2 ${results.winner === 'policy' ? 'border-gold bg-gold/10' : 'border-navy/10'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-heading font-bold text-navy">Option 3: Policy Loan (IBC)</h3>
                        <p className="text-sm text-navy/60">Borrow against your policy @ {policyLoanRate}%</p>
                      </div>
                      {results.winner === 'policy' && (
                        <span className="font-mono text-xs uppercase tracking-wider bg-gold text-navy px-2 py-1">
                          Best Option
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <span className="text-xs text-navy/50 block">Interest Paid</span>
                        <span className="font-mono font-bold text-navy">{formatCurrency(results.policyLoan.totalInterest)}</span>
                      </div>
                      <div>
                        <span className="text-xs text-navy/50 block">Cash Value Growth</span>
                        <span className="font-mono font-bold text-green-600">+{formatCurrency(results.policyLoan.cashValueGrowth)}</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-navy/10">
                      <span className="text-xs text-navy/50 block">Net Cost</span>
                      <span className="font-mono text-2xl font-bold text-gold">
                        {results.policyLoan.netCost < 0
                          ? `+${formatCurrency(Math.abs(results.policyLoan.netCost))}`
                          : formatCurrency(results.policyLoan.netCost)
                        }
                      </span>
                      {results.policyLoan.netCost < 0 && (
                        <p className="text-xs text-green-600 mt-1">
                          You actually come out ahead!
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                {results.savings > 0 && (
                  <div className="mt-8 bg-navy text-cream p-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-gold block mb-2">
                      Your Potential Savings with IBC
                    </span>
                    <span className="font-mono text-3xl font-bold text-gold">
                      {formatCurrency(results.savings)}
                    </span>
                    <p className="text-sm text-cream/60 mt-1">
                      vs. the most expensive alternative
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Revelation Section */}
      <section className="py-12 md:py-16 bg-navy text-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              The Truth About &ldquo;Paying Cash&rdquo;
            </h2>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-8">
              Most people think paying cash is &ldquo;free.&rdquo; But when you spend cash,
              you lose everything that money could have earned. You&apos;re financing
              the purchase—you just don&apos;t see the cost.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="border border-cream/20 p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gold">The Myth</span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-2">&ldquo;Cash is King&rdquo;</h3>
                <p className="text-cream/60 text-sm">
                  Spending cash feels free because there&apos;s no monthly payment.
                </p>
              </div>
              <div className="border border-cream/20 p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gold">The Reality</span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-2">Lost Opportunity</h3>
                <p className="text-cream/60 text-sm">
                  Every dollar spent is a dollar not earning returns elsewhere.
                </p>
              </div>
              <div className="border border-cream/20 p-6">
                <span className="font-mono text-xs uppercase tracking-wider text-gold">The Solution</span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-2">Keep & Borrow</h3>
                <p className="text-cream/60 text-sm">
                  Use your capital as collateral while it continues growing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
              How Policy Loans Change the Equation
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Your Cash Value Keeps Growing
                </h3>
                <p className="text-navy/70">
                  Unlike bank accounts where withdrawals stop earning interest, your whole life
                  cash value continues growing even when you have a loan against it. The insurance
                  company loans you their money using your cash value as collateral.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  You Control the Repayment
                </h3>
                <p className="text-navy/70">
                  Bank loans have fixed payment schedules. Policy loans let you set your own
                  repayment terms. Pay it back quickly, slowly, or use dividends to reduce
                  the balance over time.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  Tax-Advantaged Access
                </h3>
                <p className="text-navy/70">
                  Policy loans aren&apos;t taxable events because you&apos;re borrowing, not withdrawing.
                  Your cash value growth is tax-deferred, and loans don&apos;t trigger capital gains
                  like selling investments would.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 border-2 border-navy/20 bg-cream">
              <p className="font-mono text-sm italic text-navy/70">
                &ldquo;Don&apos;t steal from yourself by spending cash without calculating the true cost.&rdquo;
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-gold mt-2">
                Nelson Nash, Becoming Your Own Banker
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
              Dig Deeper
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
                  See cumulative cost of bank dependency
                </p>
              </Link>

              <Link
                href="/learn/foundations/the-banking-problem"
                className="border-2 border-navy/20 bg-cream p-6 hover:border-gold transition-colors group"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Lesson
                </span>
                <h3 className="font-heading text-lg font-bold text-navy mt-2 group-hover:text-gold transition-colors">
                  The Banking Problem
                </h3>
                <p className="text-sm text-navy/60 mt-2">
                  Understand how banks profit from you
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
              Ready to Stop Losing Opportunity?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              This calculator shows the concept. Let&apos;s discuss how IBC could work
              for your specific business purchases and financing needs.
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
