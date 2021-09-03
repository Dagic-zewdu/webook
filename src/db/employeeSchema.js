const mongoose = require("mongoose");

const employees = mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  middle_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: String,

  salary: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  manager: String,
  created_date: {
    type: Date,
    default: Date.now(),
  },
});

/** */
const users = new mongoose.model("employees", employees);
module.exports = users;
