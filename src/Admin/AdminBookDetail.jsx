
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/AdminBookDetail.css';


const product = () => {
const [book, setBook] = useState([]);


useEffect(() => {
    const fetchData = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/booklisting`);
        setBook(response.data.book);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    };
    fetchData();
}, []);

return (
    <div className='Abookcards-container'>
    <h2 className='Abookcards-headline'>{product}</h2>
    {book  < book.length && (
        <button onClick={handleSeeMore} className="Asee-more-button">
        See More
        </button>
    )}
    <div className="Abook-container">
        {Array.isArray(book) && book.length > 0 ? (
        <>
            {book.map((bookItem) => (
            <div key={bookItem._id} className='Abook-card'>
            
                <div className="Abook-image">
                <img src={bookItem.imageURL} alt=" " className="Abook-image__img" />
                </div>
                <div className="Abook-info">
                <h2 className="Abook-title">{bookItem.bookTitle}</h2>
                <p className="Abook-author">by: {bookItem.authorName}</p>
                <button>Edit</button>
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



export default product;
