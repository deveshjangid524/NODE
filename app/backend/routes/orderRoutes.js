const express  = require('express');
const { isVerifiedUser } = require('../middleware/tokenVerification');
const { updateOrder, addOrder, getOrders, getOrderById } = require('../controllers/orderController');

const router = express.Router();

router.route('/').post(isVerifiedUser,addOrder);
router.route('/').get(isVerifiedUser,getOrders);
router.route('/:id').get(isVerifiedUser,getOrderById);
router.route('/:id').put(isVerifiedUser,updateOrder);


module.exports = router;