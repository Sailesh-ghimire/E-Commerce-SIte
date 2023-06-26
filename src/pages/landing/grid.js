import React from 'react'
import { Product } from '../shop/product'
import { PRODUCTS } from '../../products'

export const Demo = () => {
  return (
    <div>
<div className="products w-full h-auto grid grid-cols-3 place-items-center">
                {PRODUCTS.map((product) => (
                    <Product data={product} />
                ))}
            </div>
    </div>
  )
}

export default Demo