import { NextResponse } from 'next/server';

// Store submissions in memory
let submissions = [];

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Name, email, and message are required' }, { status: 400 });
    }

    // Create the submission object
    const submission = {
      name,
      email,
      subject: subject || 'New Contact Form Submission',
      message,
      timestamp: new Date().toISOString()
    };

    // Add to submissions array
    submissions.push(submission);

    // Return success response
    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}