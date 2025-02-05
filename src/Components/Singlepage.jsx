import React from"react";
import { useParams } from "react-router-dom";
import { productlist } from "./HomePage";
function Singlepage (){
        const{id}=useParams();
        console.log("product list",id);
        const card=productlist.find((card)=>card.id==id);
        return(
            <div>
         <div><img src={card.image}/></div>
         <div>{card.cardTitle}</div>
            </div>
        )
}
export default Singlepage;