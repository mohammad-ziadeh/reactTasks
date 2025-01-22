import React from "react";

export default function App() {
  const logged = false;
  const students = [
    {
      name: "abd",
      age: "27",
    },
    {
      name: "mohammad",
      age: "18",
    },
    {
      name: "ahmed",
      age: "22",
    },
  ];

  return (
    <div>
      {/* <ul>
        {students.map((names, index) => (
          <li key={index}>
            the name is: {names.name} <br />
            the age is: {names.age}
          </li>
        ))}
      </ul>
      {logged ? <h1>hello</h1> : <h1>not hello</h1>} */}
    </div>
  );
}
