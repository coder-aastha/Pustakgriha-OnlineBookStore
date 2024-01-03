// WishlistDetails.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  '../css/WishlistDetails.css';

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
    <div className='wishlist-container'>
      <h2>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <ul>
          {wishlist.map((bookItem) => (
            <li key={bookItem._id}>
              <Link to={`/booklisting/${bookItem._id}`}>
                <div className="book-img">
                  <img src={bookItem.imageURL} alt={bookItem.bookTitle} />
                </div>
                <h5>{bookItem.bookTitle}</h5>
                <p>By: {bookItem.authorName}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WishlistDetails;
