
const Razorpay = require('razorpay');

const createOrder = async (req, res, next) => {
    const razorPay = new Razorpay({
        key_id: config.razorpayKeyId,
        key_secret: config.razorpaySecretKey,
    })

    try {
        const { amount } = req.body;
        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorPay.orders.create(options);
        res.status(200).json({ success: true, order });
    } catch (error) {
        next(error);
    }
}


module.exports = { createOrder };