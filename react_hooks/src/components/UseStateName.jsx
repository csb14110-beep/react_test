import { useState } from 'react';

const UseStateName = () => {
  const [names, setNames] = useState(['김석범']);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prev) => {
      console.log(prev);
      return [input, ...prev];
    });
  };
  return (
    <div>
      <button className="border-solid bg-gray-200" onClick={handleUpload}>
        update
      </button>
      <br />
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border-solid"
      />
      {names.map((name, index) => {
        return <p key={index}>{name}</p>;
      })}
    </div>
  );
};

export default UseStateName;
