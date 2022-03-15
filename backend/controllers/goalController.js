const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');
const User = require('../models/userModel');

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('No text found in request.');
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(201).json({ message: 'Created Goal', goal });
});

// @desc    Update Goal
// @route   GET /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not Found');
  }

  const user = User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Check that userId matches user goal
  if (user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error('Unauthorized Action');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error('Goal not Found');
  }

  const user = User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Check that userId matches user goal
  if (user.id !== goal.user.toString()) {
    res.status(401);
    throw new Error('Unauthorized Action');
  }

  await goal.remove();

  res.status(200).json({ message: `Deleted Goal ${goal._id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
