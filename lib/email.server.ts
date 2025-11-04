// lib/email.server.ts
import nodemailer from "nodemailer";

export interface OrderConfirmationEmailProps {
  orderId: string;
  customerEmail: string;
  customerName?: string;
  items?: { name: string; quantity: number; price: number }[];
}

// ---------------------------------------------------
// Setup Nodemailer transporter
// Make sure to add these in your .env.local
// SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
// ---------------------------------------------------
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // true for 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ---------------------------------------------------
// Simple HTML template for the email
// ---------------------------------------------------
function buildOrderConfirmationHTML(props: OrderConfirmationEmailProps) {
  const { orderId, customerName, items } = props;
  const itemList = items
    ?.map(
      (item) =>
        `<li>${item.name} x ${item.quantity} - $${(
          item.price * item.quantity
        ).toFixed(2)}</li>`
    )
    .join("") ?? "";

  return `
    <h2>Thank you for your order${customerName ? ", " + customerName : ""}!</h2>
    <p>Your order ID: <strong>${orderId}</strong></p>
    <ul>${itemList}</ul>
    <p>We appreciate your business and hope you enjoy your products!</p>
  `;
}

// ---------------------------------------------------
// Send the email
// ---------------------------------------------------
export async function sendOrderConfirmationEmail(props: OrderConfirmationEmailProps) {
  const html = buildOrderConfirmationHTML(props);

  await transporter.sendMail({
    from: `"Audiophile Store" <${process.env.SMTP_USER}>`,
    to: props.customerEmail,
    subject: `Order Confirmation - ${props.orderId}`,
    html,
  });
}
