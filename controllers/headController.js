import Head from "../models/Head.js";
// POST /Head
export const createHead = async (req, res) => {
  try {
    const head = await Head.create(req.body);
    res.status(201).json(head);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /Head
export const getAllHead = async (req, res) => {
  try {
    const head = await Head.find();
    res.json(head);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PUT /Head
export const updateHead = async (req, res) => {
  try {
    const head = await Head.findOneAndUpdate(
      { head_name: req.body.head_name },
      {head_name:req.body.new_head_name},
      { new: true, upsert: true }
    );
    res.json(head);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE /Head/:id
export const deleteHead = async (req, res) => {
  try {
    const head = await Head.findOneAndDelete({
      head_name: req.body.head_name,
    });
    if (head) {
      res.json({ message: "Head  deleted" });
    } else {
      res.status(404).json({ message: "Head  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PATCH /Head/:id
