import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../landing/List";

export const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice] = useState(1000);
  const [sort] = useState(null);

  return (
    <div className="products py-8 px-12 flex">
      
      <div className="right flex-auto">
        
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default Products;