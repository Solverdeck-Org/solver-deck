"use server";

import { z } from "zod";
import { writeClient } from "@/sanity/lib/writeClient";

export interface TestimonialSubmitState {
  success: boolean;
  error?: string;
}

const schema = z.object({
  testimony: z.string().min(10, "Please write at least 10 characters"),
  name: z.string().optional(),
  company: z.string().optional(),
  jobTitle: z.string().optional(),
});

export async function submitTestimonial(
  _prev: TestimonialSubmitState,
  formData: FormData,
): Promise<TestimonialSubmitState> {
  const parsed = schema.safeParse({
    testimony: formData.get("testimony"),
    name: formData.get("name") || undefined,
    company: formData.get("company") || undefined,
    jobTitle: formData.get("jobTitle") || undefined,
  });

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const { testimony, name, company, jobTitle } = parsed.data;

  try {
    await writeClient.create({
      _type: "testimony",
      testimony,
      ...(name && { name }),
      ...(jobTitle && { jobTitle }),
      ...(company && { company }),
      showOnHomepage: false,
    });
  } catch {
    return { success: false, error: "Failed to submit. Please try again." };
  }

  return { success: true };
}
