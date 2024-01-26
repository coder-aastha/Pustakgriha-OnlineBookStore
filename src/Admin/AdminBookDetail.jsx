
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/AdminBookDetail.css';
import { Link } from 'react-router-dom';
// import AdminBookDetails from 
import toast from 'react-hot-toast';

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

const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/booklisting/${id}`);
      // Update the state to remove the deleted book
      setBook((prevBooks) => prevBooks.filter((books) => books._id !== id));
      toast.success('Book deleted successfully');

    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

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
            {book.map((books) => (
            <div key={books._id} className='Abook-card'>
            
                <div className="Abook-image">
                <img src={books.imageURL} alt=" " className="Abook-image__img" />
                </div>
                <div className="Abook-info">
                <h2 className="Abook-title">{books.bookTitle}</h2>
                <p className="Abook-author">by: {books.authorName}</p>
                <Link to={`/AdminManageBook/${books._id}`}>
                    <button>Edit</button>
                </Link>
                </div>

                <div className='button-delete'>
                <button onClick={() => handleDelete(books._id)}>Delete</button>
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
