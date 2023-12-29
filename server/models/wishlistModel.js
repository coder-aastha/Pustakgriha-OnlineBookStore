
const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  
bookId:String

});

const Wishlist = mongoose.model('Wishlist', WishlistSchema);

module.exports = Wishlist;
