// Joi validation
// import Joi from "joi";

//     const userNameSchemaValidation = Joi.object({
//       firstName: Joi.string()
//         .regex(/^[A-Za-z]+$/) // Ensures that only alphabet characters are allowed
//         .required()
//         .messages({
//           "string.pattern.base": "Please enter a valid user name",
//           "any.required": "First name is required",
//         }),
//       middleName: Joi.string().optional(), // Optional field
//       lastName: Joi.string().optional(), // Optional field
//     });

// // Student Joi Schema
// const studentSchemaValidation = Joi.object({

//   id: Joi.string().optional(), // Optional since it wasn't required in your Mongoose schema
//   name: userNameSchemaValidation.required().messages({
//     "any.required": "User name is required",
//   }),
//   avatarUrl: Joi.string().optional().uri(), // Optional, must be a valid URL
//   profileImageUrl: Joi.string().optional().uri(), // Optional, must be a valid URL
//   gender: Joi.string().valid("male", "female", "others").required().messages({
//     "any.only": "{#value} is an invalid gender",
//     "any.required": "Gender is required",
//   }),
//   email: Joi.string().optional().email().messages({
//     "string.email": "Please enter a valid email address",
//   }), // Optional but must be valid email if provided
//   dateOfBirth: Joi.string().optional().isoDate().messages({
//     "string.isoDate": "Date of Birth must be a valid ISO date",
//   }), // Optional but should follow ISO date format
//   emergencyContactNo: Joi.string()
//     .optional()
//     .pattern(/^[0-9]+$/)
//     .messages({
//       "string.pattern.base":
//         "Emergency contact number must contain only digits",
//     }), // Optional but must contain only digits if provided
//   bloodGroup: Joi.string()
//     .valid("A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-")
//     .optional()
//     .messages({
//       "any.only": "{#value} is not a valid blood group",
//     }),
//   presentAddress: Joi.string().optional(), // Optional
//   permanentAddress: Joi.string().optional(), // Optional
// });

// export default studentSchemaValidation




// Zod validation
import { z } from "zod";

const userNameSchemaValidation = z.object({
  firstName: z.string().nonempty("First name is required"),
  middleName: z.string().optional(),
  lastName: z.string().optional(),
});

// Define the Zod schema for the Student object
const studentSchemaValidation = z.object({
  id: z.string().optional(),
  name: userNameSchemaValidation.refine((data) => !!data.firstName, {
    message: "User name is required",
  }),
  email: z.string().email("Invalid email format"),
  password:z.string(),
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
});

export default studentSchemaValidation;
