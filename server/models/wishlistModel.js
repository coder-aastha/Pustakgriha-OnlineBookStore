
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    bookId:String,
});

const WishlistModel = mongoose.model('Wishlist', wishlistSchema);

module.exports = WishlistModel;
