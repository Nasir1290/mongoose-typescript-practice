import { z } from "zod";

const userNameSchemaValidation = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

// Define the Zod schema for the Student object
const studentSchemaValidation = z.object({
  id: z.string().optional(),
  name: userNameSchemaValidation.refine((data) => !!data.firstName, {
    message: "First name is required",
  }),
  email: z.string().email("Invalid email format"),
  password: z.string(),
  avatarUrl: z.string().url().optional(),
  profileImageUrl: z.string().url().optional(),
  gender: z.enum(["male", "female", "others"], {
    errorMap: (issue) => {
      return { message: `${issue} is an invalid gender value` };
    },
  }),
  dateOfBirth: z.string(),
  emergencyContactNo: z.string().optional(),
  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

export default studentSchemaValidation;
