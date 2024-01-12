const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
        
  },
  // You can add more fields as needed
});

// Create User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
