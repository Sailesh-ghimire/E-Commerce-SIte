import React from "react";
import Card from "../../components/Landing/Card";
import product1 from "../../images/1.jpg";
// import "./FeaturedProducts.css";

const FeaturedProducts = ({type}) => {

  

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
    <div className="featuredProducts my-24 mx-52">
      <div className="top flex items-center justify-between mb-12">
        <h1 className=" flex-1 capitalize">{type} products</h1>
        <p className=" flex-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom flex justify-center gap-12">
        {data.map(item=>(
        <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;