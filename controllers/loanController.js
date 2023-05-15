import Loan from "../models/Loan.js";

export const createLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoansByLineNotClosed = async (req, res) => {
  try {
    const loans = await Loan.find({line_name:req.body.line_name, loan_closed_date:{$eq: null}});
    res.json(loans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoansByLineClosed = async (req, res) => {
  try {
    const loans = await Loan.find({line_name:req.body.line_name, loan_closed_date:{$not: {$eq:null}}});
    res.json(loans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoansByCondition = async (req, res) => {
  try {
    const loans = await Loan.find(req.body);
    res.json(loans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const getLoansByLineAll = async (req, res) => {
  try {
    const loans = await Loan.find({line_name:req.body.line_name});
    res.json(loans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoanByLoanNumber = async (req, res) => {
  try {
    const loan = await Loan.findOne({ loan_no: req.params.loanNumber });
    res.json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoansByDateRange = async (req, res) => {
  try {
    const lineName = req.body.line_name;
    const startDate = new Date(req.body.start_date);
    const endDate = new Date(req.body.end_date);
    console.log(startDate);
    const loans = await Loan.find({
      line_name: lineName,
      created_on: { $gte: startDate, $lte: endDate }
    });

    res.json(loans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateBalance = async (req, res) => {
  try {
    const value = req.body.paid_amount;
    const loan = await Loan.findOneAndUpdate(
      { loan_no: req.body.loan_no, line_name:req.body.line_name },
      {$inc: {balance: -value},
    },
      { new: true }
    ).lean();
    //write loan close logic here
    if (loan.balance<= 0){
      const bool = false;
      if (req.body.paid_amount > 0.5*loan.loan_amount){
        bool = true;
      }
      if (loan.balance <0){
        const updatedloan = await Loan.findOneAndUpdate(
          { loan_no: req.body.loan_no, line_name: req.body.line_name},
          {excess_:-loan.balance,
          balance:0,
          loan_closed_date: new Date(),
          is_bulk_paid: bool
          },
          { new: true }
        );
        res.json(updatedloan);
      }

      const updatedloan = await Loan.findOneAndUpdate(
        { loan_no: req.body.loan_no, line_name: req.body.line_name},
        {
        loan_closed_date: new Date(),
        is_bulk_paid:bool
        },
        { new: true }
      );
      res.json(updatedloan);
    }

    res.json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findOneAndUpdate(
      { loan_no: req.body.loan_no, line_name: req.body.line_name},
      req.body,
      { new: true }
    );
    res.json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteLoan = async (req, res) => {
  try {
    await Loan.deleteOne({ line_name: req.body.line_name, loan_no:req.body.loan_no});
    res.status(204).json({message:'Loan successfully deleted'});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
