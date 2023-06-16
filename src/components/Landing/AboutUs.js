import React from 'react'
import cat from '../../images/1.jpg'

export const AboutUs = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={cat} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={cat} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
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
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
             Watch Video
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs