import React from "react";
import product1 from "../../images/1.jpg";

import "./List.css";
import Card from "../../components/Landing/Card";

export const List = () => {
  
    const data = [
        {
           id: 1,
           productName: "Extinguisher",
           price: 100.0,
           productImage: product1,
        },
    
        {
            id: 2,
            productName: "Extinguisher",
            price: 100.0,
            productImage: product1,
         },
    
         {
            id: 3,
            productName: "Extinguisher",
            price: 100.0,
            productImage: product1,
         },
    
         {
            id: 4,
            productName: "Extinguisher",
            price: 100.0,
            productImage: product1,
         },
    ];

  return (
    <div className="list">
      {data?.map(item => (<Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;