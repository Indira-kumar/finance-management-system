import mongoose from "mongoose";

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
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
    phoneNumber:{
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "Admin",
    },
  })
);

export default User;