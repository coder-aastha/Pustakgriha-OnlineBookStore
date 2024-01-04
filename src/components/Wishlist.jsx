import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../css/wishlist.css';
import { FaRegHeart } from "react-icons/fa";


const Wishlist = () => {
  const[bookId, setBookId] = useState('');
  
  const addToWishlist = () => {
    axios
      .post('/wishlist/add', {
        
        bookId: bookId,

      })

      .then((response) => {
        console.log('Added to wishlist:', response.data);
        toast.success('Added to wishlist'); 
        setBookId('');
        
      })
    
      .catch((error) => {
        console.error('Error adding to wishlist', error);
        toast.error('Error adding to wishlist')
      });
  } ;

  return (
    <div>

      <div className="wishlist-button-container">
        <button onClick={addToWishlist}>
        <FaRegHeart />

        </button>
      </div>
    </div>
  );
};

export default Wishlist;
