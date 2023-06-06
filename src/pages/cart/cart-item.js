import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
        <div className='cartItem w-72 h-64 flex items-center shadow-md rounded-3xl m-8'>

            <img className='w-52' src={productImage} />
            <div className="description w-10 items-center font-bold">
                <p>

                    <b>{productName}</b>
                </p>
                <p>Price: ${price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input className='w-10 items-center font-bold' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}
