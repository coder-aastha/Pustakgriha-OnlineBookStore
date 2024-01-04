import { NavLink, useNavigate} from "react-router-dom";
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
import { MdOutlineFavoriteBorder } from "react-icons/md";
import Wishlist from "./Wishlist";
// import Wishlist from "./Wishlist";
import WishlistDetails from "./WishlistDetails";
import { useAuth } from "./AuthContext";
import { Button} from "bootstrap";
import {Dropdown} from "react-bootstrap";


const SearchBar = () => {
  const [book, setBook] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, logout, isAuthenticated, user} = useAuth();

  
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

  const handleShoppingCartClick =() =>{
    if(!isLoggedIn){
      navigate('/login');
    }
    else{
      navigate('/shopping-cart');
    }
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
                
                <div className="searchbar-book-img">
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
          <Dropdown>
           
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <LuUser/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/login">Login</Dropdown.Item>
              <Dropdown.Item href="/register">Register</Dropdown.Item>
              <Dropdown.Item href="/home">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        
          {/* <NavLink to="/shopping-cart" className="nav-link">
            <PiShoppingCartSimpleBold />
          </NavLink> */}

          <NavLink to="/shopping-cart" className="nav-link" onClick={handleShoppingCartClick}>
            <BiCartAdd />
          </NavLink>

          <NavLink to="/WishlistDetails" className="nav-link">
            <MdOutlineFavoriteBorder />
            
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
