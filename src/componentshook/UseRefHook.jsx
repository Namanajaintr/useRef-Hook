//Focus is a DOM element
//useRef returns a object called current
import React, { useRef } from "react";

const UseRefHook = () => {
  const inputElement = useRef();
  console.log(inputElement);

  const focusInput = () => {
    //no neeed to take copy/spread as this is a string primitive types are copied by value
    inputElement.current.focus();
  };
  return (
    <div>
      {/* Fragment -> <></> or <React.Fragment></React.Fragment>*/}
      UseRefHook
      <input type="text" />
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
      <button />
    </div>
  );
};

export default UseRefHook;
