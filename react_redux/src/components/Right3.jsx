import React from 'react'

const Right3 = (props) => {
  return (
    <div>
     <h1>Right3: {props.number}</h1>
     <button onClick={() => props.onIncrease()}>+</button>

    </div>
  )
}

export default Right3