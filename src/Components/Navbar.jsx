import React from'react'
import '../Styles/Navbar.css'
import { IoCallOutline } from "react-icons/io5";
import {Link} from"react-router-dom"
function Navbar(){
    return(
<>

<div className="Navbar">
<div className ="logo">Botiga</div>
    <div>
    <input type="text" placeholder="All Categories"/>
    <input type="text"placeholder="search produts"/>
</div>
    </div>

<nav class="nav-container">
    <div class="nav-left">
        < div class="Trending categories">
        Trending categories
        <span class="down-arrow"></span>
        </div>
    </div>
    <nav class="center">
        
        <Link to="/">
        <li>Home</li>
        </Link>
        <Link to="/Shop">
        <li>Shop</li>
        </Link>
        <Link to="/StoreList">
        <li>Vendors</li>
        </Link>
        <Link to="/Blog">
        <li>Blog</li>
        </Link>
        <Link to="/Contact">
        <li>Contact</li>
        </Link>
    
        </nav>
    <div class="nav-right">
    <div class="phone number">
        <span class="phone-icon"><IoCallOutline /> </span>800-123-4567
    </div>
    </div>
    </nav>
</>
    )
}
export default Navbar