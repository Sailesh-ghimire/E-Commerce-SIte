import React from "react";
// import "./Cart.css";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import product1 from "../../images/1.jpg";


export const Cart = () => {
    const data = [
        {
           id: 1,
           productName: "Extinguisher",
           price: 100.0,
           img: product1,
           title: "Barca",
           desc: "Messi",
        },
    
        {
            id: 2,
            productName: "Extinguisher",
            price: 100.0,
            img: product1,
         },
        ];
  return (
    <div className="cart absolute right-5 top-20 z-50 p-5 shadow-lg ">
      <h1 className=" mb-8 font-normal text-2xl">Products in your cart</h1>
      {data?.map((item) => (
        <div className="item flex items-center gap-5 mb-8" key={item.id}>
          <img className=" w-20 h-24 object-cover" src={item.img} alt="" />
          <div className="details">
            <h1 className=" text-lg font-medium">{item.title}</h1>
            <p className=" mb-3 text-sm">{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete text-red-600 cursor-pointer"
            
          />
        </div>
      ))}
      <div className="total flex justify-between font-medium text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button className=" w-60 p-3 flex items-center justify-center gap-5 cursor-pointer border-none font-medium mb-5">PROCEED TO CHECKOUT</button>
      <span className="reset text-red-600 text-xs cursor-pointer8">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;