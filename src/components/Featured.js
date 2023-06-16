import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export const Featured = () => {
  return (
    <div className="featured flex-none shadow-md p-2">
      <div className="top flex items-center justify-between text-slate-600">
        <h1 className="title text-base font-medium">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom p-5 flex flex-col items-center justify-center gap-4">
        <div className="featuredChart w-24 h-24">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title font-medium text-slate-600">Total sales made today</p>
        <p className="amount text-3xl">$420</p>
        <p className="desc text-xs font-light text-center text-slate-600">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary w-full flex items-center justify-between">
          <div className="item text-center">
            <div className="itemTitle text-sm text-slate-600">Target</div>
            <div className="itemResult negative flex items-center mt-3 text-sm text-red-600">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-slate-600">Last Week</div>
            <div className="itemResult positive flex items-center mt-3 text-sm text-green-600">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className="itemTitle text-sm text-slate-600">Last Month</div>
            <div className="itemResult positive flex items-center mt-3 text-sm text-green-600">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;