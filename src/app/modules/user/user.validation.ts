import { z } from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string({
      invalid_type_error: "password is not valid",
    })
    .min(8, "password must be at least 8 characters")
    .max(20, "password can't be more than 20 characters")
    .optional(),
});

export const userValidation = {
  userValidationSchema,
};
