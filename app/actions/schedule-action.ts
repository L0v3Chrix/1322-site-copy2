"use server"

export async function scheduleCall(formData: FormData) {
  try {
    // Extract form data
    const day = formData.get("day") as string
    const date = formData.get("date") as string
    const time = formData.get("time") as string
    const preferredPhone = formData.get("preferredPhone") as string
    const questions = formData.get("questions") as string

    // Validate required fields
    if (!day || !date || !time || !preferredPhone) {
      return { success: false, message: "Please fill in all required fields" }
    }

    // GoHighLevel API configuration
    const GHL_API_KEY =
      process.env.GHL_API_KEY ||
      "ec12c208-bd75-4c45-a2f0-1b42265f38b4"

    // Prepare contact data for GHL
    const contactData = {
      firstName: "Call", // We'll need to get this from somewhere else or make it optional
      lastName: "Scheduled",
      email: "scheduled@1322legacy.com", // Placeholder - you might want to collect email separately
      phone: preferredPhone,
      source: "call_scheduling",
      tags: ["call-scheduled", "appointment-booked"],
      customFields: [
        {
          key: "appointment_day",
          value: day,
        },
        {
          key: "appointment_date",
          value: date,
        },
        {
          key: "appointment_time",
          value: time,
        },
        {
          key: "preferred_phone",
          value: preferredPhone,
        },
        {
          key: "questions",
          value: questions || "No specific questions",
        },
        {
          key: "scheduling_date",
          value: new Date().toISOString(),
        },
      ],
    }

    console.log("Sending call scheduling data to GHL:", contactData)

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

    console.log("Successfully created call scheduling contact in GHL:", responseData.contact?.id)

    return {
      success: true,
      message: "Your call has been scheduled successfully!",
      contactId: responseData.contact?.id,
    }
  } catch (error) {
    console.error("Scheduling error:", error)
    return { success: false, message: "Failed to schedule your call. Please try again." }
  }
}
