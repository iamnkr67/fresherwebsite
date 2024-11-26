const mongoose = require('mongoose');

const pendingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    match: /^\d{3}$/,
  },
  email: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  seat: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending", // Default value for status
  },
   emailSent: {
    type: Boolean,
    default: false, // To track if the email has been sent
  },
});

module.exports = mongoose.model("pendings", pendingSchema);
