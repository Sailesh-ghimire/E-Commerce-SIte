import React from 'react'
import Categories from '../../components/Landing/Categories'
import Contact from '../../components/Landing/Contact'
import FeaturedProducts from '../../components/Landing/FeaturedProducts'
import Slider from '../../components/Landing/Slider'

export const Landing2 = () => {
  return (
    <div className='home'>
    <Slider/>
    <FeaturedProducts type="featured"/>
    <Categories/>
    <FeaturedProducts type="trending"/>
    <Contact/>
    hshs
  </div>
  )
}

export default Landing2