const Wishlist = require('../models/wishlistModel');

const getWishlist = async (req, res) => {
  try {
    // const userId = req.userid;
    const wishlist = await Wishlist.find();
    if(!wishlist){
      return res.status(404).json({error: 'Wishlist not found'});
    }
    
    res.json({ wishlist });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { bookId } = req.body;

    const existingWishlistItem = await Wishlist.findOne({ bookId });
    if (existingWishlistItem) {
      return res.status(400).json({ error: 'Book already in the wishlist' });
    }

    const wishlistItem = new Wishlist({
      bookId, 
     
    });

    await wishlistItem.save();

    res.json({ message: 'Added to wishlist' });
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const removeFromWishlist = async (req, res) => {
  try {
    const { bookId } = req.body;

    await Wishlist.findOneAndRemove({ bookId });
    const result = await Wishlist.findOneAndDelete({bookId});
    if(!result){
      return res.status(404).json({error: 'wishlist item not found'});
    }

    res.json({ message: 'Removed from wishlist' });
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getWishlist,
  addToWishlist,
  removeFromWishlist
};
