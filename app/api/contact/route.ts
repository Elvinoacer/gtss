import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM || "GTSS <support@gtss.software>";
// Extract plain email from "Name <email>" format if present
const rawAdmin = process.env.ADMIN_EMAIL || "support@gtss.software";
const ADMIN = rawAdmin.match(/<(.+)>/)?.[1] ?? rawAdmin;

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
      timestamp: new Date().toLocaleString("en-KE", { timeZone: "Africa/Nairobi" }),
    };

    // 1. Notify admin
    const { error: adminError } = await resend.emails.send({
      from: FROM,
      to: ADMIN,
      replyTo: trimmed.email,
      subject: `[Contact] ${trimmed.subject} – ${trimmed.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
          <h2 style="color:#111827;margin-bottom:4px;">New Contact Form Submission</h2>
          <p style="color:#6b7280;font-size:13px;margin-top:0;">${trimmed.timestamp} (EAT)</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;"/>
          <table style="width:100%;font-size:14px;color:#374151;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;width:110px;">Name</td><td>${trimmed.name}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;">Email</td><td><a href="mailto:${trimmed.email}" style="color:#2563eb;">${trimmed.email}</a></td></tr>
            ${trimmed.company ? `<tr><td style="padding:8px 0;font-weight:600;">Company</td><td>${trimmed.company}</td></tr>` : ""}
            <tr><td style="padding:8px 0;font-weight:600;">Subject</td><td>${trimmed.subject}</td></tr>
          </table>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;"/>
          <p style="font-weight:600;color:#111827;margin-bottom:8px;">Message</p>
          <p style="color:#374151;white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:6px;">${trimmed.message}</p>
          <p style="font-size:12px;color:#9ca3af;margin-top:24px;">Reply directly to this email to respond to ${trimmed.name}.</p>
        </div>
      `,
    });

    if (adminError) {
      console.error("Resend admin error:", JSON.stringify(adminError));
      return NextResponse.json(
        {
          success: false,
          errors: ["Failed to send message. Please try again."],
          _debug: adminError,
        },
        { status: 500 }
      );
    }

    // 2. Send confirmation to the visitor
    await resend.emails.send({
      from: FROM,
      to: trimmed.email,
      subject: "We received your message – GTSS",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px;">
          <h2 style="color:#111827;">Hi ${trimmed.name}, thanks for reaching out!</h2>
          <p style="color:#374151;">We've received your message and will get back to you within <strong>24 hours</strong>.</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;"/>
          <p style="font-weight:600;color:#111827;margin-bottom:4px;">Your message:</p>
          <p style="color:#6b7280;white-space:pre-wrap;background:#f9fafb;padding:16px;border-radius:6px;">${trimmed.message}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;"/>
          <p style="color:#374151;">In the meantime, you can reach us on WhatsApp:</p>
          <a href="https://wa.me/254790670542" style="display:inline-block;background:#25D366;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:600;">Chat on WhatsApp</a>
          <p style="font-size:12px;color:#9ca3af;margin-top:24px;">© ${new Date().getFullYear()} Great Thumbs Software Solutions · Nairobi, Kenya</p>
        </div>
      `,
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
