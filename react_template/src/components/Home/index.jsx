import React from 'react'
import HeroSection from './HeroSection'
import Workflow from './Workflow'
import Features from './Features'
import Pricing from './Pricing'
import Testimonial from './Testimonial'

const index = () => {
  return (
    <div className='home'>
      <div className='container'>
        <HeroSection />
        <Features />
        <Workflow />
        <Pricing />
        <Testimonial />
      </div>
    </div>
  )
}

export default index