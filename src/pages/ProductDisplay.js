import React,  { useState } from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { PRODUCTS } from '../products';
import { ShopContext } from '../context/shop-context';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export const ProductDisplay = (props) => {
    const {id}=useParams();
    const product= PRODUCTS[id]
    const [quantity, setQuantity] = useState(0);
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemCount = cartItems[id]

  return (
    

    <div className="product py-5 px-12 flex gap-12">
          <div className="left flex-1 flex gap-5">
            <div className="images flex-1">
              
            </div>
            <div className="mainImg flex-1">
              <img className=' w-full max-h-full object-cover'
                src= {product.productImage}
                alt=""
              />
            </div>
          </div>
          <div className="right flex-1 flex flex-col gap-8">
            <h1>{product.productName}</h1>
            <span className="price text-3xl font-medium">$199</span>
            <p className=' text-lg font-light text-justify'>description</p>
            <div className="quantity flex items-center gap-3">
              <button className=' w-12 h-12 flex items-center justify-center cursor-pointer border-2 border-green-400'
                onClick={() =>
                  setQuantity((prev) => (prev === 0 ? 0 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button className=' w-12 h-12 flex items-center justify-center cursor-pointer border-2 border-green-400'
               onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add w-60 p-3 bg-emerald-400 flex items-center justify-center gap-5 cursor-pointer border-none font-medium"
              
                onClick={() => addToCart(id)}>
              <AddShoppingCartIcon /> ADD TO CART{cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
            <div className="info flex flex-col gap-3 text-sm mt-8">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr className=' w-48' />
            <div className="details">
              <span>DESCRIPTION</span>
              <hr className=' w-48' />
              <span>ADDITIONAL INFORMATION</span>
              <hr className=' w-48' />
              <span>FAQ</span>
            </div>
          </div>
        
      
    </div>
  )
}

export default ProductDisplay