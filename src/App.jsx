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
import HomePage from'./Components/HomePage'
import Singlepage from'./Components/singlepage'
import Singleblog from './Components/Singleblog'
import SingleShop from './Components/SingleShop'
function App() {
    return (
      <>  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}> 
      <Route path='/' index element={<Home/>}/>
      <Route path='/Shop'element={<Shop1/>}/>
      <Route path='/single-Shop'element={<SingleShop/>}/>
      <Route path='/StoreList'element={<StoreList/>}/>
      <Route path='/Blog'element={<Blog />} />
      <Route path='/Contact'element={<Contact/>}/>
      {/* <Route path='/View'element={<HomePage/>}/> */}
      <Route path='/singleblog/:id'element={<Singleblog/>}></Route>
      
      </Route>
    </Routes>


    </BrowserRouter>
      
      </>  
  )
}
export default App
