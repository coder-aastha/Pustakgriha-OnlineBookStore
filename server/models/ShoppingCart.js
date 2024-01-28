const mongoose = require('mongoose');

const shoppingCartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', //Reference of usermodel
        require:true,
    },
    items:[
        {
            book:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Booklisting',// reference of booklisting model
                required:true,
            },
            quanity:{
                type:Number,
                required:true,
                default:1,
            }
        }
    ]
});

const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema);

module.exports = ShoppingCart;