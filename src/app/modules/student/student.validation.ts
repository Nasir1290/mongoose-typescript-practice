import { z } from "zod";

const userNameSchemaValidation = z.object({
  firstName: z.string(),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

const guardianValidation = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianValidation = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Define the Zod schema for the Student object
const studentSchemaValidation = z.object({
  id: z.string().optional(),
  // user:z.object(),
  name: userNameSchemaValidation.refine((data) => !!data.firstName, {
    message: "First name is required",
  }),
  guardian: guardianValidation,
  localGuardian: localGuardianValidation.optional(),
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
