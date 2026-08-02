import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(3, "Full name must be at least 3 characters"),

  subject: z.string().trim().min(3, "Subject must be at least 3 characters"),

  email: z.string().trim().email("Please enter a valid email address"),

  message: z.string().trim().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
