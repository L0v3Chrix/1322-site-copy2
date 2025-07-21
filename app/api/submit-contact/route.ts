import { type NextRequest, NextResponse } from "next/server"

// Helper: Search GHL by email
async function findContactByEmail(email: string, apiKey: string) {
  const response = await fetch("https://rest.gohighlevel.com/v1/contacts/search", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  if (data.contacts && data.contacts.length > 0) {
    return data.contacts[0]; // Return the first found contact
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Parse and validate request body
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, preferredContact } = body;

    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 2. Env vars
    const GHL_API_KEY = process.env.GHL_API_KEY!;
    const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID!;
    const NEW_TAGS = ["website-lead", "contact-form", "main_website_form"];

    // 3. Find existing contact by email
    let contactId: string | null = null;
    let existingTags: string[] = [];
    const existingContact = await findContactByEmail(email, GHL_API_KEY);

    if (existingContact) {
      contactId = existingContact.id;
      existingTags = existingContact.tags || [];
    }

    // 4. Merge tags (dedupe)
    const allTags = Array.from(new Set([...(existingTags || []), ...NEW_TAGS]));

    // 5. Prepare contact data
    const contactData: any = {
      firstName,
      lastName,
      email,
      phone,
      locationId: GHL_LOCATION_ID,
      source: "Website Contact Form",
      tags: allTags,
      customFields: [
        {
          id: "subject_field_id", // Replace with your actual field ID
          field_value: subject || "",
        },
        {
          id: "message_field_id", // Replace with your actual field ID
          field_value: message || "",
        },
        {
          id: "preferred_contact_field_id", // Replace with your actual field ID
          field_value: preferredContact || "email",
        },
      ],
    };

    // 6. Create or Update contact
    let apiUrl = "https://rest.gohighlevel.com/v1/contacts/";
    let apiMethod: "POST" | "PATCH" = "POST";
    if (contactId) {
      apiUrl += contactId;
      apiMethod = "PATCH";
    }

    const ghlResponse = await fetch(apiUrl, {
      method: apiMethod,
      headers: {
        Authorization: `Bearer ${GHL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });
    const ghlData = await ghlResponse.json();

    if (!ghlResponse.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to create/update contact", details: ghlData },
        { status: ghlResponse.status }
      );
    }

    // 7. Success response
    return NextResponse.json({
      success: true,
      message: "Contact submitted successfully",
      contactId: ghlData.contact?.id,
      ghlResponse: ghlData,
    });

  } catch (error) {
    // Handle errors
    console.error("💥 Unexpected error in contact submission:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
