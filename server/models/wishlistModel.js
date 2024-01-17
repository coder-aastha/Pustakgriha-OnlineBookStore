// wishlistModel.js
const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  bookTitle: String,
  authorName: String,
  imageURL: String,
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
