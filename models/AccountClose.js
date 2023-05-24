import mongoose from "mongoose";

const AccountCloseSchema = new mongoose.Schema({
  line_name: { type: String, required: true },
  date:{type:Date, required:true}
});

const AccountClose = mongoose.model('AccountClose', AccountCloseSchema);
export default AccountClose;
