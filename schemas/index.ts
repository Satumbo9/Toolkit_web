import { z } from "zod";

const requiredString = z.string().min(1, "Required!").trim();
const requiredPassword = requiredString.regex(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  {
    message: "Only capitals, lowercases, numbers, and special character!",
  },
);
const requiredEmail = requiredString
  .email("Invalid Email!")
  .regex(
    /^[a-zA-Z0-9._%+-]+@micamp\.com$/,
    "Only @micamp.com emails are allowed!",
  );

export const SignInSchema = z.object({
  email: requiredString.email(),
  username: requiredString.optional(),
  password: z.string().min(1, {
    message: "Password shouldn't be blank!",
  }),
});

export const SignUpSchema = z.object({
  email: requiredEmail,
  password: requiredPassword,
  phone: z.string().max(10),
  UserName: requiredString.max(25),
  departmentId: requiredString,
});

export const UpdateUserSchema = z.object({
  id: requiredString,
  email: requiredEmail,
  password: z.string(),
  username: requiredString.max(25, "Max at 25 characters!"),
  phone: requiredString.max(10, "Not more than 10 digits!"),
  image: z.string().optional(),
});

export type UpdateUserValues = z.infer<typeof UpdateUserSchema>;
export type SignInValues = z.infer<typeof SignInSchema>;
export type SignUpValues = z.infer<typeof SignUpSchema>;
