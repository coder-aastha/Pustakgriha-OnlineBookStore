const Cart = require('../models/Cart');

const cartModel = require('../models/cartModel');
 
exports.addToCart = (req, res) => {

  const newItem = req.body;

  const updatedCart = cartModel.addToCart(newItem);

  res.json({ success: true, cartItems: updatedCart });

};
 
exports.getCartItems = (req, res) => {

  const currentCart = cartModel.getCartItems();

  res.json({ cartItems: currentCart });

};

const deleteFromCart = async (req, res) => {
    try {
        const { bookId } = req.body;
        res.status(200).json({ message: 'Book removed from cart successfully' });
    } catch (error) {
        console.error('Error removing book from cart:', error);
        res.status(500).json({ error: 'An error occurred while removing the book from the cart' });
    }
};




module.exports = {
    addToCart,
    deleteFromCart
    
};