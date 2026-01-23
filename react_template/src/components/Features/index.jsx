import React from 'react'
import { Link } from 'react-router-dom'
import Features from '../Home/Features'
import Workflow from '../Home/Workflow'
import Testimonial from '../Home/Testimonial'
import SubTitle from '../common/SubTitle'
import { heroLinks, videos } from '../../constants/data'

const index = () => {
  return (
    <div className='home'>
      <div className='container'>
        {/* Hero Section */}
        <div className='hero-wrapper flex flex-col items-center mt-6'>
          <h1 className='slogan lg:text-7xl sm:text-6xl text-4xl text-center tracking-wide dark:text-neutral-300 text-neutral-700'>
            Powerful Features for
            <span className='bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text'> &nbsp;Your Development</span>
          </h1>
          <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Discover the comprehensive set of features designed to enhance your development workflow and boost productivity.
          </p>
          <div className='sub-links mt-10 flex gap-3'>
            {
              heroLinks.map((link, index) => (
                <Link key={index} to={link.to} className='py-[0.75rem] px-[1.5rem] border text-neutral-400 border-neutral-500'>{link.text}</Link>
              ))
            }
          </div>
          
          {/* Video Clips */}
          <div className='flex flex-col gap-2 md:flex-row mt-10 justify-center'>
            {
              videos.map((video, index) => (
                <video 
                  key={index} autoPlay loop 
                  className='rounded-lg w-full md:w-1/2 border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto md:my-4 md:mx-2' 
                  muted
                  preload="metadata"
                >
                  <source src={video.video} type='video/mp4' />
                </video>
              ))
            }
          </div>
        </div>

        {/* Features Section */}
        <Features />

        {/* Workflow Section */}
        <Workflow />

        {/* Testimonial Section */}
        <Testimonial />
      </div>
    </div>
  )
}

export default index