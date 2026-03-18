import { z } from "zod";

export const signupSchema = z
  .object({
    firstname: z
      .string()
      .min(3, "Minimum 3 characters")
      .max(15,"max 15 char allowed")
      .regex(/^[A-Za-z]+$/, "Only alphabets allowed"),

    lastname: z
      .string()
      .min(3, "Minimum 3 characters")
      .max(15,"max 15 char allowed")
      .regex(/^[A-Za-z]+$/, "Only alphabets allowed"),

    email: z.string().email("Invalid email"),

    password: z
      .string()
      .min(6, "Minimum 6 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ✅ Type automatically generated
export type SignupFormData = z.infer<typeof signupSchema>;