import React from 'react'
import { Link } from 'react-router-dom'

export const MainNavbar = () => {
  return (
<div className='navbar w-full h-20 bg-blue-950 flex justify-end items-center'>
  <div className='links mr-14 flex items-center'>
    <Link className='text-white ml-5 text-sm' to="/shop">Shop</Link>
    <Link className='text-white ml-5 text-sm' to="/home">ADMIN</Link>
    <Link className='text-white ml-5 text-sm' to="/cart">CART</Link>
    <Link className='text-white ml-5 text-sm' to="/">HOME</Link>

  </div>
</div>
  )
}


export default MainNavbar