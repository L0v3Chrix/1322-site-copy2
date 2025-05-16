"use client"

import Hero from "@/components/hero"
import Section from "@/components/section"
import SectionTitle from "@/components/section-title"
import BlogCard from "@/components/blog-card"
import AnimatedText from "@/components/animated-text"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function BlogPage() {
  const blogCategories = [
    "Stewardship vs. Management",
    "Capitalization vs. Accumulation",
    "Preparing Your Children for Inheritance",
    'Insights from "Becoming Your Own Banker"',
    "Harvest Principles: Wealth that Lasts",
  ]

  const featuredPosts = [
    {
      title: "The Difference Between Stewardship and Management",
      slug: "stewardship-vs-management",
      image: "/images/blog-post-1-new.png",
    },
    {
      title: "Teaching Your Children the Value of Legacy",
      slug: "teaching-children-legacy-value",
      image: "/images/blog-post-2.png",
    },
    {
      title: "Infinite Banking: Becoming Your Own Source of Financing",
      slug: "infinite-banking-concept",
      image: "/images/blog-post-3.png",
    },
  ]

  return (
    <>
      <Hero
        title="Field Notes for Faithful Stewards"
        subtitle="Wisdom, stories, and strategies to help you steward your blessings, control your capital, and build a lasting legacy."
        backgroundImage="/images/wheat-field.png"
      />

      <Section className="bg-cream/70">
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {blogCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={`/blog/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-cream px-4 py-2 text-sm uppercase tracking-wider text-navy hover:bg-navy hover:text-white transition-colors"
              >
                {category}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <SectionTitle>
          <AnimatedText>Latest Insights</AnimatedText>
        </SectionTitle>

        <div className="card-grid">
          {featuredPosts.map((post, index) => (
            <BlogCard key={index} title={post.title} image={post.image} slug={post.slug} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/blog/archive" className="btn-primary inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
