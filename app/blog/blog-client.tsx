"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import BlogCard from "@/components/blog-card"
import type { NotionPost } from "@/lib/notion"

interface BlogClientProps {
  posts: NotionPost[]
}

export function BlogClient({ posts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from posts
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(posts.map((post) => post.category).filter(Boolean)))
    return ["All", ...uniqueCategories]
  }, [posts])

  // Filter posts based on search term and category
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [posts, searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-[#F5F0E6] text-[#1E1E2A]">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1E1E2A]">Field Notes for Faithful Stewards</h1>
          <p className="text-xl text-[#1E1E2A]/80 max-w-3xl mx-auto">
            Wisdom, stories, and strategies to help you steward your blessings, control your capital, and build a
            lasting legacy.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "bg-white text-[#1E1E2A] hover:bg-[#D4AF37]/10 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.id}
                title={post.title}
                image={post.image}
                slug={post.slug}
                index={index}
                category={post.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4 text-[#1E1E2A]">No articles found</h3>
            <p className="text-[#1E1E2A]/60">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogClient
