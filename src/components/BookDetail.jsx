
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/bookdetail.css";
import DeliveryLocationDay from './DeliveryLocationDay';
import Review from './Review';
import Navbar from "../components/Navbar";
import FooterUI from "../components/FooterUI";


const BookDetail = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  

  useEffect(() => {
    axios.get(`/booklisting/${id}`)
      .then(res => {
        setBook(res.data);
      })
      .catch(error => {
        console.error('Error fetching book details:', error);
      });
  }, [id]);

  if (!book) {
    return <p>Loading...</p>;
  }

  return (
    <>
     <Navbar />
    <div className='main-book-details-container'>
    <div className="book-detail-container">
      <div className="book-details-wrapper">
        <div className="book-top-section">
          <img src={book.imageURL} alt={book.bookTitle} className="book-image" />
          
          <div className="book-info">
            <h2 className="book-title">{book.bookTitle}</h2>
            <p className="book-author"> by: {book.authorName}</p>
            <p className="book-category">Genres: {book.category}</p>
            <p className="book-description"> {book.bookDescription}</p>
          </div>
        </div>
        
        {/* <p className="book-price">Price: {book.price}</p> */}
        <p className="book-availability">Availability: {book.available ? 'Available' : 'Not Available'}</p>
      </div>
    </div>
      <div className="review-delivery">
      <div>
        <DeliveryLocationDay book={book} />
      </div>
      <div>
        <Review />
      </div>
      </div>
    </div>
    <FooterUI/>
      </>
  );
};



export default BookDetail;
