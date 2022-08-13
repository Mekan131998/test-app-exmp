import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import {BsFillCaretRightFill, BsXLg } from 'react-icons/bs'
import { incrementCartItem, decrementCartItem, removeToCartItems} from '../Carts/cartsSlice'
import './Carts.css'

const CartItems = () => {
    const dispatch = useDispatch()
    const carts = useSelector((state) => state.carts.cartItems)

    let total = 0;
    carts.forEach(item => {
      total += item.price * item.quantity
    })
    
    const CountInc = (id) => {
      dispatch(incrementCartItem(id))
    }
    const CountDec = (id) => {
      dispatch(decrementCartItem(id))
    }

    const removeItem = (id) => {
      dispatch(removeToCartItems(id))
      console.log(id)
    }

  return (
    <div className='card_container'>
        <h1 className='card_head'>Sebedim</h1>
        <div className='cart_item'>
          <div className='card_row'>
            <div className='product'>Haryt</div>
            <div>Sany</div>
            <div>Jemi</div>
            <div><BsXLg /></div>
          </div>
          {carts.map((cartitem, index) => (
             <div className="card_row br-top" key={index}>
              
             <div className='product'>
               <img src={cartitem.img} width="80px" alt=''/>
               <h4>{cartitem.title}</h4>
             </div>

             <div className='card_qty'>
               {/* <button onClick={()=>CountDec(cart_prod.id)}>-</button> */}
               <button onClick={()=>CountDec(cartitem.id)}>-</button>
               <span>{cartitem.quantity}</span>
               <button onClick={()=>CountInc(cartitem.id)}>+</button>                
             </div>

             <div>
               <h5>{cartitem.totalPrice} TMT</h5>
             </div>
             <div>
               <span onClick={()=>removeItem(cartitem.id)}><BsXLg /></span>
             </div>
           </div>
          ))}
          
        </div>
        <div>
          {carts.length === 0 && <div className='product-not-found'><FaSearch className='search'/><h3>haryt tapylmady</h3></div>}
        </div>
        <div className='check_out'>
          <div className='check_item'>
            <h4>Eltip bermek ucin saherininz:  </h4>
                <select id='parent'>
                  <option>-</option>
                  <option>Ashgabat</option>
                  <option>Ahal</option>
                  <option>Mary</option>
                  <option>Lebap</option>
                  <option>Balkan</option>
                  <option>Dasoguz</option>
                </select>
            <table className='check-table'>
            <tbody>
            <tr>
                <td>
                  Harytlar
                </td>
                <td>
                  {total}
                </td>
              </tr>
              <tr>
                <td>
                  Eltip bermek
                </td>
                <td>
                  00.00
                </td>
              </tr>
              <tr>
                <td>
                  JEMI
                </td>
                <td>
                  {total}
                </td>
              </tr>
            </tbody>
            </table>
            
            <button><BsFillCaretRightFill /> Sargyt et</button>
          </div>
        

        </div>
    </div>
  )
}

export default CartItems