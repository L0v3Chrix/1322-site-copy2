import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Send data to make.com webhook
    const response = await fetch("https://hook.us2.make.com/dbvufdv3fsx6on12ihqoanl31v1vpzl6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        source: "website_api_webhook",
        timestamp: new Date().toISOString(),
      }),
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ success: false, message: "Failed to process webhook" }, { status: 500 })
  }
}
