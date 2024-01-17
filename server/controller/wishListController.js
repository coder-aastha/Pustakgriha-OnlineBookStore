// import Wishlist from "../components/Wishlist"

const getWishlist = async (req, res) => {
  try {
    const { book } = req.body;

    const newWishlist = new Wishlist({ book, rating });
    await newWishlist.save();
    
    res.json({ wishlist });
  } catch (error) {
    console.error('Error fetching wishlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const addToWishlist = async (req, res) => {
  try {
    const { book} = req.body;

    const existingWishlistItem = await Wishlist.findOne({ book });
    if (existingWishlistItem) {
      return res.status(400).json({ error: 'Book already in the wishlist' });
    }

    const wishlistItem = new Wishlist({
      book, 
     
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
    const { book } = req.body;

    await Wishlist.findOneAndRemove({ book });
    const result = await Wishlist.findOneAndDelete({book});
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

// // wishlistController.js



// const addToWishlist = async (book) => {
//   try {
//     const wishlistItem = new Wishlist(book);
//     await wishlistItem.save();
//     return wishlistItem;
//   } catch (error) {
//     throw error;
//   }
// };

// const getWishlist = async () => {
//   try {
//     const wishlist = await find();
//     return wishlist;
//   } catch (error) {
//     throw error;
//   }
// };

// module.exports = {
//   addToWishlist,
//   getWishlist,
// };


