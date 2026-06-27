import "server-only";

import { Resend } from "resend";

type NotificationDetail = {
  label: string;
  value: string;
  multiline?: boolean;
};

type NotificationEmail = {
  to: string;
  subject: string;
  eyebrow: string;
  title: string;
  preheader: string;
  intro: string;
  details: NotificationDetail[];
  footerNote?: string;
  replyTo?: string;
  sentAt?: string;
};

type SendEmailResult = {
  success: boolean;
  error?: string;
};

const resendApiKey = process.env.RESEND_API_KEY?.trim();
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;
const defaultFromAddress =
  process.env.EMAIL_FROM?.trim() ||
  process.env.ADMIN_EMAIL?.trim() ||
  "GTSS <support@gtss.software>";
const defaultRecipientAddress =
  process.env.ADMIN_EMAIL?.trim() || process.env.EMAIL_FROM?.trim();

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function normalizeText(value: string, multiline = false): string {
  const trimmed = value.trim();
  return multiline ? trimmed : trimmed.replace(/\s+/g, " ");
}

function normalizeHtml(value: string, multiline = false): string {
  const escaped = escapeHtml(value.trim());
  return multiline
    ? escaped.replace(/\r?\n/g, "<br />")
    : escaped.replace(/\r?\n/g, " ");
}

function formatTimestamp(date = new Date()): string {
  return `${new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date)} UTC`;
}

function buildEmailText(payload: NotificationEmail, sentAt: string): string {
  const lines = [
    `GTSS | ${payload.eyebrow}`,
    payload.title,
    "",
    normalizeText(payload.intro, true),
    "",
    ...payload.details.map((detail) => {
      const renderedValue = normalizeText(
        detail.value,
        Boolean(detail.multiline),
      );
      return `${detail.label}: ${renderedValue}`;
    }),
  ];

  if (payload.replyTo) {
    lines.push("", `Reply to: ${payload.replyTo}`);
  }

  lines.push("", `Sent: ${sentAt}`);

  if (payload.footerNote) {
    lines.push("", payload.footerNote);
  }

  return lines.join("\n");
}

function buildEmailHtml(payload: NotificationEmail, sentAt: string): string {
  const detailRows = payload.details
    .map(
      (detail) => `
        <tr>
          <td style="padding:0 0 18px;">
            <div style="font-size:11px;line-height:1.2;letter-spacing:0.18em;text-transform:uppercase;color:#9d8b68;font-weight:700;margin-bottom:6px;">
              ${escapeHtml(detail.label)}
            </div>
            <div style="font-size:15px;line-height:1.7;color:#1f1d19;">
              ${normalizeHtml(detail.value, Boolean(detail.multiline))}
            </div>
          </td>
        </tr>`,
    )
    .join("");

  const replyNote = payload.replyTo
    ? `
      <div style="margin-top:20px;padding:16px 18px;border-left:4px solid #b8924d;background:#fff8eb;color:#5b4c35;font-size:14px;line-height:1.7;">
        Reply directly to this message to continue the conversation with <strong>${escapeHtml(payload.replyTo)}</strong>.
      </div>`
    : "";

  return `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4efe6;color:#1f1d19;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">
      ${escapeHtml(payload.preheader)}
    </span>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4efe6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;border-collapse:separate;">
            <tr>
              <td style="padding:0 4px 16px;">
                <div style="font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#9d8b68;font-weight:700;">GTSS</div>
              </td>
              <td align="right" style="padding:0 4px 16px;">
                <div style="font-size:12px;color:#756750;">${escapeHtml(sentAt)}</div>
              </td>
            </tr>
            <tr>
              <td colspan="2" style="border-radius:28px;background:#ffffff;border:1px solid #eadfcf;box-shadow:0 18px 48px rgba(22, 18, 9, 0.08);overflow:hidden;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;">
                  <tr>
                    <td><div style="height:10px;background:#b8924d;"></div></td>
                  </tr>
                  <tr>
                    <td style="padding:32px 32px 24px;">
                      <div style="display:inline-block;padding:7px 14px;border-radius:999px;background:#f6efe4;color:#8c6a2c;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;">
                        ${escapeHtml(payload.eyebrow)}
                      </div>
                      <h1 style="margin:20px 0 12px;font-size:32px;line-height:1.15;letter-spacing:-0.02em;color:#151515;">${escapeHtml(payload.title)}</h1>
                      <p style="margin:0 0 28px;font-size:16px;line-height:1.75;color:#4b463c;">${normalizeHtml(payload.intro, true)}</p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;background:#fbf8f2;border:1px solid #eee4d3;border-radius:20px;">
                        <tr>
                          <td style="padding:20px 24px 8px;">
                            <div style="font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#8f7b59;font-weight:700;">Details</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 24px 8px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                              ${detailRows}
                            </table>
                          </td>
                        </tr>
                      </table>
                      ${replyNote}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 32px 32px;">
                      <div style="padding-top:20px;border-top:1px solid #efe4d4;font-size:12px;line-height:1.7;color:#7a6e5d;">
                        ${escapeHtml(payload.footerNote || "Sent automatically by GTSS email automation.")}
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

async function sendNotificationEmail(
  payload: NotificationEmail,
): Promise<SendEmailResult> {
  if (!resendClient) {
    const error = "Missing RESEND_API_KEY.";
    console.error(error);
    return { success: false, error };
  }

  const toAddress = payload.to.trim() || defaultRecipientAddress;
  if (!toAddress) {
    const error = "Missing ADMIN_EMAIL or EMAIL_FROM recipient address.";
    console.error(error);
    return { success: false, error };
  }

  const sentAt = payload.sentAt || formatTimestamp();

  const { error } = await resendClient.emails.send({
    from: defaultFromAddress,
    to: toAddress,
    subject: payload.subject,
    html: buildEmailHtml(payload, sentAt),
    text: buildEmailText(payload, sentAt),
    replyTo: payload.replyTo,
  });

  if (error) {
    const message = error.message || "Failed to send email.";
    console.error("Error sending email via Resend:", error);
    return { success: false, error: message };
  }

  return { success: true };
}

export async function sendProductViewEmail(
  productName: string,
  productId: string,
  viewerId?: string,
) {
  const sentAt = formatTimestamp();
  const result = await sendNotificationEmail({
    to: defaultRecipientAddress || defaultFromAddress,
    subject: `New Product View: ${productName}`,
    eyebrow: "Product activity",
    title: "New product view recorded",
    preheader: `A customer viewed ${productName} in GTSS.`,
    intro:
      "A product view was captured in the dashboard. Review the details below for the latest activity.",
    details: [
      { label: "Product", value: productName },
      { label: "Product ID", value: productId },
      { label: "Viewer", value: viewerId || "Anonymous" },
      { label: "Recorded", value: sentAt },
    ],
    sentAt,
    footerNote:
      "This notification was generated automatically from GTSS analytics.",
  });

  if (!result.success) {
    console.error(
      `Error sending product view email for ${productName}:`,
      result.error,
    );
  }

  return result;
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const sentAt = formatTimestamp();
  return sendNotificationEmail({
    to: defaultRecipientAddress || defaultFromAddress,
    subject: `Contact Form: ${formData.subject}`,
    eyebrow: "Contact form",
    title: "New contact form submission",
    preheader: `New message from ${formData.name} regarding ${formData.subject}.`,
    intro:
      "Someone reached out through the GTSS contact form. Reply directly to continue the conversation.",
    details: [
      { label: "Name", value: formData.name },
      { label: "Email", value: formData.email },
      { label: "Subject", value: formData.subject },
      { label: "Message", value: formData.message, multiline: true },
      { label: "Received", value: sentAt },
    ],
    replyTo: formData.email,
    sentAt,
    footerNote:
      "Reply directly to this email to continue the conversation with the sender.",
  });
}

export async function sendLeadAlertEmail(payload: {
  name: string;
  phone: string;
  email: string;
  company: string;
  interest: string;
  source: string;
}) {
  const sentAt = formatTimestamp();
  return sendNotificationEmail({
    to: defaultRecipientAddress || defaultFromAddress,
    subject: `Restaurant Manager Lead: ${payload.company}`,
    eyebrow: "Lead notification",
    title: "New restaurant manager lead",
    preheader: `A new lead was submitted from ${payload.company}.`,
    intro:
      "A new lead came in from the public demo form. Use the contact details below to follow up.",
    details: [
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone },
      { label: "Company", value: payload.company },
      { label: "Interest", value: payload.interest },
      { label: "Source", value: payload.source },
      { label: "Received", value: sentAt },
    ],
    replyTo: payload.email,
    sentAt,
    footerNote:
      "Reply directly to this email to continue the conversation with the lead.",
  });
}

export async function sendDemoAlertEmail(payload: {
  name: string;
  email: string;
  phone?: string;
  product?: string;
  date?: string;
  message?: string;
}) {
  const sentAt = formatTimestamp();
  return sendNotificationEmail({
    to: defaultRecipientAddress || defaultFromAddress,
    subject: `Demo Request: ${payload.product || "General"}`,
    eyebrow: "Demo request",
    title: "New demo request",
    preheader: `A new demo request from ${payload.name}.`,
    intro: "Someone requested a demo through the GTSS platform. Review their details below.",
    details: [
      { label: "Name", value: payload.name },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone || "Not provided" },
      { label: "Product", value: payload.product || "Not specified" },
      { label: "Preferred Date", value: payload.date || "Not specified" },
      { label: "Message", value: payload.message || "None", multiline: true },
      { label: "Received", value: sentAt },
    ],
    replyTo: payload.email,
    sentAt,
    footerNote: "Reply directly to this email to contact the prospect.",
  });
}

export async function sendVisitorConfirmationEmail(payload: {
  to: string;
  name: string;
  subject: string;
  title: string;
  intro: string;
  detailLabel?: string;
  detailValue?: string;
}) {
  if (!resendClient) {
    console.error("Missing RESEND_API_KEY.");
    return { success: false };
  }

  const safeName = escapeHtml(payload.name);
  const safeDetail = payload.detailValue ? escapeHtml(payload.detailValue).replace(/\r?\n/g, "<br />") : "";
  const year = new Date().getFullYear();

  let detailSection = "";
  if (payload.detailLabel && payload.detailValue) {
    detailSection = `
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;background:#fbf8f2;border:1px solid #eee4d3;border-radius:20px;">
        <tr>
          <td style="padding:20px 24px 8px;">
            <div style="font-size:11px;line-height:1.2;letter-spacing:0.18em;text-transform:uppercase;color:#9d8b68;font-weight:700;">${escapeHtml(payload.detailLabel)}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:0 24px 20px;">
            <div style="font-size:15px;line-height:1.7;color:#1f1d19;">${safeDetail}</div>
          </td>
        </tr>
      </table>
    `;
  }

  const html = `<!doctype html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f4efe6;color:#1f1d19;font-family:Arial,Helvetica,sans-serif;">
    <span style="display:none!important;visibility:hidden;opacity:0;color:transparent;height:0;width:0;overflow:hidden;">
      ${escapeHtml(payload.subject)}
    </span>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4efe6;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;border-collapse:separate;">
            <tr>
              <td style="padding:0 4px 16px;">
                <div style="font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#9d8b68;font-weight:700;">GTSS</div>
              </td>
            </tr>
            <tr>
              <td style="border-radius:28px;background:#ffffff;border:1px solid #eadfcf;box-shadow:0 18px 48px rgba(22,18,9,0.08);overflow:hidden;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:separate;">
                  <tr><td><div style="height:10px;background:linear-gradient(90deg,#b8924d,#d4a85c);"></div></td></tr>
                  <tr>
                    <td style="padding:40px 36px 28px;">
                      <div style="display:inline-block;padding:7px 14px;border-radius:999px;background:#f6efe4;color:#8c6a2c;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;">Request received</div>
                      <h1 style="margin:20px 0 12px;font-size:28px;line-height:1.2;letter-spacing:-0.02em;color:#151515;">${escapeHtml(payload.title).replace("{name}", safeName)}</h1>
                      <p style="margin:0 0 28px;font-size:16px;line-height:1.75;color:#4b463c;">${normalizeHtml(payload.intro, true)}</p>

                      ${detailSection}

                      <div style="margin-top:28px;text-align:center;">
                        <p style="font-size:14px;color:#4b463c;margin:0 0 14px;">Need immediate assistance? Chat with us directly:</p>
                        <a href="https://wa.me/254790670542" style="display:inline-block;padding:14px 32px;border-radius:14px;background:#25D366;color:#ffffff;font-size:15px;font-weight:700;text-decoration:none;letter-spacing:0.02em;">💬 Chat on WhatsApp</a>
                      </div>
                    </td>
                  </tr>
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

  try {
    const { error } = await resendClient.emails.send({
      from: defaultFromAddress,
      to: payload.to,
      subject: payload.subject,
      html,
    });
    
    if (error) {
      console.error("Error sending visitor confirmation email:", error);
      return { success: false, error: error.message };
    }
    return { success: true };
  } catch (err) {
    console.error("Exception sending visitor email:", err);
    return { success: false };
  }
}
