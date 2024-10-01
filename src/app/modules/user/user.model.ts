import bcrypt from "bcrypt";
import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import config from "../../config";

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
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
      default: "in-progress",
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
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

const User = model<TUser>("User", userSchema);
export { User };
