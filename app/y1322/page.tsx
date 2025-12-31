import type { Metadata } from "next"
import OptimizedImage from "@/components/optimized-image"

export const metadata: Metadata = {
  title: "Y1322 | 1322 Legacy Strategies",
  description:
    "The deep-dive on who we are, what we do, and why Christian entrepreneurs trust us to build family banking systems through IBC.",
}

export default function Y1322() {
  return (
    <main className="bg-cream text-navy">
      {/* Hero Section */}
      <section className="relative bg-navy text-cream py-24 border-b border-navy">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
            1322 Legacy Strategies
          </h1>
          <p className="text-2xl md:text-3xl text-cream/90 font-heading">
            Build Your Family Bank. Fund Your Business. Secure Your Legacy.
          </p>
        </div>
      </section>

      {/* Fast Facts + Credibility Narrative */}
      <section id="fast-facts" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-[320px_1fr] gap-12">
            {/* Fast Facts Sidebar */}
            <aside className="border-2 border-navy/20 p-8">
              <h2 className="text-xl font-heading font-bold text-navy mb-6 pb-4 border-b border-navy/20">
                Fast Facts
              </h2>
              <ul className="space-y-6 text-sm leading-relaxed">
                <li>
                  <p className="font-mono text-xs uppercase tracking-wide text-navy/60 mb-1">Name / Role</p>
                  <p className="text-navy/90">Brad Raschke, Founder & IBC Strategist</p>
                </li>
                <li>
                  <p className="font-mono text-xs uppercase tracking-wide text-navy/60 mb-1">Degrees</p>
                  <p className="text-navy/90">B.A. U.S. History — Howard Payne University (2012)</p>
                </li>
                <li>
                  <p className="font-mono text-xs uppercase tracking-wide text-navy/60 mb-1">Designations</p>
                  <p className="text-navy/90">Authorized Infinite Banking Practitioner · 10+ yrs IBC implementation</p>
                </li>
                <li>
                  <p className="font-mono text-xs uppercase tracking-wide text-navy/60 mb-1">Client Window</p>
                  <p className="text-navy/90">Christian entrepreneurs ages 30–50 | $250K-$5M annual revenue</p>
                </li>
                <li>
                  <p className="font-mono text-xs uppercase tracking-wide text-navy/60 mb-1">Guiding Philosophy</p>
                  <p className="text-navy/90">Austrian economics · Biblical stewardship (Prov 13:22) · Capital control</p>
                </li>
                <li>
                  <p className="font-mono text-xs uppercase tracking-wide text-navy/60 mb-1">Flagship Outcome</p>
                  <p className="text-navy/90">
                    Build family banking systems that fund business growth, eliminate bank dependence, and create
                    multi-generational wealth
                  </p>
                </li>
              </ul>
            </aside>

            {/* Credibility Narrative */}
            <article className="space-y-6 text-lg leading-relaxed">
              <p>
                Most Christian entrepreneurs spend decades bleeding <em className="text-copper font-semibold">$20K-$50K per year</em> in
                interest to banks—financing trucks, equipment, real estate, and business expansion on someone else's terms.
              </p>
              <p>
                Brad Raschke helps entrepreneurs break free from institutional dependence through the Infinite Banking Concept
                (IBC). Rooted in Austrian economics and guided by Proverbs 13:22 ("A good man leaves an inheritance to his
                children's children"), Brad teaches you to{" "}
                <strong className="text-navy">reclaim control of your capital</strong> and build a family banking system.
              </p>
              <p>
                The result? You stop enriching banks, start deploying your own capital, and create a permanent financial
                foundation—<em className="text-copper">from your workshop today to your grandchildren's homes tomorrow.</em>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Are We a Fit */}
      <section id="fit" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Are We a Fit?</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-navy/80 mb-8 leading-relaxed">
              We're built for analytical Christian entrepreneurs who:
            </p>
            <ul className="space-y-6">
              <li className="flex items-start border-l-2 border-gold pl-6">
                <span className="text-lg text-navy/80 leading-relaxed">
                  Run established businesses with $250K-$5M in annual revenue (3+ years profitable)
                </span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-6">
                <span className="text-lg text-navy/80 leading-relaxed">
                  Currently bleed $10K-$50K+ annually in interest to banks for equipment, vehicles, real estate, or working
                  capital
                </span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-6">
                <span className="text-lg text-navy/80 leading-relaxed">
                  Have $2,000+ monthly cash flow available to build family banking systems
                </span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-6">
                <span className="text-lg text-navy/80 leading-relaxed">
                  Value biblical stewardship (Prov 13:22) and multi-generational wealth over institutional dependence
                </span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-6">
                <span className="text-lg text-navy/80 leading-relaxed">
                  Want to control their own capital instead of begging banks for approval on their own money
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3-Phase Method */}
      <section id="process" className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Our 3-Phase Method</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              A proven framework for transforming Christian entrepreneurs from bank-dependent to financially sovereign
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Phase 1 */}
            <div className="border-b border-navy/10 pb-12">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-mono font-bold text-gold flex-shrink-0">01</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                    Business Cash Flow Analysis & IBC Policy Design
                  </h3>
                  <p className="text-lg text-navy/80 leading-relaxed">
                    Map your current capital needs (equipment, vehicles, real estate, expansion) and design a whole life policy
                    that becomes your family's private banking system.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="border-b border-navy/10 pb-12">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-mono font-bold text-gold flex-shrink-0">02</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                    Implementation & Capital Deployment Strategy
                  </h3>
                  <p className="text-lg text-navy/80 leading-relaxed">
                    Launch your policy, build cash value, and create a systematic plan to replace bank financing with policy
                    loans—keeping interest flowing back to YOUR policy, not a bank's pocket.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div>
              <div className="flex items-start gap-6">
                <div className="text-6xl font-mono font-bold text-gold flex-shrink-0">03</div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-3">
                    Multi-Generational Wealth Architecture
                  </h3>
                  <p className="text-lg text-navy/80 leading-relaxed">
                    Coordinate business succession, college funding for kids, home ownership for grandchildren, and permanent
                    family wealth transfer through contractual certainty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Impact Metrics</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Measurable outcomes from entrepreneurs implementing IBC
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Interest Recapture */}
              <div className="border-l-4 border-gold pl-8 py-4">
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Interest Recapture</h3>
                <p className="text-navy/80 leading-relaxed">
                  $20K-$50K+ annual interest payments redirected from banks to your own family banking system
                </p>
              </div>

              {/* Capital Accessibility */}
              <div className="border-l-4 border-gold pl-8 py-4">
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Capital Accessibility</h3>
                <p className="text-navy/80 leading-relaxed">
                  Policy loans fund equipment, vehicles, real estate without bank approval—capital works twice (policy growth +
                  deployed use)
                </p>
              </div>

              {/* Family Legacy Impact */}
              <div className="border-l-4 border-gold pl-8 py-4">
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Family Legacy Impact</h3>
                <p className="text-navy/80 leading-relaxed">
                  Debt-free college for kids, down payments for grandchildren's homes, multi-generational wealth transfer
                </p>
              </div>

              {/* Business Expansion Freedom */}
              <div className="border-l-4 border-gold pl-8 py-4">
                <h3 className="text-xl font-heading font-bold text-navy mb-2">Business Expansion Freedom</h3>
                <p className="text-navy/80 leading-relaxed">
                  Self-financed growth without diluting ownership or surrendering equity to outside investors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Entrepreneur Stories */}
      <section id="stories" className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Real Entrepreneur Stories</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              Christian business owners implementing IBC to fund growth and build legacy
            </p>
          </div>

          <div className="space-y-16">
            {/* Story 1: Plumbing */}
            <div className="border-b border-navy/10 pb-16">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[300px] border-2 border-navy/10">
                  <OptimizedImage src="/images/story-plumbing.png" alt="Plumbing Company" type="medium" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-2">Mike's Plumbing Company</h3>
                  <p className="text-copper font-mono mb-6">Tennessee · $1.8M Revenue</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Problem</p>
                      <p className="text-navy/80 leading-relaxed">
                        Bleeding $35K/year in interest to banks for trucks & equipment
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Solution</p>
                      <p className="text-navy/80 leading-relaxed">Built IBC policy with $2,500/month premiums</p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Result</p>
                      <p className="text-navy/80 leading-relaxed">
                        Three years later: $90K cash value, $0 to banks, funded daughter's college debt-free, on track to help
                        grandkids buy homes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 2: HVAC */}
            <div className="border-b border-navy/10 pb-16">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[300px] border-2 border-navy/10">
                  <OptimizedImage src="/images/story-hvac.png" alt="HVAC Company" type="medium" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-2">The HVAC Fleet Transformation</h3>
                  <p className="text-copper font-mono mb-6">Arizona · $3.2M Revenue</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Problem</p>
                      <p className="text-navy/80 leading-relaxed">
                        Needed to finance 8 service vans through expensive commercial loans
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Solution</p>
                      <p className="text-navy/80 leading-relaxed">Financed all vans through IBC policy loans</p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Result</p>
                      <p className="text-navy/80 leading-relaxed">
                        Saved $12K+ annually in interest, kept capital in family system. Now using policy for business expansion
                        and real estate investments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story 3: Coffee */}
            <div>
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="relative h-[300px] border-2 border-navy/10">
                  <OptimizedImage src="/images/story-coffee.png" alt="Coffee Roaster" type="medium" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-navy mb-2">Coffee Roaster&apos;s Equipment Strategy</h3>
                  <p className="text-copper font-mono mb-6">Colorado · $850K Revenue</p>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Problem</p>
                      <p className="text-navy/80 leading-relaxed">
                        Needed $120K for new roasting equipment, facing 9.5% SBA loan rates
                      </p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Solution</p>
                      <p className="text-navy/80 leading-relaxed">Used policy loan at 6% instead of SBA loan at 9.5%</p>
                    </div>
                    <div>
                      <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Result</p>
                      <p className="text-navy/80 leading-relaxed">
                        Paid herself back over 4 years—interest stayed in HER policy. Used same strategy for retail location
                        expansion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study Disclaimer */}
          <p className="text-center text-sm text-navy/60 mt-12 max-w-2xl mx-auto">
            Case studies represent actual client results. Names changed for privacy. Individual results vary based on policy design, premium amount, time horizon, and personal circumstances.
          </p>
        </div>
      </section>

      {/* Transparent Fees */}
      <section id="fees" className="py-24 border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Transparent Fees</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-3xl font-heading text-copper">Complementary. Our gift to your family.</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="py-24 bg-white border-b border-navy/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">Vision & Mission</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
            <p>
              Brad's grandfather quietly funded nine grandchildren's college educations through strategically designed
              life-insurance policies. The lesson was simple:{" "}
              <strong className="text-navy">contractual certainty beats institutional dependence.</strong> Today Brad teaches
              Christian entrepreneurs to build the same permanent foundations for their families.
            </p>
            <p>
              Through <strong className="text-navy">1322 IBC Academy</strong> (FREE Skool community), Brad provides generous IBC
              education to help entrepreneurs understand Infinite Banking before making policy decisions. No gatekeeping. No
              pressure. Just education.
            </p>

            <div className="border-l-4 border-gold pl-8 py-6 space-y-4">
              <p className="text-navy/80">
                <span className="font-mono text-sm text-navy/60 uppercase tracking-wide">Goal 1:</span>
                <br />
                Educate 1,000+ Christian entrepreneurs through 1322 IBC Academy (FREE community)
              </p>
              <p className="text-navy/80">
                <span className="font-mono text-sm text-navy/60 uppercase tracking-wide">Goal 2:</span>
                <br />
                Help 100+ families implement IBC and reclaim $5M+ in annual interest from banks
              </p>
              <p className="text-navy/80">
                <span className="font-mono text-sm text-navy/60 uppercase tracking-wide">Goal 3:</span>
                <br />
                Build multi-generational wealth systems that honor Proverbs 13:22 ("A good man leaves an inheritance to his
                children's children")
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps CTA */}
      <section id="cta" className="py-24 bg-gold/10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
            Ready to Build Your Family Bank?
          </h2>
          <p className="text-xl text-navy/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Start with FREE education in 1322 IBC Academy, then book a 15-minute strategy call when you're ready. No pressure.
            No sales pitch. Just an honest conversation about whether IBC fits your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.skool.com/1322-ibc-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-navy text-cream px-12 py-4 font-heading font-bold text-lg uppercase tracking-wider hover:bg-navy/90 transition-colors"
            >
              Join Free Academy
            </a>
            <a
              href="https://discovery.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy px-12 py-4 font-heading font-bold text-lg uppercase tracking-wider hover:bg-gold/90 transition-colors"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
