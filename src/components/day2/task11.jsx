import React, { useState } from "react";
export default function task11() {
  const [theme, setTheme] = useState("white");
  return (
    <div
      style={{
        backgroundColor: theme,
        color: theme === "white" ? "black" : "white",
      }}
    >
      <button onClick={() => setTheme(theme === "white" ? "black" : "white")}>
        Toggle Theme
      </button>
      <p>changing the theme for u Ammro</p>
    </div>
  );
}
