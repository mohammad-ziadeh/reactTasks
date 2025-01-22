import React from "react";

export default function task5({ pic, email, name }) {
  return (
    <div style={{ width: "200px" }}>
      <img src={pic} alt="" style={{ borderRadius: "50%", width: "200px" }} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}
