const Seat = require("../model/seatSchema");

const getAllSeat = async (req, res) => {
  try {
    const data = await Seat.find();
    res.status(200).json(data);
  } catch (error) {
    res.json({ msg: "Error while fetching database" });
  }
};

module.exports = { getAllSeat };

// const Seat = require("../model/seatSchema");

// const getAllSeat = async (req, res) => {
//   try {
//     const data = await Seat.find(); // Fetch data from the database
//     if (data.length === 0) {
//       return res.status(404).json({ msg: "No seat data found" });
//     }
//     res.status(200).json(data); // Return the data
//   } catch (error) {
//     console.error(error); // Log the error for server-side debugging
//     res
//       .status(500)
//       .json({ msg: "Error while fetching seat data", error: error.message });
//   }
// };

// module.exports = { getAllSeat };
