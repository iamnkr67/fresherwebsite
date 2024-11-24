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
});

module.exports = mongoose.model("pendings", pendingSchema);
