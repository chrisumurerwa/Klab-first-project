import React from 'react'
import '../Styles/StoreProduct'

  
    const  StoreProduct = () => {
      const [StoreProduct] = useState([
        'General',
        'Sports', 
        'Electronics'
      ]);
    
      const storeInfo = {
        name: "Jessica's Store",
        location: "Central Park, New York, New York, United States (US)",
        rating: {
          score: 4.00,
          reviews: 2
        },
        profileImage: "/path/to/profile-image.jpg",
        productImage: "/path/to/teal-shoe.jpg"
      };
    
      return (
        <div className="store-container">
          <div className="store-sidebar">
            <div className="store-categories">
              <h3>Store Product Category</h3>
              {storeCategories.map((category, index) => (
                <div key={index} className="category-item">{category}</div>
              ))}
            </div>
    
            <div className="contact-vendor">
              <h3>Contact Vendor</h3>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="contact-input"
              />
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="contact-input"
              />
              <textarea 
                placeholder="Type your message..." 
                className="contact-textarea"
              ></textarea>
            </div>
          </div>
    
          <div className="store-main-content">
            <div className="store-header">
              <div className="store-profile">
                <img 
                  src={storeInfo.profileImage} 
                  alt={storeInfo.name} 
                  className="profile-image"
                />
                <h2>{storeInfo.name}</h2>
              </div>
              <div className="store-location">
                <span>📍 {storeInfo.location}</span>
                <span>★ {storeInfo.rating.score} rating from {storeInfo.rating.reviews} reviews</span>
              </div>
            </div>
    
            <div className="product-search">
              <h3>Products</h3>
              <div className="search-container">
                <input 
                  type="text" 
                  placeholder="Enter product name" 
                  className="product-search-input"
                />
                <button className="search-button">SEARCH</button>
                <select className="sort-dropdown">
                  <option>Default sorting</option>
                </select>
              </div>
            </div>
    
            <div className="product-image-container">
              <img 
                src={storeInfo.productImage} 
                alt="Teal Shoe" 
                className="product-image"
              />
            </div>
          </div>
        </div>
      );
    };

export default StoreProduct