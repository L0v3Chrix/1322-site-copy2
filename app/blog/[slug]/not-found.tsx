import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F0E6] flex items-center justify-center">
      <div className="max-w-md mx-auto text-center p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/blog"
          className="inline-block bg-[#8B4513] text-white px-6 py-3 rounded-lg hover:bg-[#7A3A0F] transition-colors"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  )
}
