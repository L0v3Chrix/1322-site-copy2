import { notFound } from "next/navigation"
import { getBlogPost, getBlogPosts } from "@/lib/notion"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import "./notion-content.css"

// Force revalidation on every request
export const revalidate = 0

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

async function BlogPostContent({ slug }: { slug: string }) {
  try {
    const post = await getBlogPost(slug)

    if (!post) {
      notFound()
    }

    // Generate content from excerpt if no content is available
    let displayContent = post.content
    if (!displayContent || displayContent.trim() === "") {
      displayContent = `
        <p>${post.excerpt}</p>
        <p>This article explores ${post.title} in depth, providing valuable insights for our clients and partners.</p>
        <p>For more information about this topic, please contact us directly.</p>
      `
    }

    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex items-center mb-6">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4 bg-gray-700">
              <Image
                src="/images/brad-headshot.jpeg"
                alt={post.author}
                fill
                sizes="48px"
                className="object-cover"
                quality={80}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-400">{post.authorTitle}</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-gray-400">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-sm text-gray-500">{post.readTime}</p>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-full mb-10 rounded-lg overflow-hidden bg-gray-800">
          <Image
            src={post.image || "/placeholder.svg?height=400&width=800&query=blog post"}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 1024px"
            className="object-cover"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
        </div>

        <article className="prose prose-lg prose-invert max-w-none notion-content">
          <div dangerouslySetInnerHTML={{ __html: displayContent }} />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-6">Share this article</h3>
          <div className="flex space-x-4">
            <button className="p-3 bg-[#2A2A3A] rounded-full hover:bg-[#3A3A4A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </button>
            <button className="p-3 bg-[#2A2A3A] rounded-full hover:bg-[#3A3A4A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </button>
            <button className="p-3 bg-[#2A2A3A] rounded-full hover:bg-[#3A3A4A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </button>
            <button className="p-3 bg-[#2A2A3A] rounded-full hover:bg-[#3A3A4A]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error loading blog post:", error)
    notFound()
  }
}

function LoadingFallback() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="h-12 bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 bg-gray-700 rounded-full mr-4 animate-pulse"></div>
          <div>
            <div className="h-4 w-24 bg-gray-700 rounded mb-2 animate-pulse"></div>
            <div className="h-3 w-32 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="h-[400px] bg-gray-700 rounded-lg mb-10 animate-pulse"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  )
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-[#1E1E2A] text-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/blog" className="flex items-center text-white mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>

        <Suspense fallback={<LoadingFallback />}>
          <BlogPostContent slug={params.slug} />
        </Suspense>
      </div>
    </div>
  )
}
