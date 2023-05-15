import AccountClose from "../models/AccountClose.js";
// POST /AccountClose
export const createAccountClose = async (req, res) => {
  try {
    const accountClose = await AccountClose.create(req.body);
    res.status(201).json(accountClose);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// GET /accountclose
export const getLastEntries = async (req, res) => {
  try {
    const accountCloses = await AccountClose.find({
        line_name:req.body.line_name
    }).sort({date: -1}).limit(req.body.limit);
    if (accountCloses) {
      res.status(200).json(accountCloses);
    } else {
      res.status(404).json({ message: 'No account close entries found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



// PUT /AccountClose
export const updateAccountClose = async (req, res) => {
  try {
    const accountClose = await AccountClose.findOneAndUpdate(
      { line_name:req.body.line_name, date:req.body.date},
      {date:req.body.new_date},
      { new: true, upsert: true }
    );
    res.json(accountClose);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

// DELETE /AccountClose/:id
export const deleteAccountClose = async (req, res) => {
  try {
    const accountClose = await AccountClose.findOneAndDelete({
      line_name: req.body.line_name,
      date:req.body.date
    });
    if (accountClose) {
      res.json({ message: "AccountClose  deleted" });
    } else {
      res.status(404).json({ message: "AccountClose  not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}