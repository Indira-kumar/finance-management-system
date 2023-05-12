import TotalCollection from "../models/TotalCollection.js";

// Create a new total collection
export const createTotalCollection = async (req, res) => {
  try {
    const totalCollection = await TotalCollection.create(req.body);
    return res.status(201).json(totalCollection);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to create total collection." });
  }
}

// Get all total collections
export const getTotalCollections = async (req, res) => {
  try {
    const totalCollections = await TotalCollection.find({});
    return res.json(totalCollections);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get total collections." });
  }
}

// Get a total collection by date
export const getTotalCollectionByDate = async (req, res) => {
  try {
    const totalCollection = await TotalCollection.findOne({ date: req.params.date });
    if (!totalCollection) {
      return res.status(404).json({ message: "Total collection not found." });
    }
    return res.json(totalCollection);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Failed to get total collection." });
  }
}

// Update an existing total collection
export const updateTotalCollection = async (req, res) => {
  try {
    const totalCollection = await TotalCollection.findOneAndUpdate({ date: req.body.date }, req.body, { new: true });
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

