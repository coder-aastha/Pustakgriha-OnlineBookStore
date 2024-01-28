// Bookcards.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/bookcard.css";
import { useCart } from '../Context/CartContext';
import { IoHeart } from "react-icons/io5";
import { useWishlist } from '../Context/WishlistContext';
import toast from 'react-hot-toast';
import { useAuth } from '../Context/AuthContext';


const Bookcards = ({ headline, book }) => {
  const [visibleBooks, setVisibleBooks] = useState(3);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isBookInWishlist } = useWishlist();
  const { user } = useAuth();

  const handleSeeMore = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 3);
  };

  const handleAddToCart = (bookItem) => {
    if (user) {
      addToCart(bookItem);
      toast.success('Added to cart');
    } else {
      console.error('User is not authenticated. Cannot add item to the cart.');
      
    }
  };

  const handleAddToWishlist=(bookItem)=>{
    if (isBookInWishlist(bookItem)) {
      removeFromWishlist(bookItem);
    } else {
    addToWishlist(bookItem);
    toast.success('Added to wishlist');
  }
};

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
      <div className="bookitem-container">
        {Array.isArray(book) && book.length > 0 ? (
          <>
            {book.slice(0, visibleBooks).map((bookItem) => (
              <div  key={bookItem._id}
              className={`book-card ${isBookInWishlist(bookItem) ? 'wishlist-added' : ''}`}
            >
              <Link to={`/booklisting/${bookItem._id}`} className="book-link">
                <div className="bookitem-image">
                  <img src={bookItem.imageURL} alt=" " className="book-image__img" />
                </div>
                <div className="bookitem-info">
                  <h2 className="bookitem-title">{bookItem.bookTitle}</h2>
                  <p className="bookitem-author">by: {bookItem.authorName}</p>
                  <p className="bookitem-price">Rs: {bookItem.price}</p>
                </div>
  
              </Link>
                <div className="book-actions">
                  <button onClick={() => handleAddToCart(bookItem)}
                  className='add-to-cart-btn'
                  >
                    Add to Cart
                  </button>

                  <div onClick={() => handleAddToWishlist(bookItem)}
                  className='wishlist-icon'
                  >
                  <IoHeart />
                  </div>
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
