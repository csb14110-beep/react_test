import { useEffect, useState } from 'react';

const Timer = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();
      const sec = date.getSeconds();

      setHour(hour);
      setMin(min);
      setSec(sec);

      console.log('채 개발자의 시간은 흘러갑니다');
    }, 1000);

    return () => {
      // 클린업
      clearInterval(timer);
    };
  });

  return (
    <div>
      <span>'채'개발자의 시간은 거꾸로 간다</span>
      <div>
        <span>{hour}</span> : <span>{min}</span> : <span>{sec}</span>
      </div>
    </div>
  );
};

export default Timer;
