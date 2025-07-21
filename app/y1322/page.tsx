import type { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import { BadgeCheck, ShieldIcon as ShieldDollar, BookOpen, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Y1322 | 1322 Legacy Strategies",
  description:
    "The deep-dive on who we are, what we do, and why analytical retirees trust us with multi-generational capital.",
}

export default function Y1322() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-24 sm:py-32 space-y-24 bg-cream text-navy">
      {/* 1. Fast Facts */}
      <section id="fast-facts" className="space-y-6">
        <h1 className="text-4xl font-extrabold">1322 Legacy Strategies</h1>
        <p className="text-lg text-muted-foreground">
          Holistic tax-savvy estate & retirement design for the 60–75 bracket
        </p>
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          <aside className="bg-muted/40 rounded-2xl p-6 space-y-4">
            <h2 className="text-xl font-semibold">Fast Facts</h2>
            <Separator />
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <strong>Name / Role:</strong> Brad Raschke, Founder & Lead Strategist
              </li>
              <li>
                <strong>Degrees:</strong> B.A. U.S. History — Howard Payne University (2012)
              </li>
              <li>
                <strong>Designations:</strong> Authorized Infinite Banking Practitioner · 10 + yrs fiduciary-style
                planning
              </li>
              <li>
                <strong>Client Window:</strong> Pre-retirees & retirees age 60 – 75
              </li>
              <li>
                <strong>Guiding Philosophy:</strong> Austrian economics · Biblical stewardship (Prov 13:22)
              </li>
              <li>
                <strong>Flagship Outcome:</strong> Cut lifetime taxes, lock in predictable cash-flow, pass assets—
                <em>not headaches</em>—to heirs
              </li>
            </ul>
          </aside>
          {/* Credibility Narrative */}
          <article className="space-y-4">
            <h2 className="sr-only">Credibility Narrative</h2>
            <p>
              Retirement’s first day can feel like stepping onto a high wire with no net. After decades of diligent
              saving, the game shifts from <em>accumulation</em> to
              <em>distribution without erosion</em>—a transition few are coached to win.
            </p>
            <p>
              Brad Raschke serves as a financial architect for families in that “red-zone” decade. Rooted in
              Austrian-economics skepticism of inflation and guided by Proverbs 13:22, Brad blends tax mapping, trust
              architecture, and private liquidity tools (Infinite Banking is
              <em>one</em> of several) to build legacies that are durable, contractually certain, and values-aligned.
            </p>
            <p>
              The result? A retirement plan that resists market whiplash, silent tax hikes, and sequence-of-returns
              risk—freeing families to focus on passing on <strong>values</strong>, not just valuables.
            </p>
          </article>
        </div>
      </section>
      {/* 2. Who We Serve */}
      <section id="fit" className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Users className="w-6 h-6" /> Are We a Fit?
        </h2>
        <p>We’re built for detail-oriented households who:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Have $500k – $10 M across IRAs, 401(k)s, brokerage, and real estate</li>
          <li>Will begin—or have begun—Required Minimum Distributions within 10 yrs</li>
          <li>Value biblical stewardship & multi-generational impact over flashy speculation</li>
          <li>Prefer a single “general contractor” who quarterbacks CPAs, attorneys, and investment managers</li>
        </ul>
      </section>
      {/* 3. Our 3-Phase Planning Framework */}
      <section id="process" className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BadgeCheck className="w-6 h-6" /> Our 3-Phase Method
        </h2>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Tax Mapping & Cash-Flow Design</strong>
            <br />
            Run multi-year Roth-conversion scenarios, Social Security timing, and pension vs annuity trade-offs to
            minimize lifetime tax drag.
          </li>
          <li>
            <strong>Estate & Risk Architecture</strong>
            <br />
            Coordinate revocable / irrevocable trusts, beneficiary forms, and long-term-care hedges; ensure assets
            bypass probate & family conflict.
          </li>
          <li>
            <strong>Liquidity Engineering</strong>
            <br />
            Establish contract-based cash-value lines or structured credit so big purchases (roof replacements, business
            buyouts) never force a down-market asset sale.
          </li>
        </ol>
      </section>
      {/* 4. Impact Metrics */}
      <section id="impact" className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <ShieldDollar className="w-6 h-6" /> Impact Metrics
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-2 text-left">Area</th>
                <th className="py-3 px-2 text-left">Typical Result</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-2 font-medium">Tax Drag Reduction</td>
                <td className="py-3 px-2">5- to 7-figure lifetime savings via Roth ladders & charitable trusts</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-2 font-medium">Income Certainty</td>
                <td className="py-3 px-2">
                  Layered risk-pooling covers “paycheck” needs before discretionary “playchecks”
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-2 font-medium">Estate Clarity</td>
                <td className="py-3 px-2">Court-tested trusts + beneficiary sync = zero guesswork for heirs</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-medium">Liquidity on Demand</td>
                <td className="py-3 px-2">Policy loans / credit lines fund major costs without taxable asset sales</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* 5. Case Studies */}
      <section id="stories" className="space-y-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BookOpen className="w-6 h-6" /> Representative Client Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "The Sequence-Proof Couple",
              body: "Age 67 & 65, $2.1 M in IRAs/401(k)s ➜ Tax-map + partial Roth ladder cut projected RMD taxes by $408k; joint-life income annuity delayed both Social Security benefits to age 70.",
            },
            {
              title: "The Blended-Family Trust Fix",
              body: "Widow (72) remarried ➜ Testamentary CRT + ILIT balanced income for new husband & tax-free lump sums for children—court-tested and contest-proof.",
            },
            {
              title: "The Business-Exit Safety Valve",
              body: "Owner (64) selling HVAC firm for $4 M ➜ Installment sale + CRT + IBC pool erased cap-gains shock and funded a self-insured LTC plan.",
            },
          ].map(({ title, body }) => (
            <Card key={title} className="bg-white">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-relaxed">{body}</CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* 6. Fees & Engagement Options */}
      <section id="fees" className="space-y-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <ShieldDollar className="w-6 h-6" /> Transparent Fees
        </h2>
        <p className="text-xl text-muted-foreground text-center">Complementary. Our gift to your family.</p>
      </section>
      {/* 7. Vision & Stewardship */}
      <section id="vision" className="space-y-6">
        <h2 className="text-2xl font-semibold">Vision & Stewardship</h2>
        <p>
          Brad’s grandfather quietly funded nine grandchildren’s college educations through strategically designed
          life-insurance policies. The lesson was simple: contractual cash beats speculative flash. Today Brad teaches
          families the quiet power of a well-stewarded inheritance.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Launch an <em>AI-indexed knowledge vault</em> so clients get plain-English answers in seconds
          </li>
          <li>Mentor five next-gen advisors in stewardship-based planning</li>
          <li>Facilitate $100 M + in tax-efficient charitable gifts over the next five years</li>
        </ul>
      </section>
      {/* 8. Next Steps */}
      <section id="cta" className="space-y-6 flex flex-col items-center text-center">
        <h2 className="text-2xl font-semibold">Ready to Stress-Test Your Retirement?</h2>
        <p className="max-w-2xl">
          Schedule a complimentary discovery call below. We’ll know within 15 minutes whether we’re the right steward
          for your capital.
        </p>
        <a
          href="https://discovery.1322legacystrategies.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold/90 text-navy px-8 py-3 rounded-md font-semibold transition"
        >
          Book My Discovery Call
        </a>
      </section>
    </main>
  )
}
