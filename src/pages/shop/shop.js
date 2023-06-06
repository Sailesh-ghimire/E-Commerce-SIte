import React from 'react'
import { PRODUCTS } from '../../products'
import { Product } from "./product";

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle mt-24 text-center text-4xl'>
                <h1> FIRE AND ICE</h1>
            </div>
            <div className="products w-full h-auto grid grid-cols-3 place-items-center">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>

        </div>
    )
}
