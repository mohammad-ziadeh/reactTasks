import React from "react";

export default function main({ home, about, contact, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <li>
        <a href={home}>home</a>
      </li>
      <li>
        <a href={about}>about</a>
      </li>
      <li>
        <a href={contact}>contact</a>
      </li>
    </div>
  );
}
