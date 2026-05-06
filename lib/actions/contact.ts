"use server";

import { sendContactEmail } from "@/lib/email";
import DOMPurify from "isomorphic-dompurify";

export async function sendEmail(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { name, email, subject, message } = formData;

  const cleanName = DOMPurify.sanitize(name);
  const cleanEmail = DOMPurify.sanitize(email);
  const cleanSubject = DOMPurify.sanitize(subject);
  const cleanMessage = DOMPurify.sanitize(message);

  try {
    return await sendContactEmail({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
