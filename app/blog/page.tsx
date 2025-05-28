import { getBlogPosts } from "@/lib/notion"
import BlogClient from "./blog-client"
import { Suspense } from "react"

// Add revalidation for better performance
export const revalidate = 3600 // Revalidate every hour

async function BlogContent() {
  const posts = await getBlogPosts()
  return <BlogClient posts={posts} />
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="blog-modern-layout">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3 mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-gray-300 rounded-lg h-64"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  )
}
