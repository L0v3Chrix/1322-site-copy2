import { getBlogPosts } from "@/lib/notion"
import { BlogClient } from "./blog-client"

// Force revalidation on every request
export const revalidate = 0

export default async function BlogPage() {
  const posts = await getBlogPosts()

  return <BlogClient posts={posts} />
}
