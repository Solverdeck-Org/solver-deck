import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const NEWSLETTER_SEGMENT_ID = process.env.RESEND_NEWSLETTER_SEGMENT_ID!;
