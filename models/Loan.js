import mongoose from "mongoose";

const loanSchema = new mongoose.Schema({
  loan_no: { type: String, required: true },
  user_no: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone_no: { type: String, required: true },
  order_no: { type: String, required: true },
  date:{ type: Date, required: true},
  created_on: { type: Date, required: true, default: new Date() },
  updated_on: { type: Date, required: true, default: new Date() },
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

//logic to make sure that loan_no is consecutive and unique wrt a line_name  
loanSchema.pre('save', async function(next) {
  try {
    // Check if loan_no is already assigned
    if (this.loan_no) {
      return next();
    }
    
    // Find the highest loan_no for the current line_name
    const highestLoan = await this.constructor.findOne({ line_name: this.line_name })
      .sort({ loan_no: -1 })
      .exec();
    
    // Generate a new loan_no
    let newLoanNo = '';
    if (highestLoan) {
      // If there are existing loans for this line_name, increment the highest loan_no
      const currentLoanNo = parseInt(highestLoan.loan_no, 10);
      newLoanNo = `${(currentLoanNo + 1).toString()}`;
    } else {
      // If there are no existing loans for this line_name, start with 0001
      newLoanNo = '1';
    }
    
    // Assign the new loan_no to the loan document
    this.loan_no = newLoanNo;
    next();
  } catch (err) {
    next(err);
  }
});

// pre middleware to set user_no before saving a new loan
loanSchema.pre('save', async function (next) {
  const loan = this;
  if (!loan.user_no) {
    try {
      const latestLoan = await Loan.findOne({ name: loan.name, line_name:loan.line_name })
        .sort('-user_no')
        .select('user_no');
      loan.user_no = latestLoan ? latestLoan.user_no + 1 : 1;
      next();
    } catch (err) {
      next(err);
    }
  }
});

const Loan = mongoose.model('Loan', loanSchema);

export default Loan;
