const createHttpError = require("http-errors");
const User = require('../models/userModel');
const register = async(req,res,next) => {
    try {
        const {name,phone,email,password,role} = req.body;
        if(!name||!phone||!email||!password||!role) {
            const error = createHttpError(400,'All Fields are required');
            next(error);
        }
        
        const isUserPresent = await User.findOne({email});
        if(isUserPresent){
            const error = createHttpError(400,'user already exists');
            next(error);
        }

        const user = {name,phone,email,password,role};
        const newUser = User(user);

        await newUser.save();

        res.status(201).json({success:true,message:"New User Created",data: newUser});

    } catch (error) {
        next(error);
    }
}


const login = async (req,res,next) =>{

}

module.exports = {register,login}