// import React, { useEffect, useState } from 'react'


// const AdminManageBook = () => {

//   const [book, setBook] = useState({});
//   const { id } = useParams();

//   axios.patch(`/booklisting/${id}`)
//   .then(res => {
//     setBook(res.data);
//   })
//   .catch(error => {
//     console.error('Error fetching book details:', error);
//   }, [id]);

//   return (

//   )
// }

// export default AdminManageBook


import React, { useState } from 'react';
import '../css/UploadBook.css';
// import AdminSideBar from './AdminSideBar';
import axios from 'axios';
// import { authorName } from '../../server/controller/bookController';

const UpdateBooks = () => {
  const [data, setData] = useState({
    bookTitle:'',
    authorName:'',
    category:'',
    bookDescription:'',
    imageURL:'',
    price:'',
    available:'',
  })


 const BookUpload=async ()=>{
  e.preventDefault();
  const{bookTitle,authorName,category,bookDescription,imageURL,price,available}=data
  try{
    const{data}=await axios.patch(`/booklisting/${id}`,{
      bookTitle,authorName,category,bookDescription,imageURL,price,available
    });

    if(data.error){
      toast.error(data.error);
    }
    else{
      setData({});
      toast.success('Book Updated Successfully')
    }
  }
  catch(error){
    console.log(error)
  }
 }


 return (
  <>
 
  <div className="upload-form-container">
     <h2>Manage Books</h2>
     <form onSubmit={BookUpload}>

       <label htmlFor="book_title">Book Title:</label>
       <input
         type="text"
         id="book_title"
         name="book_title"
         value={data.bookTitle}
         onChange={(e) => setData({...data, bookTitle:e.target.value})} required/>

       <label htmlFor="book_name">Author name:</label>
       <input
         type="text"
         id="book_name"
         name="book_name"
         value={data.authorName}
         onChange={(e) => setData({...data,authorName:e.target.value})} required/>

       <label htmlFor="book_category">Book Category:</label>
       <input
         type="text"
         id="book_category"
         name="book_category"
         value={data.category}
         onChange={(e) => setData({...data,category:e.target.value})} required/>

       <label htmlFor="book_description">Book Description:</label>
       <textarea
         id="book_description"
         name="book_description"
         value={data.bookDescription}
         onChange={(e) => setData({...data,bookDescription:e.target.value})} required/>

       <label htmlFor="book_image">Book Image URL:</label>
       <textarea
         id="book_image"
         name="book_image"
         value={data.imageURL}
         onChange={(e) => setData({data,imageURL:e.target.value})} required/>

       <label htmlFor="book_price">Book Price:</label>
       <textarea
         id="book_price"
         name="book_price"
         value={data.price}
         onChange={(e) => setData({...data,price:e.target.value})} required/>

       <label htmlFor="book_available">Book Available:</label>
       <textarea
         id="book_available"
         name="book_available"
         value={data.available}
         onChange={(e) => setData({...data,available:e.target.value})} required/>

        <label htmlFor="book_category">Book Category:</label>
        <select
          id="book_category"
          name="book_category"
          value={data.category}
          onChange={(e) => setData({ ...data, category: e.target.value })}
          required
        >
          <option value="" disabled>Select a category</option>
          <option value="bestseller">Bestseller</option>
          <option value="newArrivals">New Arrivals</option>
        </select>

       <button type="submit">Submit</button>
     </form>
   </div>
   </>
 );
};

export default UpdateBooks;
