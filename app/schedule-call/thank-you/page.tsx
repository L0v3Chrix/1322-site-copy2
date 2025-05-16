import Link from "next/link"

export default function ScheduleThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">Thank You for Scheduling Your Call</h1>
          <p className="text-lg text-navy/80 max-w-2xl mx-auto">
            We're looking forward to speaking with you about your legacy goals.
          </p>
        </div>

        {/* Video section */}
        <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
          <video
            src="/videos/post-call-scheduling-thank-you.mp4"
            className="w-full h-full object-cover"
            controls
            autoPlay
            playsInline
          />
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-green-600"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-4 text-navy">Your Legacy Session is Confirmed</h2>

          <p className="text-lg mb-6">
            You'll receive a calendar invitation and confirmation email shortly with all the details for your call.
          </p>

          <div className="bg-navy/5 p-6 rounded-lg mb-8">
            <p className="text-navy">
              Brad is looking forward to speaking with you and exploring how 1322 can help you build a lasting legacy.
            </p>
          </div>

          <h3 className="text-xl font-bold text-navy mb-4">What to Expect Next</h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F5F0E6] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-copper"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-navy mb-2">Calendar Invite</h4>
              <p className="text-sm text-navy/70">Check your email for a calendar invitation with meeting details</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F5F0E6] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-copper"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-navy mb-2">Phone Call</h4>
              <p className="text-sm text-navy/70">Brad will call you at the scheduled time on your preferred number</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-[#F5F0E6] p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-copper"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
              </div>
              <h4 className="font-bold text-navy mb-2">Strategy Session</h4>
              <p className="text-sm text-navy/70">Discuss your legacy goals and explore if 1322 is the right fit</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/"
              className="bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded font-medium transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/webinar"
              className="bg-[#D4B78F] hover:bg-[#C4A77F] text-navy py-3 px-6 rounded font-medium transition-colors"
            >
              Back to Webinar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
