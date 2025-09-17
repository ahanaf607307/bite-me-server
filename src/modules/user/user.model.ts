import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "This email is already exist"],
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: [true, "This phone is already exist"],
    validate: {
      validator: function (v) {
        return /^01[34789][0-9]{8}$/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    required: true,
  },
});

export const User = model<IUser>("user", userSchema);
