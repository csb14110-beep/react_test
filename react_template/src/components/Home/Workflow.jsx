import React from 'react'
import SubTitle from '../common/SubTitle'
import codeImg from "../../assets/code.jpg"
import { checklistItems } from '../../constants/data'
import { CheckCircle2 } from 'lucide-react'

const Workflow = () => {
  return (
    <div className='mt-20'>
      <SubTitle frontTitle="Accelerate Your" backTitle="Coding Workflow" />
      <div className='flex flex-wrap justify-center mt-10'>
        <div className='w-full lg:w-1/2 p-2'>
          <img src={codeImg} alt="code image" />
        </div>
        <div className='w-full lg:w-1/2 p-12'>
          {
            checklistItems.map((item, index) =>(
              <div key={index} className='flex mb-12 gap-6'>
                <div className='text-green-400 bg-neutral-900 h-10 w-10 p-2 rounded-full'>
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className='mt-1 mb-2 text-xl '>{item.title}</h5>
                  <p className='text-md text-neutral-500'>{item.description}</p>
                </div>
              </div>
            ) )
          }
        </div>
      </div>
    </div>
  )
}

export default Workflow