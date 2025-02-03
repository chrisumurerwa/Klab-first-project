import './App.css'
import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Layout from './components/Layout'
import Blog from'./Components/Blog'
import StoreList from './Components/StoreList'
import Shop1 from './Components/shop'
import Contact from './Components/contact'
function App() {
    return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route path='/' index element={<Home/>}/>
      <Route path='Shop'element={<Shop1/>}/>
      <Route path='StoreList'element={<StoreList/>}/>
      <Route path='Blog'element={<Blog />} />
      <Route path='Contact'element={<Contact/>}/>
      </Route>
    </Routes>


    </BrowserRouter>
      
      </>  
  )
}
export default App
