import mongoose from "mongoose";

const LineSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  line_name: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now },
  updated_on: { type: Date, required: true, default: Date.now },
  delete_flag: { type: Boolean, required: true, default: false },
});

const Line = mongoose.model('Line', LineSchema);

export default Line;
