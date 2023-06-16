import React from 'react'

import Sidebar from "../../components/Sidebar"
import Navbar from "../../components/Navbar"
// import Datatable from "../../components/Datatable"

export const List = () => {
  return (
    <div className="list flex w-full">
      <Sidebar/>
      <div className="listContainer flex-1">
        <Navbar/>
        {/* <Datatable/> */}
      </div>
    </div>
  )
}

export default List