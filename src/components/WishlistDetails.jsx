// WishlistDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const WishlistDetails = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get('/wishlist');
        setWishlist(response.data.wishlist);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <div>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((book) => (
            <li key={book._id}>
              <Link to={`/booklisting/${book._id}`}>
                <div className="book-img">
                  <img src={book.imageURL} alt={book.bookTitle} />
                </div>
                <h5>{book.bookTitle}</h5>
                <p>By: {book.authorName}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistDetails;
