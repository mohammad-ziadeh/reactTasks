import React from "react";

export default function task9() {
  const students = ["mohammad", "ahmed", "abd", "raneem", "rawan"];

  return (
    <div>
      {students.map((names, index) => (
        <li key={index}>{names}</li>
      ))}
    </div>
  );
}
