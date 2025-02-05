import React, { useState } from "react";
import "../Styles/Navbar.css";
import { IoCallOutline } from "react-icons/io5";
import { RiAccountCircleLine } from "react-icons/ri";
import { LuMessageSquare } from "react-icons/lu";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";
import LoginForm from "../Components/Loginform"; // Corrected import

function Navbar() {
  const [formOpen, setFormOpen] = useState(false);

  const handleForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <>
      <div className="Navbar">
        {/* Ensure LoginForm receives isOpen prop */}
        <LoginForm handleForm={handleForm} isOpen={formOpen} />

        <div className="logo">Botiga</div>
        <Link to='/View'><button>View</button></Link>

        <div>
          <input type="text" placeholder="All Categories" />
          <input type="text" placeholder="Search products" />

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
