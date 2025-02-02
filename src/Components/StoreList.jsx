import React from 'react'
import '../Styles/StoreList.css'

const  stores =[
    {
        id: 1,
        name: "John Doe's Store",
        image: '/store1.jpg',
        location: "Central Park, New York, United States (US)",
        rating: 5,
        icon: 'https://via.placeholder.com/50', // Replace with an icon
      },
      {
        id: 2,
        name: "Jessica's Store",
        image: "store2.jpg",
        location: 'Central Park, New York, United States (US)',
        rating: 4,
        icon: 'https://via.placeholder.com/50',
      },
      {
        id: 3,
        name: "Santa Monica's Store",
        image: "store3.jpg",
        location: 'Central Park, New York, United States (US)',
        rating: 4.5,
        icon: 'https://via.placeholder.com/50',
      },
      
    ];
const store1=[{
    id: 1,
    name: "Digital Good's Store",
    image: "store4.jpg",
    location: 'Central Park, New York, United States (US)',
    rating: 4.5,
    icon: 'https://via.placeholder.com/50',
  },
  {
    id: 2,
    name: "The Glass Store",
    image: "store5.jpg",
    location: "Central Park, New York, United States (US)",
    rating: 0, // No rating
    icon: "https://via.placeholder.com/50",
  },
  {
    id: 3,
    name: "Josh Doe's Store",
    image: "store6.jpg",
    location: "Central Park, New York, United States (US)",
    rating: 5,
    phone: "123456789",
    icon: "https://via.placeholder.com/50",
  },]
const StoreList =()=>
    {
        return (
            <div className="store-container">
              <h1>Store List</h1>
              <div className="filter-sort">
                <p>Total stores showing: {stores.length}</p>
                <button className="filter-btn">Filter</button>
                <select className="sort-dropdown">
                  <option>Most Recent</option>
                </select>
              </div>
        
              <div className="store-list">
                {stores.map((store) => (
                  <div key={store.id} className="store-card">
                    <img src={store.image} alt={store.name} className="store-image" />
                    <div className="store-info">
                      <h3>{store.name}</h3>
                      <div className="rating">
                        {"⭐".repeat(Math.floor(store.rating))}
                        {store.rating % 1 !== 0 && "⭐"}
                      </div>
                      <p>{store.location}</p>
                    </div>
                    <img src={store.icon} alt="icon" className="store-icon" />
                    <button className="view-btn">➜</button>
                  </div>
                ))}
              </div>
              <div className="store-list1">
                {store1.map((store) => (
                  <div key={store.id} className="store-card">
                    <img src={store.image} alt={store.name} className="store-image" />
                    <div className="store-info">
                      <h3>{store.name}</h3>
                      <div className="rating">
                        {"⭐".repeat(Math.floor(store.rating))}
                        {store.rating % 1 !== 0 && "⭐"}
                      </div>
                      <p>{store.location}</p>
                    </div>
                    <img src={store.icon} alt="icon" className="store-icon" />
                    <button className="view-btn">➜</button>
                  </div>
                ))}
              </div>
            </div>
          );

    }
export default StoreList