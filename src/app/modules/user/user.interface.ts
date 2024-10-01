export type TUser = {
  id: string;
  password: string;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "blocked";
  needsPasswordChange: boolean;
  isDeleted: boolean;
};


