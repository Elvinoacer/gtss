import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import DOMPurify from "isomorphic-dompurify";

import { prisma } from "@/lib/prisma";
import { sendLeadAlertEmail } from "@/lib/email";

const publicLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(25),
  email: z.string().trim().email().max(160),
  company: z.string().trim().min(2).max(160),
  interest: z.string().trim().min(2).max(180),
  source: z.string().trim().min(2).max(120).optional(),
});

function sanitize(value: string): string {
  return DOMPurify.sanitize(value).trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = publicLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide valid lead details.",
        },
        { status: 400 },
      );
    }

    const sanitizedPayload = {
      name: sanitize(parsed.data.name),
      phone: sanitize(parsed.data.phone),
      email: sanitize(parsed.data.email),
      company: sanitize(parsed.data.company),
      interest: sanitize(parsed.data.interest),
      source: sanitize(parsed.data.source || "Restaurant Manager Landing"),
    };

    await prisma.lead.create({
      data: {
        name: sanitizedPayload.name,
        role: "Restaurant Contact",
        email: sanitizedPayload.email,
        phone: sanitizedPayload.phone,
        company: sanitizedPayload.company,
        productInterest: sanitizedPayload.interest,
        status: "new",
      },
    });

    try {
      await sendLeadAlertEmail(sanitizedPayload);
    } catch (emailError) {
      console.error("Failed to send lead notification email:", emailError);
    }

    return NextResponse.json({
      success: true,
      message:
        "Demo request submitted successfully. Our team will reach out within 24 hours.",
    });
  } catch (error) {
    console.error("Failed to process restaurant manager lead:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          "We could not submit your request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
