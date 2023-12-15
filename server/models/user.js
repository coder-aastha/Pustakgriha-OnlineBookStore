const mongoose = require('mongoose')

const userSchem = new mongoose.Schema({
    username:String,
    email: {
        type:String,
        unique:true
    },
    password:String,

})

const UserModel = mongoose.model("User",userSchem);
module.exports=UserModel;