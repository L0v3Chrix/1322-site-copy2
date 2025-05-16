"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function QualifyLandingPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <Link href="/webinar" className="text-navy/60 hover:text-navy transition-colors flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Webinar
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Some Families Need More Than a Webinar.</h1>
        </div>

        {/* Video section - Fixed with direct file path */}
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <video
            src="/videos/stewards-table-invitation.mp4"
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            playsInline
          />
        </div>

        {/* Description */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <p className="text-navy/80 mb-6">
            The Steward's Table is our one-on-one process. It begins with a personal strategy session — not a pitch — to
            help you explore whether 1322 is the right partner for your legacy.
          </p>

          <h2 className="text-2xl font-bold text-navy mb-6">We bring together:</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F5F0E6] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-copper"
                  >
                    <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-navy mb-2">Legal</h3>
              <p className="text-sm text-navy/70">An attorney who builds family-first estate structures</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F5F0E6] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-copper"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-navy mb-2">Tax</h3>
              <p className="text-sm text-navy/70">A tax strategist who protects what you've earned</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F5F0E6] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-copper"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-navy mb-2">Capital</h3>
              <p className="text-sm text-navy/70">A capital steward who believes in control, not outsourcing</p>
            </div>
          </div>

          <p className="text-center mt-6 text-navy/80">Together, we build what we call the Three-Pillar Framework.</p>
        </div>

        {/* Dinner section */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-navy mb-6 text-center">Dinner. Delivered. Legacy. Designed.</h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/dinner.png"
                alt="Two couples enjoying dinner together"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-navy mb-4">
                An Invitation. A Meal. A Moment That May Change Everything.
              </h3>

              <p className="text-navy/80 mb-4">
                If you qualify for The Steward's Table, we will send a gourmet dinner for two, delivered to your home —
                five-star quality — for you to enjoy during your private meeting with Brad or at a time of your
                choosing.
              </p>

              <p className="text-navy/80 mb-4">It's not just a perk. It's a signal. That this conversation matters.</p>

              <p className="text-navy/80 mb-4">
                We want you to be comfortable. Present. Unhurried. This isn't a sales meeting. It's a strategy session
                rooted in stewardship.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => router.push("/qualify/virtual")}
              className="bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-3 px-8 rounded font-medium transition-colors"
            >
              Start My Qualification
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
