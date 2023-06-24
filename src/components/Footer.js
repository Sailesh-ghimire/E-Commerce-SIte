import React from "react";
// import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer mt-24 mr-52 mb-5 ml-52">
      <div className="top flex gap-11">
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom flex items-center justify-between mt-12">
        <div className="left flex items-center">
          <span className="logo font-bold text-2xl ">Lamastore</span>
          <span className="copyright ml-5 text-xs">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img className="h-12" src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;