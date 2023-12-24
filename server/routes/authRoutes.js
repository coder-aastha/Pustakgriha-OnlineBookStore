const express =require('express');
const router = require('express').Router();
const cors = require('cors')
const {test,registerUser,loginUser} =require('../controller/authController')
// const {getAllBooks,book,getById,updateById,deleteById} =require('../controller/bookController')
const {cartbook, deleteByCartId} = require('../controller/CartController')
const {getAllBooks,book,getById,updateById,deleteById,searchBooks,reviewSchema} =require('../controller/bookController');
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
router.delete('/Cart/:id', deleteByCartId)
router.post('/addToCart', cartbook)
router.get('/book/search',searchBooks)
router.post('/reviews', reviewSchema)


module.exports=router
