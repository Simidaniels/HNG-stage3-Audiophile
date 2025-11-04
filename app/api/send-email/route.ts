import { NextResponse } from "next/server";
import { sendOrderConfirmationEmail } from "../../../lib/email";
import { OrderConfirmationEmailProps } from "../../../emails/OrderConfirmation";

export async function POST(req: Request) {
  try {
    // Parse and type the request body
    const data = (await req.json()) as OrderConfirmationEmailProps;

    // TypeScript now knows these fields exist
    if (!data.customerEmail || !data.orderId) {
      return NextResponse.json(
        { error: "Missing required fields: customerEmail or orderId" },
        { status: 400 }
      );
    }

    // Send the email
    await sendOrderConfirmationEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send order confirmation email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
