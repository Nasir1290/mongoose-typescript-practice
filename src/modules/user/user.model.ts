import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
  {
    id: {
      tyle: String,
      required: true,
    },
    password: {
      tyle: String,
      required: true,
    },
    role: {
      tyle: String,
      enum: {
        values: ["admin", "student", "faculty"],
        messaeg: `{VALUE} is not a valid role! Role should be admin or student or faculty`,
      },
    },
    status: {
      type: String,
      enum: {
        values: ["in-progress", "blocked"],
        message: `{VALUE} is not a valid status. Status should be in progress or blocked`,
      },
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  },
);

const User = model<TUser>("User", userSchema);
export { User };
