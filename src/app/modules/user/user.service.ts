import config from "../../config";
import { TStudent } from "../student/student.interface";

import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  try {
    const userData: Partial<TUser> = {};
    userData.password = password || config.default_password;
    userData.role = "student";
    userData.id = "568427";

    const newUser = await User.create(userData);

    if (Object.keys(newUser).length) {
      studentData.user = newUser._id;
      studentData.id = newUser.id;

      const newStudent = await Student.create(studentData);
      return newStudent;
    } else {
      throw new Error("Failed to create student");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};

export const userServices = { createStudentIntoDB };
