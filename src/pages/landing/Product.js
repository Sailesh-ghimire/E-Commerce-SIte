import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
    const [selectedImg, setSelectedImg] = useState("0");
    const [quantity, setQuantity] = useState(0);

    const images = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];



    return (
        <div className="product py-5 px-12 flex gap-12">

            <div className="left flex-1 flex gap-5">
                <div className="images flex-1">
                    <img className=" w-full h-36 object-cover cursor-pointer mb-3"
                        src=
                        {images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />

                </div>
                <div className="mainImg flex">
                    <img className=" w-full max-h-full object-cover"
                        src={images[selectedImg]

                        }
                        alt=""
                    />
                </div>
            </div>
            <div className="right flex-1 flex flex-col gap-8">
                <h1>Title</h1>
                <span className="price text-3xl font-medium">$199</span>
                <p className=" text-lg font-light text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus quis rerum sapiente dicta excepturi sunt laudantium maiores delectus omnis hic praesentium voluptatibus corrupti recusandae autem architecto, aut adipisci. Dolorum, commodi.</p>
                <div className="quantity flex items-center gap-3">
                    <button className=" w-12 h-12 flex items-center justify-center cursor-pointer border-none"
                        onClick={() =>
                            setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                    >
                        -
                    </button>
                    {quantity}
                    <button className=" w-12 h-12 flex items-center justify-center cursor-pointer border-none" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
                </div>
                <button
                    className="add w-64 p-3 flex items-center justify-center gap-5 cursor-pointer border-none font-medium"

                >
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className="links flex gap-5">
                    <div className="item flex items-center gap-3 text-sm">
                        <FavoriteBorderIcon /> ADD TO WISH LIST
                    </div>
                    <div className="item flex items-center gap-3 text-sm">
                        <BalanceIcon /> ADD TO COMPARE
                    </div>
                </div>
                <div className="info flex flex-col gap-3 text-sm mt-8">
                    <span>Vendor: Polo</span>
                    <span>Product Type: T-Shirt</span>
                    <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr className=" w-52 border-solid border-2" />
                <div className="info flex flex-col gap-3 text-sm mt-8">
                    <span>DESCRIPTION</span>
                    <hr className=" w-52 border-solid border-2" />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr className=" w-52 border-solid border-2" />
                    <span>FAQ</span>
                </div>
            </div>
        </div>      
    );
};

export default Product;