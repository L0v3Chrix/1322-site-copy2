"use server"

export async function qualifyForSession(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const investableAssets = formData.get("investableAssets") as string
    const ageRange = formData.get("ageRange") as string
    const legacyGoal = formData.get("legacyGoal") as string

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !investableAssets || !ageRange || !legacyGoal) {
      return { success: false, message: "Please fill in all required fields" }
    }

    // GoHighLevel API configuration
    const GHL_API_KEY =
      process.env.GHL_API_KEY ||
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6IjB1cENDOFBLNzV2WjlQVkY4elFtIiwidmVyc2lvbiI6MSwiaWF0IjoxNzQ3Njg4NjM5NjkwLCJzdWIiOiJZc3hFM3duSW93eFpRa21QUjJCVCJ9.VxAQfLHKLDkV7vSFAKyXOcSS27tDeotWJabLuU6MMEg"

    // Simple qualification logic
    const qualified =
      investableAssets === "$500,000 - $1,000,000" ||
      investableAssets === "$1,000,000 - $5,000,000" ||
      investableAssets === "$5,000,000+"

    // Prepare contact data for GHL
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      source: "qualification_form",
      tags: qualified ? ["qualified-lead", "high-value-prospect"] : ["unqualified-lead", "webinar-candidate"],
      customFields: [
        {
          key: "investable_assets",
          value: investableAssets,
        },
        {
          key: "age_range",
          value: ageRange,
        },
        {
          key: "legacy_goal",
          value: legacyGoal,
        },
        {
          key: "qualification_status",
          value: qualified ? "qualified" : "unqualified",
        },
        {
          key: "qualification_date",
          value: new Date().toISOString(),
        },
      ],
    }

    console.log("Sending qualification data to GHL:", contactData)

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

    console.log("Successfully created qualified contact in GHL:", responseData.contact?.id)

    if (qualified) {
      return {
        success: true,
        qualified: true,
        message: "Congratulations! You qualify for a one-on-one session with Brad.",
        contactId: responseData.contact?.id,
      }
    } else {
      return {
        success: true,
        qualified: false,
        message:
          "Thank you for your interest. While you may not qualify for a one-on-one session at this time, we encourage you to attend the webinar for valuable insights.",
        contactId: responseData.contact?.id,
      }
    }
  } catch (error) {
    console.error("Qualification error:", error)
    return { success: false, message: "Failed to process your request. Please try again." }
  }
}
