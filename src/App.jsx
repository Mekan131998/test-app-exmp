import React, {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './App/Pages/Home'
import Layout from './App/Components/Layout'
import SingleProduct from './App/Components/SingleProduct'
import Products from './App/Features/Products/Products'
import CartItems from './App/Features/Carts/CartsItems'
import Auth from './App/Pages/Auth'

import Comments from './App/Pages/Comments'
import About from './App/Pages/AboutUs'
import Services from './App/Pages/Services'
import Garanty from './App/Pages/Garanty'
import Delivery from './App/Pages/Delivery'


const App = () => {
  const [search, setSearch] = useState('')
  const handleSearch = e => setSearch(e.target.value)
  
  return (
    <Routes>
          <Route path='/' element={<Layout onChange={handleSearch} search={search}/>}>
          <Route index element={<Home />}></Route>

          <Route path='/about-us' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/garanty' element={<Garanty />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path='/comments' element={<Comments />} />

          <Route path="products">
            <Route index element={<Products search={search}/>} />

          </Route>

          <Route path='/single' element={<SingleProduct />} />
          
          <Route path="user">
            <Route index element={<Auth />} />
          </Route>
          <Route path="carts" element={<CartItems />} />
        </Route>
    </Routes>
  )
}

export default App