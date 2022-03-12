// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Access Goals' });
};

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('No text found in request.');
  }
  res.status(201).json({ message: 'Created Goal' });
};

// @desc    Update Goal
// @route   GET /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` });
};

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
