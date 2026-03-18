import { z } from "zod";

export const signupSchema = z
  .object({
    firstname: z.string().min(3, "Minimum 3 characters"),
    lastname: z.string().min(3, "Minimum 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ✅ Type automatically generated
export type SignupFormData = z.infer<typeof signupSchema>;