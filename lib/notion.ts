import { Client } from "@notionhq/client"

// Create notion client with better error handling
let notion: Client

try {
  notion = new Client({
    auth: process.env.NOTION_TOKEN,
  })
  console.log("Notion client initialized successfully")
} catch (error) {
  console.error("Failed to initialize Notion client:", error)
  throw error
}

function formatNotionId(id: string): string {
  const cleanId = id.replace(/-/g, "")
  return `${cleanId.slice(0, 8)}-${cleanId.slice(8, 12)}-${cleanId.slice(12, 16)}-${cleanId.slice(16, 20)}-${cleanId.slice(20, 32)}`
}

// Use the environment variable for database ID
export const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID || formatNotionId("20074dd017518166a4fef44e7233a282")

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
    console.log("=== BLOG POSTS FETCH ===")
    console.log("Token exists:", !!process.env.NOTION_TOKEN)
    console.log("Token length:", process.env.NOTION_TOKEN?.length || 0)
    console.log("Database ID:", NOTION_DATABASE_ID)

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    })

    console.log("Found total posts:", response.results.length)

    const posts = response.results
      .map((page: any) => {
        try {
          const post = {
            id: page.id,
            title: extractTitle(page.properties),
            slug: extractSlug(page.properties),
            excerpt: extractExcerpt(page.properties),
            content: "",
            date: extractDate(page.properties),
            readTime: extractReadTime(page.properties),
            author: extractAuthor(page.properties),
            authorImage: extractAuthorImage(page.properties),
            authorTitle: extractAuthorTitle(page.properties),
            image: extractFeaturedImage(page.properties),
            category: extractCategory(page.properties),
            published: extractPublished(page.properties),
          }

          return post
        } catch (error) {
          console.error("Error processing post:", error)
          return null
        }
      })
      .filter((post): post is NotionPost => post !== null)

    const publishedPosts = posts.filter((post) => post.slug && post.published)
    console.log("Published posts with slugs:", publishedPosts.length)

    return publishedPosts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      code: error.code,
    })
    return []
  }
}

// Helper functions with better error handling
function extractTitle(properties: any): string {
  try {
    const titleProps = ["Title", "title", "Name", "name"]
    for (const prop of titleProps) {
      if (properties[prop]?.title?.[0]?.plain_text) {
        return properties[prop].title[0].plain_text
      }
    }
    return "Untitled"
  } catch (error) {
    console.error("Error extracting title:", error)
    return "Untitled"
  }
}

function extractSlug(properties: any): string {
  try {
    const slugProps = ["Slug", "slug", "URL", "url", "Link", "link"]
    for (const prop of slugProps) {
      if (properties[prop]?.rich_text?.[0]?.plain_text) {
        return properties[prop].rich_text[0].plain_text
      }
    }
    return ""
  } catch (error) {
    console.error("Error extracting slug:", error)
    return ""
  }
}

function extractExcerpt(properties: any): string {
  try {
    const excerptProps = ["Excerpt", "excerpt", "Summary", "summary", "Description", "description"]
    for (const prop of excerptProps) {
      if (properties[prop]?.rich_text?.[0]?.plain_text) {
        return properties[prop].rich_text[0].plain_text
      }
    }
    return ""
  } catch (error) {
    console.error("Error extracting excerpt:", error)
    return ""
  }
}

function extractDate(properties: any): string {
  try {
    const dateProps = ["Date", "date", "Published Date", "published date", "Created", "created"]
    for (const prop of dateProps) {
      if (properties[prop]?.date?.start) {
        return properties[prop].date.start
      }
    }
    return new Date().toISOString()
  } catch (error) {
    console.error("Error extracting date:", error)
    return new Date().toISOString()
  }
}

function extractReadTime(properties: any): string {
  try {
    const readTimeProps = ["Read Time", "read time", "Reading Time", "reading time"]
    for (const prop of readTimeProps) {
      if (properties[prop]?.rich_text?.[0]?.plain_text) {
        return properties[prop].rich_text[0].plain_text
      }
    }
    return "5 min read"
  } catch (error) {
    console.error("Error extracting read time:", error)
    return "5 min read"
  }
}

function extractAuthor(properties: any): string {
  try {
    const authorProps = ["Author", "author", "Writer", "writer"]
    for (const prop of authorProps) {
      if (properties[prop]?.rich_text?.[0]?.plain_text) {
        return properties[prop].rich_text[0].plain_text
      }
      if (properties[prop]?.select?.name) {
        return properties[prop].select.name
      }
    }
    return "Brad Raschke"
  } catch (error) {
    console.error("Error extracting author:", error)
    return "Brad Raschke"
  }
}

function extractAuthorImage(properties: any): string {
  try {
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
  } catch (error) {
    console.error("Error extracting author image:", error)
    return "/images/brad-headshot.jpeg"
  }
}

function extractAuthorTitle(properties: any): string {
  try {
    const authorTitleProps = ["Author Title", "author title", "Position", "position", "Role", "role"]
    for (const prop of authorTitleProps) {
      if (properties[prop]?.rich_text?.[0]?.plain_text) {
        return properties[prop].rich_text[0].plain_text
      }
    }
    return "Founder & Steward of Strategy"
  } catch (error) {
    console.error("Error extracting author title:", error)
    return "Founder & Steward of Strategy"
  }
}

function extractFeaturedImage(properties: any): string {
  try {
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
  } catch (error) {
    console.error("Error extracting featured image:", error)
    return "/placeholder.svg?height=400&width=600&query=blog post featured image"
  }
}

function extractCategory(properties: any): string {
  try {
    const categoryProps = ["Category", "category", "Tag", "tag", "Type", "type"]

    for (const prop of categoryProps) {
      if (properties[prop]?.select?.name) {
        return properties[prop].select.name
      }

      if (properties[prop]?.multi_select?.length > 0) {
        return properties[prop].multi_select[0].name
      }

      if (properties[prop]?.rich_text?.[0]?.plain_text) {
        return properties[prop].rich_text[0].plain_text
      }
    }

    return "Uncategorized"
  } catch (error) {
    console.error("Error extracting category:", error)
    return "Uncategorized"
  }
}

function extractPublished(properties: any): boolean {
  try {
    const publishedProps = ["Published", "published", "Status", "status", "Public", "public"]
    for (const prop of publishedProps) {
      if (properties[prop]?.checkbox !== undefined) {
        return properties[prop].checkbox
      }
      if (properties[prop]?.select?.name) {
        const status = properties[prop].select.name.toLowerCase()
        return ["published", "live", "public", "yes", "true"].includes(status)
      }
    }
    return true
  } catch (error) {
    console.error("Error extracting published status:", error)
    return true
  }
}

export async function getBlogPost(slug: string): Promise<NotionPost | null> {
  try {
    console.log("=== SINGLE BLOG POST FETCH ===")
    console.log("Searching for blog post with slug:", slug)
    console.log("Token exists:", !!process.env.NOTION_TOKEN)
    console.log("Database ID:", NOTION_DATABASE_ID)

    let response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Slug",
        rich_text: {
          equals: slug,
        },
      },
    })

    console.log("Initial search results:", response.results.length)

    if (response.results.length === 0) {
      const slugProps = ["slug", "URL", "url", "Link", "link"]
      for (const prop of slugProps) {
        try {
          console.log(`Trying property: ${prop}`)
          response = await notion.databases.query({
            database_id: NOTION_DATABASE_ID,
            filter: {
              property: prop,
              rich_text: {
                equals: slug,
              },
            },
          })
          console.log(`Results for ${prop}:`, response.results.length)
          if (response.results.length > 0) break
        } catch (error) {
          console.error(`Error querying with property ${prop}:`, error)
          continue
        }
      }
    }

    if (response.results.length === 0) {
      console.log("No blog post found with slug:", slug)
      return null
    }

    const page = response.results[0] as any
    console.log("Found page with ID:", page.id)

    // Test if we can access the page first
    try {
      console.log("Testing page access...")
      const testResponse = await notion.pages.retrieve({ page_id: page.id })
      console.log("Page access successful")
    } catch (pageError) {
      console.error("Cannot access page:", pageError)
      throw new Error(`Page access denied: ${pageError.message}`)
    }

    // Get the actual content from Notion blocks
    const content = await getPageContent(page.id)

    const post = {
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

    return post
  } catch (error) {
    console.error("Error fetching blog post:", error)
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      code: error.code,
      stack: error.stack,
    })
    return null
  }
}

async function getPageContent(pageId: string): Promise<string> {
  try {
    console.log("=== FETCHING PAGE CONTENT ===")
    console.log("Page ID:", pageId)

    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    })

    console.log("Blocks API response successful")
    console.log("Found blocks:", response.results.length)

    if (response.results.length === 0) {
      return "<p>No content blocks found in this article.</p>"
    }

    let content = ""
    let listItems: string[] = []
    let currentListType = ""

    for (const block of response.results) {
      try {
        console.log("Processing block type:", block.type)
        const blockHtml = await blockToHtml(block as any)

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
          if (listItems.length > 0) {
            content += `<${currentListType}>${listItems.join("")}</${currentListType}>`
            listItems = []
            currentListType = ""
          }
          content += blockHtml
        }
      } catch (error) {
        console.error("Error processing block:", error)
        continue
      }
    }

    if (listItems.length > 0) {
      content += `<${currentListType}>${listItems.join("")}</${currentListType}>`
    }

    console.log("Content generation complete, length:", content.length)
    return content || "<p>No content available.</p>"
  } catch (error) {
    console.error("Error fetching page content:", error)
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      code: error.code,
      name: error.name,
    })
    throw error
  }
}

async function blockToHtml(block: any): Promise<string> {
  const { type } = block

  try {
    switch (type) {
      case "paragraph":
        const text = block.paragraph?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return text ? `<p>${text}</p>` : ""

      case "heading_1":
        const h1Text = block.heading_1?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return h1Text ? `<h1>${h1Text}</h1>` : ""

      case "heading_2":
        const h2Text = block.heading_2?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return h2Text ? `<h2>${h2Text}</h2>` : ""

      case "heading_3":
        const h3Text = block.heading_3?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return h3Text ? `<h3>${h3Text}</h3>` : ""

      case "bulleted_list_item":
        const bulletText = block.bulleted_list_item?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return bulletText ? `<li>${bulletText}</li>` : ""

      case "numbered_list_item":
        const numberedText = block.numbered_list_item?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return numberedText ? `<li>${numberedText}</li>` : ""

      case "quote":
        const quoteText = block.quote?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        return quoteText ? `<blockquote><p>${quoteText}</p></blockquote>` : ""

      case "code":
        const codeText = block.code?.rich_text?.map((t: any) => t.plain_text).join("") || ""
        const language = block.code?.language || ""
        return `<pre><code class="language-${language}">${codeText}</code></pre>`

      case "image":
        const imageUrl = block.image?.file?.url || block.image?.external?.url
        const caption = block.image?.caption?.map((t: any) => t.plain_text).join("") || ""
        return imageUrl ? `<img src="${imageUrl}" alt="${caption}" style="max-width: 100%; height: auto;" />` : ""

      case "divider":
        return "<hr />"

      case "callout":
        const calloutText = block.callout?.rich_text?.map((t: any) => richTextToHtml(t)).join("") || ""
        const emoji = block.callout?.icon?.emoji || "💡"
        return `<div class="callout"><span class="callout-icon">${emoji}</span><p>${calloutText}</p></div>`

      default:
        console.log("Unsupported block type:", type)
        return ""
    }
  } catch (error) {
    console.error(`Error processing block type ${type}:`, error)
    return ""
  }
}

function richTextToHtml(richText: any): string {
  try {
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
  } catch (error) {
    console.error("Error processing rich text:", error)
    return richText?.plain_text || ""
  }
}
