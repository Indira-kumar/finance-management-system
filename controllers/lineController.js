import Line from "../models/Line.js";
// POST /line
export const createLine = async (req, res) => => {
  try {
    const line = await Line.create(req.body);
    res.status(201).json(line);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /line
export const getAllLine = async (req, res) => {
  try {
    const line = await Line.find();
    res.json(line);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /line/:id
export const getLineById = async (req, res) => {
  try {
    const line = await Line.findById(req.params.id);
    if (line) {
      res.json(line);
    } else {
      res.status(404).json({ message: "Line  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PUT /line
export const updateLine = async (req, res) => {
  try {
    const line = await Line.findOneAndUpdate(
      { id: req.body.id },
      req.body,
      { new: true, upsert: true }
    );
    res.json(line);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE /line/:id
export const deleteLineById = async (req, res) => {
  try {
    const line = await Line.findOneAndDelete({
      id: req.params.id,
    });
    if (line) {
      res.json({ message: "Line  deleted" });
    } else {
      res.status(404).json({ message: "Line  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PATCH /line/:id
export const updateLineById = async (req, res) => {
  try {
    const line = await Line.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (line) {
      res.json(line);
    } else {
      res.status(404).json({ message: "Line  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}