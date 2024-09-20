import { model, Schema } from "mongoose";
import { Student, UserName } from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});


const studentSchema = new Schema<Student>({
  id: {
    type: String,
  },
  name: userNameSchema,
  avatarUrl: {
    type: String,
  },
  profileImageUrl: {
    type: String,
  },
  gender: ["male", "female", "others"],
  email: {
    type: String,
  },
  dateOfBirth: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
  },
  bloodGroup: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
});



const StudentModel = model<Student>('Student',studentSchema)

export {StudentModel}