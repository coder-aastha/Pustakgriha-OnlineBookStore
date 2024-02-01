import { NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { BiCartAdd } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import main_logo from "../images/main_logo.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useAuth } from "../Context/AuthContext";
import { useCart } from "../Context/CartContext";
import { Dropdown } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";import { IoMenu } from "react-icons/io5";



const SearchBar = () => {
  const [book, setBook] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { user, isAuthenticated, logout,getUsername, getEmail  } = useAuth();
  const { totalQuantity } = useCart();

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      try {
        axios
          .get(`/book/search?searchTerm=${searchTerm}`)
          .then((response) => setBook(response.data.book))
          .catch((error) => console.error("Axios Error:", error));
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setBook([]);
    }
  }, [searchTerm]);

  const handleSearchClick = () => {
    setIsActive(!isActive);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBookClick = () => {
    setsearchTerm("");
    setBook([]);
  };
  const handleLogout = () => {
    logout();
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
          <div className={`search-input ${isActive ? "active" : ""}`}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="&nbsp; Search for books you love and explore..."
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
              <Link to={`/booklisting/${book._id}`} key={book._id} className="Search-book-card" onClick={handleBookClick}>
                
                <div className="searchbar-img">
                  <img src={book.imageURL} alt={book.bookTitle} />
                </div>

                <div className="searchbar-img-description">
                <h5>{book.bookTitle}</h5>
                <p>By: {book.authorName}</p>
                </div>
              
              </Link>
            ))}


        </div>
          )}  
      </div>
        

      <div className="icon-right">
      {isAuthenticated() ? (
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <LuUser />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {/* <Dropdown.Item href="#" disabled>
                Username: {getUsername()}
              </Dropdown.Item>
              <Dropdown.Item href="#" disabled>
                Email: {getEmail()}
              </Dropdown.Item>
              <Dropdown.Divider /> */}
              <Dropdown.Item href="#" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <NavLink to="/login" className="nav-link">
            <LuUser />
          </NavLink>
        )}
          <NavLink to="/shopping-cart" className="nav-link">
            <BiCartAdd />
            <span className="totalquantity">{totalQuantity}</span>
          </NavLink>

          <NavLink to="/Wishlist" className="nav-link">
            <MdOutlineFavoriteBorder />
          </NavLink>

        </div>
        <span className="menu-icon-span">
          <Dropdown className="menu-dropdown-btn">
            <Dropdown.Toggle variant="" id="dropdown-basic">
              <IoMenu />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/login">
                <LuUser className="component-icon"/>
              </Dropdown.Item>
              <Dropdown.Item href="/shopping-cart">
                <BiCartAdd className="component-icon"/>
              </Dropdown.Item>
              <Dropdown.Item href="/Wishlist">
                <FaRegHeart className="component-icon"/>
              </Dropdown.Item>
             
            </Dropdown.Menu>
          </Dropdown>

          {/* </label> */}
        </span>
      </header>
    </>
  );
};

export default SearchBar;
