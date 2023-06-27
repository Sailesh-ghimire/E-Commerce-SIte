import React from 'react'
import { Link } from "react-router-dom";


export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card w-72 flex flex-col gap-3 mb-12">
        <div className="image w-full h-96 overflow-hidden relative" >
          <img src={item.productImage} alt="" className="mainImg w-full h-full absolute object-cover z-0"/>
          {/* <img src={item.productImage} alt="" className="secondImg w-full h-full absolute object-cover z-10"/> */}

        </div>
        <h2 className=' font-normal text-base-'>{item.title}</h2>
        <div className="prices flex gap-5">
          <h3 className=' text-lg font-medium'>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card