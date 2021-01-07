import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "A" },
    { id: 2, text: "B" },
    { id: 3, text: "C" },
    { id: 4, text: "D" },
    { id: 5, text: "E" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(6);

  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <ul>{nameList}</ul>
      <input
        type="text"
        placeholder="Type Something"
        onChange={onChange}
        value={inputText}
      ></input>
      <button onClick={onClick}>Enter</button>
    </>
  );
};

export default IterationSample;
