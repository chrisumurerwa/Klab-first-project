import React, { useState } from "react";
import { useParams } from "react-router-dom"; // ✅ Needed for dynamic routing
import "../Styles/SingleShop.css";
import productImage from "../assets/New1.jpg.webp";
import vendorImage from "../assets/cropped2-vendor-shoes-shop-1-2.jpg.webp";
  
import bottle3 from "../assets/New1.jpg.webp";  
import bottle4 from "../assets/product-perfume.jpg";  

const products = [
  {
    id: 1,
    name: "All In One Bottle",
    image: productImage,
    priceRange: "$22.00 – $55.00",
    rating: 3,
    reviewCount: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus.",
    images: [productImage,  bottle3, bottle4],
    colors: ["#ffffff", "#a67c52", "#d3d3d3", "#e5e5e5"],
    vendor: {
      name: "Jessica Doe",
      location: "Central Park, New York, US",
      contact: "Contact",
      profileImage: vendorImage,
    },
  },
];

const SingleShop = () => {
  const { id } = useParams(); // ✅ Get product ID from URL
  const product = products.find((p) => p.id === parseInt(id)) || products[0]; // ✅ Fallback

  const [selectedImage, setSelectedImage] = useState(product.image);

  console.log("Selected Product:", product); // Debugging
  console.log("Selected Image:", selectedImage); // Debugging

  return (
    <div className="product-container">
      <div className="product-details">
        <img className="main-image" src={selectedImage} alt="Product" />
        <div className="thumbnail-container">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Thumbnail"
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>

        <h1>{product.name}</h1>
        <div className="rating">
          {"★".repeat(product.rating)}
          {"☆".repeat(5 - product.rating)}
          <span> ({product.reviewCount} customer review)</span>
        </div>
        <h2>{product.priceRange}</h2>
        <p>{product.description}</p>

        <div className="color-options">
          {product.colors.map((color, index) => (
            <span key={index} className="color-circle" style={{ backgroundColor: color }}></span>
          ))}
        </div>

        <div className="quantity-control">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>

      <div className="vendor-info">
        <h2>Vendor</h2>
        <img src={product.vendor.profileImage} alt="Vendor" />
        <h3>{product.vendor.name}</h3>
        <p>📍 {product.vendor.location}</p>
        <p>📞 {product.vendor.contact}</p>
        <button className="see-products">See All Products</button>
        <p className="register-text">
          Become a vendor? <a href="#">Register Now</a>
        </p>
      </div>
    </div>
  );
};

export default SingleShop;
