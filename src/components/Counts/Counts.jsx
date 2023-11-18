import React from "react";
import Counter from "./Counter";
import Count from "./Count";
function Counts({ setCount, times }) {
  return (
    <>
      <Counter setCount={setCount} />
      <Count times={times} />
    </>
  );
}

export default Counts;
