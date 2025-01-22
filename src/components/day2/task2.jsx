import React from "react";

export default function task2(props) {
  return (
    <div>
      <button
        style={{
          border: "1px solid grey",
          padding: "5px",
          borderRadius: "5px",
        }}
      >
        {props.dynamicButtonLabel}
      </button>
    </div>
  );
}
