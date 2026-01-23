import React from 'react'
import { Link } from 'react-router-dom'
import SubTitle from '../common/SubTitle'
import { pricingOptions } from '../../constants/data'
import { CheckCircle2 } from 'lucide-react'

const Pricing = () => {
  return (
    <div className='mt-20'>
      <SubTitle frontTitle="Pricing" />
        <div className='flex flex-wrap mt-10'>
          {
            pricingOptions.map((option, index) => (
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                <div className='p-10 border border-neutral-700 rounded-xl'>
                  <p className='text-4x1 mb-8'>
                  {option.title}
                  {
                    index === 1 && (
                      <span className='bg-gradient-to-l from-indigo-300 to-indigo-800 text-transparent bg-clip-text text-xl'>(Most Popular)</span>
                    )
                  }</p>
                  <p className='mb-8'>
                    <span className='text-4xl mt-6 mr-2'>{option.price}</span>
                    <span className='text-neutral-400 tracking-tight'>/month</span>
                  </p>
                  <ul>
                    {
                      option.features.map((feature, index) => (
                        <li key={index} className='mt-8 flex gap-2 items-center'>
                          <CheckCircle2 />
                          <span>{feature}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <Link to="/subscribe" className='flex justify-center items-center w-full mt-20 tracking-tight text-xl border border-indigo-600 founded-lg py-2 transition duration-300 hover:bg-indigo-600 hover:text-white'>Subscribe</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Pricing