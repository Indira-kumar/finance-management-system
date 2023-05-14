import DailyAmountCollection from '../models/DailyAmountCollection.js';

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
    const dailyCollections = await DailyAmountCollection.find({line_name:req.body.line_name, date:req.body.date});
    res.status(200).json(dailyCollections);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllDailyCollectionsByconditions = async (req, res) => {
  try {
    const dailyCollections = await DailyAmountCollection.find(req.body);
    res.status(200).json(dailyCollections);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllDailyCollectionsPerLoan = async (req, res) => {
  try {
    const dailyCollections = await DailyAmountCollection.find({line_name:req.body.line_name, loan_no:req.body.loan_no});
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

export const updateDailyCollection = async (req, res) => {
  try {
    const line_name = req.body.line_name;
    const date = req.body.date;
    const loanNumber = req.body.loan_no;
    const updatedPaidAmount = req.body.amount_paid
    const dailyCollection = await DailyAmountCollection.findOneAndUpdate(
      { loan_no: loanNumber, line_name: line_name, date:date },
      {amount_paid: updatedPaidAmount},
      { new: true, runValidators: true }
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

export const deleteDailyCollection = async (req, res) => {
  try {
    const loanNumber = req.body.loan_no;
    const lineName = req.body.line_name
    const result = await DailyAmountCollection.deleteOne({ loan_no: loanNumber, line_name: lineName });
    if (result.deletedCount === 1) {
      res.status(204).json({ message: 'Succesfully Deleted' })
    } else {
      res.status(404).json({ message: 'Daily collection entry not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// // Update daily collection entry by loan number
// export const updateDailyCollectionByLoanNumber = async (req, res) => {
//   try {
//     const loanNumber = req.params.loan_no;
//     const dailyCollection = await DailyAmountCollection.findOneAndUpdate(
//       { loan_no: loanNumber },
//       req.body,
//       { new: true }
//     );
//     if (dailyCollection) {
//       res.status(200).json(dailyCollection);
//     } else {
//       res.status(404).json({ message: 'Daily collection entry not found' });
//     }
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete daily collection entry by loan number
// export const deleteDailyCollectionByLoanNumber = async (req, res) => {
//   try {
//     const loanNumber = req.body.loan_no;
//     const lineName = req.body.line_name
//     const result = await DailyAmountCollection.deleteOne({ loan_no: loanNumber, line_name: lineName });
//     if (result.deletedCount === 1) {
//       res.status(204).send();
//     } else {
//       res.status(404).json({ message: 'Daily collection entry not found' });
//     }
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };
