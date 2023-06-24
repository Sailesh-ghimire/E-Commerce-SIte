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
//     <Link className='text-black ml-5 text-sm' to="/">HOME</Link>
//    </div>
//   <div className='links  mr-14 flex items-center'>
//     <Link className='text-black ml-5 text-sm' to="/shop">Shop</Link>
//     <Link className='text-black ml-5 text-sm' to="/admin">ADMIN</Link>
//     <Link className='text-black ml-5 text-sm' to="/cart">CART</Link>
//     <Link className='text-black ml-5 text-sm' to="/">HOME</Link>

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
// import "./Navbar.css"
import Cart from "./Landing/Cart";

export const MainNavbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className="navbar h-20">
      <div className="wrapper py-2 px-8 flex items-center justify-between">
        <div className="left flex items-center gap-6">
          FIREY
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
        <div className="center text-3xl tracking-wider">
          <Link className ="link" to="/">FIREY</Link>
        </div>
        <div className="right flex items-center gap-6">
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item flex items-center text-lg">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons flex gap-4 cursor-pointer">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
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