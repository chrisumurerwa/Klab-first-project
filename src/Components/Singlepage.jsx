import React from"react";
import { useParams } from "react-router-dom";
import {blogPosts } from "./Blog";


function Singlepage (){
        const{id}=useParams();
        console.log("product list",id);
        const card=blogPosts.find((card)=>card.id==id);
        return(
            <div>
         <div><img src={card.image}/></div>
         <div>{card.cardTitle}</div>
         <div>{card.cardDescription}</div>
         <div>{card.cardPrice}</div>
            </div>
        )
}
export default Singlepage;