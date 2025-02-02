import React from "react";

import { FaStar } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

import "../Styles/home.css";
import Image1 from "../assets/prod image1.jpg.webp";
import Image2 from "../assets/prod image2.jpg.webp";
import Image3 from "../assets/prod image-3.jpg.webp";
import Image4 from "../assets/prod image4.jpg.webp";
import Image5 from "../assets/prod image5.jpg.webp";
import Image6 from "../assets/prod image6 .jpg.webp";
import Image7 from "../assets/New1.jpg.webp";
import Image8 from "../assets/New2.jpg.webp";
import Image9 from "../assets/New3.jpg.webp";
import Image10 from "../assets/image10.jpg.webp";
import Image11 from "../assets/image11.jpg.webp";
import Image12 from "../assets/image12.jpg.webp";
import Image13 from "../assets/image13.jpg.webp";
import Image14 from "../assets/image14.jpg.webp";
import Image15 from "../assets/image15.jpg.webp";
import Image16 from "../assets/image16.jpg.webp";
import Image17 from "../assets/image17.jpg.webp";
import Image18 from "../assets/image18.jpg.webp";
import Image19 from "../assets/image19.jpg.webp";
import Image20 from "../assets/image20.jpg.webp";
import Image21 from "../assets/image21.jpg.webp";
import Image22 from "../assets/image22.jpg.webp";
import Image23 from "../assets/image23.jpg.webp";
import Image24 from "../assets/image24.jpg.webp";

function Home() {
  return (
    <>
      <div className="container">
        <nav class="sidebar">
          <ul class="nav-list">
            <li>
              <a href="#Electronics">Electronics</a>
            </li>
            <li>
              <a href="#Computer">Computer Gadgets</a>
            </li>
            <li>
              <a href="#Fashion">Fashion</a>
            </li>
            <li>
              <a href="#lotion">Body lotion</a>
            </li>
            <li>
              <a href="#Sports">Sports</a>
            </li>
            <li>
              <a href="# Women ">Women clothes</a>
            </li>
            <li>
              <a href="#shoes">shoes</a>
            </li>
            <li>
              <a href="#Watches">Watches</a>
            </li>
          </ul>
        </nav>
        <main class="banner">
          <div class="banner-content">
            <h1>Explore our last and greatest Electronics</h1>
            <button class="shop-now">SHOP-NOW</button>
          </div>
        </main>
      </div>
      <div class="categories">
        <h1>popular categories</h1>
      </div>
      <div class="Image-first">
        <div>
          <img src={Image1} alt="prod image1"></img>
        </div>
        <div>
          <img src={Image2} alt="prod image2"></img>
        </div>
        <div>
          <img src={Image3} alt="prod image-3"></img>
        </div>
        <div>
          <img src={Image4} alt="prod image4"></img>
        </div>
        <div>
          <img src={Image5} alt="prod image5"></img>
        </div>
        <div>
          <img src={Image6} alt="prod image6"></img>
        </div>
      </div>
      <div class="container1">
        <h1>New arrival products </h1>
      </div>

      <div class="Image-second">

        <div class="description"> 
          <img src={Image7} alt="New1" style={{ width: "400px" }}></img>

          <div class="paragraphy">All in one Button</div>
          <div class="dollars">$22.00 – $55.00</div>
          <div class="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div class="description">
          <img src={Image8} alt="New2" style={{ width: "400px" }}></img>
          <div class="paragraphy2">Amazon alexa</div>
          <div class="dollars">$49.00 – $69.00</div>
          <div class="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div class="description">
          <img src={Image9} alt="New3" style={{ width: "400px" }}></img>
          <div class="paragraphy3">Headset Gamer Legion</div>
          <div class="dollars">$44.00</div>
          <div class="star">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

      </div>
      <button class="shop-now1">SHOP-NOW</button>
      <div class="container">
        <h2>Our Vendor List</h2>
      </div>
      <div class="Image-third">
        <div className="one">
          <img src={Image10} alt="image10.jpg.webp"></img>
          <p class="santa">
            santa <br />
            monica's
            <br /> store
          </p>
          <br />
        </div>

        <div className="one">
          <img src={Image11} alt="image11.jpg.webp"></img>
          <p class="josh">
            Josh <br />
            Doe's
            <br /> Store
          </p>

          <p class="new 1">New york,Ny</p>
        </div>

        <div className="one">
          <img src={Image12} alt="image12.jpg.webp"></img>
          <p className="digital">
            Digital Good's <br />
            Store
          </p>
          <p class="new 2 ">New york,Ny</p>
        </div>
      </div>

      <div class="Image-fourth">
        <div className="one">
          <img src={Image13} alt="image13.jpg.webp"></img>
          <p class="santa"> jesca's store</p>
          <br />
          <p class="new 0 ">New york,Ny</p>
        </div>
        <div className="one">
          <img src={Image14} alt="image14.jpg.webp"></img>
          <p class="josh">
            The Glass <br />
            Store
          </p>

          <p class="new 1">New york,Ny</p>
        </div>

        <div className="one">
          <img src={Image15} alt="image15.jpg.webp"></img>
          <p className="digital">
            John Doe's <br />
            Store
          </p>
          <p class="new 2 ">New york,Ny</p>
        </div>
      </div>
      <div class="container2">
        <h1>Explore our products</h1>
      </div>

      <div class="image-fifth">
        <div class="description">
          <img src={Image7} alt="New1"></img>
          <div class="paragraph">All in one Button</div>
          <div class="price">$22.00 – $55.00</div>
          <div class="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div class="description">
          <img src={Image8} alt="New2"></img>
          <div class="paragraph">Amazon Alexa</div>
          <div class="price">$49.00 – $69.00</div>
          <div class="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div class="description">
          <img src={Image9} alt="New3"></img>
          <div class="paragraph">Headset Gamer Legion</div>
          <div class="price">$44.00</div>
          <div class="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
      </div>

      <div class="photoes">
        <img src={Image16} alt="image16"></img>
        <img src={Image17} alt="image17"></img>
        <img src={Image18} alt="image18"></img>
      </div>

      <div class="container3">
        <h1>Follow us on Instagram</h1>
      </div>

      <div class="image-sixth">
        <img src={Image19} alt="image19"></img>
        <img src={Image20} alt="image20"></img>
        <img src={Image21} alt="image21"></img>
        <img src={Image22} alt="image22"></img>
        <img src={Image23} alt="image23"></img>
        <img src={Image24} alt="image24"></img>
      </div>
    </>
  );
}
export default Home;
