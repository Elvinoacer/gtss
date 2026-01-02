import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendProductViewEmail(productName: string, productId: string, viewerId?: string) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_SERVER_USER, // Sending to admin (same as sender for now)
      subject: `New Product View: ${productName}`,
      html: `
        <h1>Product Viewed</h1>
        <p><strong>Product:</strong> ${productName} (ID: ${productId})</p>
        <p><strong>Viewer:</strong> ${viewerId || 'Anonymous'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent for product view: ${productName}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
