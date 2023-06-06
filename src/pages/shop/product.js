import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)
    
    const cartItemCount = cartItems[id]
    return (
        <div className='product hover:cursor-pointer hover:transition-none rounded-2xl w-80 m-24 h-80 flex flex-col justify-center items-center'>
            <img className='w-96' src={productImage} />
            <div className="description text-center">
                <p>
                    <b>
                        {productName}
                    </b>
                </p>
                <p>${price}</p>
            </div>
            <button className='addToCartBttn bg-transparent border-2 border-slate-800 min-w-full px-2 py-1 rounded-2xl hover:bg-orange-500 hover:cursor-pointer hover:text-white ' 
            onClick={() => addToCart(id)}>
            Add to Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
</button>
        </div>
    )
}
