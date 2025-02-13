import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["doctor", "nurse", "admin"],
      default: "nurse",
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);


