import { Client } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

function formatNotionId(id: string): string {
  const cleanId = id.replace(/-/g, "")
  return `${cleanId.slice(0, 8)}-${cleanId.slice(8, 12)}-${cleanId.slice(12, 16)}-${cleanId.slice(16, 20)}-${cleanId.slice(20, 32)}`
}

export const NOTION_DATABASE_ID = formatNotionId(process.env.NOTION_DATABASE_ID!)

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
    console.log("Fetching posts from database:", NOTION_DATABASE_ID)

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    })

    console.log("Found posts:", response.results.length)

    // Process posts WITHOUT fetching content for list view
    const posts = response.results.map((page: any) => {
      console.log("Processing page:", page.id)
      console.log("Page properties:", Object.keys(page.properties))

      const featuredImage = getImageUrl(page.properties["Featured Image"])
      const authorImage = getImageUrl(page.properties["Author Image"])

      console.log("Featured image URL:", featuredImage)
      console.log("Author image URL:", authorImage)

      return {
        id: page.id,
        title: page.properties.Title?.title?.[0]?.plain_text || "Untitled",
        slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
        excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
        content: "", // Empty for list view - don't fetch content here
        date: page.properties.Date?.date?.start || new Date().toISOString(),
        readTime: page.properties["Read Time"]?.rich_text?.[0]?.plain_text || "5 min read",
        author: page.properties.Author?.rich_text?.[0]?.plain_text || "Brad Raschke",
        authorImage: authorImage || "/images/brad-headshot.jpeg",
        authorTitle: page.properties["Author Title"]?.rich_text?.[0]?.plain_text || "Founder & Steward of Strategy",
        image: featuredImage || "/placeholder.svg?height=400&width=600&query=blog post featured image",
        category: page.properties.Category?.select?.name || "Uncategorized",
        published: page.properties.Published?.checkbox || false,
      }
    })

    const filteredPosts = posts.filter((post) => post.published && post.slug)
    console.log("Filtered posts:", filteredPosts.length)

    return filteredPosts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<NotionPost | null> {
  try {
    console.log("Fetching individual post:", slug)

    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    })

    if (response.results.length === 0) {
      console.log("No post found with slug:", slug)
      return null
    }

    const page = response.results[0] as any
    console.log("Found post, fetching content...")

    // Only fetch content for individual post view
    const content = await getPageContent(page.id)

    const featuredImage = getImageUrl(page.properties["Featured Image"])
    const authorImage = getImageUrl(page.properties["Author Image"])

    return {
      id: page.id,
      title: page.properties.Title?.title?.[0]?.plain_text || "Untitled",
      slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
      excerpt: page.properties.Excerpt?.rich_text?.[0]?.plain_text || "",
      content,
      date: page.properties.Date?.date?.start || new Date().toISOString(),
      readTime: page.properties["Read Time"]?.rich_text?.[0]?.plain_text || "5 min read",
      author: page.properties.Author?.rich_text?.[0]?.plain_text || "Brad Raschke",
      authorImage: authorImage || "/images/brad-headshot.jpeg",
      authorTitle: page.properties["Author Title"]?.rich_text?.[0]?.plain_text || "Founder & Steward of Strategy",
      image: featuredImage || "/placeholder.svg?height=400&width=600&query=blog post featured image",
      category: page.properties.Category?.select?.name || "Uncategorized",
      published: page.properties.Published?.checkbox || false,
    }
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

function getImageUrl(imageProperty: any): string | null {
  console.log("Processing image property:", imageProperty)

  if (!imageProperty?.files?.length) {
    console.log("No files found in image property")
    return null
  }

  const file = imageProperty.files[0]
  console.log("File type:", file.type)

  if (file.type === "file") {
    console.log("File URL:", file.file.url)
    return file.file.url
  } else if (file.type === "external") {
    console.log("External URL:", file.external.url)
    return file.external.url
  }

  console.log("Unknown file type")
  return null
}

async function getPageContent(pageId: string): Promise<string> {
  try {
    console.log("Fetching content for page:", pageId)

    const response = await notion.blocks.children.list({
      block_id: pageId,
      page_size: 100,
    })

    console.log("Found blocks:", response.results.length)

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

    console.log("Generated content length:", content.length)
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
        return text ? `<p>${text}</p>` : ""

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
