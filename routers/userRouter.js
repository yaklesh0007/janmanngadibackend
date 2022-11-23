const express=require('express');
const {userSignUp}=require('../controllers/userController')
const userRouter=express.Router()

userRouter.route('/user/signup').post(userSignUp)

module.exports=userRouter