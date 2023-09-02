import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

export const Footer = () => {
  return (
    <div className=" bg-rose-600 text-white">
      <div className="footer mt-0 pt-5 mr-52 mb-0 ml-52">
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
          Your Safety, Our Priority. Find the perfect fire extinguisher for your needs at FIRE-GUARD. Shop now!
          </span>
        </div>
        <div className="item flex-1 flex flex-col gap-2 text-justify text-sm">
          <h1 className="font-semibold text-lg ">Contact</h1>
          <span>
          Got a question or need assistance? We're here to help! Contact our friendly team by dropping us an email at saileshghimire.sg@gmail.com
          </span>
        </div>
      </div>
      <div className="bottom flex items-center justify-between mt-2">
        <div className="left flex items-center">
          <span className="logo font-bold text-2xl ">FIREGUARD</span>
          <span className="copyright ml-5 text-xs">
            © Copyright 2023. All Rights Reserved
          </span>
          <span className="copyright ml-5 text-xs">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
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