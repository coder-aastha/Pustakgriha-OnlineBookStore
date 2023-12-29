const mongoose = require('mongoose');

const userSchem = new mongoose.Schema({
    username:String,
    email: {
        type:String,
        unique:true
    },
    password:String,
    wishlist: [{type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'}],

});

const UserModel = mongoose.model("User",userSchem);
module.exports=UserModel;