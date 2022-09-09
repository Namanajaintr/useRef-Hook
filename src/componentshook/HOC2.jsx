import React, { useState } from "react";
import withCounter from "./withCounterFOC1";

const HOC2 = ({ count, increment, decrement }) => {
  //   const [count, setCount] = useState(0);

  //   const increment = () => {
  //     setCount(count + 1);
  //   };

  //   const decrement = () => {
  //     setCount(count - 1);
  //   };

  return (
    <div>
      HigherOrderComponent 2<h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default withCounter(HOC2);
