import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
  }

  return (
    <>
      <button
        onClick={handleClick}
        style={{ color: walk ? "darkgreen" : "darkred" }}
      >
        Change to {walk ? "walk" : "stop"}
      </button>
      <h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
        {walk ? "walk" : "stop"}
      </h1>
    </>
  );
}
