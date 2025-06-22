import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail, ContactFormData } from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    await sendContactFormEmail({ name, email, phone, subject, message });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}