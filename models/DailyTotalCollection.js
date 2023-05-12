import mongoose from "mongoose";

const DailyTotalCollectionSchema = new mongoose.Schema({
  line_name: { type: String, required: true },
  date: { type: Date, required: true, default:Date.now},
  total_amount: { type: Number, required: true },
});

const DailyTotalCollection = mongoose.model('DailyTotalCollection', DailyTotalCollectionSchema);

export default DailyTotalCollection
