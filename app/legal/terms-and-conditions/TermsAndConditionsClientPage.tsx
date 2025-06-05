"use client"

import { useEffect } from "react"

export default function TermsAndConditionsClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-cream text-navy min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>
        <p className="text-sm text-navy/80 mb-10 text-center">Last updated: May 29, 2025</p>

        <div className="space-y-6 text-navy/90 prose prose-lg max-w-none">
          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">1. About 1322</h2>
            <p>
              1322 Legacy Strategies, LLC provides educational content, webinars, and consultations focused on
              retirement income, estate planning, and the Infinite Banking Concept. We are not a Registered Investment
              Adviser, CPA firm, or law firm.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">2. Acceptance of Terms</h2>
            <p>
              By accessing or using the Services, you (“User,” “you”) agree to these Terms. If you disagree, do not use
              the Services.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">3. No Financial/Tax/Legal Advice</h2>
            <p>
              All content is for informational purposes only and does not constitute personalized financial, tax,
              accounting, or legal advice. Consult qualified professionals before acting on any information.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">4. User Conduct & Prohibited Uses</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any law or regulation</li>
              <li>Infringe intellectual-property or privacy rights</li>
              <li>Upload malicious code or engage in hacking, scraping, or spamming</li>
              <li>Use the site to solicit unlawful or harmful activity</li>
              <li>Impersonate others or misrepresent affiliation with 1322</li>
            </ul>
            <p className="mt-2">We may suspend or terminate access for violations.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">5. Intellectual Property</h2>
            <p>
              All site content—including text, graphics, logos, downloads, and software—is owned by 1322 or its
              licensors and protected by copyright, trademark, and other laws. You may view and print content for
              personal, non-commercial use only. No other rights are granted.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">6. Third-Party Links & Tools</h2>
            <p>
              The Services may link to third-party sites or integrate third-party tools. We are not responsible for
              their content, privacy practices, or performance. Use them at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">
              7. Limitation of Liability & Warranty Disclaimer
            </h2>
            <p>Services are provided “as is” and “as available” without warranties of any kind, express or implied.</p>
            <p>
              To the fullest extent permitted by law, 1322 and its officers, employees, or agents will not be liable for
              any indirect, incidental, special, or consequential damages, or loss of profits, arising from your use of
              the Services—even if advised of the possibility.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">8. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless 1322, its affiliates, and personnel from any claims, damages, or
              expenses arising out of your use of the Services or violation of these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">9. Right to Modify or Terminate</h2>
            <p>
              We may update, suspend, or discontinue any part of the Services, or modify these Terms, at any time.
              Material changes will be noted by updating the “Last updated” date. Continued use after changes
              constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">10. Governing Law & Venue</h2>
            <p>
              These Terms are governed by the laws of the State of Illinois, USA, without regard to conflict-of-law
              principles. Exclusive jurisdiction and venue lie in the state or federal courts located in Kane County,
              Illinois.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">11. Contact</h2>
            <p>
              For questions about these Terms, email{" "}
              <a href="mailto:support@1322legacy.com" className="text-gold hover:underline">
                support@1322legacy.com
              </a>{" "}
              or write to the postal address above.
            </p>
            <address className="not-italic mt-2">
              1322 Legacy Strategies, LLC
              <br />
              323 Willowbrook Way
              <br />
              Geneva, IL 60134 USA
            </address>
          </section>
        </div>
      </div>
    </div>
  )
}
