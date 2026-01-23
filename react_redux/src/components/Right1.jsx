import React from 'react'
import Right2 from './Right2'

const Right1 = (props) => {
  console.log(props)
  return (
    <div>
     <h1>Right1:{props.number} </h1>
     <Right2  onIncrease={() => props.onIncrease()} />
    </div>
  )
}

export default Right1