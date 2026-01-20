import { useState } from 'react';

const UseState = () => {
  // useState는 함수형 컴포넌트 상태를 만들고 관리하는 훅이다.
  // const [현재 상태, 상태 변경 함수] = useState(초기값);
  // 단순히 변수만 사용하면 상태 변경을 안지하지 못하지만
  // usetState를 사용하면 변경된 상태를 React가 인지하고 UI를 재 랜더링 한다
  const [count, setCount] = useState(0);

  console.log('상태 변경');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="text-xl">
      <span>Count: {count}</span>
      <br />
      <input
        type="submit"
        value="Count up"
        className="border border-solid"
        onClick={handleClick}
      />
    </div>
  );
};

export default UseState;
