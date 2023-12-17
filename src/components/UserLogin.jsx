import React from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import main_logo from "../images/main_logo.png";


const Navbar = () => {
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
            <input
              type="text"
              placeholder="&nbsp; Search for books you love and explore our extensive collection..."
              className="search-input"
            />
          </div>
          <span className="search-icon">
            <IoSearchOutline />
          </span>
        </div>

        <div className="icon-right">
          <NavLink to="/login" className="nav-link">
            <LuUser />
          </NavLink>

          <NavLink to="/shopping-cart" className="nav-link">
            <PiShoppingCartSimpleBold />
          </NavLink>

          <NavLink to="/light-mode" className="nav-link">
            <MdOutlineLightMode />
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
