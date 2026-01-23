import React from 'react'

const Left3 = (props) => {
  return (
    <div>
     <h1>Left3: {props.number}</h1>
     <button onClick={() => props.onIncrease()}>-</button>
    </div>
  )
}

export default Left3