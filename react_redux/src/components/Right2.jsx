import React from 'react'

import Right3 from './Right3'

const Right2 = (props) => {
  return (
    <div>
     <h1>Right2: {props.number} </h1>
     <Right3  onIncrease={() => props.onIncrease()} />

    </div>
  )
}

export default Right2