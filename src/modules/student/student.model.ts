import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { StudentModel, TStudent, TUserName } from "./student.interface";
import config from "../../app/config";

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


const studentSchema = new Schema<TStudent, StudentModel>({
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
  password: {
    type: String,
    required: true,
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
      message: `{VALUE} is not a correct Blood group Please Enter a valid Blood Group`,
    },
  },
  presentAddress: {
    type: String,
  },
  permanentAddress: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

studentSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

// custom methods
studentSchema.statics.isStudentExist = async function (email: string) {
  const student = await this.findOne({ email });
  return !!student;
};

studentSchema.pre("find", async function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

const Student = model<TStudent, StudentModel>("Student", studentSchema);

export { Student };
