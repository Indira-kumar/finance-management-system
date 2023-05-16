import Thittam from '../models/Thittam.js';
import DailyAmountCollection from '../models/DailyAmountCollection.js';
import Loan from "../models/Loan.js";
import Line from "../models/Line.js";
import Head from "../models/Head.js";
// Fetch all Thittam documents
export const getThittam = async (req, res) => {
  try {
    const thittamDocuments = await Thittam.find({});
    res.status(200).json(thittamDocuments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new Thittam document with dynamic fields
export const createThittam = async (req, res) => {
  try {
    const today = req.body.date;
    // Get today's date
    // const today = new Date();
    // today.setHours(0, 0, 0, 0);
    // today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

    // Fetch all unique line_names from DailyAmountCollection
    const lineNames = await DailyAmountCollection.distinct('line_name');

    // Prepare dynamic fields
    const fields = [];

    // Create dynamic fields for "loan" values
    lineNames.forEach(async (lineName) => {
      const fieldName = `${lineName}_loan`;
      const fieldValue = await calculateLoanAmount(lineName, today, fields, fieldName);
      fields.push({ name: fieldName, credit: fieldValue, debit:0, description:''});
    });

    // Create dynamic fields for "commission" values
    lineNames.forEach( async (lineName) => {
      const fieldName = `${lineName}_commission`;
      const fieldValue = await calculateCommissionAmount(lineName, today)
      fields.push({ name: fieldName, credit: fieldValue, debit:0, description:'' });
    });

    // Create dynamic fields for "bill" values
    lineNames.forEach( async (lineName) => {
      const fieldName = `${lineName}_bill`;
      const fieldValue = await calculatePaidAmount(lineName, today);
      fields.push({ name: fieldName, credit:0, debit:fieldValue, description:''});
    });

    //create dynamic fields for "seetu"
    lineNames.forEach( async (lineName) => {
      const fieldName = `${lineName}_bill`;
      const fieldValue = await calculateSeetu(lineName, today);
      fields.push({ name: fieldName, credit:fieldValue, debit:0, description:''});
    });
    
    //fecthing all head_name from Head
    const head_names =  await Head.distinct('head_name'); 

    //
    head_names.forEach( async (headName) => {
      fields.push({ name: headName, credit:0, debit:0, description:''});

    })
    // Create the new Thittam document with dynamic fields
    const newThittam = new Thittam({date: req.body.date, fields });

    // Save the new Thittam document
    const savedThittam = await newThittam.save();

    res.status(201).json(savedThittam);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Helper function to calculate loan amount based on line_name and date
const calculateLoanAmount = async (lineName, date,  fields, fieldName) => {
  const loans = await Loan.find({ line_name: lineName, date: date }).lean();
  const loanAmount = loans.reduce((prev, curr) => prev + curr.loan_amount, 0)
  return loanAmount;
};

// Helper function to calculate commission amount based on line_name and date
const calculateCommissionAmount = async (lineName, date) => {
  const commissions = await Loan.find({ line_name: lineName, date: date });
  const commisionAmount = commissions.reduce((prev, curr) => prev + curr.commission_amount, 0)
  return commisionAmount;
};

// Helper function to calculate Seetu amount based on line_name and date
const calculateSeetu = async (lineName, date) => {
  const seetu = await Loan.find({ line_name: lineName, date: date });
  const seetuAmount = seetu.reduce((prev, curr) => prev + curr.seetu_amount, 0)
  return seetuAmount;
};

// Helper function to calculate paid amount based on line_name and date
const calculatePaidAmount = async (lineName, date) => {
  const bills = await DailyAmountCollection.find({ line_name: lineName, date: date });
  const bill = bills.reduce((acc, bill) => acc + bill.amount_paid, 0)
  return bill;
};
