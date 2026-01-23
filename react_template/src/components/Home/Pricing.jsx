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
                  <p className='text-4x1 mb-8'>{option.title}</p>
                  <p className='mb-8'>
                    <span className='text-4xl mt-6 mr-2'>{option.price}</span>
                    <span className='text-neutral-400 tracking-tight'>/month</span>
                  </p>
                  <ul>
                    {
                      option.features.map((feature, index) => (
                        <li key={index}>
                          <CheckCircle2 />
                          <span>{feature}</span>
                        </li>
                      ))
                    }
                  </ul>
                  <Link to="/subscribe">Subscribe</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
  )
}

export default Pricing