import React from "react";
// import "./Categories.css";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories flex h-4/5 gap-3 m-3">
      <div className="col flex-1 flex flex-col gap-3">
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link className="link" to="/products/1">
              
            </Link>
          </button>
        </div>
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <img className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link to="/products/1" className="link">
              
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          {" "}
          <img className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link to="/products/1" className="link">
               
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <div className="col">
            <div className="row flex-1 flex gap-3 relative overflow-hidden">
              <img className=" w-full h-full object-cover"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
                <Link to="/products/1" className="link">
                  
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row flex-1 flex gap-3 relative overflow-hidden">
              {" "}
              <img className=" w-full h-full object-cover"
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
                <Link to="/products/1" className="link">
                  
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <img className=" w-full h-full object-cover"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link to="/products/1" className="link">
              
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;