"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ArrowLeft } from "lucide-react"
import blogData from "@/data/blog-posts.json"

export default function BlogPage() {
  const [posts, setPosts] = useState([...blogData.posts, ...blogData.caseStudies])
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Add "All" to categories
  const categories = ["All", ...blogData.categories]

  useEffect(() => {
    let result = posts

    // Filter by category
    if (activeCategory !== "All") {
      result = result.filter((post) => post.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query),
      )
    }

    setFilteredPosts(result)
  }, [activeCategory, searchQuery, posts])

  return (
    <div className="blog-modern-layout">
      {/* Navigation back to main site */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/" className="inline-flex items-center text-cream hover:text-copper transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Main Site
        </Link>
      </div>

      {/* Blog Index Hero */}
      <div className="blog-index-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">Field Notes for Faithful Stewards</h1>
          <p className="text-lg text-cream/80 max-w-3xl">
            Wisdom, stories, and strategies to help you steward your blessings, control your capital, and build a
            lasting legacy.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and filter */}
        <div className="mb-12">
          <div className="search-container mb-6">
            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search articles..."
                className="search-input pl-10 w-full py-3"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cream/40" size={18} />
            </div>
          </div>

          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${activeCategory === category ? "active" : ""}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog posts grid */}
        {filteredPosts.length > 0 ? (
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="blog-card">
                <div className="blog-card-image">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-category">{post.category}</div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <div>{post.date}</div>
                    <div>{post.readTime}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-[#232330] rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-cream">No articles found</h3>
            <p className="text-cream/70">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
