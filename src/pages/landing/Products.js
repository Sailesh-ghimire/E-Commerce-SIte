import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import List from "../landing/List";

export const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products py-8 px-12 flex">
      <div className="left flex-1 sticky h-full top-12">
        <div className="filterItem mb-8">
          <h2 className=" font-normal mb-5">Product Categories</h2>
         
            <div className="inputItem mb-3">
              <input type="checkbox" id="1" value={1} />
              <label className=" ml-3" htmlFor="1">Extinguisher</label>
            </div>
            <div className="inputItem mb-3">
              <input type="checkbox" id="2" value={2} />
              <label className=" ml-3" htmlFor="2">Hose Pipe</label>
            </div>
            <div className="inputItem mb-3">
              <input type="checkbox" id="3" value={3} />
              <label className=" ml-3" htmlFor="3">Tools</label>
            </div>
         
        </div>
        <div className="filterItem mb-8">
          <h2 className=" font-normal mb-5">Filter by price</h2>
          <div className="inputItem mb-3">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem mb-8">
          <h2 className=" font-normal mb-5">Sort by</h2>
          <div className="inputItem mb-3 ">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label className=" ml-3" htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem mb-3 ">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label className=" ml-3" htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right flex-auto">
        <img
          className="catImg w-full h-80 object-cover mb-12"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
};

export default Products;