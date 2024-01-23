import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import FooterUI from "../components/FooterUI";
import Navbar from "../components/Navbar";
import "../css/Categories.css";
import { HiMenuAlt1 } from "react-icons/hi";

const Categories = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(localStorage.getItem('menuOpen') === 'true');
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/books/${category}`);
        setBooks(response.data.books);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    fetchData();
    setActiveCategory(category);
  }, [category]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    localStorage.setItem('menuOpen', (!menuOpen).toString());
  };

  return (
    <>
          <Navbar />
          <div className="genre_contents">
          <HiMenuAlt1 className="genremenu-icon" onClick={toggleMenu} />
            {menuOpen &&(
          <div className="genrecontent-column active">
            <div className="genrelist-title">
              <h3> Genres</h3>
            </div>
            <div className="main-category-container">
              <Link className={`category-link ${activeCategory === 'Fiction' ? 'active' : ''}`} to="/category/Fiction">Fiction</Link>
              <Link className={`category-link ${activeCategory === 'Biography' ? 'active' : ''}`} to="/category/Biography">Biography</Link>
              <Link className={`category-link ${activeCategory === 'Historical' ? 'active' : ''}`} to="/category/Historical">Historical</Link>
              <Link className={`category-link ${activeCategory === 'Kids & Teen' ? 'active' : ''}`} to="/category/Kids & Teen">Kids & Teen</Link>
              <Link className={`category-link ${activeCategory === 'Photography' ? 'active' : ''}`} to="/category/Photography">Photography</Link>
              <Link className={`category-link ${activeCategory === 'Inventory' ? 'active' : ''}`} to="/category/Inventory">Inventory</Link>
              <Link className={`category-link ${activeCategory === 'Improvement' ? 'active' : ''}`} to="/category/Improvement">Improvement</Link>
            </div>
          </div>
        )}
            <div className="genrebooksView-content">
            {books.length === 0 ? (
            <p>No books available!!</p>
          ) : (
              <div className="genrebooks-main">
                <div className="genrebooks-row">
                  {books.map((book) => (
                    <Link to={`/booklisting/${book._id}`} key={book._id} className="genrebooks-items">
                        <div className="book-item-content">
                          <div className="book-cardGenre">
                          <div className="book-img-genre">
                            <img src={book.imageURL} alt={`Cover of ${book.bookTitle}`} />
                            <div>
                              <div className="genrebook-text">
                                <h4>{book.bookTitle}</h4>
                                <p>{'Rs. ' + book.price}</p>
                                <button className="genreadd-to-cart-btn">ADD TO CART</button>
                              </div>
                            </div>
                          </div>
                          </div>
                        </div>
                    </Link>
                  ))}
                </div>
              </div>
          )}
            </div>
          </div>
          <FooterUI/>
    </>
  );
};

export default Categories;
