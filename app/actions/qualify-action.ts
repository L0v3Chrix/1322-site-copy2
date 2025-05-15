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

    // Send data to make.com webhook for GoHighLevel tagging
    const response = await fetch("https://hook.us2.make.com/erjikwvn6upynhjgd3igaewtwmuz8d58", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        investableAssets,
        ageRange,
        legacyGoal,
        source: "qualify_virtual_page",
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    // Simple qualification logic - in a real app, this might be more complex
    // or determined by the response from the webhook
    const qualified =
      investableAssets === "$500,000 - $1,000,000" ||
      investableAssets === "$1,000,000 - $5,000,000" ||
      investableAssets === "$5,000,000+"

    if (qualified) {
      return {
        success: true,
        qualified: true,
        message: "Congratulations! You qualify for a one-on-one session with Brad.",
      }
    } else {
      return {
        success: true,
        qualified: false,
        message:
          "Thank you for your interest. While you may not qualify for a one-on-one session at this time, we encourage you to attend the webinar for valuable insights.",
      }
    }
  } catch (error) {
    console.error("Qualification error:", error)
    return { success: false, message: "Failed to process your request. Please try again." }
  }
}
