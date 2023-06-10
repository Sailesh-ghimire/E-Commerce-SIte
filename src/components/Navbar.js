import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
<div className='navbar w-full h-20 bg-blue-950 flex justify-end items-center'>
  <div className='links mr-14 flex items-center'>
    <Link className='text-white ml-5 text-sm' to="/shop">Shop</Link>
    <Link className='text-white ml-5 text-sm' to="/contact">Contact</Link>
    <Link className='text-white ml-5 text-sm' to="/cart">CART</Link>
    <Link className='text-white ml-5 text-sm' to="/">HOME</Link>

  </div>
</div>




//     <nav className="w-full flex text-white bg-slate-800 py-4 p-10 justify-between items-center  navbar">
//     <img src="images/Cat-PNG-2.png" alt="logo" className="h-12"/>
//     <div className="flex ">
//         <ul className="list-none sm:flex justify-center items-center">
//             <li className="mx-2 hover:text-yellow-500 cursor-pointer"><a href="#Home">Home</a></li>
//             <li className="mx-2 hover:text-yellow-500 cursor-pointer"><a href="#AboutUs">AboutUs</a></li>
//             <li className="mx-2 hover:text-yellow-500 cursor-pointer"><a href="#Contact">Contact</a></li>
//         </ul>
//         <input type="text" className="text-gray-500 py-1 px-2  rounded-xl focus:border-yellow-500"
//             placeholder="search product"/>
//     </div>
// </nav>
  )
}
