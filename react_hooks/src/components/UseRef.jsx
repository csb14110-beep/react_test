import { useRef, useState } from 'react';

// const ref = useRef(value) -> {current: value}
//state와 마찬가지로 특정 값을 저장하고 유지할 때 사용 : hook은 함수이고, 이는 매번 렌더링 될 때마다 재호출하게 된다. 이때 상태 변화 없이 값만 유지하고 싶을 때 사용한다.

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  // console.log(countRef.current);

  const increaseState = () => {
    setCount(count + 1);
  };

  const increaseRef = () => {
    countRef.current += 1;
  };

  console.log('rendering');

  return (
    <div>
      <p>State: {count}</p>
      <p>Ref: {countRef.current}</p>
      <button onClick={increaseState}>State Up</button>
      <br />
      <button onClick={increaseRef}>Ref Up</button>
    </div>
  );
};

export default UseRef;
