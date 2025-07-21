import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, firstName, lastName, company, jobTitle } = body

    if (!email || !firstName || !lastName || !company || !jobTitle) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Klaviyo API key (Private API Key)
    const klaviyoApiKey = process.env.KLAVIYO_PRIVATE_API_KEY
    const listId = process.env.KLAVIYO_LIST_ID

    if (!klaviyoApiKey || !listId) {
      console.error("Klaviyo API key or list ID is missing.")
      return new NextResponse("Klaviyo API key or list ID is missing", { status: 500 })
    }

    // 1. Fetch existing profile (if exists) to merge tags
    let existingTags: string[] = []
    let profileId: string | null = null
    try {
      const profileRes = await fetch(`https://a.klaviyo.com/api/v1/person/search?email=${encodeURIComponent(email)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
        },
      })

      if (profileRes.ok) {
        const profileData = await profileRes.json()
        if (profileData && profileData.id) {
          profileId = profileData.id
          existingTags = profileData.tags || []
        }
      }
    } catch (e) {
      // It’s OK if not found; we’re creating a new contact
    }

    // 2. Merge tags (dedupe)
    const newTags = ["webinar-registrant", "website-lead", "main_website_form"]
    const allTags = Array.from(new Set([...(existingTags || []), ...newTags]))

    // 3. Prepare contact data
    const contactData = {
      profiles: [
        {
          email,
          first_name: firstName,
          last_name: lastName,
          organization: company,
          title: jobTitle,
          $consent: "web",
          tags: allTags,
        },
      ],
    }

    // 4. POST to Klaviyo List API
    const klaviyoApiUrl = `https://a.klaviyo.com/api/v2/list/${listId}/members`
    const response = await fetch(klaviyoApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Klaviyo-API-Key ${klaviyoApiKey}`,
      },
      body: JSON.stringify(contactData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Klaviyo API error:", errorData)
      return new NextResponse(`Failed to subscribe to Klaviyo list: ${response.statusText}`, {
        status: response.status,
      })
    }

    return NextResponse.json({ message: "Successfully subscribed!" })

  } catch (error: any) {
    console.error("Error subscribing to Klaviyo list:", error)
    return new NextResponse(error.message || "An error occurred", { status: 500 })
  }
}
