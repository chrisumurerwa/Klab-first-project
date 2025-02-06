import React from 'react'
import { useParams } from 'react-router-dom'
import  { blogPosts } from './Blog';
import'../Styles/singleblog.css';

function  Singleblog() {
    const {id}= useParams();
    const singlecard=blogPosts.find((singlecard)=>singlecard.id==id);
  return (
    
    <div class="image-blog " >
      <div class="header"><p>July 18, 2021 rodrigo1 min read</p></div>
      <div class="title"><h1>{singlecard.title}</h1></div>
      <div class="img-card"><img src={singlecard.image}/></div>
      <div class="content">{singlecard.content}</div>
      
    </div>

  )
}
export default Singleblog