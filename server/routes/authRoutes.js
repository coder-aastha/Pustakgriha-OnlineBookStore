const express =require('express');
const router = express.Router();
const cors = require('cors')
const {test,registerUser,loginUser,forgotPassword,resetPassword} =require('../controller/authController')
const {getAllBooks,book,getById,updateById,deleteById,searchBooks,reviewSchema,category,authorName,getBooksBySection} =require('../controller/bookController');
const {addToCart, deleteFromCart} = require('../controller/CartController')
// const {reviewSchema} = require('../models/reviewModel');
// const { default: SearchBar } = require('../../src/components/Navbar');\
const {getWishlist,addToWishlist,removeFromWishlist} = require('../controller/wishListController');

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
router.get('/authorbooks/:authorName', authorName)
router.post('/forgotpassword',forgotPassword);
router.post('/resetpassword', resetPassword);
router.get('/book/:section', getBooksBySection);
router.post('/wishlist/add', addToWishlist);
router.delete('/remove', removeFromWishlist);
router.get('/wishlist', getWishlist);
// router.post('wishlist/add',addToWishlist)


module.exports=router;
