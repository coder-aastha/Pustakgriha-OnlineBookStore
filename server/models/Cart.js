const mongoose = require('mongoose')

const CartSchem = new mongoose.Schema({
   quantity:{
      type:Number,
      required:true,
   },
   price:{
      type:Number,
      required:true,
   },
  //  addToCart:{
  //     type:String,
  //     required:true,
  //  },
   bookTitle:{
      type:String,
      required:true,
   },
   imageURL:{
      type:String,
      required:true,
   },
  //  price: {
  //     type: Number,
  //     required: true,
  //  },
  //  available: {
  //     type: Boolean,
  //     required: true,
  //  },
   
})

const CartModel = mongoose.model(" Cart",CartSchem);
module.exports=CartModel;