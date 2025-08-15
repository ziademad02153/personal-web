import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // For now, we'll create a mailto link that opens the user's email client
    // In a production environment, you would integrate with an email service like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - Nodemailer with SMTP

    const mailtoLink = `mailto:ziademadbts@gmail.com?subject=${encodeURIComponent(
      `Portfolio Contact: ${subject}`,
    )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`

    return NextResponse.json({
      success: true,
      message: "Message prepared successfully",
      mailtoLink,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}
