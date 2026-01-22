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

    // Create contact (or update if exists)
    const created = await resend.contacts.create({
      email: cleanEmail,
      unsubscribed: false,
    });

    if (created.error) {
      // If already exists, re-subscribe them
      const updated = await resend.contacts.update({
        email: cleanEmail,
        unsubscribed: false,
      });

      if (updated.error) {
        return NextResponse.json(
          { ok: false, message: updated.error.message },
          { status: 400 }
        );
      }
    }

    // Add to your Newsletter segment
    const added = await resend.contacts.segments.add({
      email: cleanEmail,
      segmentId: NEWSLETTER_SEGMENT_ID,
    });

    if (added.error) {
      return NextResponse.json(
        { ok: false, message: added.error.message },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true, message: "Subscribed" });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, message: err?.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
