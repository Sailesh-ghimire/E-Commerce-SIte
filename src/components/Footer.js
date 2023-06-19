import React from "react";
import cat from "../images/1.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

export const Footer = () => {
  return (
    <div className="footer-wrapper my-24 mx-0 flex mt-40">
      <div className="footer-section-one">
        <div className="footer-logo-container max-w-xs">
          <img className="max-w-full h-auto" src={cat} alt="" />
        </div>
        <div className="footer-icons mt-10">
          <TwitterIcon/>
          <LinkedInIcon/>
          <YouTubeIcon/>
            <FacebookIcon/>
        </div>
      </div>
      <div className="footer-section-two flex-1 flex justify-end">
        <div className="footer-section-columns flex flex-col min-w-min">
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Qualtiy</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Help</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Share</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Carrers</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Testimonials</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Work</span>
        </div>
        <div className="footer-section-columns flex flex-col min-w-min">
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">244-5333-7783</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">hello@food.com</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">press@food.com</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">contact@food.com</span>
        </div>
        <div className="footer-section-columns flex flex-col min-w-min">
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Terms & Conditions</span>
          <span className="cursor-pointer my-1 mx-0 font-semibold text-slate-600 ">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;