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

    // Optional webhook for forwarding copies (Slack/Discord/etc.).
    // Skipped silently if not configured.
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name, email, subject, message,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (webhookError) {
        console.error('Webhook send failed:', webhookError)
        // Continue even if webhook fails
      }
    }

    // Forward the message to Formspree (https://formspree.io).
    // FORMSPREE_ID must be set in the deploy environment; otherwise we return
    // a clear 500 so the UI surfaces the failure instead of silently dropping it.
    const formspreeId = process.env.FORMSPREE_ID
    if (!formspreeId) {
      console.error('Contact form: FORMSPREE_ID is not configured')
      return NextResponse.json(
        { error: 'Contact form is not configured. Please email me directly.' },
        { status: 500 }
      )
    }

    try {
      const formspreeResponse = await fetch(
        `https://formspree.io/f/${formspreeId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            name, email, subject, message,
            _replyto: email,
          }),
        }
      )

      if (!formspreeResponse.ok) {
        throw new Error(`Formspree responded with ${formspreeResponse.status}`)
      }
    } catch (emailError) {
      console.error('Email send failed:', emailError)
      return NextResponse.json(
        { error: 'Failed to send message. Please try again or email me directly.' },
        { status: 502 }
      )
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
