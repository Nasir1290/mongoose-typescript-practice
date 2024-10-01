import { model, Schema } from "mongoose";
import {
  StudentModel,
  TStudent,
  TUserName,
  TLocalGuardian,
  TGuardian,
} from "./student.interface";

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, "first name is required"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    trim: true,
    required: [true, "Father Name is required"],
  },
  fatherOccupation: {
    type: String,
    trim: true,
    required: [true, "Father occupation is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father Contact No is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother Name is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother occupation is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother Contact No is required"],
  },
});

const localGuradianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, "Id is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: [true, "User is required"],
  },
  name: {
    type: userNameSchema,
    required: [true, "user name is required"],
  },
  guardian: {
    type: guardianSchema,
    required: [true, "guardian information is required"],
  },
  localGuardian: {
    type: localGuradianSchema,
  },
  avatarUrl: {
    type: String,
    default: "",
  },
  profileImageUrl: {
    type: String,
    default: "",
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
      message: `{VALUE} is not a valid Blood Group`,
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

studentSchema.virtual("fullName").get(function () {
  return (
    this?.name?.firstName +
    " " +
    this?.name?.middleName +
    " " +
    this?.name?.lastName
  );
});


// custom methods
studentSchema.statics.isStudentExist = async function (email: string) {
  const student = await this.findOne({ email });
  return !!student;
};

// Query Middleware
studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

const Student = model<TStudent, StudentModel>("Student", studentSchema);

export { Student };
