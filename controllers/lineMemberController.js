import LineMember from "../models/LineMember.js";

// POST /line/member
export const createLineMember = async (req, res) => {
  try {
    const lineMember = await LineMember.create(req.body);
    res.status(201).json(lineMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /line/member
export const getAllLineMember = async (req, res) => {
  try {
    const lineMember = await LineMember.find();
    res.json(lineMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /line/member/:email
export const getLineMemberByPhoneNum = async (req, res) => {
  try {
    const lineMember = await LineMember.findOne({
      phone_no: req.body.phone_number,
    });
    if (lineMember) {
      res.json(lineMember);
    } else {
      res.status(404).json({ message: "Line member  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PUT /line/member
export const updateLineMemberByPhoneNum = async (req, res) => {
  try {
    const lineMember = await LineMember.findOneAndUpdate(
      { phone_no: req.body.phone_number },
      req.body,
      { new: true, upsert: true }
    );
    res.json(lineMember);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE /line/member/:email
export const deleteLineMemberByEmail = async (req, res) => {
  try {
    const lineMember = await LineMember.findOneAndDelete({
      email: req.params.email,
    });
    if (lineMember) {
      res.json({ message: "Line member  deleted" });
    } else {
      res.status(404).json({ message: "Line member  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// PATCH /line/member/:email
export const updateLineMemberByEmail = async (req, res) => {
  try {
    const lineMember = await LineMember.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    if (lineMember) {
      res.json(lineMember);
    } else {
      res.status(404).json({ message: "Line member  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

