import React from "react";
// import "./Footer.css";

export const Footer = () => {
  return (
    <div className="bg-rose-600">
      <div className="footer mt-0 pt-5 mr-52 mb-5 ml-52">
      <div className="top flex gap-11">
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">FIREGUARD</h1>
          <span>Protect, Prevent, Extinguish</span>
          <span>Location: Kathmandu Valley</span>
          
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">Some Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">About Us</h1>
          <span>
           This is an about section.
          </span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">Contact</h1>
          <span>
           This is an contact section
          </span>
        </div>
      </div>
      <div className="bottom flex items-center justify-between mt-12">
        <div className="left flex items-center">
          <span className="logo font-bold text-2xl ">FIREGUARD</span>
          <span className="copyright ml-5 text-xs">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img className="h-12" src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;