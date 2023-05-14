import mongoose from "mongoose";

const DailyAmountCollectionSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  amount_paid: { type: Number, required: true },
  date: { type: Date, required: true },
  line_name: { type: String, required: true },
  updated_on: { type: Date, required: true, default: Date.now },
  loan_no: { type: String },
});

const DailyAmountCollection = mongoose.model('DailyAmountCollection', DailyAmountCollectionSchema);

export default DailyAmountCollection
