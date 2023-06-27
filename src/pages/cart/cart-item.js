import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';


export const CartItem = (props) => {
    const { id, productName, price, productImage, title, desc } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
        // <div className='cartItem w-full h-64 flex items-center shadow-md rounded-3xl m-8'>

        //     <img className='w-52' src={productImage} alt='img' />
        //     <div className="description w-10 items-center font-bold">
        //         <p>

        //             <b>{productName}</b>
        //         </p>
        //         <p>Price: ${price}</p>
        //         <div className='countHandler flex'>
        //             <button onClick={() => removeFromCart(id)}>-</button>
        //             <input className='w-10  items-center font-bold border-red-600' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
        //             <button onClick={() => addToCart(id)}>+</button>
        //         </div>
        //     </div>
        // </div>





        <div className='cartItem flex items-center gap-5 mb-8'>

            <img className='w-20 h-24 object-cover' src={productImage} alt='img' />
            <div className="details ">
            <h1 className=" text-lg font-medium">{title}</h1>
                <p className="desc mb-3 text-sm">{desc}</p>
                <p >Price: ${price}</p>
                <div className='countHandler flex'>
                    <button className=" w-12 h-12 flex items-center justify-center cursor-pointer border-none" onClick={() => removeFromCart(id)}>-</button>
                    <input className='w-10  items-center font-bold border-red-600' value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button className=" w-12 h-12 flex items-center justify-center cursor-pointer border-none" onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}
