import React from "react";
// import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact bg-slate-600 p-4 flex justify-center">
      <div className="wrapper w-1/2 flex items-center justify-between">
        <span>BE IN TOUCH WITH US:</span>
        <div className="mail">
          <input className=" p-3 border-none rounded-l-lg" type="text" placeholder="Enter your e-mail..." />
          <button className=" p-3 border-none rounded-r-lg">JOIN US</button>
        </div>
        <div className="icons flex gap-3">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;