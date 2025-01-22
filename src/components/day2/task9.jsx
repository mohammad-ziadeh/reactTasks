import React, { useState } from "react";
export default function task9() {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Toggle Text</button>
      {showText && <p>This is what hidden text look like</p>}
    </div>
  );
}
