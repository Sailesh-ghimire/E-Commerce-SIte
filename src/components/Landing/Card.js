import React from 'react'
import { Link } from "react-router-dom";
import "./Card.css";


export const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          <img src={item.productImage} alt="" className="mainImg"/>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card