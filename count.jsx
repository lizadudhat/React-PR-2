import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css'

function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (

    <div className='count'>
      <center>
        <span>{count}</span>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>0</button>



        </div>
      </center>
    </div>
  );
}
export default Counter;