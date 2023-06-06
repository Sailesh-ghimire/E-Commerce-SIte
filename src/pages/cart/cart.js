import React, { useContext } from 'react'
import { PRODUCTS } from "../../products"
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item'

import { useNavigate } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate()
  return (
    <div className='cart flex flex-col justify-center items-center'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cart flex flex-col justify-center items-center'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>SubTotal: ${totalAmount}</p>
          <button className='h-12 w-40 bg-slate-500 text-white border-none rounded-lg m-3 cursor-pointer ' 
          onClick={() => navigate("/")}>Continue Shopping</button>
          <button className='h-12 w-40 bg-slate-500 text-white border-none rounded-lg m-3 cursor-pointer' 
          onClick={()=>{
            // checkout()
            navigate("/checkout")
            }}>
            {" "}
            Checkout{" "}</button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  )
}
