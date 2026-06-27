import { NextRequest, NextResponse } from "next/server";
import { sendDemoAlertEmail, sendVisitorConfirmationEmail } from "@/lib/email";

interface DemoPayload {
  name: string;
  email: string;
  phone?: string;
  product?: string;
  date?: string;
  message?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: DemoPayload = await request.json();

    const { name, email, phone, product, date, message } = body;

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

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "(no phone)",
      product: product?.trim() || "(no product selected)",
      date: date?.trim() || "(no date)",
      message: message?.trim() || "(no message)",
    };

    // 1. Notify admin
    try {
      await sendDemoAlertEmail(payload);
    } catch (adminError) {
      console.error("Demo admin email error:", adminError);
    }

    // 2. Send styled confirmation to visitor
    try {
      await sendVisitorConfirmationEmail({
        to: payload.email,
        name: payload.name,
        subject: "We received your demo request – GTSS",
        title: "Hi {name}, your demo request is received!",
        intro: "Thanks for requesting a demo of our solutions. Our team will contact you within <strong>24 hours</strong> to schedule a convenient time.",
        detailLabel: "Requested Product",
        detailValue: payload.product,
      });
    } catch (visitorError) {
      console.error("Demo confirmation email error:", visitorError);
    }

    return NextResponse.json({
      success: true,
      message: "Demo request received. We'll be in touch within 24 hours.",
    });
  } catch (error) {
    console.error("Demo form error:", error);
    return NextResponse.json(
      { success: false, errors: ["Invalid request body."] },
      { status: 400 }
    );
  }
}
