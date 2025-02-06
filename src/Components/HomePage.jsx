import React from 'react';
import '../Styles/HomePage.css';
import image1 from '../assets/New1.jpg.webp';
import image2 from '../assets/New2.jpg.webp';
import image3 from'../assets/New3.jpg.webp';
import { useNavigate } from 'react-router-dom';

// Sample data array
export const productlist = [
    {
        id: 1,
        image: image1,
        cardTitle: 'All In One Bottle',
        cardPrice: '$49.00 – $69.00',
        cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
        id: 2, // Fixed duplicate id issue
        image: image2,
        cardTitle: "Amazon Alexa",
        cardPrice:"$49.00 – $69.00",
        cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
{
    id: 3, // Fixed duplicate id issue
    image: image3,
    cardTitle: "Amazon Alexa",
    cardPrice:"$49.00 – $69.00",
    cardDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim auctor quam nec dapibus. Etiam pulvinar lectus lorem, vel condimentum felis tincidunt eget. Curabitur sem nisl, porta rutrum molestie quis, blandit vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
},


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
                        <div className='descript'>{item.cardDescription}</div>
                        <div className='price'>{item.cardPrice}</div>
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

