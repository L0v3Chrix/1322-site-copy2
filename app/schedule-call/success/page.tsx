import Link from "next/link"

export default function ScheduleSuccessPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] py-16 flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
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

          <h1 className="text-3xl font-bold mb-4 text-navy">Your Call is Scheduled!</h1>

          <p className="text-lg mb-6">
            Your one-on-one legacy session with Brad has been confirmed. You'll receive a calendar invitation and
            confirmation email shortly.
          </p>

          <div className="bg-navy/5 p-6 rounded-lg mb-8">
            <p className="text-navy">Brad is looking forward to speaking with you and discussing your legacy goals.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://www.1322legacystrategies.com/"
              className="bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded font-medium transition-colors"
            >
              Visit Main Site
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
