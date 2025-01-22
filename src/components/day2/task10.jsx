import React, { useState } from "react";

export default function task10() {
  const [value, setValue] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <p>You Typed: {value}</p>
    </div>
  );
}
