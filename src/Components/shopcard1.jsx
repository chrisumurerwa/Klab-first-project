import React from "react";
import "../Styles/NewArrival.css"; // Import the CSS file
import {Link} from "react-router-dom"
const ShopCard1 = () => {
  // Product data array
  const products = [
    {
      id: 1,
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-water-bottle-420x420.jpg.webp", // Replace with actual image
      name: "All In One Bottle",
      price: "$22.00 - $55.00",
      rating:3,
      colors: ["Arsenic", "Chamoisee", "silver","white"],
    },
    {
      id: 2,
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-alexa-420x420.jpg.webp", 
      name: "Amazon Alexa",
      price: "$49.00 - $69.00",
      rating:5,
      colors: ["Arsenic", "white"]

    },
    {
      id: 3,
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-wireless-headset-420x420.jpg.webp", 
      name: "Headset Gamer",
      price: "$22.00 - $55.00",
      rating:4,
      colors: ["Arsenic", "Chamoisee", "silver","white"],
    }

  ];
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? "star filled" : "star"} style={{marginLeft:"0px",paddingLeft:"0px"}}>
        ★
      </span>
    ));
  };
  const renderColors = (colors) => {
    return colors.map((color, index) => (
      <div key={index} className={`color-circle ${color}`} />
    ));
  };

  // Function to render products
  const renderProducts = () => {
    
    return products.map((product) => (
      <div className="product-card" key={product.id}>   
        <div className="image-container">
          <img src={product.image} alt={product.name} />
          <div className="overlay select">Select Options</div>
          <div className="overlay quick-view">Quick View</div>
        </div>
        <div><h3>{product.name}</h3></div>
        <div><p>{product.price}</p></div>
        <div className="stars" style={{marginLeft:"0px",paddingLeft:"0px"}}>{renderStars(product.rating)}</div>
        <div className="color-options">{renderColors(product.colors)}</div>
      </div>
    ));
  };

  return (<div>
  <div className="product-list">{renderProducts()}</div>
  </div>)
};

export default ShopCard1;
