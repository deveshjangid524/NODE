
const express = require('express');


const router =  express.Router();

const {register,login, getUserData} = require('../controllers/userController');
const { isVerifiedUser } = require('../middleware/tokenVerification');
//Authentication Routes
router.route('/register').post(register);
router.route('/').get(isVerifiedUser,getUserData);
router.route('/login').post(login);
module.exports = router;