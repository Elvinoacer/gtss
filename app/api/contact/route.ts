import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, sendVisitorConfirmationEmail } from "@/lib/email";

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
    if (!name || typeof name !== "string" || name.trim().length === 0)
      errors.push("Name is required.");
    if (!email || typeof email !== "string" || email.trim().length === 0)
      errors.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      errors.push("Please provide a valid email address.");
    if (!message || typeof message !== "string" || message.trim().length === 0)
      errors.push("Message is required.");

    if (errors.length > 0)
      return NextResponse.json({ success: false, errors }, { status: 400 });

    const trimmed = {
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || "General Enquiry",
      company: company?.trim() || "",
      message: message.trim(),
    };

    // 1. Send styled admin notification via lib/email.ts
    const adminResult = await sendContactEmail({
      name: trimmed.name,
      email: trimmed.email,
      subject: trimmed.subject,
      message: trimmed.message,
    });

    if (!adminResult.success) {
      console.error("Admin email error:", adminResult.error);
      return NextResponse.json(
        {
          success: false,
          errors: ["Failed to send message. Please try again."],
          _debug: adminResult.error,
        },
        { status: 500 }
      );
    }

    // 2. Send styled confirmation to visitor
    await sendVisitorConfirmationEmail({
      to: trimmed.email,
      name: trimmed.name,
      subject: "We received your message – GTSS",
      title: "Hi {name}, thanks for reaching out!",
      intro: "We've received your message and our team will get back to you within <strong>24 hours</strong>. We appreciate your interest in our solutions.",
      detailLabel: "Your message",
      detailValue: trimmed.message,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We will respond within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, errors: ["Invalid request body."] },
      { status: 400 }
    );
  }
}
