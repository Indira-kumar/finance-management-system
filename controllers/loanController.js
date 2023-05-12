import { Loan } from "../models/Loan.js";

export const createLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoans = async (req, res) => {
  try {
    const loans = await Loan.find({});
    res.json(loans);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getLoan = async (req, res) => {
  try {
    const loan = await Loan.findOne({ loan_no: req.params.loanNumber });
    res.json(loan);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateLoan = async (req, res) => {
  try {
    const loan = await Loan.findOneAndUpdate(
      { loan_no: req.body.loan_no },
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
    await Loan.deleteOne({ loan_no: req.params.loanNumber });
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
