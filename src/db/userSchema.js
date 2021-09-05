const mongoose = require('mongoose')
const { Schema } = mongoose
/**creating users(emplooyee) */
const Users = mongoose.Schema({

  password: {
    type: String,
    required: true
  },
  user_type: {
    type: String,
    required: true
  },
  emp_id: {
    type: String,
    required: true,
  },
  access: {
    type: String,
    default: 'activated'
  },
  status: String,
  connected_time: {
    type: Date,
    default: Date.now
  },
  disconnected_time: Date,
  phone: String,
  created_date: {
    type: Date,
    default: Date.now
  },
  photo: String
})

/** */
const users = new mongoose.model('users', Users)
module.exports = users