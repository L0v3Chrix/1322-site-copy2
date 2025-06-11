import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json()
    console.log("📝 Contact form submission received:", body)

    // Validate required fields
    const { firstName, lastName, email, phone, subject, message, preferredContact } = body

    if (!firstName || !lastName || !email || !phone) {
      console.log("❌ Missing required fields")
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields: firstName, lastName, email, phone",
        },
        { status: 400 },
      )
    }

    // Get environment variables for GoHighLevel API
    const GHL_API_KEY = process.env.GHL_API_KEY
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

    console.log("🔑 Checking GHL credentials:", {
      hasApiKey: !!GHL_API_KEY,
      hasLocationId: !!GHL_LOCATION_ID,
    })

    // Check if GHL credentials are available
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.log("⚠️ GoHighLevel credentials not configured")
      return NextResponse.json(
        {
          success: false,
          error: "GoHighLevel API credentials not configured",
        },
        { status: 500 },
      )
    }

    // Prepare contact data for GoHighLevel
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      source: "Website Contact Form",
      tags: ["website-lead", "contact-form"],
      // Custom fields - replace these IDs with actual ones from your GHL account
      customFields: [
        {
          id: "subject_field_id", // Replace with actual custom field ID
          field_value: subject || "",
        },
        {
          id: "message_field_id", // Replace with actual custom field ID
          field_value: message || "",
        },
        {
          id: "preferred_contact_field_id", // Replace with actual custom field ID
          field_value: preferredContact || "email",
        },
      ],
    }

    console.log("📤 Sending contact data to GoHighLevel:", contactData)

    // Make API call to GoHighLevel
    const ghlResponse = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })

    // Parse the response from GoHighLevel
    const ghlData = await ghlResponse.json()

    console.log("📥 GoHighLevel API response:", {
      status: ghlResponse.status,
      statusText: ghlResponse.statusText,
      data: ghlData,
    })

    // Check if the request was successful
    if (!ghlResponse.ok) {
      console.log("❌ GoHighLevel API error:", ghlData)
      return NextResponse.json(
        {
          success: false,
          error: "Failed to create contact in GoHighLevel",
          details: ghlData,
        },
        { status: ghlResponse.status },
      )
    }

    // Success! Contact created in GoHighLevel
    console.log("✅ Contact successfully created in GoHighLevel:", ghlData.contact?.id)

    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",
      contactId: ghlData.contact?.id,
      ghlResponse: ghlData,
    })
  } catch (error) {
    // Handle any unexpected errors
    console.error("💥 Unexpected error in contact submission:", error)

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Handle non-POST requests
export async function GET() {
  return NextResponse.json({ error: "Method not allowed. Use POST." }, { status: 405 })
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed. Use POST." }, { status: 405 })
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed. Use POST." }, { status: 405 })
}
