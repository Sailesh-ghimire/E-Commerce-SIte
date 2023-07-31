import React from "react";
import Card from "../../components/Landing/Card";
import { PRODUCTS } from "../../products";


export const FeaturedProducts = ({type}) => {

  return (
    <div className="featuredProducts my-24 mx-52">
      <div className="top flex items-center justify-between mb-12">
        <h1 className=" flex-1 capitalize">{type} products</h1>
        <p className=" flex-1">
          Our best SELLERS!!
        </p>
      </div>
      <div className="bottom flex justify-center gap-12">
        
      {PRODUCTS.map(item=>(
        <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;