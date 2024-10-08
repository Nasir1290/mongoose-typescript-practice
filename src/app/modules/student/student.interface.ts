import { Types } from "mongoose";
import { Model } from "mongoose";

export type TGuardian = {
  fatherName: string;
  fatherContactNo: string;
  fatherOccupation: string;
  motherName: string;
  motherContactNo: string;
  motherOccupation: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

export type TLocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type TStudent = {
  id?: string;
  user:Types.ObjectId;
  name: TUserName;
  email: string;
  password: string;
  avatarUrl?: string;
  profileImageUrl?: string;
  gender: "male" | "female" | "others";
  dateOfBirth: string;
  emergencyContactNo?: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress?: string;
  isDeleted?: boolean;
  guardian: TGuardian;
  localGuardian?: TLocalGuardian;
};

export interface StudentModel extends Model<TStudent> {
  isStudentExist(email: string): Promise<boolean>;
}
