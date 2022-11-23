const express=require('express');
const {userSignUp, userLogin}=require('../controllers/userController')
const userRouter=express.Router()

userRouter.route('/user/signup').post(userSignUp);
userRouter.route('/user/login').get(userLogin);
module.exports=userRouter