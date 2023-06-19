import React from "react";
import cat from "../../images/1.jpg";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "../Footer";

export const Home = () => {
  return (
    <div>
      <div className="p-0 m-0 box-border">
        <div className="home-container">
          <div className="home-banner-container relative flex pt-12">
            <div className="home-bannerImage-container absolute -top-24 -right-44 -z-10 max-w-2xl">
              {/* <img className="max-w-full h-auto" src={cat} alt="" /> */}
            </div>
            <div className="home-text-section flex-1 flex flex-col justify-center items-start">
              <h1 className="primary-heading text-4xl text-slate-600 max-w-xl">
                Your Favourite Food Delivered Hot & Fresh
              </h1>
              <p className="primary-text text-base max-w-lg my-6 mx-0">
                Healthy switcher chefs do all the prep work, like peeding, chopping
                & marinating, so you can cook a fresh food.
              </p>
              <button className="secondary-button py-4 px-10 bg-blue-600 outline-none border-none rounded-t-3xl text-lg cursor-pointer font-semibold text-slate-600 transition-all flex items-center justify-center hover:bg-yellow-600">
                Order Now {" "}
              </button>
            </div>
            <div className="home-image-section max-w-xl flex-1">
              <img className="max-w-full h-auto" src={cat} alt="" />
            </div>
          </div>
        </div>

        <AboutUs />
        <Contact />
        <Footer />

      </div>
    </div>
  );
};

export default Home;