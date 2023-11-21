import * as z from "zod";

export const SignUpValidationForm = z.object({
    name: z.string().min(2, { message: "Too Short" }),
    username: z.string().min(2, { message: "Too Short" }).max(50),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password Must be atleast 8 characters' })
});

export const SignInValidationForm = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: 'Password Must be atleast 8 characters' })
});