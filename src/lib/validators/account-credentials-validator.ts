import { z } from "zod";

export const AuthCredentialsValidator = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>;
