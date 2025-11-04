// app/api/send-email/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sendOrderConfirmationEmail } from "../../../lib/email.server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    await sendOrderConfirmationEmail(data); // only server code
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, error: String(err) }, { status: 500 });
  }
}
