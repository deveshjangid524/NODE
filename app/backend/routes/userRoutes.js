
const express = require('express');


const router =  express.Router();

const {register,login, getUserData, logout} = require('../controllers/userController');
const { isVerifiedUser } = require('../middleware/tokenVerification');
//Authentication Routes
router.route('/register').post(register);
router.route('/').get(isVerifiedUser,getUserData);
router.route('/login').post(login);
router.route('/logout').post(isVerifiedUser,logout)
module.exports = router;