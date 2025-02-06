import React, { useState } from 'react';
import '../Styles/StoreList.css'
import image1 from"../assets/store1.jpg";
import image2 from'../assets/store2.jpg'
import image3 from'../assets/store3.jpg'
import image4 from'../assets/store4.jpg'
import image5 from'../assets/store5.jpg'
import image6 from'../assets/store6.jpg'
const StoreList = () => {
  const [stores] = useState([

    {
      id: 1,
      name: "John Doe's Store",
      location: "Central Park, New York, New York, United States (US)",
      rating: 5,
      image: image1,
      profileImage: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-glass-shop-1-1.jpg.webp"
    },
    {
      id: 2,
      name: "Jessica's Store",
      location: "Central Park, New York, New York, United States (US)",
      rating: 4,
      image: image2,
      profileImage: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/cropped-vendor-shoes-shop-1-1.jpg.webp"
    },
    {
      id: 3,
      name: "Santa Monica's Store",
      location: "Central Park, New York, New York, United States (US)",
      rating: 5,
      image: image3,
      profileImage: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/145/2022/12/cropped-vendor-shirt-shop-1.jpg"
    },
    {
      id: 4,
      name: "Digital Good's Store",
      location: "Central Park, New York, New York, United States (US)",
      rating: 5,
      image: image4,
      profileImage: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/145/2022/12/cropped-product-sound-box.jpg"
    },
    {
      id: 5,
      name: "The Glass Store",
      location: "Central Park, New York, New York, United States (US)",
      rating: 5,
      image: image5,
      profileImage: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/uploads/sites/145/2022/12/cropped-vendor-glass-shop-2.jpg"
    },
    {
      id: 6,
      name: "Josh Doe's Store",
      location: "Central Park, New York, New York, United States (US)",
      rating: 5,
      image: image6,
      profileImage: "https://secure.gravatar.com/avatar/b09b39de21202fee022ada587cd6c12e?s=96&d=mm&r=g"
    },







  ]);
  

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={index < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
   
    <div className="store-list-container">
      <h1>Store List</h1>
      <div className="store-list-header">

        <div className="total-stores">Total stores showing: {stores.length}</div>
        <div className="store-list-actions">
          <button className="filter-button">Filter</button>
          <div className="sort-dropdown">
            Sort by: Most Recent
            <svg className="dropdown-icon" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5z"/>
            </svg>
          </div>
          <div className="view-options">
            <button className="view-grid active">
              <svg viewBox="0 0 24 24">
                <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z"/>
              </svg>
            </button>
            <button className="view-list">
              <svg viewBox="0 0 24 24">
                <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-6h2V7h-2v2zm0 10h2v-2h-2v2z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="stores-grid">
        {stores.map(store => (
          <div key={store.id} className="store-card">
            <div 
              className="store-image" 
              style={{backgroundImage: `url(${store.image})`}}
            >
              <div className="store-name">{store.name}</div>
            </div>
            <div className="store-details">
              <div className="store-rating">
                {renderStars(store.rating)}
              </div>
              <div className="store-location">{store.location}</div>
              <div 
                className="store-profile-image" 
                style={{backgroundImage: `url(${store.profileImage})`}}
              ></div>
              <button className="view-store-button">
                <svg viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;