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

export const Navbar = () => {
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