import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { sendContactEmail } from "@/lib/email";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM || "GTSS <support@gtss.software>";

interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  company?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildConfirmationHtml(name: string, message: string): string {
  const year = new Date().getFullYear();
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4efe6;color:#1f1d19;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">
      Thanks for contacting GTSS — we'll be in touch within 24 hours.
    </span>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4efe6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;border-collapse:separate;">
            <!-- Header bar -->
            <tr>
              <td style="padding:0 4px 16px;">
                <div style="font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#9d8b68;font-weight:700;">GTSS</div>
              </td>
            </tr>
            <!-- Main card -->
            <tr>
              <td style="border-radius:28px;background:#ffffff;border:1px solid #eadfcf;box-shadow:0 18px 48px rgba(22,18,9,0.08);overflow:hidden;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;">
                  <!-- Gold accent bar -->
                  <tr><td><div style="height:10px;background:linear-gradient(90deg,#b8924d,#d4a85c);"></div></td></tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding:40px 36px 28px;">
                      <div style="display:inline-block;padding:7px 14px;border-radius:999px;background:#f6efe4;color:#8c6a2c;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;">Message received</div>
                      <h1 style="margin:20px 0 12px;font-size:28px;line-height:1.2;letter-spacing:-0.02em;color:#151515;">Hi ${safeName}, thanks for reaching out!</h1>
                      <p style="margin:0 0 28px;font-size:16px;line-height:1.75;color:#4b463c;">We've received your message and our team will get back to you within <strong style="color:#151515;">24 hours</strong>. We appreciate your interest in our solutions.</p>

                      <!-- Message recap -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;background:#fbf8f2;border:1px solid #eee4d3;border-radius:20px;">
                        <tr>
                          <td style="padding:20px 24px 8px;">
                            <div style="font-size:11px;line-height:1.2;letter-spacing:0.18em;text-transform:uppercase;color:#9d8b68;font-weight:700;">Your message</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 24px 20px;">
                            <div style="font-size:15px;line-height:1.7;color:#1f1d19;">${safeMessage}</div>
                          </td>
                        </tr>
                      </table>

                      <!-- WhatsApp CTA -->
                      <div style="margin-top:28px;text-align:center;">
                        <p style="font-size:14px;color:#4b463c;margin:0 0 14px;">Need a faster response? Chat with us directly:</p>
                        <a href="https://wa.me/254790670542" style="display:inline-block;padding:14px 32px;border-radius:14px;background:#25D366;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:0.02em;">💬 Chat on WhatsApp</a>
                      </div>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="padding:0 36px 36px;">
                      <div style="padding-top:20px;border-top:1px solid #efe4d4;font-size:12px;line-height:1.7;color:#7a6e5d;">
                        © ${year} Great Thumbs Software Solutions · Nairobi, Kenya<br/>
                        Practical, scalable software for real-world local problems.
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
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
    try {
      await resend.emails.send({
        from: FROM,
        to: trimmed.email,
        subject: "We received your message – GTSS",
        html: buildConfirmationHtml(trimmed.name, trimmed.message),
      });
    } catch (confirmError) {
      // Don't fail the whole request if confirmation email fails
      console.error("Confirmation email error:", confirmError);
    }

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
