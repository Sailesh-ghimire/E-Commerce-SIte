import React from 'react'
import Categories from '../../components/Landing/Categories'
import FeaturedProducts from '../../components/Landing/FeaturedProducts'
import Slider from '../../components/Landing/Slider'
import Services from '../../components/Services'
import Contact from '../../components/Contact'

export const Landing2 = () => {
  return (
    <div className='home'>
    <Slider/>
    <FeaturedProducts type="featured"/>
    <Categories/>
    <Services/>
    <Contact/>
    
    
  </div>
  )
}

export default Landing2