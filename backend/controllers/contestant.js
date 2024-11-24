const Contestant = require("../model/contestantSchema");

const add = async (req, res) => {
  try {
    const { name, rollNo, phone, year, act } = req.body;

    if (!name || !rollNo || !phone || !year || !act) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const existingContestant = await Contestant.findOne({ rollNo });
    if (existingContestant) {
      return res.status(400).json({ message: "Contestant already exists." });
    }

    const newContestant = new Contestant({ name, rollNo, phone, year, act });
    await newContestant.save();

    return res
      .status(201)
      .json({ message: "Application submitted successfully." });
  } catch (error) {
    console.error("Error adding contestant:", error);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

const getdata = async (req, res) => {
  try {
    const data = await Contestant.find();
    if (data) {
      res.status(200).json({ data });
    }
    else
      return res.status(400).json({"mes":"something wrong"})
  } catch (error) {
    res.status(500).json({msg: error.message });
  }
}

module.exports = {add,getdata};
