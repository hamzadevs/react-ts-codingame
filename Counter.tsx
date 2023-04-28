import * as React from 'react';
import { useState } from 'react';

export default function Counter() {
  const [num, setNum] = useState(0);

  const CounterI = () => {
    setNum(num + 1);
  };
  const CounterD = () => {
    setNum(num - 1);
  };
  const ResetCounter = () => {
    setNum(0);
  };
  return (
    <div>
      <p>Count Value: {num}</p>
      <button onClick={CounterI}>Counter Increment</button>
      <button onClick={CounterD}>Counter Decrement</button>
      <button onClick={ResetCounter}>Reset</button>
    </div>
  );
}
