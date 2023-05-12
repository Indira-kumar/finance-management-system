import mongoose from "mongoose";

const DailyAmountCollectionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  amount_paid: { type: Number, required: true },
  date: { type: Date, required: true },
  total_amount_paid: { type: Number },
  created_on: { type: Date, required: true, default: Date.now },
  daily_total_collection: { type: Number },
  line_name: { type: String, required: true },
  total_amount: { type: Number, required: true },
  updated_on: { type: Date, required: true, default: Date.now },
  loan_no: { type: String },
});

const DailyAmountCollection = mongoose.model('DailyAmountCollection', DailyAmountCollectionSchema);

export default DailyAmountCollection
