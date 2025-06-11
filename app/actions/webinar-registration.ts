"use server"

export async function registerForWebinar(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return { success: false, message: "Please fill in all required fields" }
    }

    // GoHighLevel API configuration
    const GHL_API_KEY =
      process.env.GHL_API_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjB1cENDOFBLNzV2WjlQVkY4elFtIiwidmVyc2lvbiI6MSwiaWF0IjoxNzQ3Njg4NjM5NjkwLCJzdWIiOiJZc3hFM3duSW93eFpRa21QUjJCVCJ9.VxAQfLHKLDkV7vSFAKyXOcSS27tDeotWJabLuU6MMEg"
    const SUBACCOUNT_ID = process.env.GHL_SUBACCOUNT_ID || "0upCC8PK75vZ9PVF8zQm"

    // Prepare contact data for GHL
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      source: "webinar_registration",
      tags: ["webinar-registrant", "website-lead"],
      customFields: [
        {
          key: "registration_source",
          value: "website_webinar_form",
        },
        {
          key: "registration_date",
          value: new Date().toISOString(),
        },
      ],
    }

    console.log("Sending data to GHL:", contactData)

    // Send data to GoHighLevel API
    const response = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
      method: "POST",
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

    console.log("Successfully created contact in GHL:", responseData.contact?.id)

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
