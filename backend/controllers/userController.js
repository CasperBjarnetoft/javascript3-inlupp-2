const router = require('express').Router();
const userModel = require('../models/users/userModel');

router.post('/register', userModel.CreateUser)
router.post('/login', userModel.loginUser)





module.exports = router;