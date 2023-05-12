import mongoose from "mongoose";

const TotalCollectionSchema = new mongoose.Schema({
  line_name: { type: String, required: true },
  date: { type: Date, required: true, default:Date.now},
  total_amount: { type: Number, required: true },
});

const TotalCollection = mongoose.model('TotalCollection', TotalCollectionSchema);

export default TotalCollection
