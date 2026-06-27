"use server";

import { sendContactEmail, sendVisitorConfirmationEmail } from "@/lib/email";

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { name, email, subject, message } = formData;

  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  try {
    const adminResult = await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    if (adminResult.success) {
      await sendVisitorConfirmationEmail({
        to: cleanEmail,
        name: cleanName,
        subject: "We received your message – GTSS",
        title: "Hi {name}, thanks for reaching out!",
        intro: "We've received your message and our team will get back to you within <strong>24 hours</strong>. We appreciate your interest in our solutions.",
        detailLabel: "Your message",
        detailValue: cleanMessage,
      });
    }

    return adminResult;
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
