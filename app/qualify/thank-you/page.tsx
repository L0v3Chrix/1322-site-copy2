import Link from "next/link"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] pt-20 pb-16 flex flex-col items-center justify-center">
      <div className="container max-w-lg mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
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

          <h1 className="text-3xl font-bold mb-4 text-navy">Thank You!</h1>

          <p className="text-lg mb-6">
            Your call request has been submitted successfully. One of our team members will be calling you shortly.
          </p>

          <div className="bg-navy/5 p-6 rounded-lg mb-8">
            <p className="text-navy font-medium">While you wait, you can prepare by thinking about:</p>
            <ul className="text-left mt-4 space-y-2">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-copper mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Your current financial goals and challenges
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-copper mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                What legacy means to you and your family
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-copper mr-2 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                How you'd like to impact future generations
              </li>
            </ul>
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
