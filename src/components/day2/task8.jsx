import React, { useState } from "react";

export default function task8() {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const increment = () => setState1(state1 + 1);
  const decrement = () => setState2(state2 - 1);
  return (
    <div>
      <h1>{state1}</h1>
      <button onClick={increment}>Increment</button>
      <h1>{state2}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
