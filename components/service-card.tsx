"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import OptimizedImage from "./optimized-image"

interface ServiceCardProps {
  title: string
  image: string
  slug: string
  index: number
  description?: string
}

export default function ServiceCard({ title, image, slug, index, description }: ServiceCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden group flex flex-col h-full rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
    >
      <Link href={`/services/${slug}`} className="block h-full">
        <div className="relative aspect-[4/3] w-full">
          <OptimizedImage
            src={image || "/placeholder.svg"}
            alt={title}
            type="medium"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 rounded-t-lg"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 rounded-t-lg">
            <div className="text-center px-4">
              <h3 className="text-white text-xl md:text-2xl font-normal tracking-tight">{title}</h3>
            </div>
          </div>
        </div>
        <div className="bg-cream p-6 flex-grow rounded-b-lg">
          <h3 className="text-lg sm:text-xl font-bold mb-2 text-navy">{title}</h3>
          {description && <p className="text-sm sm:text-base text-navy/80">{description}</p>}
        </div>
      </Link>
    </motion.div>
  )
}
