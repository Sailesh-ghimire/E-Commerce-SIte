import React from 'react'
import FeaturedProducts from '../../components/Landing/FeaturedProducts'
import Slider from '../../components/Landing/Slider'
import Services from '../../components/Landing/Services'
import Contact from '../../components/Landing/Contact'

export const Landing2 = () => {
  return (
    <div className='home'>
    <Slider/>
    <FeaturedProducts type="featured"/>
    <Services/>
    <Contact/>
    
    
  </div>
  )
}

export default Landing2