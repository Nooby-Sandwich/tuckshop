const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';

// Utility function to generate a JWT token
const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, jwtSecret, { expiresIn: '1h' });
};

// createUser route
router.post(
  '/createUser',
  body('email').isEmail(),
  body('username').isLength({ min: 3 }),
  body('password').isLength({ min: 8 }),
  async (req, res) => {
    const salt = await bcrypt.genSalt(15);
    let securePassword = await bcrypt.hash(req.body.password, salt);

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }

      // Check if the user with the provided email already exists
      const existingUser = await User.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(409).json({ errors: 'User already exists' });
      }

      // Create the user
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: securePassword,
      });

      // Generate a token for the newly created user
      const token = generateToken(newUser._id);

      res.json({ success: true, token: token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
