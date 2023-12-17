
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/bookcard.css";

const Bookcards = ({ headline, book }) => {
  const [visibleBooks, setVisibleBooks] = useState(3);

  const handleSeeMore = () => {
    setVisibleBooks((prevVisibleBooks) => prevVisibleBooks + 3);
  };

  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
      {visibleBooks < book.length && (
        <button onClick={handleSeeMore} className="see-more-button">
          See More
        </button>
      )}
      <div className="book-container">
        {Array.isArray(book) && book.length > 0 ? (
          <>
            {book.slice(0, visibleBooks).map((bookItem) => (
              <Link to={`/booklisting/${bookItem._id}`} key={bookItem._id} className="book-card">
                <div className="book-image">
                  <img src={bookItem.imageURL} alt=" " />
                </div>
                <div className="book-info">
                  <h2 className="book-title">{bookItem.bookTitle}</h2>
                  <p className="book-author">by: {bookItem.authorName}</p>
                </div>
              </Link>
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
