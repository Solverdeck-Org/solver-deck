"use server";

import { Resend } from "resend";
import { z } from "zod";

export interface NewsletterState {
  success: boolean;
  error?: string;
}

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(
  _prev: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const parsed = schema.safeParse({ email: formData.get("email") });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid email" };
  }

  const { error } = await resend.emails.send({
    from: "Solverdeck <hello@solverdeck.com>",
    to: [parsed.data.email],
    subject: "Welcome to Solverdeck updates!",
    html: "<p>Hi there!</p><p>Thanks for subscribing. We'll keep you in the loop on our latest projects, insights, and news.</p><p>— The Solverdeck Team</p>",
  });

  if (error) return { success: false, error: "Something went wrong. Please try again." };
  return { success: true };
}
