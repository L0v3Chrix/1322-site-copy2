"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import blogData from "@/data/blog-posts.json"
import "../blog.css"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([])
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    // Find the post in either posts or caseStudies
    const allPosts = [...blogData.posts, ...blogData.caseStudies]
    const foundPost = allPosts.find((p) => p.slug === params.slug)
    setPost(foundPost || null)
    setLoading(false)

    // Reset image error state when post changes
    setImageError(false)

    // Extract headings for table of contents
    if (foundPost) {
      const headingRegex = /<h([23])>(.*?)<\/h[23]>/g
      const content = foundPost.content
      const headings: { id: string; text: string }[] = []

      let match
      while ((match = headingRegex.exec(content)) !== null) {
        const text = match[2].replace(/<.*?>/g, "")
        const id = text.toLowerCase().replace(/[^\w]+/g, "-")
        headings.push({ id, text })
      }

      setTableOfContents(headings)
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse text-cream">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4 text-cream">Post Not Found</h1>
        <p className="mb-6 text-cream/80">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="btn-primary">
          Return to Blog
        </Link>
      </div>
    )
  }

  // Process content to add IDs to headings for table of contents
  const processedContent = post.content.replace(
    /<h([23])>(.*?)<\/h([23])>/g,
    (match: string, level: string, content: string) => {
      const id = content
        .toLowerCase()
        .replace(/<.*?>/g, "")
        .replace(/[^\w]+/g, "-")
      return `<h${level} id="${id}">${content}</h${level}>`
    },
  )

  // Determine if this is the "How to Build Your Own Bank" article
  const isHowToBuildYourOwnBank = post.slug === "how-to-build-your-own-bank"

  // Fallback image if the author image fails to load
  const authorImage = imageError ? "/images/brad-headshot.jpeg" : post.authorImage || "/images/brad-headshot.jpeg"

  return (
    <div className={`blog-modern-layout ${isHowToBuildYourOwnBank ? "blog-post-how-to-build-your-own-bank" : ""}`}>
      {/* Hero Section with Featured Image */}
      <div className="blog-hero">
        <div className="blog-hero-image">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="blog-hero-overlay"></div>
        </div>

        <div className="blog-hero-content">
          <div className="blog-category">{post.category}</div>
          <h1 className="blog-title">{post.title}</h1>

          <div className="blog-meta">
            <div className="blog-author">
              <div className="blog-author-image">
                <Image
                  src={authorImage || "/placeholder.svg"}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                  onError={() => setImageError(true)}
                />
              </div>
              <div className="blog-author-name">{post.author}</div>
            </div>

            <div className="blog-date">
              <Calendar size={16} className="blog-meta-icon" />
              <span>{post.date}</span>
            </div>

            <div className="blog-read-time">
              <Clock size={16} className="blog-meta-icon" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-content-wrapper">
        {/* Table of Contents */}
        {tableOfContents.length > 0 && (
          <div className="blog-toc">
            <h3 className="blog-toc-title">Table of Contents</h3>
            <ul className="blog-toc-list">
              {tableOfContents.map((heading, index) => (
                <li key={index} className="blog-toc-item">
                  <a href={`#${heading.id}`} className="blog-toc-link">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content */}
        <div className="blog-main-content">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: processedContent }} />

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div className="blog-related-posts">
              <h2 className="blog-related-title">Related Articles</h2>
              <div className="blog-related-grid">
                {post.relatedPosts.map((relatedPost: any) => (
                  <Link href={`/blog/${relatedPost.slug}`} key={relatedPost.slug} className="blog-related-card">
                    <div className="blog-related-image">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="blog-related-content">
                      <h3 className="blog-related-card-title">{relatedPost.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          <div className="blog-author-bio">
            <div className="blog-author-bio-image">
              <Image
                src={authorImage || "/placeholder.svg"}
                alt={post.author}
                width={80}
                height={80}
                className="object-cover rounded-full"
                onError={() => setImageError(true)}
              />
            </div>
            <div className="blog-author-bio-content">
              <h3 className="blog-author-bio-name">{post.author}</h3>
              <p className="blog-author-bio-title">{post.authorTitle}</p>
              <p className="blog-author-bio-description">
                Founder and Steward of Strategy at 1322 Legacy Strategies, helping families build lasting legacies
                through strategic planning and faithful stewardship.
              </p>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="blog-navigation">
            <Link href="/blog" className="blog-back-link">
              <ArrowLeft className="blog-back-icon" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
