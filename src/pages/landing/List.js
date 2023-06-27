import React from "react";

import Card from "../../components/Landing/Card";
import { PRODUCTS } from "../../products";

export const List = () => {
  
    

  return (
    <div className="list flex justify-between flex-wrap">
      {PRODUCTS?.map(item => (<Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;