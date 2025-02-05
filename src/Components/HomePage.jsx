import React from 'react';
import '../Styles/HomePage.css';
import image1 from '../assets/image12.jpg.webp';
import image2 from '../assets/image14.jpg.webp';
import { useNavigate } from 'react-router-dom';

// Sample data array
export const productlist = [
    {
        id: 1,
        image: image1,
        cardTitle: 'Oil',
    },
    {
        id: 2, // Fixed duplicate id issue
        image: image2,
        cardTitle: "Sugar",
    }
];

function Homepage() {
    const navigate = useNavigate();

    const handleNavigate = (id) => {
        navigate(`/singlecard/${id}`);
    };

    return (
        <div className="nav-container">
            {productlist.map((item) => (
                <div className="cont" key={item.id}>
                    <div onClick={() => handleNavigate(item.id)} style={{ cursor: 'pointer' }}>
                        <div>
                            <img src={item.image} alt={item.cardTitle} />
                        </div> 
                        <div>{item.cardTitle}</div>
                    </div>
                    <button type="button" onClick={() => handleNavigate(item.id)}>
                        View
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Homepage;

