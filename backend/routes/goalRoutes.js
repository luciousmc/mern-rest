const express = require('express');
const router = express.Router();
const { getGoals } = require('../controllers/goalController');

router.get('/', getGoals);

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Created Goal' });
});

router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Updated Goal ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Deleted Goal ${req.params.id}` });
});

module.exports = router;
