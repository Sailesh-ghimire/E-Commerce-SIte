import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar flex-1 border-r border-solid min-h-screen bg-white">
      <div className="top h-12 flex items-center justify-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo text-xl text-b font-bold">lamadmin</span>
        </Link>
      </div>
      <hr className="h-0 border-solid border" />
      <div className="center pl-3">
        <ul className="p-0 m-0 list-none">
          <p className="title text-xs font-bold mt-4 mb-1">MAIN</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <DashboardIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Dashboard</span>
          </li>
          <p className="title text-xs font-bold mt-4 mb-1">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400" >
              <PersonOutlineIcon className="icon text-lg text-blue-400" />
              <span className="text-sm font-semibold ml-2 text-blue-400">Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
              <StoreIcon className="icon text-lg text-blue-400" />
              <span className="text-sm font-semibold ml-2 text-blue-400">Products</span>
            </li>
          </Link>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <CreditCardIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Orders</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <LocalShippingIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Delivery</span>
          </li>
          <p className="title text-xs font-bold mt-4 mb-1">USEFUL</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <InsertChartIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Stats</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <NotificationsNoneIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Notifications</span>
          </li>
          <p className="title text-xs font-bold mt-4 mb-1">SERVICE</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <SettingsSystemDaydreamOutlinedIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">System Health</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <PsychologyOutlinedIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Logs</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <SettingsApplicationsIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Settings</span>
          </li>
          <p className="title text-xs font-bold mt-4 mb-1">USER</p>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <AccountCircleOutlinedIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Profile</span>
          </li>
          <li className="flex items-center p-1 cursor-pointer hover:bg-yellow-400">
            <ExitToAppIcon className="icon text-lg text-blue-400" />
            <span className="text-sm font-semibold ml-2 text-blue-400">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom flex items-center m-3">
        <div
          className="colorOption w-5 h-5 rounded cursor-pointer m-1"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption w-5 h-5 rounded cursor-pointer m-1"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;