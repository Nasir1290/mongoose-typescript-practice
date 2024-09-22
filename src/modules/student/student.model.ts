import { model, Schema } from "mongoose";
import { TStudent, TUserName } from "./student.interface";

const userNameSchema = new Schema<TUserName>({
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

const studentSchema = new Schema<TStudent>({
  id: {
    type: String,
  },
  name: {
    type: userNameSchema,
    required: [true, "user name is required"],
  },
  avatarUrl: {
    type: String,
  },
  profileImageUrl: {
    type: String,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "others"],
      message: `{VALUE} is a invalid value`,
    },
    required: [true, "Gender is required"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
  },
  emergencyContactNo: {
    type: String,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
      message: `{VALUE} is not a correct Blood Grout Please Enter Your Blood Group`,
    },
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
});

// custom methods



const Student = model<TStudent>("Student", studentSchema);

export {Student};
