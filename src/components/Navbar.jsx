import { NavLink, Route} from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
// import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BiCartAdd } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import main_logo from "../images/main_logo.png";
import { TbWorld } from "react-icons/tb";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserLogin from './UserLogin';
import {Link} from 'react-router-dom'

const SearchBar = () => {
  const [book, setBook] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);
 
  useEffect(() => {
    if(searchTerm.trim() !== ""){
      try {
        axios.get(`/book/search?searchTerm=${searchTerm}`)
          .then(response => setBook(response.data.book))
          .catch(error => console.error('Axios Error:', error));
      } catch (error) {
        console.error('Error:', error);
      }
    } else{
      setBook([]);
    }
  }, [searchTerm]);

  
  const handleSearchClick = () => {
    setIsActive(!isActive);
  };
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBookClick =() => {
    setsearchTerm('');
    setBook([]);
  }
 
  return (
    <>
      <header className="main-container">
        <div className="logo-div">
        <NavLink to="/" className="nav-link">
          <img className="logo-img" src={main_logo} alt="Pustakgriha" />
          </NavLink>
        </div>

        <div className="search-bar">
          <div className={`search-input ${isActive ? "active" : ""}`}>
            <form onSubmit ={handleSubmit}>
            <input
              type="text"
              placeholder="&nbsp; Search for books you love and explore your explore our extensive collection..."
              value={searchTerm}
              className="search-input"
              onChange={(e) => setsearchTerm(e.target.value)}
              onFocus={handleSearchClick}
            />
            <span className="search-icon" onClick={handleSearchClick}>
              
              <IoSearchOutline />
            </span>
            </form>
          </div>
        
          {isActive && book.length > 0 && (
          <div className="search-results-container">         
            {book.map((book) => (
              <Link to={`/booklisting/${book._id}`} key={book._id} className="book-card" onClick={handleBookClick}>
                
                <div className="book-img">
                  <img src={book.imageURL} alt={book.bookTitle} />
                </div>
                <h5>{book.bookTitle}</h5>
                <p>By: {book.authorName}</p>
              </Link>
            ))}


        </div>
          )}  
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

export default SearchBar;
