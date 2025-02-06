import React from "react";
import "../Styles/footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import Image from "../assets/footer-payment-methods-1.png.webp";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="footer-left">
          <h2>Stay up to date</h2>
          <p>Subscribe to our newsletter and get 20% discount on your first order.</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>SUBMIT</button>
          </div>

          {/* Footer Links */}
          <div className="footer-links">
            <div className="column">
              <h3>SHOP</h3>
              <ul>
                <li>Body Lotion</li>
                <li>Computer Gadgets</li>
                <li>Electronics</li>
                <li>Fashion</li>
                <li>General</li>
                <li>Shoes</li>
                
              </ul>
            </div>
            <div className="column">
              <h3>COMPANY</h3>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Help</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="column">
              <h3>ABOUT</h3>
              <ul>
                <li>Who We Are</li>
                <li>Reviews</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info & Payment Methods */}
        <div className="footer-right">
          <h2>Happy to help</h2>
          <p>1279 Thorn Street, NY</p>
          <p>Phone: 307-549-2480</p>
          <p>Email: demo@gmail.com</p>
          <div className="social-icons">
            <FaFacebook />
            <FaXTwitter />
            <IoLogoLinkedin />
            <FaInstagram />
          </div>

          {/* Payment Methods */}
          <div className="payments">
            <h3>ACCEPTED PAYMENTS</h3>
            <img src={Image} alt="Payment Methods" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
