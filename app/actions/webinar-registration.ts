"use server"

export async function registerForWebinar(formData: FormData) {
  try {
    // 1. Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    if (!firstName || !lastName || !email || !phone) {
      return { success: false, message: "Please fill in all required fields" }
    }

    const GHL_API_KEY = process.env.GHL_API_KEY || "your-key"
    const SUBACCOUNT_ID = process.env.GHL_SUBACCOUNT_ID || "your-subaccount"

    // 2. Search for existing contact by email
    const searchRes = await fetch("https://services.leadconnectorhq.com/contacts/search", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({ email }),
    })
    const searchData = await searchRes.json()
    let existingTags: string[] = []
    let contactId: string | null = null

    if (searchData.contacts && searchData.contacts.length > 0) {
      // Contact found: merge tags
      contactId = searchData.contacts[0].id
      existingTags = searchData.contacts[0].tags || []
    }

    // 3. Add new tags and remove duplicates
    const newTags = ["main_website_form", "webinar_registration_form"] // <-- Add BOTH tags here
    const allTags = Array.from(new Set([...(existingTags || []), ...newTags]))

    // 4. Prepare contact data for upsert (create/update)
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      source: "webinar_registration",
      tags: allTags,
      customFields: [
        {
          key: "registration_source",
          value: "webinar_registration_form",
        },
        {
          key: "registration_date",
          value: new Date().toISOString(),
        },
      ],
    }

    let apiUrl = "https://services.leadconnectorhq.com/contacts/"
    let apiMethod: "POST" | "PATCH" = "POST"

    if (contactId) {
      // Update contact (PATCH)
      apiUrl += contactId
      apiMethod = "PATCH"
    }

    const response = await fetch(apiUrl, {
      method: apiMethod,
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify(contactData),
    })

    const responseData = await response.json()
    console.log("GHL Response:", response.status, responseData)

    if (!response.ok) {
      console.error("GHL API Error:", responseData)
      throw new Error(`GHL API Error: ${response.status} - ${responseData.message || "Unknown error"}`)
    }

    return {
      success: true,
      message: "Thank you for registering! You'll receive webinar details shortly.",
      contactId: responseData.contact?.id,
    }
  } catch (error) {
    console.error("Webinar registration error:", error)
    return {
      success: false,
      message: "There was an error with your registration. Please try again or contact us directly.",
    }
  }
}
