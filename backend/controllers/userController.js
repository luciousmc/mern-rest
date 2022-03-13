const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User Logged In' });
});

// @desc    Register a user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('All fields are required');
  }

  // Check if User exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User Already Exists');
  }

  // Hash Password
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create User
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({ name: user.name, email: user.email, _id: user.id });
  } else {
    res.status(400);
    throw new Error('Invalid user');
  }
});

// @desc    Get user info
// @route   GET /api/users/me
// @access  Public
const getUserInfo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Got My infos' });
});

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
