"use server";

import { Resend } from "resend";
import { z } from "zod";

export interface ContactState {
  success: boolean;
  error?: string;
}

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || undefined,
    company: formData.get("company") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid input";
    return { success: false, error: message };
  }

  const { name, email, phone, company, message } = parsed.data;

  const html = [
    `<p><strong>Name:</strong> ${name}</p>`,
    `<p><strong>Email:</strong> ${email}</p>`,
    phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "",
    company ? `<p><strong>Company:</strong> ${company}</p>` : "",
    `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
  ].join("");

  const { error } = await resend.emails.send({
    from: "Solverdeck <hello@solverdeck.com>",
    to: ["hello@solverdeck.com"],
    subject: `New enquiry from ${name}`,
    html,
  });

  if (error) {
    return { success: false, error: "Failed to send your message. Please try again." };
  }

  return { success: true };
}
