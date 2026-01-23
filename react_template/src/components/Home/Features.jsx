import React from 'react'
import { features } from '../../constants/data'
import SubTitle from '../common/SubTitle'

const Features = () => {
  return (
    <div className='mt-20 border-b border-neutral-800'>
      <div className='text-center'>
        <span className='dark:bg-neutral-900 text-indigo-500 py-1 px-2 text-sm font-medium uppercase rounded-full bg-white border border-neutral-500 dark:border-0'>Features</span>
        <SubTitle frontTitle="Easily Build" backTitle="Your Codes" />
      </div>

      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {
          features.map((feature, index) => (
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
              <div className='flex'>
                <div className='flex justify-center items-center w-10 h-10 dark:bg-neutral-900 text-indigo-700 rounded-full p-2 mx-6 bg-white border border-neutral-500 dark:border-0'>
                  <div className='w-full h-full'>{feature.icon}</div>
                </div>
                <div>
                  <h5 className='mt-1 md-6 text-xl'>{feature.text}</h5>
                  <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                </div>
                </div>
            </div>

          ))        
        }
      </div>
    </div>
  )
}

export default Features