import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { sendLeadAlertEmail, sendVisitorConfirmationEmail } from "@/lib/email";

const publicLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(7).max(25),
  email: z.string().trim().email().max(160),
  company: z.string().trim().min(2).max(160),
  interest: z.string().trim().min(2).max(180),
  source: z.string().trim().min(2).max(120).optional(),
});

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
      name: parsed.data.name.trim(),
      phone: parsed.data.phone.trim(),
      email: parsed.data.email.trim(),
      company: parsed.data.company.trim(),
      interest: parsed.data.interest.trim(),
      source: (parsed.data.source || "Restaurant Manager Landing").trim(),
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

    try {
      await sendVisitorConfirmationEmail({
        to: sanitizedPayload.email,
        name: sanitizedPayload.name,
        subject: "We received your demo request – GTSS",
        title: "Hi {name}, thanks for your interest!",
        intro: "We've received your request for a demo of the Restaurant Manager. Our team will get back to you within <strong>24 hours</strong> to set up a time.",
        detailLabel: "Your Interest",
        detailValue: sanitizedPayload.interest,
      });
    } catch (emailError) {
      console.error("Failed to send visitor confirmation email:", emailError);
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
