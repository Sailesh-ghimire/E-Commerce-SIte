import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

export const Product = (props) => {
    const { id, price, productImage, title, desc } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext)

    const cartItemCount = cartItems[id]
    return (
    

        <div className='product py-5 px-12 flex gap-12'>
            <div className="mainImg flex">
                <img className=" w-full max-h-full object-cover"
                    src={productImage} alt="" />
            </div>
            <div className="right flex-1 flex flex-col gap-8">
            <h1>{title}</h1>
            <span className="price text-3xl font-medium">${price}</span>
            <p className=" text-lg font-light text-justify">{desc}</p>

            <button className='addToCartBttn bg-transparent border-2 border-slate-800 min-w-full px-2 py-1 rounded-2xl hover:bg-emerald-500 hover:cursor-pointer hover:text-white '
                onClick={() => addToCart(id)}>
                    <AddShoppingCartIcon />
                Add to Cart{cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
            <div className="links flex gap-5">
                    <div className="item flex items-center gap-3 text-sm">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item flex items-center gap-3 text-sm">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
            </div>
        </div>
    )
}
