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
      default: "admin",
    },
  })
);

export default User;