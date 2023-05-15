import TotalCollection from "../models/TotalCollection.js";
import DailyAmountCollection from "../models/DailyAmountCollection.js";
// Create a new total collection
export const createTotalCollection = async (req, res) => {
  try {
    const todayCollection = await DailyAmountCollection.find({line_name: req.body.line_name, date:req.body.date}).lean();
    const totalAmounts = todayCollection.map(obj => obj.amount_paid);
    const total = totalAmounts.reduce((prev, cur) => prev + cur)
    const totalCollection = await TotalCollection.create({
      line_name: req.body.line_name, 
      date:req.body.date,
      total_amount:total
    });
    return res.status(201).json(totalCollection);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create total collection." });
  }
}

// Get all total collections
export const getTotalCollections = async (req, res) => {
  try {
    const totalCollections = await TotalCollection.find({
      line_name:req.body.line_name
    });
    return res.json(totalCollections);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get total collections." });
  }
}

// Get all total collections
export const getTotalCollectionsByDateRange = async (req, res) => {
  try {
    const lineName = req.body.line_name;
    const startDate = new Date(req.body.start_date);
    const endDate = new Date(req.body.end_date);
    console.log(startDate);
    const totalcollections = await TotalCollection.find({
      line_name: lineName,
      date: { $gte: startDate, $lte: endDate }
    });

    res.json(totalcollections);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update an existing total collection
export const updateTotalCollection = async (req, res) => {
  try {
    const totalCollection = await TotalCollection.findOneAndUpdate({ date: req.body.date, line_name:req.body.line_name }, req.body, { new: true });
    if (!totalCollection) {
      return res.status(404).json({ message: "Total collection not found." });
    }
    return res.json(totalCollection);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to update total collection." });
  }
}

// Delete a total collection by date
export const deleteTotalCollection = async (req, res) => {
  try {
    const totalCollection = await TotalCollection.findOneAndDelete({ date: req.params.date });
    if (!totalCollection) {
      return res.status(404).json({ message: "Total collection not found." });
    }
    return res.json({ message: "Total collection deleted successfully." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to delete total collection." });
  }
}

