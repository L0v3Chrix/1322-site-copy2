"use server"

export async function registerForWebinar(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string // Now required

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return { success: false, message: "Please fill in all required fields" }
    }

    // Send data to make.com webhook
    const response = await fetch("https://hook.us2.make.com/dbvufdv3fsx6on12ihqoanl31v1vpzl6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone, // Now including phone in all cases
        source: "webinar_registration_page",
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    return { success: true, message: "Registration successful!" }
  } catch (error) {
    console.error("Webinar registration error:", error)
    return { success: false, message: "Failed to register. Please try again." }
  }
}
