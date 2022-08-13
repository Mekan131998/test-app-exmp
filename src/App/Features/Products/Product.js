import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addToCartItem } from '../Carts/cartsSlice'
import { useDispatch } from 'react-redux'
import { BsZoomIn } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import './Product.css'


const Product = ({product}) => {
  const dispatch = useDispatch()
  const [check, setChecked] = useState(false)
  const addCart = () => {
    dispatch(addToCartItem(product))
  }
  const clickChecked = () => {
    setChecked(!check)  
  }
 

  return (
      <div className='product-card' >
        <div className='card-top'>
          <div className='card-check' onClick={clickChecked}>
            <span>
              <input type="checkbox" /> 
              <label>denesdirmek</label>
            </span>
          </div>
          <span className='search'><BsZoomIn /></span>
          <span className='heart'><AiOutlineHeart /></span>
        </div>
        <Link className='card-info' to="/single">
          <img src={product.images[0]} alt="" />
          <h4>{product.title}</h4>
          <span>{product.price} TMT</span>
        </Link>
        <div className='btn'>
        <button onClick={addCart}>Sebede gos</button>
        </div>
    </div>
  )
}

export default Product