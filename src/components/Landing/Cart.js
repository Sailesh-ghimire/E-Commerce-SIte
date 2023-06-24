import React from "react";
import "./Cart.css";
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
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button >PROCEED TO CHECKOUT</button>
      <span className="reset">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;