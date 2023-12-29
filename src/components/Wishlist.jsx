import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../css/wishlist.css';


const Wishlist = () => {
  const[bookId, setBookId] = useState('');
  // const [id] = useParams();
  const addToWishlist = () => {
    axios
      .post('/wishlist/add', {
        // bookId:'658bf20ba6756182ca49fa00',
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
          Add to Wishlist

        </button>
      </div>
    </div>
  );
};

export default Wishlist;
