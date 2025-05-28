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
    return "/blog-featured-image.png"
  } catch (error) {
    console.error("Error extracting featured image:", error)
    return "/blog-featured-image.png"
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

// Enhanced function to convert Notion blocks to HTML with better formatting
function convertBlockToHtml(block: any): string {
  try {
    const { type } = block

    // Handle different block types
    switch (type) {
      case "paragraph":
        return `<p>${richTextToHtml(block.paragraph.rich_text)}</p>`

      case "heading_1":
        const h1Id = block.heading_1.rich_text
          .map((t: any) => t.plain_text)
          .join("")
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
        return `<h1 id="${h1Id}">${richTextToHtml(block.heading_1.rich_text)}</h1>`

      case "heading_2":
        const h2Id = block.heading_2.rich_text
          .map((t: any) => t.plain_text)
          .join("")
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
        return `<h2 id="${h2Id}">${richTextToHtml(block.heading_2.rich_text)}</h2>`

      case "heading_3":
        const h3Id = block.heading_3.rich_text
          .map((t: any) => t.plain_text)
          .join("")
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
        return `<h3 id="${h3Id}">${richTextToHtml(block.heading_3.rich_text)}</h3>`

      case "bulleted_list_item":
        return `<li>${richTextToHtml(block.bulleted_list_item.rich_text)}</li>`

      case "numbered_list_item":
        return `<li>${richTextToHtml(block.numbered_list_item.rich_text)}</li>`

      case "quote":
        return `<blockquote class="notion-quote">${richTextToHtml(block.quote.rich_text)}</blockquote>`

      case "code":
        return `<pre class="notion-code"><code class="language-${block.code.language || "plain"}">${richTextToHtml(block.code.rich_text)}</code></pre>`

      case "image":
        const imageUrl = block.image.type === "external" ? block.image.external.url : block.image.file.url
        const caption = block.image.caption?.length ? richTextToHtml(block.image.caption) : "Image"
        return `<figure class="notion-image"><img src="${imageUrl}" alt="${caption}" loading="lazy" />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`

      case "divider":
        return `<hr class="notion-hr" />`

      case "callout":
        const emoji = block.callout.icon?.type === "emoji" ? block.callout.icon.emoji : "💡"
        return `<div class="notion-callout"><div class="notion-callout-emoji">${emoji}</div><div class="notion-callout-text">${richTextToHtml(block.callout.rich_text)}</div></div>`

      case "bookmark":
        return `<a href="${block.bookmark.url}" target="_blank" rel="noopener noreferrer" class="notion-bookmark">${block.bookmark.url}</a>`

      case "table":
        // For tables, we'll just create an empty table container
        // The rows will be processed separately
        return `<div class="notion-table-container"><table class="notion-table"><tbody></tbody></table></div>`

      case "table_row":
        const cells = block.table_row.cells || []
        const isHeader = block.is_header || false
        const cellTag = isHeader ? "th" : "td"

        return `<tr>${cells.map((cell: any[]) => `<${cellTag}>${richTextToHtml(cell)}</${cellTag}>`).join("")}</tr>`

      case "column_list":
        return `<div class="notion-row"></div>`

      case "column":
        return `<div class="notion-column"></div>`

      case "toggle":
        return `<details class="notion-toggle"><summary>${richTextToHtml(block.toggle.rich_text)}</summary><div class="notion-toggle-content"></div></details>`

      case "to_do":
        const checked = block.to_do.checked ? "checked" : ""
        return `<div class="notion-to-do"><input type="checkbox" ${checked} disabled /><span>${richTextToHtml(block.to_do.rich_text)}</span></div>`

      case "embed":
        return `<div class="notion-embed"><iframe src="${block.embed.url}" frameborder="0" allowfullscreen></iframe></div>`

      case "video":
        const videoUrl = block.video.type === "external" ? block.video.external.url : block.video.file.url
        return `<div class="notion-video"><iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe></div>`

      case "file":
        const fileUrl = block.file.type === "external" ? block.file.external.url : block.file.file.url
        const fileName = block.file.caption?.length ? richTextToHtml(block.file.caption) : "File"
        return `<div class="notion-file"><a href="${fileUrl}" target="_blank" rel="noopener noreferrer">${fileName}</a></div>`

      case "pdf":
        const pdfUrl = block.pdf.type === "external" ? block.pdf.external.url : block.pdf.file.url
        return `<div class="notion-pdf"><iframe src="${pdfUrl}" frameborder="0"></iframe></div>`

      default:
        return `<div class="notion-unknown">Unsupported block type: ${type}</div>`
    }
  } catch (error) {
    console.error("Error converting block to HTML:", error, block)
    return `<div class="notion-error">Error rendering content</div>`
  }
}

// Enhanced helper function to convert rich text to HTML with better formatting
function richTextToHtml(richText: any[]): string {
  if (!richText || richText.length === 0) return ""

  return richText
    .map((text) => {
      if (!text || !text.plain_text) return ""

      let content = text.plain_text

      // Escape HTML characters
      content = content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

      // Apply formatting
      if (text.annotations) {
        if (text.annotations.bold) content = `<strong>${content}</strong>`
        if (text.annotations.italic) content = `<em>${content}</em>`
        if (text.annotations.strikethrough) content = `<del>${content}</del>`
        if (text.annotations.underline) content = `<u>${content}</u>`
        if (text.annotations.code) content = `<code>${content}</code>`
        if (text.annotations.color && text.annotations.color !== "default") {
          content = `<span class="notion-${text.annotations.color.replace("_background", "-bg")}">${content}</span>`
        }
      }

      // Apply link
      if (text.href) {
        content = `<a href="${text.href}" target="_blank" rel="noopener noreferrer">${content}</a>`
      }

      return content
    })
    .join("")
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

    // Try to fetch content with reduced page size
    let content = ""
    try {
      console.log("Attempting to fetch page content...")

      // Fetch blocks in smaller batches
      const blocks = []
      let cursor = undefined
      let hasMore = true

      while (hasMore) {
        try {
          const blockResponse = await notion.blocks.children.list({
            block_id: page.id,
            page_size: 10, // Reduced page size
            start_cursor: cursor,
          })

          blocks.push(...blockResponse.results)
          cursor = blockResponse.next_cursor
          hasMore = blockResponse.has_more && !!blockResponse.next_cursor

          console.log(`Fetched ${blockResponse.results.length} blocks, has more: ${hasMore}`)
        } catch (error) {
          console.error("Error fetching blocks batch:", error)
          hasMore = false // Stop on error
        }
      }

      console.log(`Total blocks fetched: ${blocks.length}`)

      // Convert blocks to HTML
      let htmlContent = ""
      let inBulletedList = false
      let inNumberedList = false
      let tableRows = []
      let inTable = false

      // Process blocks and handle special cases
      for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i]
        try {
          // Special handling for list items
          if (block.type === "bulleted_list_item") {
            if (!inBulletedList) {
              htmlContent += "<ul class='notion-list notion-list-bulleted'>"
              inBulletedList = true
            }
          } else if (inBulletedList) {
            htmlContent += "</ul>"
            inBulletedList = false
          }

          if (block.type === "numbered_list_item") {
            if (!inNumberedList) {
              htmlContent += "<ol class='notion-list notion-list-numbered'>"
              inNumberedList = true
            }
          } else if (inNumberedList) {
            htmlContent += "</ol>"
            inNumberedList = false
          }

          // Special handling for tables
          if (block.type === "table") {
            inTable = true
            tableRows = []

            // Try to fetch table rows directly
            try {
              if (block.has_children) {
                const tableResponse = await notion.blocks.children.list({
                  block_id: block.id,
                  page_size: 100, // Tables can have many rows
                })

                const hasHeader = block.table?.has_column_header || false

                // Start building the table
                htmlContent += `<div class="notion-table-container"><table class="notion-table">`

                // Process table rows
                if (tableResponse.results.length > 0) {
                  if (hasHeader && tableResponse.results.length > 0) {
                    // First row is header
                    htmlContent += `<thead>${convertBlockToHtml(tableResponse.results[0])}</thead><tbody>`

                    // Rest are body rows
                    for (let j = 1; j < tableResponse.results.length; j++) {
                      htmlContent += convertBlockToHtml(tableResponse.results[j])
                    }
                  } else {
                    // All rows are body rows
                    htmlContent += `<tbody>`
                    for (const row of tableResponse.results) {
                      htmlContent += convertBlockToHtml(row)
                    }
                  }

                  htmlContent += `</tbody></table></div>`
                } else {
                  // Empty table
                  htmlContent += `<tbody><tr><td>No data</td></tr></tbody></table></div>`
                }

                // Skip the table block since we've processed it
                inTable = false
                continue
              }
            } catch (tableError) {
              console.error("Error fetching table rows:", tableError)
              // Fall back to regular processing
              htmlContent += convertBlockToHtml(block)
              inTable = false
            }
          } else if (block.type === "table_row") {
            if (inTable) {
              tableRows.push(convertBlockToHtml(block))
            } else {
              // Orphaned table row, render it directly
              htmlContent += convertBlockToHtml(block)
            }
            continue
          }

          // Handle blocks with children (like toggle blocks)
          if (block.has_children && !inTable && block.type !== "table") {
            // Add the parent block
            const parentHtml = convertBlockToHtml(block)

            // For toggle blocks, we need to insert the content inside the details tag
            if (block.type === "toggle") {
              // Extract the opening tag, summary, and closing tags
              const detailsOpeningTag = parentHtml.substring(0, parentHtml.indexOf("<summary>") + 9)
              const summary = parentHtml.substring(
                parentHtml.indexOf("<summary>") + 9,
                parentHtml.indexOf("</summary>"),
              )
              const contentDiv = parentHtml.substring(
                parentHtml.indexOf("</summary>") + 10,
                parentHtml.indexOf("</details>"),
              )

              // Start building the toggle with the summary
              htmlContent += `${detailsOpeningTag}${summary}</summary><div class="notion-toggle-content">`

              // Try to fetch child blocks, but don't fail if we can't
              try {
                const childResponse = await notion.blocks.children.list({
                  block_id: block.id,
                  page_size: 10,
                })

                // Process child blocks
                for (const childBlock of childResponse.results) {
                  htmlContent += convertBlockToHtml(childBlock)
                }
              } catch (childError) {
                console.error(`Error fetching children for block ${block.id}:`, childError)
                htmlContent += `<p class="notion-error">Additional content could not be loaded.</p>`
              }

              // Close the toggle
              htmlContent += `</div></details>`
            } else {
              // For other block types, just add the HTML
              htmlContent += parentHtml
            }
          } else if (!inTable) {
            // Regular block without children
            htmlContent += convertBlockToHtml(block)
          }
        } catch (blockError) {
          console.error("Error processing block:", blockError)
          htmlContent += `<div class="notion-error">Error rendering content block</div>`
        }
      }

      // Close any open lists
      if (inBulletedList) htmlContent += "</ul>"
      if (inNumberedList) htmlContent += "</ol>"
      if (inTable && tableRows.length > 0) {
        htmlContent += `<div class="notion-table-container"><table class="notion-table"><tbody>${tableRows.join("")}</tbody></table></div>`
      }

      content = htmlContent || ""
      console.log("Content fetched successfully, length:", content.length)
    } catch (error) {
      console.error("Failed to fetch page content:", error)
      // Generate content from excerpt as fallback
      const excerpt = extractExcerpt(page.properties)
      const title = extractTitle(page.properties)
      content = `
        <h1>${title}</h1>
        <p class="lead">${excerpt}</p>
        <p>We're currently expanding this article with more detailed information. Please check back soon for the complete content.</p>
      `
    }

    const post = {
      id: page.id,
      title: extractTitle(page.properties),
      slug: extractSlug(page.properties),
      excerpt: extractExcerpt(page.properties),
      content: content,
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

// Process blocks to handle tables and nested structures
async function processBlocks(blocks: any[], pageId: string): Promise<any[]> {
  const processedBlocks = []

  for (const block of blocks) {
    processedBlocks.push(block)

    // Handle blocks with children
    if (block.has_children) {
      try {
        // Fetch children blocks
        const childBlocks = []
        let cursor = undefined
        let hasMore = true

        while (hasMore) {
          const response = await notion.blocks.children.list({
            block_id: block.id,
            page_size: 10,
            start_cursor: cursor,
          })

          childBlocks.push(...response.results)
          cursor = response.next_cursor
          hasMore = response.has_more && !!response.next_cursor
        }

        // Process child blocks recursively
        const processedChildBlocks = await processBlocks(childBlocks, pageId)

        // Add child blocks to the result
        processedBlocks.push(...processedChildBlocks)
      } catch (error) {
        console.error("Error fetching child blocks:", error)
      }
    }
  }

  return processedBlocks
}

// Additional functions for compatibility with other parts of the app
export async function getAllPosts() {
  const posts = await getBlogPosts()
  return posts
}

export async function getPostBySlug(slug: string) {
  return getBlogPost(slug)
}

export async function getPageContent(pageId: string): Promise<string> {
  try {
    console.log(`Fetching content for page: ${pageId}`)
    let allBlocks: any[] = []
    let hasMore = true
    let cursor: string | undefined = undefined

    // Fetch blocks in smaller batches with pagination
    while (hasMore) {
      console.log(`Fetching batch of blocks${cursor ? " with cursor" : ""}`)
      const response = await notion.blocks.children.list({
        block_id: pageId,
        page_size: 10, // Reduced page size
        start_cursor: cursor,
      })

      allBlocks = [...allBlocks, ...response.results]
      hasMore = response.has_more
      cursor = response.next_cursor || undefined

      console.log(`Fetched ${response.results.length} blocks, has more: ${hasMore}`)
    }

    console.log(`Total blocks fetched: ${allBlocks.length}`)

    // Process blocks to HTML
    let html = ""
    let inBulletedList = false
    let inNumberedList = false

    for (const block of allBlocks) {
      try {
        // Handle list items specially to group them
        if (block.type === "bulleted_list_item") {
          if (!inBulletedList) {
            html += "<ul class='notion-list notion-list-bulleted'>"
            inBulletedList = true
          }
        } else if (inBulletedList) {
          html += "</ul>"
          inBulletedList = false
        }

        if (block.type === "numbered_list_item") {
          if (!inNumberedList) {
            html += "<ol class='notion-list notion-list-numbered'>"
            inNumberedList = true
          }
        } else if (inNumberedList) {
          html += "</ol>"
          inNumberedList = false
        }

        // Convert block to HTML
        html += convertBlockToHtml(block)
      } catch (blockError) {
        console.error("Error processing block:", blockError)
        html += "<div>Error rendering content block</div>"
      }
    }

    // Close any open lists
    if (inBulletedList) html += "</ul>"
    if (inNumberedList) html += "</ol>"

    return html || "<p>No content available.</p>"
  } catch (error) {
    console.error("Error fetching page content:", error)
    // Return a fallback message that's more user-friendly
    return `
      <div class="error-fallback">
        <h2>Content is being prepared</h2>
        <p>We're currently working on this content. Please check back soon!</p>
      </div>
    `
  }
}

// Generate content from excerpt if page content fetch fails
export function generateContentFromExcerpt(excerpt: string, title: string): string {
  return `
    <div class="generated-content">
      <h1>${title}</h1>
      <p class="lead">${excerpt}</p>
      <p>We're currently expanding this article with more detailed information. Please check back soon for the complete content.</p>
      <div class="placeholder-content">
        <p>In the meantime, you might be interested in exploring our other articles or resources that cover related topics.</p>
      </div>
    </div>
  `
}
