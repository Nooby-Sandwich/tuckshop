const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET || 'default_secret_key';

// loginUser route
router.post(
  '/loginUser',
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Check if email is provided
      if (!email) {
        return res.status(400).json({ errors: 'Email is required.' });
      }

      let userData = await User.findOne({ email });

      if (!userData) {
        return res.status(404).json({ errors: 'User not found' });
      }

      // Compare the hashed password with the plain text password
      const isMatch = await bcrypt.compare(password, userData.password);

      if (!isMatch) {
        return res.status(400).json({ errors: 'Invalid password' });
      }

      // Generate a token
      const token = jwt.sign({ _id: userData._id }, jwtSecret, { expiresIn: '1h' });

      return res.json({ success: true, token: token });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
);

module.exports = router;
