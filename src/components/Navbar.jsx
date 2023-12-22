import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
// import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import main_logo from "../images/main_logo.png";
import { TbWorld } from "react-icons/tb";
import React, {useEffect, useState} from 'react';
import axios from "axios";


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
        <NavLink to="/" className="nav-link">
          <img className="logo-img" src={main_logo} alt="Pustakgriha" />
          </NavLink>
        </div>

        <div className="search-bar">
          <div className="search-input">
            <form onSubmit ={handleSubmit}>
            <input
              type="text"
              placeholder="&nbsp; Search for books you love and explore your explore our extensive collection..."
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
          <NavLink to="/login" className="nav-link">
            <LuUser />
          </NavLink>

          {/* <NavLink to="/shopping-cart" className="nav-link">
            <PiShoppingCartSimpleBold />
          </NavLink> */}

          <NavLink to="/shopping-cart" className="nav-link">
            <BiCartAdd />
          </NavLink>

          <NavLink to="/world" className="nav-link">
            <TbWorld />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
