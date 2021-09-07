const mongoose = require("mongoose");

const reciever = mongoose.Schema({
  emp_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  refere_id: {
    type: String,
    required: true,
  },
  comment: false,
  seen: false,
  seen_date: Date,
  expired_date: Date,
  created_date: {
    type: Date,
    default: Date.now,
  },
});
const recievers = new mongoose.model("Reciever", reciever);
module.exports = recievers;
