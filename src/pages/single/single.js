import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Chart from "../../components/Chart";
// import List from "../../components/Table";

const Single = () => {
  return (
    <div className="single flex w-full">
      <Sidebar />
      <div className="singleContainer flex-1">
        <Navbar />
        <div className="top p-5 flex gap-5">
          <div className="left flex-1 shadow-md p-5 relative">
            <div className="editButton absolute top-0 right-0 p-1 text-xs text-gray-600 bg-red-600 cursor-pointer rounded-md">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item flex gap-5">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg w-24 h-24 rounded-md object-cover"
              />
              <div className="details">
                <h1 className="itemTitle  mb-2 text-slate-600">Jane Doe</h1>
                <div className="detailItem mb-2 text-sm">
                  <span className="itemKey font-bold text-slate-600 mr-1">Email:</span>
                  <span className="itemValue font-light">janedoe@gmail.com</span>
                </div>
                <div className="detailItem mb-2 text-sm">
                  <span className="itemKey font-bold text-slate-600 mr-1">Phone:</span>
                  <span className="itemValue font-light">+1 2345 67 89</span>
                </div>
                <div className="detailItem mb-2 text-sm">
                  <span className="itemKey font-bold text-slate-600 mr-1">Address:</span>
                  <span className="itemValue font-light">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem mb-2 text-sm">
                  <span className="itemKey font-bold text-slate-600 mr-1">Country:</span>
                  <span className="itemValue font-light">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right flex-1">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom shadow-lg p-5 my-2 mx-5">
        <h1 className="title text-base text-slate-600 mb-5">Last Transactions</h1>
          {/* <List/> */}
        </div>
      </div>
    </div>
  );
};

export default Single;