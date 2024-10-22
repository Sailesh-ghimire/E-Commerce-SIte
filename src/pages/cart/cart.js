import React, { useContext } from 'react'
import { PRODUCTS } from "../../products"
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cart-item'

import { useNavigate } from 'react-router-dom'
import KhaltiCheckout from "khalti-checkout-web";
import config from '../../components/Khalti/KhaltiConfig'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  let checkout = new KhaltiCheckout(config);


  const navigate = useNavigate()
  return (
    
    <div className='cart absolute right-5 top-20 z-50 p-5 shadow-lg bg-white '>
      
        <h1 className='mb-8 font-normal text-2xl'>Your Cart Items</h1>
      
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
          {/* <button className='h-12 w-40 bg-slate-500 text-white border-none rounded-lg m-3 cursor-pointer' 
          onClick={()=>{
            // checkout()
            navigate("/checkout")
            }}>
            {" "}
            Checkout{" "}</button> */}
            
             <button className=' bg-purple-600 p-3 text-white cursor-pointer font-bold border-white border-2'
        onClick={() => checkout.show({amount: 20000})}>
          Pay via Khalti
        </button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  )
}
