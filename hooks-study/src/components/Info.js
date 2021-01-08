import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="Enter Name"
        />
        <input
          type="text"
          value={username}
          onChange={onChangeUsername}
          placeholder="Enter Username"
        />
      </div>
      <div>
        <b>Name: </b>
        {name}
      </div>
      <div>
        <b>Username: </b>
        {username}
      </div>
    </div>
  );
};

export default Info;
