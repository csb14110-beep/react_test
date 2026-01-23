import './App.css'
import { useState } from 'react'
import Left1 from './components/Left1'
import Right1 from './components/Right1'


function App() {
  const [number, setNumber] = useState(1)

  return (
    <div className='App'>
      <h1>Root App:</h1>
      <div className='wrapper'>
        <Left1 number={number} onIncrease={() => setNumber(number - 1)}/>
        <Right1 number={number} onIncrease={() => setNumber(number + 1)}/>
      </div>
    </div>
  )
}

export default App
