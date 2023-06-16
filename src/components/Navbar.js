// import React from 'react'
// import { Link } from 'react-router-dom'

// export const Navbar = () => {
//   return (
// <div className='navbar w-full h-20 bg-blue-950 flex justify-end items-center'>
//   <div className='links mr-14 flex items-center'>
//     <Link className='text-white ml-5 text-sm' to="/shop">Shop</Link>
//     <Link className='text-white ml-5 text-sm' to="/contact">Contact</Link>
//     <Link className='text-white ml-5 text-sm' to="/cart">CART</Link>
//     <Link className='text-white ml-5 text-sm' to="/">HOME</Link>

//   </div>
// </div>




// //     <nav className="w-full flex text-white bg-slate-800 py-4 p-10 justify-between items-center  navbar">
// //     <img src="images/Cat-PNG-2.png" alt="logo" className="h-12"/>
// //     <div className="flex ">
// //         <ul className="list-none sm:flex justify-center items-center">
// //             <li className="mx-2 hover:text-yellow-500 cursor-pointer"><a href="#Home">Home</a></li>
// //             <li className="mx-2 hover:text-yellow-500 cursor-pointer"><a href="#AboutUs">AboutUs</a></li>
// //             <li className="mx-2 hover:text-yellow-500 cursor-pointer"><a href="#Contact">Contact</a></li>
// //         </ul>
// //         <input type="text" className="text-gray-500 py-1 px-2  rounded-xl focus:border-yellow-500"
// //             placeholder="search product"/>
// //     </div>
// // </nav>
//   )
// }

import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar h-12 border-b-2 flex items-center text-sm text-slate-600 ">
      <div className="wrapper w-full p-5 flex items-center justify-between">
        <div className="search flex items-center p-1 border-solid border-red-600">
          <input className="border-none bg-transparent outline-none text-xs placeholder:text-xs" type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items flex items-center">
          <div className="item flex items-center mr-5 relative">
            <LanguageOutlinedIcon className="icon text-xl" />
            English
          </div>
          <div className="item flex items-center mr-5 relative">
            <DarkModeOutlinedIcon
              className="icon text-xl"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item flex items-center mr-5 relative">
            <FullscreenExitOutlinedIcon className="icon text-xl" />
          </div>
          <div className="item flex items-center mr-5 relative">
            <NotificationsNoneOutlinedIcon className="icon text-xl" />
            <div className="counter w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-xs text-white absolute -top-1 -right-1">1</div>
          </div>
          <div className="item flex items-center mr-5 relative">
            <ChatBubbleOutlineOutlinedIcon className="icon text-xl" />
            <div className="counter w-4 h-4 bg-red-600 rounded-full flex items-center justify-center text-xs text-white absolute -top-1 -right-1">2</div>
          </div>
          <div className="item flex items-center mr-5 relative">
            <ListOutlinedIcon className="icon text-xl" />
          </div>
          <div className="item flex items-center mr-5 relative">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;