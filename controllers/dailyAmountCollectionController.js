import { Request, Response } from 'express';
import DailyAmountCollection from '../models/daily_amount_collection';

// Add new daily collection entry
export const createDailyCollection = async (req, res) => {
  try {
    const dailyCollection = new DailyAmountCollection(req.body);
    await dailyCollection.save();
    res.status(201).json(dailyCollection);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all daily collection entries
export const getAllDailyCollections = async (req, res) => {
  try {
    const dailyCollections = await DailyAmountCollection.find();
    res.status(200).json(dailyCollections);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get daily collection entry by loan number
export const getDailyCollectionByLoanNumber = async (req, res) => {
  try {
    const loanNumber = req.params.loan_no;
    const dailyCollection = await DailyAmountCollection.findOne({ loan_no: loanNumber });
    if (dailyCollection) {
      res.status(200).json(dailyCollection);
    } else {
      res.status(404).json({ message: 'Daily collection entry not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update daily collection entry by loan number
export const updateDailyCollectionByLoanNumber = async (req, res) => {
  try {
    const loanNumber = req.params.loan_no;
    const dailyCollection = await DailyAmountCollection.findOneAndUpdate(
      { loan_no: loanNumber },
      req.body,
      { new: true }
    );
    if (dailyCollection) {
      res.status(200).json(dailyCollection);
    } else {
      res.status(404).json({ message: 'Daily collection entry not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete daily collection entry by loan number
export const deleteDailyCollectionByLoanNumber = async (req, res) => {
  try {
    const loanNumber = req.params.loan_no;
    const result = await DailyAmountCollection.deleteOne({ loan_no: loanNumber });
    if (result.deletedCount === 1) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Daily collection entry not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
