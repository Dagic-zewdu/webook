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
});
