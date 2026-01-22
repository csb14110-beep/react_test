import React from 'react'
import { Sparkles, Star } from 'lucide-react'

const Features = () => {
  const items = [
    { title: 'Drag-and-Drop Interface', description: 'Easily design and arrange your Vr environments with a user-friendly drag-and-drop interface.' },
    { title: 'Multi-Platform Compatibility', description: 'Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.' },
    { title: 'Built-in Templates', description: 'jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.' },
    { title: 'Real-Time Preview', description: 'Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.' },
    { title: 'Collaboration Tools', description: 'Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.' },
    { title: 'Analytics Dasgboard', description: 'gain valuable insights into user interactions and behavior within your VR applications witn an integrated analytics dashboard.' }
  ]
  const cardClass = 'border border-neutral-300 dark:border-neutral-700 rounded-lg p-4'

  return (
    <div className='features-wrapper flex flex-col items-center'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center mb-6'>
          <Star className='w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-2' />
          <span className='text-2xl font-semibold text-indigo-600 dark:text-indigo-400'>Features</span>
        </div>
        <h1 className='slogan lg:text-7xl sm:text-6xl text-4xl text-center tracking-wide dark:text-neutral-300 text-neutral-700 mb-10'>Easily Build
          <span className='bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text'>&nbsp;Your Codes</span>
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10'>
          {items.map((item, index) => (
            <div key={index} className={cardClass}>
              <h3 className='text-xl font-semibold mb-2 dark:text-neutral-200'>{item.title}</h3>
              <p className='text-base text-neutral-600 dark:text-neutral-400'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features