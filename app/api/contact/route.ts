// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactEmail from "@/components/emails/ContactEmail";

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, message, hp } = await req.json();

    // Honeypot check
    if (hp) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Solver Deck <contact@solverdeck.com>", // use a verified sender; or "onboarding@resend.dev" for tests
      to: ["hr@solverdeck.com"],
      subject: `New contact form submission — ${name}`,
      // You can use either react: <ContactEmail .../> OR html: "..."
      react: ContactEmail({ name, email, phone, company, message }),
      replyTo: email, // so you can reply directly to the sender
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
