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

    // Send data to make.com webhook for GoHighLevel
    const response = await fetch("https://hook.us2.make.com/1278hy4xslfrtnjy4ohzov14lxwyv4y2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        appointmentDay: day,
        appointmentDate: date,
        appointmentTime: time,
        preferredPhone,
        questions,
        source: "schedule_call_page",
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    return {
      success: true,
      message: "Your call has been scheduled successfully!",
    }
  } catch (error) {
    console.error("Scheduling error:", error)
    return { success: false, message: "Failed to schedule your call. Please try again." }
  }
}
