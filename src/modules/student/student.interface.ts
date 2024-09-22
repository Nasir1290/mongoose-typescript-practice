

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
};

export type TStudent = {
  id?: string;
  name: TUserName;
  avatarUrl?: string;
  profileImageUrl?: string;
  gender: "male" | "female" | "others";
  email: string;
  dateOfBirth: string;
  emergencyContactNo?: string;
  bloodGroup?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presentAddress: string;
  permanentAddress?: string;
};


