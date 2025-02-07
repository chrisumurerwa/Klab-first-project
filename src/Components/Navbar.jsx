import React, { useState } from "react";
import "../Styles/Navbar.css";
import { IoCallOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import LoginForm from "../Components/Loginform";

function Navbar() {
  const [formOpen, setFormOpen] = useState(false);

  const handleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      <div className="Navbar">
        <LoginForm handleForm={handleForm} isOpen={formOpen} />
        
        <div className="logo">Botiga</div>
        
        <div className="search-container">
          <div className="category-dropdown">
            <button className="category-btn">
              All Categories
              <span className="arrow"></span>
            </button>
          </div>
          <div className="search-box-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search products..."
            />
            <button className="search-button">
              <svg className="search-icon" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div> 
        </div>

        <div className="icons">
          <div onClick={handleForm} style={{ cursor: "pointer" }}>
            <RiAccountCircleLine />
          </div>
          <div style={{ position: "relative" }}>
            <LuMessageSquare />
            <span className="icon-badge">0</span>
          </div>
          <div style={{ position: "relative" }}>
            <GoHeart />
            <span className="icon-badge">1</span>
          </div>
          
        </div>
      </div>

      <nav className="nav-container">
        <div className="nav-left">
          <div className="trending-categories">
            Trending categories
            <span className="down-arrow"></span>
          </div>
        </div>

        <ul className="center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/StoreList">Vendors</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <div className="nav-right">
          <div className="phone-number">
            <span className="phone-icon">
              <IoCallOutline />
            </span>
            800-123-4567
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;