import React, { useState } from "react";

export default function Say() {
  const [messages, setMessage] = useState();
  const onClickEnter = () => setMessage("Hello");
  const onClickLeave = () => setMessage("Bye");
  const [color, setColor] = useState("black");
  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{messages}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        RED
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        GREEN
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        BLUE
      </button>
    </div>
  );
}
