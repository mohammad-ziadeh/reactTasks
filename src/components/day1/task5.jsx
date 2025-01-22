import React from "react";

export default function task4() {
  const divStyle1 = {
    color: "green",
  };
  const divStyle2 = {
    color: "orange",
    fontWeight: "bold",
  };
  const divStyle3 = {
    color: "red",
    textDecoration: "italic",
  };
  return (
    <div>
      <span style={divStyle1}>Orange</span>
      <span style={divStyle2}>Coding</span>
      <span style={divStyle3}>Academy</span>
    </div>
  );
}
