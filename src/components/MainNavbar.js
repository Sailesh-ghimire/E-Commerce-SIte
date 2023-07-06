// import React from 'react'
// import { useContext } from "react";

// import { Link } from 'react-router-dom'
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import { DarkModeContext } from "../context/darkModeContext";


// export const MainNavbar = () => {
//   const { dispatch } = useContext(DarkModeContext);
//   return (
// <div className='navbar w-full h-20  flex  items-center'>
//   <div className='logo '>
//     <Link className=' ml-5 text-sm' to="/">HOME</Link>
//    </div>
//   <div className='links  mr-14 flex items-center'>
//     <Link className=' ml-5 text-sm' to="/shop">Shop</Link>
//     <Link className=' ml-5 text-sm' to="/admin">ADMIN</Link>
//     <Link className=' ml-5 text-sm' to="/cart">CART</Link>
//     <Link className=' ml-5 text-sm' to="/">HOME</Link>

//     <div className="item flex items-center mr-5 relative">
//             <DarkModeOutlinedIcon
//               className="icon text-xl"
//               onClick={() => dispatch({ type: "TOGGLE" })}
//             />
//           </div>

//   </div>
// </div>
//   )
// }


// export default MainNavbar





import React, {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { Cart } from "../pages/cart/cart";
import logo1 from "../images/blackonwhite.png"
import logo2 from "../images/whiteonblack.png"


// import Cart from "./Landing/Cart";

export const MainNavbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="navbar h-20 bg-rose-600">
      <div className="wrapper py-2 px-8 flex items-center justify-between">
        <div className="left flex items-center gap-6">
        
          {/* <div className="center text-3xl tracking-wider"> */}
          <Link className ="link" to="/">
          <img className=" h-12" src={logo1} alt='' />
          </Link>
          
        </div>
        {/* <div className="center text-3xl tracking-wider">
          <Link className ="link" to="/">FIREGUARD</Link>
        </div> */}
        <div className="right flex items-center gap-6">
          {/* <div className="item flex items-center text-lg">
            <Link className ="link" to="/">Homepage</Link>
          </div> */}
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/products">Our Products</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/shop">Shop</Link>
          </div>
          <div className="icons flex gap-4 cursor-pointer">
            <div>
            <Link className ="link" to="/admin"><PersonOutlineOutlinedIcon/></Link>
               
               </div>
            <div className="cartIcon relative" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span className="text-white text-xs w-5 h-5 rounded-lg absolute -right-3 -top-3 flex items-center justify-center ">0</span>
              
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default MainNavbar;