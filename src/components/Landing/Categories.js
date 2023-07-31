import React from "react";
import { Link } from "react-router-dom";
import cat1 from "../../images/pexels-breno-cardoso-10892548.jpg"
import cat2 from "../../images/pexels-jan-van-der-wolf-16517206.jpg"
import cat3 from "../../images/pexels-matheus-bertelli-3080668.jpg"
import cat4 from "../../images/product1.jpg"
import cat5 from "../../images/product2.jpg"
import cat6 from "../../images/product3.jpg"


export const Categories = () => {
  return (
    <div className="categories flex h-4/5 gap-3 m-3">
      <div className="col flex-1 flex flex-col gap-3">
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <img className=" w-full h-full object-cover" src={cat1} alt="" />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link className="link" to="/shop">
              Sale
            </Link>
          </button>
        </div>
        <div className="row flex-1 flex gap-3 relative overflow-hidden">

          <img className=" w-full h-full object-cover"
            src={cat2}
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link to="/shop" className="link">
              category1
            </Link>
          </button>
        </div>
      </div>
      <div className="col flex-1 flex flex-col gap-3">
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          {" "}
          <img className=" w-full h-full object-cover"
            src={cat3}
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link to="/shop" className="link">
            category1            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l flex-1 flex flex-col gap-3">
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <div className="col col-l flex-1 flex flex-col gap-3">
            <div className="row flex-1 flex gap-3 relative overflow-hidden">
              <img className=" w-full h-full object-cover"
                src={cat4}
                alt=""
              />
              <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
                <Link to="/shop" className="link">
                category1
                </Link>
              </button>
            </div>
          </div>
          <div className="col flex-1 flex flex-col gap-3">
            <div className="row flex-1 flex gap-3 relative overflow-hidden">
              {" "}
              <img className=" w-full h-full object-cover"
                src={cat5}
                alt=""
              />
              <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
                <Link to="/shop" className="link">
                category1
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row flex-1 flex gap-3 relative overflow-hidden">
          <img className=" w-full h-full object-cover"
            src={cat6}
            alt=""
          />
          <button className=" absolute min-w-full w-fit h-12 p-3 top-0 bottom-0 left-0 right-0 m-auto cursor-pointer border-none uppercase font-medium">
            <Link to="/shop" className="link">
            category1
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;