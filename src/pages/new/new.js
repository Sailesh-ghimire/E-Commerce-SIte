import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

export const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");

  return (
    <div className="new w-full flex">
      <Sidebar />
      <div className="newContainer flex-1">
        <Navbar />
        <div className="top shadow-md p-3 m-5 flex">
          <h1 className="text-slate-600 text-xl">{title}</h1>
        </div>
        <div className="bottom shadow-md p-3 m-5 flex">
          <div className="left flex-1 text-center">
            <img className=" w-24 h-24 rounded-full object-cover"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right flex-1">
            <form className="flex flex-wrap gap-8 justify-around">
              <div className="formInput w-2/5">
                <label className="flex items-center gap-3" htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon cursor-pointer" />
                </label>
                <input className="w-full p-1 border-none border-slate-600 border-b"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button className="w-40 p-3 border-none bg-teal-600 cursor-pointer mt-2">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;