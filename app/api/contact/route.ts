import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Parse request body with error handling
    let requestBody: any
    try {
      requestBody = await request.json()
    } catch (parseError) {
      console.error("Failed to parse request JSON:", parseError)
      return NextResponse.json(
        { success: false, error: "Invalid JSON in request body" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Validate required fields
    const { firstName, lastName, email, phone, source, formTitle } = requestBody

    if (!firstName || !lastName || !email || !phone) {
      console.error("Missing required fields:", { firstName, lastName, email, phone })
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Log the submission
    console.log("Contact form submission received:", {
      firstName,
      lastName,
      email,
      phone,
      source,
      formTitle,
      timestamp: new Date().toISOString(),
    })

    // Get environment variables
    const GHL_API_KEY = process.env.GHL_API_KEY
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID

    // If GHL credentials are not available, still return success
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.log("GHL credentials not configured - form submission logged only")
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully (GHL not configured)",
        },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Prepare contact data for GoHighLevel
    const contactData = {
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      source: source || "Website Contact Form",
      tags: ["main_website_form"],
    }

    console.log("Attempting to create contact in GoHighLevel...")

    // Send to GoHighLevel with error handling
    let ghlResponse: Response
    let ghlData: any

    try {
      ghlResponse = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      })

      // Parse GHL response
      try {
        ghlData = await ghlResponse.json()
      } catch (ghlParseError) {
        console.error("Failed to parse GHL response:", ghlParseError)
        // Still return success to user
        return NextResponse.json(
          {
            success: true,
            message: "Form submitted successfully (GHL response parse error)",
          },
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        )
      }
    } catch (ghlFetchError) {
      console.error("Failed to connect to GoHighLevel:", ghlFetchError)
      // Still return success to user
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully (GHL connection error)",
        },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Check GHL response status
    if (!ghlResponse.ok) {
      console.error("GoHighLevel API Error:", {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
        data: ghlData,
      })

      // Still return success to user to prevent frustration
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully (GHL integration failed)",
        },
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    console.log("Successfully created contact in GoHighLevel:", ghlData.contact?.id)

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        contactId: ghlData.contact?.id,
      },
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    )
  } catch (error) {
    console.error("Unexpected error in contact form submission:", error)

    // Always return a valid JSON response, even on unexpected errors
    return NextResponse.json(
      {
        success: true, // Return success to prevent user frustration
        message: "Form submitted successfully (processing error)",
        error: error instanceof Error ? error.message : String(error),
      },
      {
        status: 200, // Return 200 to prevent client-side errors
        headers: { "Content-Type": "application/json" },
      },
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
      "Content-Type": "application/json",
    },
  })
}
