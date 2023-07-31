import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Widget from "../components/Widget";
import Featured from "../components/Featured";
import Chart from "../components/Chart";
import React from "react";


export const Home = () => {
  return (
    <div className="home flex">
      <Sidebar />
      <div className="homeContainer flex-auto">
        <Navbar />
        <div className="widgets flex p-5 gap-5">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts flex p-5 gap-5 py-1 px-5">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer text-slate-600 mb-4 shadow-md p-5 m-5">
          <div className="listTitle font-medium text-slate-600 mb-4">Latest Transactions</div>
          {/* <Table /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;