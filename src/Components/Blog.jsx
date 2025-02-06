import React from "react"
import '../Styles/Blog.css'
import { useNavigate } from "react-router-dom";


export const blogPosts = [
  {
    id:1,
    image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-2.jpg.webp",
    title: 'Sed magna dui, dignissim id felis vitae, consectetur',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero.'
  },
  {
    id: 2,
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-1.jpg.webp",
    title: 'Fusce suscipit risus tempor, blandit urna at, laoreet ex',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero' 
  },
  {
    id: 3,
    image: "https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-7.jpg.webp",
    title: 'Pellentesque varius, diam vitae mattis luctus, mi mi cursus',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero'
  },
{
  id:4,
  image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-6.jpg.webp",
  title:'Nam pharetra fringilla justo, et commodo lacus molestie ut',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero'
},
{
id:5,
image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-5.jpg.webp",
title:'Fusce vel tellus vulputate, dignissim turpis sit amet, aliquet mi',
content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero'
},
{
  id:6,
  image:"https://demo.athemes.com/botiga-multi-vendor-el/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/sites/145/2021/07/blog-post-3.jpg.webp",
  title:'Duis lacinia convallis odio, quis efficitur dolor pulvinar nec',
  content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta elit a porttitor mattis. Pellentesque sit amet fringilla mauris. Cras eu faucibus lorem. Integer mattis dolor eu feugiat finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus ut metus ac nunc tristique pellentesque vel auctor libero'

},


];  
const Blog = () => {
    const blogt =useNavigate();
    const handleBlogt =(id)=>{
      blogt(`/singleblog/${id}`)
    }
    return (
        <div>
    <h1 className="blog-title">Blog</h1>
    <div className="blog-container">
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.image} alt={post.title} />
          <div className="blog-content">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          <button onClick={()=>handleBlogt(post.id)} className="read-more">Read more</button>
          </div>
        </div>
      ))}
    </div>
    </div>
    )
  }
    
    export default Blog;
    
       
  



