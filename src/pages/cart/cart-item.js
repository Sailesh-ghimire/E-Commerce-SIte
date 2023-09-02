import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {
    const { id, price, productImage, title, desc } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
        <div className='cartItem flex items-center gap-5 mb-8'>

            <img className='w-20 h-24 object-cover' src={productImage} alt='img' />
            <div className="details ">
            <h1 className=" text-lg font-medium">{title}</h1>
                <p className="desc mb-3 text-sm">{desc}</p>
                <p >Price: ${price}</p>
                <div className='countHandler flex items-center gap-2'>
                    <button className=" w-12 h-12 flex items-center justify-center cursor-pointer border-2 border-emerald-400" onClick={() => removeFromCart(id)}>-</button>
                    <input className='w-10  items-center flex justify-center font-bold border-emerald-400' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button className=" w-12 h-12 flex items-center justify-center cursor-pointer border-2 border-green-400" onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}
