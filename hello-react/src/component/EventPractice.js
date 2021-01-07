import React, { useState } from "react";

const EventPractice = () => {
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>Event Practice with Function</h1>
      <input
        type="text"
        value={username}
        placeholder="Username"
        name="username"
        onChange={onChange}
      />
      <input
        type="text"
        value={message}
        placeholder="Please Type Something"
        name="message"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>Type</button>
    </div>
  );
};

export default EventPractice;
