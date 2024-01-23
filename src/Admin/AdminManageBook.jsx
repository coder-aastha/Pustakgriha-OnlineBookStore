import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import '../css/UploadBook.css';

const UpdateBooks = () => {
  const { id } = useParams();

  const [data, setData] = useState({
    bookTitle: '',
    authorName: '',
    category: '',
    bookDescription: '',
    imageURL: '',
    price: '',
    available: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/booklisting/${id}`);
        const bookData = response.data; // Assuming your API returns the book data

        // Set the form data with the fetched book details
        setData({
          bookTitle: bookData.bookTitle || '',
          authorName: bookData.authorName || '',
          category: bookData.category || '',
          bookDescription: bookData.bookDescription || '',
          imageURL: bookData.imageURL || '',
          price: bookData.price || '',
          available: bookData.available || '',
        });
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/AdminManageBook/${id}`, data);

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success('Book Updated Successfully');
        alert('Book Updated Successfully');
      }
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <>
      <div className="upload-form-container">
        <h2>Manage Books</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="book_title">Book Title:</label>
          <input
            type="text"
            id="book_title"
            name="bookTitle"
            value={data.bookTitle}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="book_name">Author name:</label>
          <input
            type="text"
            id="book_name"
            name="authorName"
            value={data.authorName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="book_category">Book Category:</label>
          <select
            id="book_category"
            name="category"
            value={data.category}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="bestseller">Bestseller</option>
            <option value="newArrivals">New Arrivals</option>
          </select>

          <label htmlFor="book_description">Book Description:</label>
          <textarea
            id="book_description"
            name="bookDescription"
            value={data.bookDescription}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="book_image">Book Image URL:</label>
          <textarea
            id="book_image"
            name="imageURL"
            value={data.imageURL}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="book_price">Book Price:</label>
          <textarea
            id="book_price"
            name="price"
            value={data.price}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="book_available">Book Available:</label>
          <textarea
            id="book_available"
            name="available"
            value={data.available}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateBooks;
