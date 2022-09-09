//Higher Order Function (HOF) is passing a function as an argumnet to another function
//Higher Order Component (HOC) is passing a component as an argumnet to another component

import React, { useState } from "react";
import withCounter from "./withCounterFOC1";

const HOC1 = ({ count, increment, decrement }) => {
  // const [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      HigherOrderComponent 1<h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default withCounter(HOC1);
