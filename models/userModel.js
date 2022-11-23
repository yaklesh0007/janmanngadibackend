const mongoose=require('mongoose')
const validator=require('validator')
const userSchema=mongoose.Schema({
    email:{
        type:String,
        require:[true,'email is required!'],
        validate:[validator.isEmail,'Please add a valid email address.'],
        unique:[true,'Email is already occupied so use anotherother one']
        
    },
    password:{
        type:String,
        require:[true,'Password is required!']
    },
    phoneNumber:{
        type:String,
        require:[true,"Phone number is required field!"]
    }
})
module.exports=mongoose.model('User',userSchema)