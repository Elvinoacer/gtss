'use server';


import { transporter } from '@/lib/email';
import DOMPurify from 'isomorphic-dompurify';

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

  const mailOptions = {
    from: process.env.EMAIL_FROM || cleanEmail,
    to: process.env.EMAIL_SERVER_USER, // Send to admin
    subject: `Contact Form: ${cleanSubject}`,
    text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${cleanName}</p>
      <p><strong>Email:</strong> ${cleanEmail}</p>
      <p><strong>Subject:</strong> ${cleanSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${cleanMessage.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Failed to send email. Please try again later.' };
  }
}
