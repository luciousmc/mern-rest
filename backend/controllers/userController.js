// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  res.status(200).json({ message: 'User Logged In' });
};
// @desc    Register a user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  res.status(201).json({ message: 'User Registered Succesffully' });
};
// @desc    Get user info
// @route   GET /api/users/me
// @access  Public
const getUserInfo = async (req, res) => {
  res.status(200).json({ message: 'Got My infos' });
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
};
