const RazorPay = require('razorpay');

const createOrder = async(req, res, next)=> {

    const razorPay = new RazorPay({
        key_id : config.razorpayKeyId,
        key_secret: config.razorpaySecretKey,
    });
}

module.exports  = {createOrder}