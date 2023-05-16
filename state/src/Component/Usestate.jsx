import "./usestate.css";

import React, { useState } from 'react';



function Button() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <button onClick={decrement}>-</button>
      <span className="btn">I was clicked {count} times</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Button;
