"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Blog post error:", error)
  }, [error])

  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6">We couldn't load this blog post. This might be a temporary issue.</p>
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-[#8B4513] text-white px-6 py-3 rounded-lg hover:bg-[#7A3A0F] transition-colors"
          >
            Try again
          </button>
          <Link
            href="/blog"
            className="block w-full bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  )
}
