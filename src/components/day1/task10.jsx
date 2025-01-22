import React from "react";

export default function task10() {
  const students = ["mohammad", "ahmed", "abd", "raneem", "rawan"];

  return (
    <div
      style={{
        backgroundColor: "orange",
        color: "white",
        textAlign: "center",
      }}
    >
      {students.map((names, index) => (
        <p key={index}>
          {names}
        </p>
      ))}
    </div>
  );
}
