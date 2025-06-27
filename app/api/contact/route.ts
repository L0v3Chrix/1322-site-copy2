import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  let requestBody: any = {} // Initialize requestBody to safely access it in catch block
  try {
    requestBody = await request.json() // Parse JSON body

    // Validate required fields
    const { firstName, lastName, email, phone, source, formTitle } = requestBody

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // GoHighLevel API configuration - use environment variables
    const GHL_API_KEY = process.env.GHL_API_KEY
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

    // Log the submission regardless of GHL integration
    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      source,
      formTitle,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
      ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip"),
    })

    // If GHL credentials are not available, still return success
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.log("GHL credentials not configured - form submission logged only")
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully (GHL not configured)",
        },
        { status: 200 },
      )
    }

    // Prepare contact data for GoHighLevel API
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      source: source || "Website Contact Form",
      tags: ["main_website_form"], // Added main_website_form tag
      customFields: [
        {
          id: "form_title_field_id", // Replace with actual custom field ID from GHL
          field_value: formTitle || "Contact Form",
        },
        {
          id: "submission_source_field_id", // Replace with actual custom field ID from GHL
          field_value: source || "contact_form_modal",
        },
        {
          id: "submission_date_field_id", // Replace with actual custom field ID from GHL
          field_value: new Date().toISOString(),
        },
      ],
    }

    console.log("Attempting to create contact in GoHighLevel...")

    // Send data to GoHighLevel API using the correct endpoint
    const ghlResponse = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    })

    const ghlData = await ghlResponse.json()
    console.log("GoHighLevel API Response:", {
      status: ghlResponse.status,
      statusText: ghlResponse.statusText,
      data: ghlData,
    })

    if (!ghlResponse.ok) {
      console.error("GoHighLevel API Error:", {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
        error: ghlData,
      })

      // Still return success to user to prevent frustration, but indicate GHL failure
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully (GHL integration failed)",
          ghlError: ghlData, // Include GHL error for debugging
        },
        { status: 200 },
      )
    }

    console.log("Successfully created contact in GoHighLevel:", ghlData.contact?.id)

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        contactId: ghlData.contact?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form submission error:", error)

    // Log the error details for debugging
    const errorMessage = error instanceof Error ? error.message : String(error)
    const errorStack = error instanceof Error ? error.stack : undefined

    console.error("Error details:", {
      message: errorMessage,
      stack: errorStack,
      requestBody: requestBody, // Log the parsed body if available
    })

    // Always return a valid JSON response, even on unexpected errors
    return NextResponse.json(
      {
        success: false, // Indicate failure to the client
        message: "Internal server error during form submission",
        error: errorMessage,
      },
      { status: 500 },
    )
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
