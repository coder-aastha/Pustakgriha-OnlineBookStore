import React, { useState } from 'react';
import '../css/UploadBook.css';
import AdminSideBar from "./AdminSideBar";
import axios from 'axios';
import toast from 'react-hot-toast';

const UploadBook = () => {
  const [data, setData] = useState({
    bookTitle:'',
    authorName:'',
    category:'',
    bookDescription:'',
    imageURL:'',
    price:'',
    available:'',
    PageCount:'',
    ISBN:'',
    Weight:'',
    language:'',
    section:''
  })

  const BookUpload = async (e) => { // Added 'e' as a parameter
    e.preventDefault();
    const { bookTitle, authorName, category, bookDescription, imageURL, price, available, section } = data;
    try {
      const { data } = await axios.post('/upload-book', {
        bookTitle, authorName, category, bookDescription, imageURL, price, available, section
      });

      if (data.error) {
        toast.error(data.error);
      } else {
        setData({
          bookTitle: '',
          authorName: '',
          category: '',
          bookDescription: '',
          imageURL: '',
          price: '',
          available: '',
          PageCount:'',
          ISBN:'',
          Weight:'',
          language:'',
          section: ''
        });
        toast.success('Book Uploaded Successfully');
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className='uploadBookContainer'>
    <div className='slibebar_upload'>
      <AdminSideBar/>
      </div>
      <div className="upload-form-container">
        <h2>Upload A book</h2>
        <form onSubmit={BookUpload}>
          <div className="book_title">Book Title:
            <input
              type="text"
              name="book_title"
              value={data.bookTitle}
              onChange={(e) => setData({ ...data, bookTitle: e.target.value })} required />
          </div>

          <div className="book_title">Author name:
            <input
              type='text'
              name="book_name"
              value={data.authorName}
              onChange={(e) => setData({ ...data, authorName: e.target.value })} required />
          </div>

          <div className="book_title"> Category
            <input
              type='text'
              name="book_name"
              value={data.category}
              onChange={(e) => setData({ ...data, category: e.target.value })} required />
          </div>

          <div className="book_title"> Description
            <input
              type='text'
              name="book_name"
              value={data.bookDescription}
              onChange={(e) => setData({ ...data, bookDescription: e.target.value })} required />
          </div>

          <div className="book_title"> Image
            <input
              type='text'
              name="book_name"
              value={data.imageURL}
              onChange={(e) => setData({ ...data, imageURL: e.target.value })} required />
          </div>

          <div className="book_title"> Price
            <input
              type='text'
              name="book_name"
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })} required />
          </div>

          <div className="book_title"> Available
            <input
              type='text'
              name="book_name"
              value={data.available}
              onChange={(e) => setData({ ...data, available: e.target.value })} required />
          </div>

          <div className="book_title"> Page Count
            <input
              type='text'
              name="book_name"
              value={data.PageCount}
              onChange={(e) => setData({ ...data, PageCount: e.target.value })} required />
          </div>

          <div className="book_title"> ISBN
            <input
              type='text'
              name="book_name"
              value={data.ISBN}
              onChange={(e) => setData({ ...data, ISBN: e.target.value })} required />
          </div>

          <div className="book_title"> Weight           
           <input
              type='text'
              name="book_name"
              value={data. Weight}
              onChange={(e) => setData({ ...data, Weight: e.target.value })} required />
          </div>

          <div className="book_title"> Language
            <input
              type='text'
              name="book_name"
              value={data.language}
              onChange={(e) => setData({ ...data, language: e.target.value })} required />
          </div>

          <div className="book_title">
            <select
              id="book_category"
              name="book_category"
              value={data.section}
              onChange={(e) => setData({ ...data, section: e.target.value })}
              required
            >
              <option value="" disabled>Select a Section</option>
              <option value="bestseller">bestseller</option>
              <option value="newArrivals">newArrival</option>
            </select>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadBook;