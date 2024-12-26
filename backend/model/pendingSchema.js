const mongoose = require("mongoose");

const pendingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
    validate: function (value) {
      if (this.semester.startsWith("UG-")) {
        return /^\d{3}$/.test(value);
      } else if (this.semester.startsWith("PG-")) {
        return /^PG-\d{3} $ /.test(value);
      }
      return false;
    },
    message: (props) =>
      `Invalid roll number : ${props.value} for the given semester.`,
  },
  email: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
    enum: ["UG-sem1", "UG-3rd year", "UG-sem2", "PG-sem1", "PG-sem3"],
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
