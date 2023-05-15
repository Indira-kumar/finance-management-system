import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema({
  loan_no: { type: String, required: true },
  user_no: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone_no: { type: String, required: true },
  order_no: { type: String, required: true },
  created_on: { type: Date, required: true, default: Date.now },
  updated_on: { type: Date, required: true, default: Date.now },
  loan_amount: { type: Number, required: true },
  pay_amount:{type:Number, required:true}, //send in UI by dividing the loan_amount*interest/100
  balance:{type:Number, required: true}, //send in UI, value same as loan_amount
  is_bulk_paid:{type:Boolean, required:true, default:false },
  // weekly_history:{type:[Boolean], default:[false, false]},
  seetu_amount: { type: Number, required: true },
  interest: { type: Number, required: true },
  approx_loan_close_date: { type: Date }, //send in UI by adding 100 days to the current date
  loan_closed_date: { type: Date, default:null},
  commission_amount:{type:Number, required:true},
  excess_: { type: Number, default:0 },
  line_name: { type: String, required: true}
});

const Loan = mongoose.model('Loan', LoanSchema);

export default Loan;
