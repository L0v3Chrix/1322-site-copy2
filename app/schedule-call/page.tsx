"use client"

import Link from "next/link"
import Image from "next/image"

export default function ScheduleCallPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6]">
      <div className="container mx-auto px-4 max-w-5xl py-8">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/qualify/virtual" className="text-navy/60 hover:text-navy transition-colors flex items-center">
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
            Back to Qualification
          </Link>
          <Link href="https://www.1322legacystrategies.com/" className="inline-block">
            <Image
              src="/images/1322-header-logo.png"
              alt="1322 Legacy Strategies"
              width={120}
              height={30}
              className="h-auto"
            />
          </Link>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Schedule Your One-on-One Legacy Session</h1>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            Select a time that works for you to speak directly with Brad about your legacy goals.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {/* Calendar Widget with increased height */}
          <div className="calendar-container w-full">
            <iframe
              src="https://go.theoneai.app/widget/booking/vvadZIxfyl4gRd0PkWZQ"
              frameBorder="0"
              width="100%"
              height="1200px"
              title="Booking Calendar"
              allow="camera; microphone; autoplay; encrypted-media; fullscreen; payment"
            ></iframe>
          </div>
        </div>

        {/* Fixed centering by adding text-center class to the div */}
        <div className="mt-8 text-center w-full">
          <p className="text-navy/80 mb-4">Need to change your qualification information?</p>
          <Link href="/qualify/virtual" className="text-copper hover:text-copper/80 font-medium">
            Return to qualification page
          </Link>
        </div>
      </div>
    </div>
  )
}
