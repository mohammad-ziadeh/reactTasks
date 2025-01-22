import React from "react";

export default function task12() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1>Even Numbers</h1>
      {nums.map((value) => (value % 2 === 0 ? <li>even:{value}</li> : null))}
      <h1>Odds Numbers</h1>
      {nums.map((value) => (value % 2 !== 0 ? <li>odd:{value}</li> : null))}
    </div>
  );
}
