import { Route, Routes } from 'react-router-dom'

import React, { useRef, useState } from 'react'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Contact from './pages/contact'
import Login from './pages/Login'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  let [light,setLight]=useState(false)
  let [bgcolor,setbgcolor]=useState('white')
  let [clr,setclr]=useState('black')
  let lightref=useRef()
  let lightfun=()=>{
    if(light==false){
      setLight(true)
      setbgcolor('pink')
      setclr('black')
    }
    else{
      setLight(false)
      setbgcolor('white')
      setclr('black')
    }
  }
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'ref={lightref}
    style={{background:bgcolor,color:clr}}
    >
      <Navbar lightfun={lightfun}/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
        <Route path="/Product/:productId" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App