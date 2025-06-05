"use client"
import { useEffect } from "react"

export default function PrivacyPolicyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-cream text-navy min-h-screen py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <p className="text-sm text-navy/80 mb-10 text-center">Last updated: May 29, 2025</p>

        <div className="space-y-6 text-navy/90 prose prose-lg max-w-none">
          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">Introduction</h2>
            <p>
              1322 Legacy Strategies, LLC (“1322,” “we,” “our,” or “us”) respects your privacy. This Privacy Policy
              explains what information we collect, how we use it, and the choices you have. By using
              1322legacystrategies.com or interacting with our emails, SMS messages, webinars, or other services
              (collectively, the “Services”), you agree to the practices described below.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Form Data</h3>
                <p>
                  <strong>Examples:</strong> Name, email, phone, company, financial interests, questions
                </p>
                <p>
                  <strong>Source:</strong> Web forms, event registrations, downloadable resources
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Cookies & Analytics</h3>
                <p>
                  <strong>Examples:</strong> IP address, browser type, pages visited, time on site
                </p>
                <p>
                  <strong>Source:</strong> First-party cookies; third-party analytics (Google Analytics, Meta Pixel)
                </p>
              </div>
              <div>
                <h3 className="font-semibold">SMS Opt-In Data</h3>
                <p>
                  <strong>Examples:</strong> Phone number, message content, delivery metadata
                </p>
                <p>
                  <strong>Source:</strong> Voluntary SMS sign-up forms, keyword texts
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Marketing Interactions</h3>
                <p>
                  <strong>Examples:</strong> Email opens/clicks, ad engagement
                </p>
                <p>
                  <strong>Source:</strong> Email marketing platform, ad pixels
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Device & Usage Data</h3>
                <p>
                  <strong>Examples:</strong> Log files, referring URL, device identifiers
                </p>
                <p>
                  <strong>Source:</strong> Automatic collection via server logs & tags
                </p>
              </div>
            </div>
            <p className="mt-4">We do not knowingly collect data from children under 18.</p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">2. How We Use Information & Legal Bases</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and improve the Services</li>
              <li>Respond to inquiries or schedule consultations</li>
              <li>Send educational content, event invitations, and marketing messages (with consent)</li>
              <li>Analyze site traffic and campaign performance</li>
              <li>Detect, prevent, and address security or technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-2">
              Legal bases (where required) include consent, contract performance, legitimate interest, and legal
              compliance.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">3. Cookies & Tracking Technologies</h2>
            <p>
              We employ cookies, pixels, and similar tech to recognize your browser, improve site performance,
              personalize content, and measure marketing results. You can adjust browser settings to refuse cookies or
              signal “Do Not Track,” though some site features may not function.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">4. How We Share Information</h2>
            <p>We never sell your personal information. We may share it with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Service providers (hosting, CRM, email/SMS platforms, analytics) bound by confidentiality agreements
              </li>
              <li>Professional advisors (legal, accounting)</li>
              <li>Authorities when required to comply with law, court order, or protect rights</li>
              <li>Successors in a merger, acquisition, or asset sale, where permitted by law</li>
            </ul>
            <p className="mt-2">
              We require third parties to process data only for stated purposes and with appropriate safeguards.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">5. Data Storage, Retention & Security</h2>
            <p>
              Data is stored on encrypted servers in the United States or other jurisdictions with adequate protections.
              We retain information as long as needed for the purposes described or as required by law. We employ
              technical and organizational measures—encryption in transit and at rest, access controls, staff
              training—to guard against unauthorized access or loss.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">6. International Transfers</h2>
            <p>
              If you access the Services from outside the U.S., understand that your data may be transferred to, stored,
              and processed in the United States. We rely on recognized transfer mechanisms (e.g., Standard Contractual
              Clauses) when required.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">7. Your Rights & Choices</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Access / Portability</strong> – request a copy of your data
              </li>
              <li>
                <strong>Correction</strong> – update inaccurate information
              </li>
              <li>
                <strong>Deletion</strong> – ask us to erase your data (subject to legal exceptions)
              </li>
              <li>
                <strong>Opt-Out of Marketing</strong> – unsubscribe from emails or reply STOP to SMS
              </li>
              <li>
                <strong>Do Not Sell/Share</strong> – California residents may opt-out of “sale” or “sharing” of personal
                information
              </li>
              <li>
                <strong>Limit Use of Sensitive Info</strong> – where applicable under state law
              </li>
            </ul>
            <p className="mt-2">
              Submit requests at{" "}
              <a href="mailto:privacy@1322legacy.com" className="text-gold hover:underline">
                privacy@1322legacy.com
              </a>{" "}
              or call +1 (331) 703-1322. Identity verification may be required.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">8. Children’s Privacy</h2>
            <p>
              The Services are not directed to children under 18. If we learn we have collected such data, we will
              delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Policy periodically. Material changes will be posted on this page with a new “Last
              updated” date. Continued use after changes signifies acceptance.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl font-semibold mb-3">10. Contact</h2>
            <p>Questions or requests?</p>
            <p>
              Email{" "}
              <a href="mailto:privacy@1322legacy.com" className="text-gold hover:underline">
                privacy@1322legacy.com
              </a>{" "}
              or write:
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
