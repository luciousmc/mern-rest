const express = require('express');
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require('../controllers/userController');
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getUserInfo);

module.exports = router;
