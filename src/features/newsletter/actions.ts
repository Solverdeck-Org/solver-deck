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

const NEWSLETTER_TEMPLATE_ID =
  process.env.RESEND_NEWSLETTER_TEMPLATE_ID ??
  "87e67b14-b178-41d9-ace5-2cddc7fd977d";

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
    // Uses the Resend-hosted template. `subject` is defined in the template.
    // `date` fills the template's date variable, e.g. "Mon, 8 June 2026".
    template: {
      id: NEWSLETTER_TEMPLATE_ID,
      variables: {
        date: new Intl.DateTimeFormat("en-GB", {
          weekday: "short",
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date()),
      },
    },
  });

  if (error) return { success: false, error: "Something went wrong. Please try again." };
  return { success: true };
}
