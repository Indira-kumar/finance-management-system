import mongoose from "mongoose";

const LineMemberDetailsSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  member_name: { type: String, required: true },
  address: { type: String, required: true },
  phone_no: { type: Number, required: true },
  password: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now },
  updated_on: { type: Date, required: true, default: Date.now },
  delete_flag: { type: Boolean, required: true, default: false },
});

const LineMemberDetails = mongoose.model('LineMemberDetails', LineMemberDetailsSchema);

export default LineMemberDetails
