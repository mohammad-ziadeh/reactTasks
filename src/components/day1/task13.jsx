import React from "react";

export default function task13() {
  const cards = [
    {
      id: "1",
      pic: "/src/imgs/blank-profile-picture-973460_640.webp",
      name: "card 1",
      text: "this is the first card",
    },
    {
      id: "2",
      pic: "/src/imgs/blank-profile-picture-973460_640.webp",
      name: "card 2",
      text: "this is the second card",
    },
    {
      id: "3",
      pic: "/src/imgs/blank-profile-picture-973460_640.webp",
      name: "card 3",
      text: "this is the third card",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
      }}
    >
      {cards.map((card, index) => (
        <div
          style={{
            width: "300px",
            border: "1px solid grey",
            padding: "20px",
            borderRadius: "5px",
          }}
          key={index}
        >
          <img src={card.pic} alt={card.name} />
          <h3>{card.name}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}
