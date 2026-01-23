import React from 'react'
import SubTitle from '../common/SubTitle'
import { testimonials } from '../../constants/data'

const Testimonial = () => {
  return (
    <div>
       <SubTitle frontTitle="What people Are Saying" />
       <div className='flex flex-wrap justify-center mt-10'>
        {
         testimonials.map((testimonial, index) => (
           <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-2 py-2'>
            <div className='dark:bg-neutral-900 light: bg-white rounded-md p-6 text-md border border-neutral-800 dark:font-thin light:font-normal dark:text-neutral-300 light:text-black'>
            <p>{testimonial.text.substring(0, 130)}...</p>

            <div className='flex gap-9 mt-8'>
             <img src={testimonial.image} alt="user" className='w-12 h-12 rounded-full border border-neutral-300' />
             <div>
              <h6>{testimonial.user}</h6>
              <span className='text-sm font-normal italic text-neutral-600'>{testimonial.company}</span>
             </div>
            </div>
            </div>
           </div>
         ))
        }
       </div>
    </div>
  )
}

export default Testimonial