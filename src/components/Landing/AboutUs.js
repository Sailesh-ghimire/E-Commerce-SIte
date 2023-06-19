import React from 'react'
import cat from '../../images/1.jpg'

export const AboutUs = () => {
  return (
    <div className="about-section-container mt-80 relative flex items-center justify-between">
      <div className="about-background-image-container absolute -left-36 -z-0">
        {/* <img className="max-w-full h-auto" src={cat} alt="" /> */}
      </div>
      <div className="about-section-image-container flex mr-4 max-w-lg">
        <img className="max-w-full h-auto" src={cat} alt="" />
      </div>
      <div className="about-section-text-container flex-1 justify-center flex flex-col">
        <p className="primary-subheading font-bold text-slate-600 text-lg">About</p>
        <h1 className="primary-heading">
          Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
        <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p>
        <div className="about-buttons-container mt-8 flex">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button ml-8 bg-transparent outline-none border-none rounded-3xl text-lg cursor-pointer font-semibold text-slate-600 transition-all flex items-center justify-center">
             Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs