// Bookcards.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/bookcard.css";
import { useCart } from '../Context/CartContext';
import { FaRegHeart } from "react-icons/fa";
import { useWishlist } from '../Context/WishlistContext';
import toast from 'react-hot-toast';
// import Wishlist from './Wishlist';

const Bookcards = ({ headline, book }) => {
  const [visibleBooks, setVisibleBooks] = useState(3);
  const { addToCart } = useCart();
  const{addToWishlist} =useWishlist();

  const handleSeeMore = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 3);
  };

  const handleAddToCart = (bookItem) => {
    addToCart(bookItem);
  }

  const handleAddToWishlist=(bookItem)=>{
    addToWishlist(bookItem);
    toast.success('Added to wishlist');
  }

  if (!Array.isArray(book)) {
    console.error("Invalid 'book' prop:", book);
    return <p>Error: Invalid book data.</p>;
  }


  return (
    <div className='bookcards-container'>
      <h2 className='bookcards-headline'>{headline}</h2>
      {book && visibleBooks < book.length && (
        <button onClick={handleSeeMore} className="see-more-button">
          See More
        </button>
      )}
      <div className="book-container">
        {Array.isArray(book) && book.length > 0 ? (
          <>
            {book.slice(0, visibleBooks).map((bookItem) => (
              <div key={bookItem._id} className='book-card'>
              <Link to={`/booklisting/${bookItem._id}`} className="book-link">
                <div className="book-image">
                  <img src={bookItem.imageURL} alt=" " className="book-image__img" />
                </div>
                <div className="book-info">
                  <h2 className="book-title">{bookItem.bookTitle}</h2>
                  <p className="book-author">by: {bookItem.authorName}</p>
                </div>
  
              </Link>
                <div className="book-actions">
                  <button onClick={() => handleAddToCart(bookItem)}
                  className='add-to-cart-btn'
                  >
                    Add to Cart
                  </button>

                  <button onClick={() => handleAddToWishlist(bookItem)}
                  className='add-to-Wishlist-btn'
                  >
                   <FaRegHeart />
                  </button>


                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No books available.</p>
        )}
      </div>
    </div>
  );
};

export default Bookcards;
