const express =require('express');
const router = require('express').Router();
const cors = require('cors')
const {test,registerUser,loginUser,forgotPassword,resetPassword} =require('../controller/authController')
const {getAllBooks,book,getById,updateById,deleteById,searchBooks,reviewSchema,category} =require('../controller/bookController');
// const {reviewSchema} = require('../models/reviewModel');
// const { default: SearchBar } = require('../../src/components/Navbar');

router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })

)
router.get('/',test)
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/upload-book',book)
router.get('/booklisting' ,getAllBooks)
router.get('/booklisting/:id' ,getById)
router.patch('/booklisting/:id',updateById)
router.delete('/booklisting/:id', deleteById)
router.delete('/Cart', deleteFromCart)
router.post('/shopping-cart', addToCart)
router.get('/book/search',searchBooks)
router.post('/reviews', reviewSchema)
router.get('/books/:category', category)

router.post('/forgotpassword',forgotPassword);
router.post('/resetpassword', resetPassword);

module.exports=router
