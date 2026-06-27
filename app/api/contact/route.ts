import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  company?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json();

    const { name, email, subject, company, message } = body;

    // Validate required fields
    const errors: string[] = [];

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      errors.push("Name is required.");
    }

    if (!email || typeof email !== "string" || email.trim().length === 0) {
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.push("Please provide a valid email address.");
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      errors.push("Message is required.");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Log the contact submission (real email integration can be added later)
    console.log("📬 Contact Form Submission:", {
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || "(no subject)",
      company: company?.trim() || "(no company)",
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message. We will respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, errors: ["Invalid request body."] },
      { status: 400 }
    );
  }
}
