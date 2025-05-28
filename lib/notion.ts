import { Client } from "@notionhq/client"

// Use ONLY the new token, ignoring any environment variables
const notion = new Client({
  auth: "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",
})

function formatNotionId(id: string): string {
  const cleanId = id.replace(/-/g, "")
  return `${cleanId.slice(0, 8)}-${cleanId.slice(8, 12)}-${cleanId.slice(12, 16)}-${cleanId.slice(16, 20)}-${cleanId.slice(20, 32)}`
}

// Use ONLY the new database ID, ignoring any environment variables
export const NOTION_DATABASE_ID = formatNotionId("20074dd017518166a4fef44e7233a282")

export interface NotionPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  author: string
  authorImage: string
  authorTitle: string
  image: string
  category: string
  published: boolean
}

export async function getBlogPosts(): Promise<NotionPost[]> {
  try {
    console.log("Fetching from database ID:", NOTION_DATABASE_ID)

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      // Remove the filter initially to see all posts
    })

    console.log("Found total posts:", response.results.length)

    // Process all posts without filtering by published status initially
    const posts = response.results.map((page: any) => {
      // Log the properties to debug
      console.log("Post properties:", Object.keys(page.properties))

      const post = {
        id: page.id,
        title: extractTitle(page.properties),
        slug: extractSlug(page.properties),
        excerpt: extractExcerpt(page.properties),
        content: "", // Don't fetch content for list view
        date: extractDate(page.properties),
        readTime: extractReadTime(page.properties),
        author: extractAuthor(page.properties),
        authorImage: extractAuthorImage(page.properties),
        authorTitle: extractAuthorTitle(page.properties),
        image: extractFeaturedImage(page.properties),
        category: extractCategory(page.properties),
        published: extractPublished(page.properties),
      }

      console.log("Processed post:", post.title, "Category:", post.category, "Published:", post.published)
      return post
    })

    // Filter posts that have a slug and are published
    const publishedPosts = posts.filter((post) => post.slug && post.published)
    console.log("Published posts with slugs:", publishedPosts.length)

    return publishedPosts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

// Helper functions to extract properties with flexible property names
function extractTitle(properties: any): string {
  // Try common title property names
  const titleProps = ["Title", "title", "Name", "name"]
  for (const prop of titleProps) {
    if (properties[prop]?.title?.[0]?.plain_text) {
      return properties[prop].title[0].plain_text
    }
  }
  return "Untitled"
}

function extractSlug(properties: any): string {
  // Try common slug property names
  const slugProps = ["Slug", "slug", "URL", "url", "Link", "link"]
  for (const prop of slugProps) {
    if (properties[prop]?.rich_text?.[0]?.plain_text) {
      return properties[prop].rich_text[0].plain_text
    }
  }
  return ""
}

function extractExcerpt(properties: any): string {
  // Try common excerpt property names
  const excerptProps = ["Excerpt", "excerpt", "Summary", "summary", "Description", "description"]
  for (const prop of excerptProps) {
    if (properties[prop]?.rich_text?.[0]?.plain_text) {
      return properties[prop].rich_text[0].plain_text
    }
  }
  return ""
}

function extractDate(properties: any): string {
  // Try common date property names
  const dateProps = ["Date", "date", "Published Date", "published date", "Created", "created"]
  for (const prop of dateProps) {
    if (properties[prop]?.date?.start) {
      return properties[prop].date.start
    }
  }
  return new Date().toISOString()
}

function extractReadTime(properties: any): string {
  // Try common read time property names
  const readTimeProps = ["Read Time", "read time", "Reading Time", "reading time"]
  for (const prop of readTimeProps) {
    if (properties[prop]?.rich_text?.[0]?.plain_text) {
      return properties[prop].rich_text[0].plain_text
    }
  }
  return "5 min read"
}

function extractAuthor(properties: any): string {
  // Try common author property names
  const authorProps = ["Author", "author", "Writer", "writer"]
  for (const prop of authorProps) {
    if (properties[prop]?.rich_text?.[0]?.plain_text) {
      return properties[prop].rich_text[0].plain_text
    }
    // Also check for select type
    if (properties[prop]?.select?.name) {
      return properties[prop].select.name
    }
  }
  return "Brad Raschke"
}

function extractAuthorImage(properties: any): string {
  // Try common author image property names
  const authorImageProps = ["Author Image", "author image", "Profile Picture", "profile picture"]
  for (const prop of authorImageProps) {
    if (properties[prop]?.files?.[0]) {
      const file = properties[prop].files[0]
      if (file.type === "file") {
        return file.file.url
      } else if (file.type === "external") {
        return file.external.url
      }
    }
  }
  return "/images/brad-headshot.jpeg"
}

function extractAuthorTitle(properties: any): string {
  // Try common author title property names
  const authorTitleProps = ["Author Title", "author title", "Position", "position", "Role", "role"]
  for (const prop of authorTitleProps) {
    if (properties[prop]?.rich_text?.[0]?.plain_text) {
      return properties[prop].rich_text[0].plain_text
    }
  }
  return "Founder & Steward of Strategy"
}

function extractFeaturedImage(properties: any): string {
  // Try common featured image property names
  const imageProps = ["Featured Image", "featured image", "Cover", "cover", "Image", "image"]
  for (const prop of imageProps) {
    if (properties[prop]?.files?.[0]) {
      const file = properties[prop].files[0]
      if (file.type === "file") {
        return file.file.url
      } else if (file.type === "external") {
        return file.external.url
      }
    }
  }
  return "/placeholder.svg?height=400&width=600&query=blog post featured image"
}

function extractCategory(properties: any): string {
  // Try common category property names
  const categoryProps = ["Category", "category", "Tag", "tag", "Type", "type"]

  for (const prop of categoryProps) {
    // Check for select type
    if (properties[prop]?.select?.name) {
      return properties[prop].select.name
    }

    // Check for multi-select type (take first value)
    if (properties[prop]?.multi_select?.length > 0) {
      return properties[prop].multi_select[0].name
    }

    // Check for rich text type
    if (properties[prop]?.rich_text?.[0]?.plain_text) {
      return properties[prop].rich_text[0].plain_text
    }
  }

  return "Uncategorized"
}

function extractPublished(properties: any): boolean {
  // Try common published property names
  const publishedProps = ["Published", "published", "Status", "status", "Public", "public"]
  for (const prop of publishedProps) {
    // Check for checkbox type
    if (properties[prop]?.checkbox !== undefined) {
      return properties[prop].checkbox
    }
    // Check for select type with values like "Published", "Live", etc.
    if (properties[prop]?.select?.name) {
      const status = properties[prop].select.name.toLowerCase()
      return ["published", "live", "public", "yes", "true"].includes(status)
    }
  }
  // Default to true to show all posts if no published property is found
  return true
}

export async function getBlogPost(slug: string): Promise<NotionPost | null> {
  try {
    // First try to find by slug
    let response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })

    // If not found, try alternative property names
    if (response.results.length === 0) {
      const slugProps = ["slug", "URL", "url", "Link", "link"]
      for (const prop of slugProps) {
        response = await notion.databases.query({
          database_id: NOTION_DATABASE_ID,
          filter: {
            property: prop,
            rich_text: {
              equals: slug,
            },
          },
        })
        if (response.results.length > 0) break
      }
    }

    if (response.results.length === 0) {
      return null
    }

    const page = response.results[0] as any
    const content = await getPageContent(page.id)

    return {
      id: page.id,
      title: extractTitle(page.properties),
      slug: extractSlug(page.properties),
      excerpt: extractExcerpt(page.properties),
      content,
      date: extractDate(page.properties),
      readTime: extractReadTime(page.properties),
      author: extractAuthor(page.properties),
      authorImage: extractAuthorImage(page.properties),
      authorTitle: extractAuthorTitle(page.properties),
      image: extractFeaturedImage(page.properties),
      category: extractCategory(page.properties),
      published: extractPublished(page.properties),
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

async function getPageContent(pageId: string): Promise<string> {
  try {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    })

    let content = ""
    let listItems: string[] = []
    let currentListType = ""

    for (const block of response.results) {
      const blockHtml = await blockToHtml(block as any)

      // Handle list grouping
      if (block.type === "bulleted_list_item") {
        if (currentListType !== "ul") {
          if (listItems.length > 0) {
            content += `<${currentListType}>${listItems.join("")}</${currentListType}>`
            listItems = []
          }
          currentListType = "ul"
        }
        listItems.push(blockHtml)
      } else if (block.type === "numbered_list_item") {
        if (currentListType !== "ol") {
          if (listItems.length > 0) {
            content += `<${currentListType}>${listItems.join("")}</${currentListType}>`
            listItems = []
          }
          currentListType = "ol"
        }
        listItems.push(blockHtml)
      } else {
        // Close any open list
        if (listItems.length > 0) {
          content += `<${currentListType}>${listItems.join("")}</${currentListType}>`
          listItems = []
          currentListType = ""
        }
        content += blockHtml
      }
    }

    // Close any remaining list
    if (listItems.length > 0) {
      content += `<${currentListType}>${listItems.join("")}</${currentListType}>`
    }

    return content || "<p>No content available.</p>"
  } catch (error) {
    console.error("Error fetching page content:", error)
    return "<p>Content could not be loaded.</p>"
  }
}

async function blockToHtml(block: any): Promise<string> {
  const { type } = block

  try {
    switch (type) {
      case "paragraph":
        const text = block.paragraph.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return text ? `<p>${text}</p>` : "<p></p>"

      case "heading_1":
        const h1Text = block.heading_1.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return `<h1>${h1Text}</h1>`

      case "heading_2":
        const h2Text = block.heading_2.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return `<h2>${h2Text}</h2>`

      case "heading_3":
        const h3Text = block.heading_3.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return `<h3>${h3Text}</h3>`

      case "bulleted_list_item":
        const bulletText = block.bulleted_list_item.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return `<li>${bulletText}</li>`

      case "numbered_list_item":
        const numberedText = block.numbered_list_item.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return `<li>${numberedText}</li>`

      case "quote":
        const quoteText = block.quote.rich_text.map((t: any) => richTextToHtml(t)).join("")
        return `<blockquote><p>${quoteText}</p></blockquote>`

      case "code":
        const codeText = block.code.rich_text.map((t: any) => t.plain_text).join("")
        const language = block.code.language || ""
        return `<pre><code class="language-${language}">${codeText}</code></pre>`

      case "image":
        const imageUrl = block.image.file?.url || block.image.external?.url
        const caption = block.image.caption?.map((t: any) => t.plain_text).join("") || ""
        return imageUrl ? `<img src="${imageUrl}" alt="${caption}" style="max-width: 100%; height: auto;" />` : ""

      case "divider":
        return "<hr />"

      case "callout":
        const calloutText = block.callout.rich_text.map((t: any) => richTextToHtml(t)).join("")
        const emoji = block.callout.icon?.emoji || "💡"
        return `<div class="callout"><span class="callout-icon">${emoji}</span><p>${calloutText}</p></div>`

      default:
        return ""
    }
  } catch (error) {
    console.error(`Error processing block type ${type}:`, error)
    return ""
  }
}

function richTextToHtml(richText: any): string {
  if (!richText?.plain_text) return ""

  let html = richText.plain_text

  if (richText.annotations?.bold) {
    html = `<strong>${html}</strong>`
  }
  if (richText.annotations?.italic) {
    html = `<em>${html}</em>`
  }
  if (richText.annotations?.strikethrough) {
    html = `<del>${html}</del>`
  }
  if (richText.annotations?.underline) {
    html = `<u>${html}</u>`
  }
  if (richText.annotations?.code) {
    html = `<code>${html}</code>`
  }
  if (richText.href) {
    html = `<a href="${richText.href}" target="_blank" rel="noopener noreferrer">${html}</a>`
  }

  return html
}
