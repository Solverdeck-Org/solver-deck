import { NextResponse } from "next/server";
import { resend, NEWSLETTER_SEGMENT_ID } from "@/lib/resend";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    const cleanEmail = String(email || "").trim().toLowerCase();

    if (!cleanEmail || !isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { ok: false, message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    // Remove them from your Newsletter segment
    const removed = await resend.contacts.segments.remove({
      email: cleanEmail,
      segmentId: NEWSLETTER_SEGMENT_ID,
    });

    if (removed.error) {
      return NextResponse.json(
        { ok: false, message: removed.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, message: "Unsubscribed" });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
