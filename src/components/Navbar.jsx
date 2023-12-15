import React, { useState, useEffect } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import main_logo from "../images/main_logo.png";
import { TbWorld } from "react-icons/tb";
import UserLogin from "./UserLogin";
import axios from 'axios';

const Navbar = () => {
  const [book, setBook] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');

  useEffect(() => {
    try {
      axios.get(`/book/search?searchTerm=${searchTerm}`)
        .then(response => setBook(response.data.book))
        .catch(error => console.error('Axios Error:', error));
    } catch (error) {
      console.error('Error:', error);
    }
  }, [searchTerm]);
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };
 
  return (
    <>
      <header className="main-container">
        <div className="logo-div">
          <img className="logo-img" src={main_logo} alt="Pustakgriha" />
        </div>

        <div className="search-bar">
          <div className="search-input">
            <form onSubmit ={handleSubmit}>
            <input
              type="text"
              placeholder="&nbsp; Search for books you love and explore your exp..."
              value={searchTerm}
              className='search-input'
              onChange={(e) => setsearchTerm(e.target.value)}
            />
            <span className="search-icon">
              <IoSearchOutline />
            </span>
            </form>
          </div>

          <div className='bookView-content'>
          <div className='book-main'>
          {book && book.map(book => (
          <li key={book._id}>
            <div className="book-img">
              <img src={book.imageURL} alt={book.bookTitle} />
            </div>
            <h4>{book.bookTitle}</h4>
            <p>By: {book.authorName}</p>
            {/* <p>Category: {book.category}</p>
            <p>price: {book.price}</p>
            <p>available: {book.available}</p> */}
            </li>
          
            ))}
            </div>
            </div>

        
        </div>

        <div className="icon-right">
          <button onClick={UserLogin}>
            <span className="icon">
              <LuUser />
            </span>
          </button>

          <button>
            <span className="icon">
              <PiShoppingCartSimpleBold />
            </span>
          </button>

          <button>
            <span className="icon">
              <MdOutlineLightMode />
            </span>
          </button>

          <button>
            <span className="icon">
              <TbWorld />
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
