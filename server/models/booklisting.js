const mongoose = require('mongoose')

const booklistingSchem = new mongoose.Schema({
   bookTitle:{
      type:String,
      required:true,
   },
   authorName:{
      type:String,
      required:true,
   },
   category:{
      type:String,
      required:true,
   },
   bookDescription:{
      type:String,
      required:true,
   },
   imageURL:{
      type:String,
      required:true,
   },
   price: {
      type: Number,
      required: true,
   },
   available: {
      type: Boolean,
      required: true,
   },

   pageCount: {
      type: Boolean,
      required: true,
   },

   ISBN: {
      type: Boolean,
      required: true,
   },

   weight: {
      type: Boolean,
      required: true,
   },

   language: {
      type: Boolean,
      required: true,
   },

   section: {
      type: String,
      required: true,
  }
   
   
})

const booklistingModel = mongoose.model(" Booklisting",booklistingSchem);
module.exports=booklistingModel;