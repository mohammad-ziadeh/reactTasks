import { list } from "postcss";
import React from "react";

export default function task11() {
  const nums = [1, 2, 3, 4, 5];
  return (
    <div>
      {nums.map((value) => (
        <li>
          Doubled number {value} is {value * 2}
        </li>
      ))}
    </div>
  );
}
