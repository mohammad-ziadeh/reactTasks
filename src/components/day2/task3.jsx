import React from "react";

export default function task3({ name, price, description }) {
  return (
    <div style={{ backgroundColor: "orange", width: "200px", padding: "5px" }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}
