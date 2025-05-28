"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

interface BlogCardProps {
  title: string
  image: string
  slug: string
  index: number
  category?: string
}

export default function BlogCard({ title, image, slug, index, category }: BlogCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const fallbackImage = "/placeholder.svg?height=300&width=400&query=blog post"

  return (
    <motion.div
      className="relative overflow-hidden group rounded-lg bg-[#2A2A3A] border border-gray-700"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
            <div className="relative w-full aspect-[4/3] bg-gray-800 rounded-t-lg overflow-hidden">
              {/* Loading skeleton */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />
              )}

              <Image
                src={imageError ? fallbackImage : image || fallbackImage}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                priority={index < 3} // Prioritize first 3 images
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true)
                  setImageLoaded(true)
                }}
              />

              {/* Category badge */}
              {category && (
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-black px-2 py-1 rounded text-xs font-medium">
                  {category}
                </div>
              )}
            </div>
          </motion.div>

          {/* Title and content below image - always visible */}
          <div className="p-4">
            <h3 className="text-white text-lg md:text-xl font-semibold tracking-tight leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
