"use client"

import Link from "next/link"
import OptimizedImage from "@/components/optimized-image"
import { ArrowRight, BookOpen, Calculator, Users, Play } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import { AnimatedSection, AnimatedStaggerChild, AnimatedHeading, AnimatedParagraph } from "@/components/ui/animated-section"
import { EnhancedCard, StaggerCardContainer, EnhancedCardTitle, EnhancedCardContent } from "@/components/ui/enhanced-card"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { motion } from "framer-motion"
import { staggerContainer, fadeInUp, slideInLeft, slideInRight } from "@/lib/animation-variants"

export default function Home() {
  return (
    <div className="bg-cream">
      {/* Hero Section - Classical with Entrance Animation */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-navy text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <OptimizedImage
            src="/images/classical-foundation.png"
            alt="Classical foundation"
            type="hero"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 py-32 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8"
            variants={fadeInUp}
          >
            Stop Bleeding $20K-$50K/Year
            <br />
            to Banks and Wall Street.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 leading-relaxed"
            variants={fadeInUp}
          >
            Christian entrepreneurs earning $250K+ learn how to become their own banker,
            <br />
            recapture lost interest, and build multi-generational wealth systems.
          </motion.p>
          <motion.div
            className="border-t border-cream/30 pt-8 flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button asChild variant="gold" size="xl">
              <Link href="/learn">Start Learning</Link>
            </Button>
            <Button asChild variant="creamOutline" size="xl">
              <a
                href="https://www.skool.com/1322-ibc-academy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Free Academy
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Learning Pathways Section - With Staggered Animations */}
      <AnimatedSection className="bg-cream py-20 border-b border-navy/10" animation="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <motion.p
              className="font-mono text-xs uppercase tracking-wider text-gold mb-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Education-First Approach
            </motion.p>
            <AnimatedHeading as="h2" className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Learn at Your Own Pace
            </AnimatedHeading>
            <AnimatedParagraph className="text-lg text-navy/70 max-w-2xl mx-auto">
              We believe analytical minds should understand the concepts thoroughly before making decisions.
              That&apos;s why we provide comprehensive free education.
            </AnimatedParagraph>
          </div>

          <StaggerCardContainer className="grid md:grid-cols-4 gap-6">
            {/* Learning Center */}
            <EnhancedCard staggerChild className="group p-0" padding="none">
              <Link href="/learn" className="block p-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-4 rounded-sm">
                  <AnimatedIcon
                    icon={<BookOpen className="w-6 h-6" />}
                    animation="bounce"
                    trigger="hover"
                    colorClass="text-gold"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Learning Center
                </h3>
                <p className="text-sm text-navy/60 mb-4">
                  Three progressive tracks from foundations to mastery.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore Lessons <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </EnhancedCard>

            {/* Interactive Tools */}
            <EnhancedCard staggerChild className="group p-0" padding="none">
              <Link href="/tools" className="block p-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-4 rounded-sm">
                  <AnimatedIcon
                    icon={<Calculator className="w-6 h-6" />}
                    animation="bounce"
                    trigger="hover"
                    colorClass="text-gold"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Calculators
                </h3>
                <p className="text-sm text-navy/60 mb-4">
                  Run your own numbers. See exactly what IBC could mean for you.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Open Tools <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </EnhancedCard>

            {/* Case Studies */}
            <EnhancedCard staggerChild className="group p-0" padding="none">
              <Link href="/case-studies" className="block p-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-4 rounded-sm">
                  <AnimatedIcon
                    icon={<Users className="w-6 h-6" />}
                    animation="bounce"
                    trigger="hover"
                    colorClass="text-gold"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Case Studies
                </h3>
                <p className="text-sm text-navy/60 mb-4">
                  Real entrepreneurs. Real numbers. Real results.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Stories <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </EnhancedCard>

            {/* Free Academy */}
            <EnhancedCard staggerChild className="group bg-gold/5 border-2 border-gold p-0" padding="none">
              <a
                href="https://www.skool.com/1322-ibc-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6"
              >
                <div className="w-12 h-12 bg-gold/20 flex items-center justify-center mb-4 rounded-sm">
                  <AnimatedIcon
                    icon={<Play className="w-6 h-6" />}
                    animation="pulse"
                    trigger="hover"
                    colorClass="text-gold"
                  />
                </div>
                <h3 className="font-heading text-xl font-bold text-navy group-hover:text-gold transition-colors mb-2">
                  Free Academy
                </h3>
                <p className="text-sm text-navy/60 mb-4">
                  Join 1,000+ entrepreneurs. Weekly live AMAs with Brad.
                </p>
                <span className="font-mono text-xs uppercase tracking-wider text-gold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Join Community <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </EnhancedCard>
          </StaggerCardContainer>
        </div>
      </AnimatedSection>

      {/* Three Pillars - Classical Grid with Alternating Animations */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <AnimatedSection className="text-center mb-16" animation="fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            The Principled Authority Framework
          </h2>
          <motion.div
            className="w-24 h-1 bg-gold mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <p className="text-xl text-navy/70 max-w-3xl mx-auto">
            Three foundational pillars that transform Christian entrepreneurs from bank-dependent to financially
            sovereign
          </p>
        </AnimatedSection>

        {/* Pillar 1: Stewardship - Slide in from left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 pb-24 border-b border-navy/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <div className="mb-8">
              <motion.div
                className="text-6xl font-mono text-gold mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                01
              </motion.div>
              <h3 className="text-4xl font-heading font-bold text-navy mb-2">Stewardship</h3>
              <p className="text-xl text-copper font-mono">Your Capital. Your Control.</p>
            </div>
            <p className="text-lg text-navy/80 mb-8 leading-relaxed">
              Most families unknowingly surrender control of their capital to institutions—banks, Wall Street, the IRS.
              True stewardship means reclaiming ownership and directing your wealth according to your values, not
              theirs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Eliminate dependence on banks for business financing</span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Control when, where, and how your capital is deployed</span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Build a system that works for you across generations</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="relative h-[500px] overflow-hidden rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <OptimizedImage
              src="/images/pillar-stewardship.png"
              alt="Stewardship"
              type="medium"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Pillar 2: Sovereignty - Slide in from right */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 pb-24 border-b border-navy/10">
          <motion.div
            className="md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="mb-8">
              <motion.div
                className="text-6xl font-mono text-gold mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                02
              </motion.div>
              <h3 className="text-4xl font-heading font-bold text-navy mb-2">Sovereignty</h3>
              <p className="text-xl text-copper font-mono">Financial Independence by Design.</p>
            </div>
            <p className="text-lg text-navy/80 mb-8 leading-relaxed">
              Sovereignty is freedom—freedom from institutional gatekeepers, freedom from arbitrary lending decisions,
              freedom to finance your business and life on your terms through the Infinite Banking Concept.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Access capital without bank approval or credit checks</span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Fund equipment, real estate, and expansion debt-free</span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Keep interest payments flowing back to YOUR system</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="relative h-[500px] md:order-1 overflow-hidden rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <OptimizedImage
              src="/images/pillar-sovereignty.png"
              alt="Sovereignty"
              type="medium"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Pillar 3: System - Slide in from left */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <div className="mb-8">
              <motion.div
                className="text-6xl font-mono text-gold mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                03
              </motion.div>
              <h3 className="text-4xl font-heading font-bold text-navy mb-2">System</h3>
              <p className="text-xl text-copper font-mono">A Permanent Financial Foundation.</p>
            </div>
            <p className="text-lg text-navy/80 mb-8 leading-relaxed">
              This isn't a strategy. It's a system—a family banking infrastructure that compounds over decades, funds
              multiple generations, and creates permanent wealth through contractual certainty.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Whole life policies designed for maximum cash value growth</span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Tax-advantaged wealth transfer to children and grandchildren</span>
              </li>
              <li className="flex items-start border-l-2 border-gold pl-4 hover:border-l-4 transition-all">
                <span className="text-navy/80">Predictable, guaranteed foundation for family legacy</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="relative h-[500px] overflow-hidden rounded-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <OptimizedImage
              src="/images/pillar-system.png"
              alt="System"
              type="medium"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Cost of Not Knowing - Classical Comparison */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Cost of Not Knowing</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
            <p className="text-xl text-cream/70">
              Most Christian entrepreneurs unknowingly build on shifting sands. Here's what they don't see.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Shifting Sands */}
            <div className="border-2 border-cream/20 p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-cream/20">
                Shifting Sands
                <br />
                <span className="text-lg text-cream/60 font-mono">Traditional Finance</span>
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-red-400 mr-4 text-2xl">✗</span>
                  <span>Bleed $20K-$50K+ annually in interest to banks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-4 text-2xl">✗</span>
                  <span>Beg for approval to access your own capital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-4 text-2xl">✗</span>
                  <span>Surrender control to Wall Street volatility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-4 text-2xl">✗</span>
                  <span>Pay taxes twice (growth + distribution)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-4 text-2xl">✗</span>
                  <span>Hope the market cooperates when you need it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-4 text-2xl">✗</span>
                  <span>Die with assets, not systems</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-cream/20">
                <p className="font-mono font-bold text-red-400">Wealth dissipates by the 3rd generation</p>
              </div>
            </div>

            {/* Enduring Framework */}
            <div className="border-2 border-gold p-8 bg-gold/5">
              <h3 className="text-2xl font-heading font-bold mb-6 pb-4 border-b border-gold/30">
                Enduring Framework
                <br />
                <span className="text-lg text-cream/60 font-mono">Infinite Banking</span>
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <span>Recapture $20K-$50K+ in annual interest payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <span>Access capital instantly through policy loans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <span>Control deployment—no bank gatekeepers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <span>Tax-advantaged growth + tax-free distributions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <span>Contractual guarantees, not market speculation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-4 text-2xl">✓</span>
                  <span>Build a family bank that lasts generations</span>
                </li>
              </ul>
              <div className="pt-6 border-t border-gold/30">
                <p className="font-mono font-bold text-gold">Multi-generational wealth system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Stories - Classical Layout */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-4">
            Real Entrepreneurs. Real Results.
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-navy/70">
            Christian business owners who stopped bleeding interest and built family banking systems
          </p>
        </div>

        <div className="space-y-16">
          {/* Story 1 */}
          <div className="border-b border-navy/10 pb-16">
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <div className="relative h-[300px]">
                <OptimizedImage
                  src="/images/story-plumbing.png"
                  alt="Plumbing Company"
                  type="medium"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-2">Mike's Plumbing Company</h3>
                <p className="text-copper font-mono mb-6">Tennessee · $1.8M Revenue</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Problem</p>
                    <p className="text-navy/80">Bleeding $35K/year in interest on trucks & equipment</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Solution</p>
                    <p className="text-navy/80">Built IBC policy with $2,500/month premiums</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gold uppercase tracking-wide mb-1">The Result</p>
                    <p className="text-navy font-semibold text-lg">
                      3 years later: $90K cash value, $0 to banks, funded daughter's college debt-free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 2 */}
          <div className="border-b border-navy/10 pb-16">
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <div className="relative h-[300px]">
                <OptimizedImage
                  src="/images/story-hvac.png"
                  alt="HVAC Company"
                  type="medium"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-2">HVAC Fleet Operation</h3>
                <p className="text-copper font-mono mb-6">Arizona · $3.2M Revenue</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Problem</p>
                    <p className="text-navy/80">Commercial loans draining $12K+ annually for 8 service vans</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Solution</p>
                    <p className="text-navy/80">Financed entire fleet through IBC policy loans</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gold uppercase tracking-wide mb-1">The Result</p>
                    <p className="text-navy font-semibold text-lg">
                      Saved $12K+ annually, kept capital in family system, now funding real estate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Story 3 */}
          <div>
            <div className="grid md:grid-cols-[300px_1fr] gap-8">
              <div className="relative h-[300px]">
                <OptimizedImage
                  src="/images/story-coffee.png"
                  alt="Coffee Roasting Company"
                  type="medium"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-navy mb-2">Coffee Roasting Company</h3>
                <p className="text-copper font-mono mb-6">Colorado · $850K Revenue</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Problem</p>
                    <p className="text-navy/80">Needed $120K for roasting equipment—SBA wanted 9.5% interest</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-navy/60 uppercase tracking-wide mb-1">The Solution</p>
                    <p className="text-navy/80">Used policy loan at 6% instead</p>
                  </div>
                  <div>
                    <p className="text-sm font-mono text-gold uppercase tracking-wide mb-1">The Result</p>
                    <p className="text-navy font-semibold text-lg">
                      Paid herself back over 4 years—interest stayed in HER policy
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
      </section>

      <TestimonialCarousel />

      {/* Statistics - Classical */}
      <section className="bg-navy text-cream py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Why Entrepreneurs Choose 1322</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="text-center border-r border-cream/20 last:border-r-0">
              <div className="text-6xl font-mono font-bold text-gold mb-4">10+</div>
              <div className="text-lg font-heading font-semibold mb-2">Years IBC Implementation</div>
              <p className="text-sm text-cream/70">Authorized Infinite Banking Practitioner</p>
            </div>
            <div className="text-center border-r border-cream/20 last:border-r-0">
              <div className="text-6xl font-mono font-bold text-gold mb-4">1,000+</div>
              <div className="text-lg font-heading font-semibold mb-2">Entrepreneurs Educated</div>
              <p className="text-sm text-cream/70">Through FREE 1322 IBC Academy</p>
            </div>
            <div className="text-center border-r border-cream/20 last:border-r-0">
              <div className="text-6xl font-mono font-bold text-gold mb-4">$0</div>
              <div className="text-lg font-heading font-semibold mb-2">Cost for Strategy Consultation</div>
              <p className="text-sm text-cream/70">Complementary discovery calls</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-gold mb-4">13:22</div>
              <div className="text-lg font-heading font-semibold mb-2">Biblical Foundation</div>
              <p className="text-sm text-cream/70">Proverbs 13:22 legacy planning</p>
            </div>
          </div>

          <div className="text-center border-t border-cream/20 pt-12">
            <blockquote className="text-3xl font-heading italic mb-4">
              "A good man leaves an inheritance to his children's children."
            </blockquote>
            <p className="text-cream/70 font-mono">— Proverbs 13:22</p>
          </div>
        </div>
      </section>

      {/* Founder Section - Classical */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative h-[600px]">
            <OptimizedImage
              src="/images/brad-raschke-founder.png"
              alt="Brad Raschke, Founder"
              type="medium"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-8">
              Why I Built
              <br />
              1322 Legacy Strategies
            </h2>
            <div className="space-y-6 text-lg text-navy/80 leading-relaxed">
              <p>
                My grandfather quietly funded nine grandchildren's college educations through strategically designed
                life-insurance policies. The lesson was simple:{" "}
                <strong className="text-navy">contractual certainty beats institutional dependence.</strong>
              </p>
              <p>
                Today, I watch Christian entrepreneurs bleed $20K-$50K annually in interest to banks—financing trucks,
                equipment, real estate on someone else's terms. Meanwhile, Wall Street promises "growth" while charging
                fees and exposing families to volatility.
              </p>
              <p>
                There's a better way. The Infinite Banking Concept (IBC) allows you to{" "}
                <strong className="text-navy">become your own bank</strong>—reclaiming control of your capital, funding
                business growth debt-free, and building a family banking system that lasts generations.
              </p>
              <p className="text-copper italic">
                Through 1322 IBC Academy (our FREE Skool community), I provide generous IBC education to help
                entrepreneurs understand Infinite Banking before making policy decisions. No gatekeeping. No pressure.
                Just education.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-navy/10">
              <p className="font-heading text-2xl text-navy font-bold">Brad Raschke</p>
              <p className="text-copper font-mono">
                Founder & IBC Strategist
                <br />
                Authorized Infinite Banking Practitioner
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Classical with Animations */}
      <AnimatedSection className="bg-gold/10 py-24" animation="fade-up">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-heading font-bold text-navy mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Start with FREE Education.
            <br />
            No Sales Pitch.
          </motion.h2>
          <motion.p
            className="text-xl text-navy/80 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you prefer self-paced learning or community discussion,
            <br />
            we&apos;ve built comprehensive resources to help you master IBC at your own pace.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild variant="navySolid" size="xl" className="gap-2">
              <Link href="/learn">
                Explore Learning Center <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="navyOutline" size="xl">
              <a
                href="https://www.skool.com/1322-ibc-academy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Free Academy
              </a>
            </Button>
          </motion.div>
          <motion.p
            className="text-sm text-navy/60 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            No pressure. No obligation. Education first, always.
          </motion.p>
          <motion.div
            className="pt-8 border-t border-navy/10"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-navy/70 mb-4">Ready to discuss your specific situation?</p>
            <a
              href="https://discovery.1322legacystrategies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm uppercase tracking-wider text-gold hover:text-navy transition-colors inline-flex items-center gap-2 group"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  )
}
