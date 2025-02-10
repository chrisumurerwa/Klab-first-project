import React from 'react'
import '../Styles/Shop.css'
import Image from '../assets/image25.webp';

const Shop = ()=>{
  const products=[
    {

      image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-water-bottle-420x420.jpg.webp",
      name:'All In One Bottle',
      category: 'General',
      price: '$22.00 - $55.00',
      rating: 4, // 1-5 scale
      colors: ['brown', 'gray', 'white'], // Available colors
    },
    {
      image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-alexa-420x420.jpg.webp",
      name: 'Amazon Alexa',
      category: 'Electronics',
      price: '$49.00 - $69.00',
      rating: 5,
      colors: ['gray', 'white'],
    },
    {
      image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-wireless-headset-420x420.jpg.webp",
      name:'Headset Gamer Legion',
      category: 'Electronics',
      price: '$22.00 - $55.00',
      rating: 3,
      colors: ['black'],
    },
    {
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-headset-2-420x420.jpg.webp",
      name:'Headset Gamer Legion Plus',
      price:'$22.00 – $55.00',
      rating: 5,
      colors: ['gray', 'brown', 'white'],
    },
   
     {
        image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-watch-2-420x420.jpg.webp",
        name: 'Doe’s Styling Watch',
        price: '$22.00–$33.00',
        rating: 5,
        colors: ['gray', 'white'],
      },
     {
        image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-cam-recorder-420x420.jpg.webp",
        name: 'Jessi Cam Recorder',
        price: '$22.00–$55.00',
        rating: 5,
        colors: ['gray', 'brown', 'white'],
     },
     {
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-shoes-2-420x420.jpg.webp",
      name: 'Doe’s Styling Watch',
      price: '$22.00–$33.00',
      rating: 5,
      colors: ['gray', 'white'],
    },
    {
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-mouse-420x420.jpg.webp",
      name: 'Doe’s Styling Watch',
      price: '$22.00–$33.00',
      rating: 5,
      colors: ['gray', 'white'],
    },
    {
      image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2022/12/product-skin-cream-2-420x420.jpg.webp",
      name: 'Doe’s Styling Watch',
      price: '$22.00–$33.00',
      rating: 5,
      colors: ['gray', 'white'],
    },
  
    
   ]
   const categories = [
    'Body Lotion (1)', 'Computer Gadget (3)', 'Electronics (5)', 'Fashion (3)',
    'General (1)', 'Shoes (2)', 'Sports (3)', 'Watch (1)', 'Woman Clothes (3)',
  ];

return (
  <div className="shop-container">
  {/* Title & Image in the same div */}
  <div>
  <div className="shop-header">
    <h1>Shop</h1>
    <img src={Image} alt="Shop banner" className="shop-image" />
  </div>

    <h3>Categories</h3>


      <aside className="sidebar">
        <div className="categories">
        
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
        <div className="colors">
          <h3>Color</h3>
          <ul className="color-list">
            {['brown', 'gray', 'white', 'black'].map((color, index) => (
              <li key={index} className={`color-item ${color}`}></li>
            ))}
          </ul>
        </div>
      </aside>
        </div>
    

      {/* Product Grid */}
      <div>
        <main className="product-grid">
          <div className="header">
              <p>Showing 1-9 of 13 results</p>
                <div className="sort-options">
              <p>Default sorting</p>
                <div className="view-options">
                <div className="grid-icon"></div>
                <div className="list-icon"></div>
              </div>
            </div>
      </div>

        {/* Products */}
        <div className="products">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <div className="image-container">
                <img src={product.image} alt={product.name} />
                <div className="overlay">
                  <button>Select Options</button>
                  <button onClick={() => navigate("/single-shop")}>Quick View</button>
                </div>
              </div>
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>

              {/* Rating (Stars) */}
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < product.rating ? 'filled-star' : 'empty-star'}>★</span>
                ))}
              </div>

              {/* Color Options */}
              <ul className="color-options">
                {product.colors.map((color, index) => (
                  <li key={index} className={`color-option ${color}`}></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      </div>
    </div>
  );
  }
  
  export default Shop