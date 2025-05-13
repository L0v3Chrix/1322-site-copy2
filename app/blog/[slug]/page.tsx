"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Sample blog data - in a real app, this would come from your CMS or API
const blogData = {
  "stewardship-vs-management": {
    title: "The Difference Between Stewardship and Management",
    excerpt:
      "Discover why stewardship is a higher calling than mere management, and how this shift in perspective transforms your relationship with wealth.",
    date: "June 15, 2023",
    image: "/images/blog-post-1-new.png",
    content: `
      <p>In a world that urges you to "accumulate more," we invite you to something higher: faithful stewardship.</p>
      
      <p>Management focuses on maximizing returns and minimizing risks. It's about control, efficiency, and optimization. While these aren't inherently negative, they often center on self-interest and short-term gains.</p>
      
      <p>Stewardship, however, recognizes that we don't truly own anything—we are temporary caretakers of blessings entrusted to us. This perspective transforms how we view wealth:</p>
      
      <h3>Stewardship Recognizes the Source</h3>
      <p>While management asks "How can I get more?", stewardship asks "How can I honor the One who provided this?"</p>
      
      <h3>Stewardship Embraces Responsibility</h3>
      <p>Management seeks to maximize personal benefit. Stewardship seeks to maximize faithful impact.</p>
      
      <h3>Stewardship Extends Beyond Lifetimes</h3>
      <p>Management often ends at retirement or death. Stewardship thinks generationally.</p>
      
      <p>At 13:22 Legacy Strategies, we help families shift from wealth management to wealth stewardship—a perspective that transforms not just portfolios, but purpose.</p>
    `,
  },
  "teaching-children-legacy-value": {
    title: "Teaching Your Children the Value of Legacy",
    excerpt: "How to prepare the next generation to receive not just wealth, but wisdom.",
    date: "July 22, 2023",
    image: "/images/blog-post-2.png",
    content: `
      <p>The greatest inheritance you can leave your children isn't found in your bank account—it's found in your values, your wisdom, and your vision for their future.</p>
      
      <p>Many families focus exclusively on the financial aspects of inheritance, neglecting the more important transfer of values, wisdom, and purpose. This oversight often leads to what we call "shirtsleeves to shirtsleeves in three generations"—where wealth built by one generation is lost by the third.</p>
      
      <h3>Start Early, Start Intentionally</h3>
      <p>Legacy education begins long before estate planning. It starts with daily conversations about values, purpose, and stewardship.</p>
      
      <h3>Create Family Mission Statements</h3>
      <p>Work together to articulate what your family stands for, what you value, and what impact you hope to have on the world.</p>
      
      <h3>Practice Stewardship Together</h3>
      <p>Involve children in giving decisions, business discussions (age-appropriately), and financial planning conversations.</p>
      
      <p>At 13:22 Legacy Strategies, we help families create intentional plans for transferring not just assets, but the wisdom needed to steward those assets faithfully.</p>
    `,
  },
  "infinite-banking-concept": {
    title: "Infinite Banking: Becoming Your Own Source of Financing",
    excerpt: "How to take control of your capital and break free from traditional banking dependencies.",
    date: "August 10, 2023",
    image: "/images/blog-post-3.png",
    content: `
      <p>What if you could be your own bank? What if, instead of paying interest to financial institutions, you could recapture that capital and direct it toward your family's legacy?</p>
      
      <p>The Infinite Banking Concept (IBC) is a financial strategy that allows you to create your own banking system using dividend-paying whole life insurance. This approach puts you in control of your capital and allows you to finance purchases while still growing your wealth.</p>
      
      <h3>The Problem with Traditional Banking</h3>
      <p>When you finance purchases through traditional banks, you enrich the bank's shareholders, not your family. Every dollar of interest paid is a dollar that could have grown your legacy.</p>
      
      <h3>The Power of Becoming Your Own Banker</h3>
      <p>By creating your own banking system, you recapture the interest you would have paid to others, you maintain liquidity and control of your capital, and you create a legacy asset that grows tax-advantaged.</p>
      
      <h3>Beyond Just Numbers</h3>
      <p>The Infinite Banking Concept isn't just about financial efficiency—it's about taking control of your capital so you can direct it according to your values and vision.</p>
      
      <p>At 13:22 Legacy Strategies, we help families implement personalized Infinite Banking strategies that align with their unique legacy goals.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch this data from your API or CMS
    const fetchPost = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 300))

      const postData = blogData[params.slug as keyof typeof blogData]
      setPost(postData || null)
      setLoading(false)
    }

    fetchPost()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-pulse text-navy">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Link href="/blog" className="btn-primary">
          Return to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4 text-copper">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight text-center">{post.title}</h1>
          </div>
        </div>
      </section>

      <section className="bg-cream/70 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 pt-8 border-t border-navy/10">
              <Link href="/blog" className="text-copper font-medium hover:underline inline-flex items-center">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
