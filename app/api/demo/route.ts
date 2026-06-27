import { NextRequest, NextResponse } from "next/server";

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

    // Log the demo request (real email integration can be added later)
    console.log("🎯 Demo Request Submission:", {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "(no phone)",
      product: product?.trim() || "(no product selected)",
      date: date?.trim() || "(no date)",
      message: message?.trim() || "(no message)",
      timestamp: new Date().toISOString(),
    });

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
