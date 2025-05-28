import { getBlogPosts } from "@/lib/notion"
import Link from "next/link"
import Image from "next/image"
import { NOTION_DATABASE_ID } from "@/lib/env"

// Force revalidation on every request
export const revalidate = 0

export default async function BlogPage() {
  // Add a cache-busting timestamp to ensure we get fresh data
  const timestamp = Date.now()
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen bg-[#1E1E2A] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center text-white mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Main Site
        </Link>

        <h1 className="text-5xl font-bold mb-4">Field Notes for Faithful Stewards</h1>
        <p className="text-xl mb-12 max-w-3xl">
          Wisdom, stories, and strategies to help you steward your blessings, control your capital, and build a lasting
          legacy.
        </p>

        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full md:max-w-md px-4 py-2 pl-10 bg-[#2A2A3A] rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          <button className="px-4 py-2 bg-amber-600 rounded-full text-sm font-medium">All</button>
          <button className="px-4 py-2 bg-[#2A2A3A] rounded-full text-sm font-medium hover:bg-[#3A3A4A]">
            Financial Planning
          </button>
          <button className="px-4 py-2 bg-[#2A2A3A] rounded-full text-sm font-medium hover:bg-[#3A3A4A]">
            Legacy Planning
          </button>
          <button className="px-4 py-2 bg-[#2A2A3A] rounded-full text-sm font-medium hover:bg-[#3A3A4A]">
            Wealth Management
          </button>
        </div>

        {posts.length === 0 ? (
          <div className="bg-[#2A2A3A] rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">No articles found</h2>
            <p className="text-gray-300 mb-6">
              We couldn&apos;t find any articles in your Notion database. Please make sure:
            </p>
            <ul className="text-left max-w-md mx-auto text-gray-300 mb-6 list-disc pl-5">
              <li className="mb-2">Your Notion database has at least one entry</li>
              <li className="mb-2">The entry has a Title and Slug property</li>
              <li className="mb-2">The Published property is checked (if available)</li>
              <li className="mb-2">Your integration has access to the database</li>
            </ul>
            <p className="text-gray-400 text-sm">
              Database ID: {NOTION_DATABASE_ID}
              <br />
              Cache timestamp: {timestamp}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                <div className="bg-[#2A2A3A] rounded-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = "/placeholder.svg?height=400&width=600&query=blog post"
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          sizes="40px"
                          className="object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.currentTarget.src = "/images/brad-headshot.jpeg"
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{post.author}</p>
                        <p className="text-xs text-gray-400">{post.authorTitle}</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-amber-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-400">
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
