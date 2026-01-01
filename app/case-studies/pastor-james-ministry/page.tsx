import Link from "next/link"
import type { Metadata } from "next"
import CaseStudyDisclaimer from "@/components/case-study-disclaimer"

export const metadata: Metadata = {
  title: "Pastor James's Ministry Story | Case Studies | 1322 Legacy Strategies",
  description: "How a rural Tennessee church funded their building expansion without traditional debt by implementing family banking principles among key leaders.",
}

export default function PastorJamesMinistryStudy() {
  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy text-cream py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/case-studies"
                className="font-mono text-xs uppercase tracking-wider text-gold hover:text-cream transition-colors"
              >
                ← Back to Case Studies
              </Link>
            </div>

            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                Non-Profit/Ministry
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                $600K Budget
              </span>
              <span className="font-mono text-xs uppercase tracking-wider bg-cream/10 px-3 py-1 text-cream/80">
                Building Fund
              </span>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              How a Rural Church Funded Their $800K Expansion Without Traditional Debt
            </h1>

            <p className="text-lg text-cream/80 max-w-2xl">
              When key church leaders implemented personal family banking systems, they discovered
              a way to fund ministry growth while building personal wealth—a true stewardship model.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="border-b-2 border-navy/10 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$800K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Building Cost
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">$180K</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Bank Interest Avoided
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">12</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Members with Policies
                </span>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="block font-mono text-3xl font-bold text-gold">4.5%</span>
                <span className="block font-mono text-xs uppercase tracking-wider text-navy/50">
                  Guaranteed Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Disclaimer */}
            <CaseStudyDisclaimer />

            {/* The Situation */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Situation
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                Pastor James leads a non-denominational church in rural Tennessee with a congregation
                of about 450 families. After a decade of growth, their 15-year-old building was no
                longer adequate. The vision: a $800,000 expansion including a new fellowship hall,
                expanded children&apos;s wing, and additional parking.
              </p>
              <p className="text-navy/80 leading-relaxed mb-6">
                The church had saved $200,000 in their building fund over several years. Traditional
                church construction loans would cover the remaining $600,000—but at a cost. Commercial
                church loans typically run 6-8% interest with 15-25 year terms.
              </p>
              <p className="text-navy/80 leading-relaxed">
                &ldquo;We ran the numbers,&rdquo; Pastor James explained. &ldquo;A $600,000 loan at 7%
                over 20 years would cost us nearly $180,000 in interest. That&apos;s money that could
                fund missions, help families in need, support our youth programs. I kept asking:
                is there a better way?&rdquo;
              </p>
            </div>

            {/* The Discovery */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Discovery
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                A deacon introduced Pastor James to the Infinite Banking Concept. The more he studied,
                the more he saw it through a stewardship lens—not just for the church, but for families
                within the congregation.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;I realized we&apos;d been teaching our congregation to be good stewards,
                  but we were still sending hundreds of thousands of dollars to banks. The banks
                  were profiting from our ministry growth. That didn&apos;t sit right.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Pastor James</p>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                Rather than have the church purchase a policy (which presents complex legal and
                governance issues), Pastor James proposed something different: educate key church
                leaders about family banking, help them implement personal policies, and then
                allow them to voluntarily loan funds to the church from their personal systems.
              </p>
            </div>

            {/* The Implementation */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Implementation
              </h2>

              <div className="bg-navy/5 border-2 border-navy/10 p-6 mb-8">
                <h4 className="font-heading font-bold text-navy mb-4">The Stewardship Banking Model</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 1: Education First</span>
                    <p className="text-navy/70 text-sm">
                      12 church leaders completed IBC education over 6 months through our Academy.
                      Each family understood the concept before making any decisions.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 2: Personal Policy Implementation</span>
                    <p className="text-navy/70 text-sm">
                      Each family designed policies based on their personal financial capacity—
                      ranging from $12,000 to $36,000 in annual premiums.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 3: Voluntary Church Loans</span>
                    <p className="text-navy/70 text-sm">
                      As policies built cash value, families chose to take policy loans and
                      re-loan those funds to the church at 5% interest—lower than bank rates.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold pl-4">
                    <span className="font-heading font-bold text-navy block">Step 4: Win-Win Structure</span>
                    <p className="text-navy/70 text-sm">
                      Families earn 5% on their loans while their policy cash value continues
                      growing. Church pays less than bank rates. Everyone benefits.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                Over two years, the 12 families built combined cash value exceeding $400,000.
                They voluntarily loaned $350,000 to the church, supplementing the $200,000 building
                fund and allowing the church to take a much smaller bank loan for the remainder.
              </p>
            </div>

            {/* Before/After Comparison */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                Traditional vs. Stewardship Model
              </h2>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="border-2 border-navy/20 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-navy/10">
                    Traditional Approach
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Full Bank Financing</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">$600,000 church loan at 7%</span>
                        <p className="text-sm text-navy/60">20-year commercial term</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">$180,000 in interest to bank</span>
                        <p className="text-sm text-navy/60">Over the life of the loan</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 text-lg">✗</span>
                      <div>
                        <span className="font-bold text-navy">Money leaves the community</span>
                        <p className="text-sm text-navy/60">Interest benefits bank shareholders</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="border-2 border-gold bg-gold/5 p-6">
                  <h3 className="font-heading font-bold text-navy mb-4 pb-3 border-b border-gold/30">
                    Stewardship Model
                    <br />
                    <span className="text-sm text-navy/50 font-mono">Family Banking Approach</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">$250,000 bank loan at 7%</span>
                        <p className="text-sm text-navy/60">Smaller principal, less interest</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">$350,000 from member policies at 5%</span>
                        <p className="text-sm text-navy/60">Interest stays in the church family</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 text-lg">✓</span>
                      <div>
                        <span className="font-bold text-navy">12 families building wealth</span>
                        <p className="text-sm text-navy/60">Policy values continue growing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Results */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Results: 4 Years Later
              </h2>

              {/* Timeline */}
              <div className="space-y-8 mb-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y1
                    </div>
                    <div className="w-[2px] bg-gold/30 flex-1 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-bold text-navy mb-2">Year One: Education and Foundation</h4>
                    <p className="text-navy/70">
                      12 key families completed IBC education. Each designed policies based on their
                      personal situations. Combined first-year premiums: $216,000. Building fund
                      continued growing through traditional giving.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y2
                    </div>
                    <div className="w-[2px] bg-gold/30 flex-1 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-bold text-navy mb-2">Year Two: Breaking Ground</h4>
                    <p className="text-navy/70">
                      Combined policy cash value exceeded $400,000. Families voluntarily loaned $350,000
                      to church at 5%. Construction began with $200K savings + $350K family loans +
                      $250K bank loan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y3
                    </div>
                    <div className="w-[2px] bg-gold/30 flex-1 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h4 className="font-heading font-bold text-navy mb-2">Year Three: Building Complete</h4>
                    <p className="text-navy/70">
                      New facility opened. Church began repaying family loans at 5%. Families received
                      interest payments while their policy cash values continued growing. The difference
                      between paying 7% and receiving 5% meant real returns for members.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gold text-navy flex items-center justify-center font-mono font-bold">
                      Y4
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-navy mb-2">Year Four: Growing Together</h4>
                    <p className="text-navy/70">
                      Four more families started policies after seeing the model work. Combined
                      family cash value now exceeds $650,000. Three families have already used
                      their policies for personal needs (college, vehicles) while maintaining
                      church loans.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Summary */}
              <div className="bg-navy text-cream p-8">
                <h4 className="font-heading text-xl font-bold text-gold mb-6">
                  4-Year Summary: Ministry Stewardship Model
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$650,000+</span>
                    <span className="block text-cream/70">Combined Family Cash Value</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">$105,000</span>
                    <span className="block text-cream/70">Interest Savings vs. Full Bank Loan</span>
                  </div>
                  <div>
                    <span className="block font-mono text-3xl font-bold text-gold">16 Families</span>
                    <span className="block text-cream/70">Now Building Wealth</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Bigger Picture */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                The Bigger Picture: True Stewardship
              </h2>
              <p className="text-navy/80 leading-relaxed mb-6">
                For Pastor James, this project was never just about saving interest. It was about
                teaching a biblical model of stewardship and wealth-building to his congregation.
              </p>

              <div className="border-2 border-navy/20 p-6 mb-8">
                <p className="font-mono text-sm italic text-navy/70">
                  &ldquo;The rich rule over the poor, and the borrower is slave to the lender.&rdquo;
                </p>
                <p className="font-mono text-xs uppercase tracking-wider text-gold mt-2">
                  Proverbs 22:7
                </p>
              </div>

              <p className="text-navy/80 leading-relaxed mb-6">
                Today, 16 families in the congregation are building family banking systems. They&apos;re
                not just helping fund church growth—they&apos;re breaking free from consumer debt,
                funding their children&apos;s education, and building multi-generational wealth.
              </p>

              <div className="border-l-4 border-gold pl-6 my-8 py-2 bg-gold/5">
                <p className="text-navy italic font-heading text-lg mb-2">
                  &ldquo;We used to preach against debt but had no alternative to offer. Now we can
                  show families a biblical model of building wealth, controlling their finances,
                  and becoming lenders rather than borrowers. The building was just the beginning.&rdquo;
                </p>
                <p className="text-navy/60 font-mono text-sm">— Pastor James</p>
              </div>
            </div>

            {/* Key Lessons */}
            <div className="mb-16">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-6">
                Key Lessons from This Model
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Education Must Come First</h4>
                  <p className="text-navy/70">
                    Every family completed thorough education before participating. No one was
                    pressured or rushed. Understanding creates commitment.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Personal Policies, Voluntary Participation</h4>
                  <p className="text-navy/70">
                    The church didn&apos;t purchase a policy. Individual families made personal decisions
                    that benefited them directly. Church loans were entirely voluntary.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">Win-Win Structures Work</h4>
                  <p className="text-navy/70">
                    Families earn returns on their loans while building personal wealth. The church
                    pays lower rates and keeps interest within the community. Everyone benefits.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6">
                  <h4 className="font-heading font-bold text-navy mb-2">The Model Spreads Naturally</h4>
                  <p className="text-navy/70">
                    When families saw results, others wanted to learn. The education became a ministry
                    of financial discipleship that continues growing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-navy/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
              Could This Model Work for Your Organization?
            </h2>
            <p className="text-navy/70 mb-8 max-w-xl mx-auto">
              Whether you&apos;re a church, non-profit, or family considering IBC, education
              is the first step. Explore our free resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/learn/foundations"
                className="inline-block bg-gold text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Start the Foundations Track
              </Link>
              <a
                href="https://www.skool.com/ibc-academy-5448"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-navy text-navy px-8 py-3 font-heading font-bold uppercase tracking-wider hover:bg-navy hover:text-cream transition-colors"
              >
                Join Free Academy
              </a>
            </div>

            <p className="text-sm text-navy/50 font-mono">
              No pressure. No obligation. Just education.
            </p>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-navy mb-8">
              More Case Studies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/case-studies/mikes-hvac"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    HVAC Services
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    $750K Revenue
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Mike&apos;s Fleet Financing System
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How Mike stopped paying banks $32K/year and started building family wealth.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Read Story →
                </span>
              </Link>

              <Link
                href="/case-studies/davids-real-estate"
                className="border-2 border-navy/20 p-6 hover:border-gold transition-colors group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    Real Estate
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider bg-navy/5 px-2 py-1 text-navy/60">
                    $1.2M Revenue
                  </span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  David&apos;s Bridge Financing System
                </h3>
                <p className="text-sm text-navy/60 mb-3">
                  How David eliminated hard money costs and built his own capital source.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold">
                  Read Story →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
