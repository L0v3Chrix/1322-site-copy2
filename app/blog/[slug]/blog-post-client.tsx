"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import type { NotionPost } from "@/lib/notion"
import "../blog.css"
import "../notion.css" // Import the Notion styles

interface BlogPostClientProps {
  post: NotionPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [imageError, setImageError] = useState(false)
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string }[]>([])

  useEffect(() => {
    // Extract headings for table of contents
    const headingRegex = /<h([123]).*?id="(.*?)".*?>(.*?)<\/h[123]>/g
    const content = post.content
    const headings: { id: string; text: string }[] = []

    let match
    while ((match = headingRegex.exec(content)) !== null) {
      const id = match[2]
      // Remove HTML tags from heading text
      const text = match[3].replace(/<.*?>/g, "")
      headings.push({ id, text })
    }

    setTableOfContents(headings)
  }, [post.content])

  const authorImage = imageError ? "/images/brad-headshot.jpeg" : post.authorImage

  return (
    <div className="blog-modern-layout">
      {/* Hero Section with Featured Image */}
      <div className="blog-hero">
        <div className="blog-hero-image">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
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
              <span>{new Date(post.date).toLocaleDateString()}</span>
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
          <div className="notion-content" dangerouslySetInnerHTML={{ __html: post.content }} />

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
