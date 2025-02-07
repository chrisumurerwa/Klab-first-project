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
  const categories = [
    { name: 'Electronics', link: '#' },
    { name: 'Computer Gadget', link: '#' },
    { name: 'Fashion', link: '#' },
    { name: 'Body Lotion', link: '#' },
    { name: 'Sports', link: '#' },
    { name: 'Woman Clothes', link: '#' },
    { name: 'Shoes', link: '#' },
    { name: 'Watches', link: '#' }
  ];

  const popularImages = [
    { src: Image1, alt: "prod image1" },
    { src: Image2, alt: "prod image2" },
    { src: Image3, alt: "prod image-3" },
    { src: Image4, alt: "prod image4" },
    { src: Image5, alt: "prod image5" },
    { src: Image6, alt: "prod image6" }
    
  ];

  const newArrivalProducts = [
    { 
      image: Image7,
      title: "All in one Button",
      price: "$22.00 – $55.00",
      rating: 5
    },
    {
      image: Image8,
      title: "Amazon alexa",
      price: "$49.00 – $69.00",
      rating: 5
    },
    {
      image: Image9,
      title: "Headset Gamer Legion",
      price: "$44.00",
      rating: 5
    }
  ];

  const vendorList = [
    {
      image: Image10,
      name: "santa monica's store",
      location: ""
    },
    {
      image: Image11,
      name: "Josh Doe's Store",
      location: "New york,Ny"
    },
    {
      image: Image12,
      name: "Digital Good's Store",
      location: "New york,Ny"
    },
    {
      image: Image13,
      name: "jesca's store",
      location: "New york,Ny"
    },
    {
      image: Image14,
      name: "The Glass Store",
      location: "New york,Ny"
    },
    {
      image: Image15,
      name: "John Doe's Store",
      location: "New york,Ny"
    }
  ];

  const galleryImages = [Image16, Image17, Image18];
  const instagramImages = [Image19, Image20, Image21, Image22, Image23, Image24];

  const renderStars = (count) => {
    return [...Array(count)].map((_, index) => (
      <FaStar key={index} />
    ));
  };

  return (
    <>
      <div className="w-full max-w-xs p-4">
      
      {/* Sidebar Navigation */}
      <nav className="sidebar">
        <ul className="nav-list">
          <li><a href="#Electronics">Electronics</a></li>
          <li><a href="#Computer">Computer Gadgets</a></li>
          <li><a href="#Fashion">Fashion</a></li>
          <li><a href="#lotion">Body Lotion</a></li>
          <li><a href="#Sports">Sports</a></li>
          <li><a href="#Women">Women Clothes</a></li>
          <li><a href="#shoes">Shoes</a></li>
          <li><a href="#Watches">Watches</a></li>
        </ul>
      </nav>

      {/* Banner Section */}
      <main className="banner">
        <div className="banner-content">
          <h1>Explore Our Latest and Greatest Electronics</h1>
          <button className="shop-now0">SHOP NOW</button>
        </div>
      </main>
    

        
      </div>

      <div className="categories">
        <h1>popular categories</h1>
      </div>
      
      <div className="Image-first">
        {popularImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>

      <div className="container1">
        <h1>New arrival products</h1>
      </div>

      <div className="Image-second">
        {newArrivalProducts.map((product, index) => (
          <div className="description" key={index}>
            <img src={product.image} alt={`New${index + 1}`} style={{ width: "400px" }} />
            <div className="paragraphy">{product.title}</div>
            <div className="dollars">{product.price}</div>
            <div className="star">
              {renderStars(product.rating)}
            </div>
          </div>
        ))}
      </div>

      <button className="shop-now1">SHOP-NOW</button>

      <div className="container">
        <h2>Our Vendor List</h2>
      </div>

      <div className="Image-third">
        {vendorList.slice(0, 3).map((vendor, index) => (
          <div className="one" key={index}>
            <img src={vendor.image} alt={`vendor-${index + 1}`} />
            <p className={index === 0 ? "santa" : index === 1 ? "josh" : "digital"}>
              {vendor.name}
            </p>
            {vendor.location && <p className={`new ${index}`}>{vendor.location}</p>}
          </div>
        ))}
      </div>

      <div className="Image-fourth">
        {vendorList.slice(3, 6).map((vendor, index) => (
          <div className="one" key={index}>
            <img src={vendor.image} alt={`vendor-${index + 4}`} />
            <p className={index === 0 ? "santa" : index === 1 ? "josh" : "digital"}>
              {vendor.name}
            </p>
            <p className={`new ${index}`}>{vendor.location}</p>
          </div>
        ))}
      </div>

      <div className="container2">
        <h1>Explore our products</h1>
      </div>

      <div className="image-fifth">
        {newArrivalProducts.map((product, index) => (
          <div className="description" key={index}>
            <img src={product.image} alt={`New${index + 1}`} />
            <div className="paragraph">{product.title}</div>
            <div className="price">{product.price}</div>
            <div className="stars">
              {renderStars(product.rating)}
            </div>
          </div>
        ))}
      </div>

      <div className="photoes">
        {galleryImages.map((image, index) => (
          <img key={index} src={image} alt={`image${index + 16}`} />
        ))}
      </div>

      <div className="container3">
        <h1>Follow us on Instagram</h1>
      </div>

      <div className="image-sixth">
        {instagramImages.map((image, index) => (
          <img key={index} src={image} alt={`image${index + 19}`} />
        ))}
      </div>
    </>
  );
}

export default Home;