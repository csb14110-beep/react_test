import { useEffect, useState } from 'react';
import Timer from './Timer';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  // useEffect(() => {
  //   console.log('초기 랜더링, 업데이트 시 랜더링');
  // });

  // useEffect(() => {
  //   console.log('초기 랜더링 될때 한번만 실행');
  // }, []);

  // useEffect(() => {
  //   console.log('count가 업데이트 될 때 실행');
  // }, [count]);

  // useEffect(() => {
  //   console.log('text가 업데이트 될 때 실행');
  // }, [text]);

  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {/* <span>Count: {count}</span>
      <br />
      <button onClick={handleCountUpdate}>update</button>
      <br />
      <input type="text" value={text} onChange={handleInputChange} />
      <br />
      <span>{text}</span> */}

      {showTimer && <Timer />}

      <button
        onClick={() => {
          setShowTimer(!showTimer);
        }}
      >
        Toggle Timer
      </button>
    </div>
  );
};

export default UseEffect;
