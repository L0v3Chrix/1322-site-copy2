import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

/**
 * Converts a Notion block to HTML
 * @param block The Notion block to convert
 * @returns HTML string representation of the block
 */
export function convertBlockToHtml(block: BlockObjectResponse): string {
  try {
    // Handle different block types
    switch (block.type) {
      case "paragraph":
        if (!block.paragraph.rich_text.length) return "<p></p>"
        return `<p>${block.paragraph.rich_text.map((text) => formatRichText(text)).join("")}</p>`

      case "heading_1":
        return `<h1>${block.heading_1.rich_text.map((text) => formatRichText(text)).join("")}</h1>`

      case "heading_2":
        return `<h2>${block.heading_2.rich_text.map((text) => formatRichText(text)).join("")}</h2>`

      case "heading_3":
        return `<h3>${block.heading_3.rich_text.map((text) => formatRichText(text)).join("")}</h3>`

      case "bulleted_list_item":
        return `<li>${block.bulleted_list_item.rich_text.map((text) => formatRichText(text)).join("")}</li>`

      case "numbered_list_item":
        return `<li>${block.numbered_list_item.rich_text.map((text) => formatRichText(text)).join("")}</li>`

      case "to_do":
        const checked = block.to_do.checked ? "checked" : ""
        return `<div class="to-do"><input type="checkbox" ${checked} disabled /><span>${block.to_do.rich_text.map((text) => formatRichText(text)).join("")}</span></div>`

      case "toggle":
        return `<details><summary>${block.toggle.rich_text.map((text) => formatRichText(text)).join("")}</summary><div class="toggle-content"></div></details>`

      case "child_page":
        return `<div class="child-page">${block.child_page.title}</div>`

      case "image":
        const imageUrl = block.image.type === "external" ? block.image.external.url : block.image.file.url
        const caption = block.image.caption?.length
          ? block.image.caption.map((text) => formatRichText(text)).join("")
          : ""
        return `<figure><img src="${imageUrl}" alt="${caption}" />${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`

      case "divider":
        return "<hr />"

      case "quote":
        return `<blockquote>${block.quote.rich_text.map((text) => formatRichText(text)).join("")}</blockquote>`

      case "code":
        return `<pre><code class="language-${block.code.language}">${block.code.rich_text.map((text) => formatRichText(text)).join("")}</code></pre>`

      case "callout":
        const emoji = block.callout.icon?.type === "emoji" ? block.callout.icon.emoji : ""
        return `<div class="callout">${emoji ? `<div class="callout-emoji">${emoji}</div>` : ""}<div class="callout-text">${block.callout.rich_text.map((text) => formatRichText(text)).join("")}</div></div>`

      case "bookmark":
        return `<a href="${block.bookmark.url}" target="_blank" class="bookmark">${block.bookmark.url}</a>`

      case "table":
        // Table blocks need their children to be processed separately
        return "<table><tbody></tbody></table>"

      case "column_list":
        return '<div class="column-list"></div>'

      case "column":
        return '<div class="column"></div>'

      default:
        return `<div>Unsupported block type: ${block.type}</div>`
    }
  } catch (error) {
    console.error("Error converting block to HTML:", error)
    return "<div>Error rendering content</div>"
  }
}

/**
 * Formats Notion rich text to HTML
 * @param richText The rich text object from Notion
 * @returns Formatted HTML string
 */
function formatRichText(richText: any): string {
  if (!richText || !richText.text) return ""

  let text = richText.text.content

  // Handle links
  if (richText.href) {
    text = `<a href="${richText.href}" target="_blank">${text}</a>`
  }

  // Handle annotations
  if (richText.annotations) {
    if (richText.annotations.bold) text = `<strong>${text}</strong>`
    if (richText.annotations.italic) text = `<em>${text}</em>`
    if (richText.annotations.strikethrough) text = `<s>${text}</s>`
    if (richText.annotations.underline) text = `<u>${text}</u>`
    if (richText.annotations.code) text = `<code>${text}</code>`
    if (richText.annotations.color && richText.annotations.color !== "default") {
      text = `<span style="color: ${richText.annotations.color}">${text}</span>`
    }
  }

  return text
}
