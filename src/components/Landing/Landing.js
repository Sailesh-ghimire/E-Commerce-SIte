import React from "react";
import cat from "../../images/1.jpg";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
        <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={cat} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now {" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={cat} alt="" />
        </div>
      </div>
    </div>

    <AboutUs/>
    <Contact/>
    <Footer/>

    </div>
  );
};

export default Home;