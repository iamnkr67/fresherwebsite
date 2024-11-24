const Pending = require("../model/pendingSchema");

const addPendingStatus = async (req, res) => {
  try {
    const {name, rollNo, email, semester, seat} = req.body;

    if (!name || !rollNo || !email || !semester || !seat) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const newPending = new Pending({
      name,
      rollNo,
      email,
      semester,
      seat,
    });
    await newPending.save();
    return res.status(201).json({msg:"Pending data Submitted Successfully"});
  } catch (error) {
    // Handle errors
    console.error("Error adding pending status:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getPenidngData = async (req, res) => {
    try {
        const data = await Pending.find();
        if (data) {
            res.status(200).json({ data });
        }
       else
      return res.status(400).json({"mes":"something wrong"})
    }
    catch (error) {
    res.status(500).json({msg: error.message });
  }
}

module.exports = {addPendingStatus,getPenidngData};
