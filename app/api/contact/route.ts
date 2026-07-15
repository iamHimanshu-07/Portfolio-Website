import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email using Formspree or similar service
    // For now, we'll use a simple approach with Webhook.cool or similar
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (webhookError) {
        console.error('Webhook send failed:', webhookError)
        // Continue even if webhook fails
      }
    }

    // Send confirmation email to user
    try {
      const gmailApiResponse = await fetch(
        `https://formspree.io/f/${process.env.FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message,
            _replyto: email,
          }),
        }
      )

      if (!gmailApiResponse.ok) {
        throw new Error('Failed to send email')
      }
    } catch (emailError) {
      console.error('Email send failed:', emailError)
      // Continue with success response anyway
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully! I will get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
