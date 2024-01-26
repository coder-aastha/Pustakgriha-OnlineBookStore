const express =require('express');
const router = express.Router();
const cors = require('cors')
const {test,registerUser,loginUser,loginAdmin,forgotPassword,resetPassword,userById} =require('../controller/authController')
const {getAllBooks,book,getById,updateById,deleteById,searchBooks,reviewSchema,category,authorName,getBooksBySection} =require('../controller/bookController');
const {addToCart, deleteFromCart} = require('../controller/CartController')
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
router.post('/login',loginAdmin)
router.post('/upload-book',book)
router.get('/booklisting' ,getAllBooks)
router.get('/booklisting/:id' ,getById)
router.patch('/AdminManageBook/:id',updateById)
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
router.get('/user/:id',userById);


module.exports=router;
