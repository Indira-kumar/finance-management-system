import mongoose from "mongoose";

const LoanAmountDetailsSchema = new mongoose.Schema({
  loan_no: { type: String, required: true, unique: true },
  user_no: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone_no: { type: String, required: true },
  order_no: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now },
  updated_on: { type: Date, required: true, default: Date.now },
  loan_amount: { type: Number, required: true },
  seetu_amount: { type: Number, required: true },
  interest: { type: Number, required: true },
  app_loan_close_date: { type: Date },
  loan_closed_date: { type: Date },
  excess_amount: { type: Number },
  line_name: { type: String, required: true}
});

const LoanAmountDetails = mongoose.model('LoanAmountDetails', LoanAmountDetailsSchema);

export default LoanAmountDetails
