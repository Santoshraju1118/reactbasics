import React from "react";
import useCustomCounter from "./UseCustomCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCustomCounter(0, 1);

  return (
    <div>
      <h2>Count = {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
