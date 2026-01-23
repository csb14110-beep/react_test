import React from 'react'

const SubTitle = ({ frontTitle, backTitle }) => {
  return (
    
      <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center'>{frontTitle} <span className='bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text'>{backTitle}</span></h2>
    
  )
}

export default SubTitle