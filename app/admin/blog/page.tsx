"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BlogAdmin() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImage(file)

      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      // This is a placeholder for actual API integration
      // In a real implementation, you would:
      // 1. Upload the image to a storage service
      // 2. Send the blog post data to your API

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setMessage({
        type: "success",
        text: "Blog post created successfully! In a real implementation, this would be saved to your CMS.",
      })

      // Reset form
      setTitle("")
      setContent("")
      setImage(null)
      setPreview(null)
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-navy hover:text-copper transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-normal mb-8">Blog Post Admin</h1>

        {message && (
          <div
            className={`p-4 mb-6 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
          <div>
            <label htmlFor="title" className="block mb-2 font-medium">
              Post Title
            </label>
            <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} required className="w-full" />
          </div>

          <div>
            <label htmlFor="image" className="block mb-2 font-medium">
              Featured Image
            </label>
            <Input id="image" type="file" accept="image/*" onChange={handleImageChange} className="w-full" />
            {preview && (
              <div className="mt-2 relative h-48 w-full rounded overflow-hidden">
                <img src={preview || "/placeholder.svg"} alt="Preview" className="object-cover w-full h-full" />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block mb-2 font-medium">
              Content
            </label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="btn-primary">
            {isSubmitting ? "Publishing..." : "Publish Post"}
          </Button>
        </form>
      </div>
    </div>
  )
}
