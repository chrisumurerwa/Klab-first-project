import './App.css'
import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Layout from './components/Layout'
import Blog from'./Components/Blog'
import Shop from './Components/Shop'
import StoreList from './Components/StoreList'
function App() {
    return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route path='/' index element={<Home/>}/>
      <Route path='Shop'element={<Shop/>}/>
      <Route path='StoreList'element={<StoreList/>}/>
      <Route path='Blog'element={<Blog />} />
      </Route>
    </Routes>


    </BrowserRouter>
      
      </>  
  )
}
export default App
