const express =require('express');
const router = express.Router();
const cors = require('cors')
const {test,registerUser,loginUser,loginAdmin,forgotPassword,resetPassword,userById} =require('../controller/authController')
const {getAllBooks,book,getById,updateById,deleteById,searchBooks,reviewSchema,category,authorName,getBooksBySection} =require('../controller/bookController');
const { addToCart,  removeFromCart, updateCartItemQuantity,calculateTotalCost,} = require('../controller/shoppingCartController');
const {getWishlist,addToWishlist,removeFromWishlist} = require('../controller/wishListController');
const  {createOrder, getAllOrders,getOrderById}= require('../controller/orderController')


router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })

)


//test route
router.get('/',test)

//Authentication routes
router.post('/register',registerUser)
router.post('/login',loginUser)

router.post('/forgotpassword',forgotPassword);
router.post('/resetpassword', resetPassword);


//bookroute
router.post('/login',loginAdmin)
router.post('/upload-book',book)
router.get('/booklisting' ,getAllBooks)
router.get('/booklisting/:id' ,getById)
router.patch('/AdminManageBook/:id',updateById)
router.delete('/booklisting/:id', deleteById)
router.get('/book/search',searchBooks)
router.post('/reviews', reviewSchema)
router.get('/books/:category', category)
router.get('/authorbooks/:authorName', authorName)
router.get('/book/:section', getBooksBySection);

// Cart routes
router.post('/add-to-cart', addToCart);
router.put('/update-quantity',  updateCartItemQuantity);
router.delete('/remove-from-cart',  removeFromCart);
router.get('/calculate-total-cost',  calculateTotalCost); 


// Wishlist routes
router.post('/wishlist/add', addToWishlist);
router.delete('/remove', removeFromWishlist);
router.get('/wishlist', getWishlist);
router.post('wishlist/add',addToWishlist);


// order routes
router.post('/checkout',createOrder);
router.get('/checkout-all',getAllOrders);
router.get('checkout/:id', getOrderById);

module.exports=router;
