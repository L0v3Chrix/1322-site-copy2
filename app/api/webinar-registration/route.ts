import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, firstName, lastName, company, jobTitle } = body

    if (!email || !firstName || !lastName || !company || !jobTitle) {
      return new NextResponse("Missing required fields", { status: 400 })
    }

    // Klaviyo API endpoint for adding a list
    const klaviyoApiUrl = `https://a.klaviyo.com/api/v2/list/${process.env.KLAVIYO_LIST_ID}/members`

    // Klaviyo API key (Private API Key)
    const klaviyoApiKey = process.env.KLAVIYO_PRIVATE_API_KEY

    if (!klaviyoApiKey) {
      console.error("Klaviyo API key is missing.")
      return new NextResponse("Klaviyo API key is missing", { status: 500 })
    }

    const contactData = {
      profiles: [
        {
          email: email,
          first_name: firstName,
          last_name: lastName,
          organization: company,
          title: jobTitle,
          $consent: "web",
          tags: ["webinar-registrant", "website-lead", "main_website_form"],
        },
      ],
    }

    const response = await fetch(klaviyoApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Klaviyo-API-Key ${klaviyoApiKey}`,
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
    return new NextResponse(error.message || "An error occurred", {
      status: 500,
    })
  }
}
