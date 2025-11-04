// lib/email.ts
import { renderToStaticMarkup } from "react-dom/server";
import nodemailer from "nodemailer";
import { OrderConfirmationEmail, OrderConfirmationEmailProps } from "../emails/OrderConfirmation";

// ---------------------------------------------------
// Setup Nodemailer transporter (SMTP configuration)
// Make sure to add these in your .env.local
// ---------------------------------------------------
// SMTP_HOST
// SMTP_PORT
// SMTP_USER
// SMTP_PASS
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ---------------------------------------------------
// Send Order Confirmation Email
// ---------------------------------------------------
export async function sendOrderConfirmationEmail(props: OrderConfirmationEmailProps) {
  // Render the email as static HTML
  const html = renderToStaticMarkup(<OrderConfirmationEmail {...props} />);

  // Send the email
  await transporter.sendMail({
    from: `"Audiophile Store" <${process.env.SMTP_USER}>`,
    to: props.customerEmail,
    subject: `Order Confirmation - ${props.orderId}`,
    html,
  });
}
