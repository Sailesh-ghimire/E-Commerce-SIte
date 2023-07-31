import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import slider1 from "../../images/slider1.jpg"
import slider2 from "../../images/slider2.jpg"
import slider3 from "../../images/slider3.jpg"


export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    slider1,
    slider2,
    slider3
    
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider h-full w-screen relative overflow-hidden">
      <div className="container h-full flex transition-all w-[300vw]" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img className=" w-full h-screen object-cover" src={data[0]} alt="" />
        <img className=" w-full h-screen object-cover" src={data[1]} alt="" />
        <img className=" w-full h-screen object-cover" src={data[2]} alt="" />
      </div>
      <div className="icons w-fit flex absolute left-0 right-0 bottom-24 gap-3 m-auto">
        <div className="icon w-12 h-12 border-solid border-2 border-black flex items-center justify-center cursor-pointer " onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className="icon w-12 h-12 border-solid border-2 border-black flex items-center justify-center cursor-pointer" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;