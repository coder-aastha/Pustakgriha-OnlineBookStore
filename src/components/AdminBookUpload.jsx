import React, { useState } from 'react';
import '../css/UploadBook.css';
import AdminSideBar from './AdminSideBar';
 
const UploadForm = () => {
 const [bookTitle, setBookTitle] = useState('');
 const [bookName, setBookName] = useState('');
 const [bookImage, setBookImage] = useState('');
 const [bookDescription, setBookDescription] = useState('');
 
 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', {
      bookTitle,
      bookName,
      bookImage,
      bookDescription,
    });
 };

return (
  <>
  <div className='uploadBookContainer'>
   <div className='slibebar_upload'><AdminSideBar/></div>
  <div className="upload-form-container">
     <h2>Upload A book</h2>
     <form onSubmit={handleSubmit}>
       <label htmlFor="book_title">Book Title:</label>
       <input
         type="text"
         id="book_title"
         name="book_title"
         value={bookTitle}
         onChange={(e) => setBookTitle(e.target.value)} />
 
       <label htmlFor="book_name">Book name:</label>
       <input
         type="text"
         id="book_name"
         name="book_name"
         value={bookName}
         onChange={(e) => setBookName(e.target.value)} />
 
       <label htmlFor="book_image">Book Image URL:</label>
       <input
         type="text"
         id="book_image"
         name="book_image"
         value={bookImage}
         onChange={(e) => setBookImage(e.target.value)} />
 
       <label htmlFor="book_description">Book Description:</label>
       <textarea
         id="book_description"
         name="book_description"
         value={bookDescription}
         onChange={(e) => setBookDescription(e.target.value)} />
 
       <button type="submit">Submit</button>
     </form>
   </div>
   </div>
   </>
 );
};
 
export default UploadForm;