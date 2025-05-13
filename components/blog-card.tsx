"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlogCardProps {
  title: string
  image: string
  slug: string
  index: number
}

export default function BlogCard({ title, image, slug, index }: BlogCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden group rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.7 }}>
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={450}
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          </motion.div>
          <motion.div
            className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 flex items-center justify-center group-hover:opacity-100 rounded-lg"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.h3
              className="text-white text-xl md:text-2xl font-normal tracking-tight px-4 text-center"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}
