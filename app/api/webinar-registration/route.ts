import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const { firstName, lastName, email, phone, webinarDate, webinarTime } = body

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // GoHighLevel API configuration - use environment variables only
    const GHL_API_KEY = process.env.GHL_API_KEY
    const SUBACCOUNT_ID = process.env.GHL_SUBACCOUNT_ID

    if (!GHL_API_KEY || !SUBACCOUNT_ID) {
      console.error("Missing GHL API credentials")
      // Still log the submission for backup
      console.log("Webinar registration (no GHL):", {
        firstName,
        lastName,
        email,
        phone,
        webinarDate,
        webinarTime,
        timestamp: new Date().toISOString(),
      })

      return NextResponse.json(
        {
          success: true,
          message: "Registration submitted successfully",
        },
        { status: 200 },
      )
    }

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
          key: "webinar_date",
          field_value: webinarDate || "Not specified",
        },
        {
          key: "webinar_time",
          field_value: webinarTime || "Not specified",
        },
        {
          key: "registration_date",
          field_value: new Date().toISOString(),
        },
      ],
    }

    console.log("Sending webinar registration to GHL:", contactData)

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
      // Still return success to user but log the error
      console.log("Fallback: Webinar registration logged:", {
        firstName,
        lastName,
        email,
        phone,
        webinarDate,
        webinarTime,
        timestamp: new Date().toISOString(),
        ghlError: responseData,
      })

      return NextResponse.json(
        {
          success: true,
          message: "Registration submitted successfully",
        },
        { status: 200 },
      )
    }

    console.log("Successfully created webinar registrant in GHL:", responseData.contact?.id)

    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully",
        contactId: responseData.contact?.id,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Webinar registration error:", error)

    // Log the submission as backup even if GHL fails
    console.log("Fallback webinar registration:", {
      firstName: body?.firstName,
      lastName: body?.lastName,
      email: body?.email,
      phone: body?.phone,
      webinarDate: body?.webinarDate,
      webinarTime: body?.webinarTime,
      timestamp: new Date().toISOString(),
      error: error.message,
    })

    // Return success to user to prevent frustration
    return NextResponse.json(
      {
        success: true,
        message: "Registration submitted successfully",
      },
      { status: 200 },
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
