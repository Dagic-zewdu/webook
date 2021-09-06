const mongoose = require("mongoose");

const message = mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  draft: {
    type: Boolean,
    default: false,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
const messages = new mongoose.model("Message", message);
module.exports = messages;
