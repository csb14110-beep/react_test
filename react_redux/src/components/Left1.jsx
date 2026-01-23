import React from 'react'
import Left2 from './Left2'

const Left1 = (props) => {
  return (
    <div>
     <h1>Left1: </h1>
     <Left2 number={props.number} onIncrease={props.onIncrease} />
    </div>
  )
}

export default Left1