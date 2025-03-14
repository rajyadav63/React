import React, { useState } from "react";
import "./CounterCard.css";

const CounterCard = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <p>Clicked {count} times</p>
      <button
        id="counter-btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default CounterCard;
