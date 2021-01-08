import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const InfoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    username: "",
  });
  const { name, username } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Enter Name"
        />
        <input
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Enter Username"
        />
      </div>
      <div>
        Name: <b>{name}</b>
      </div>
      <div>
        Username: <b>{username}</b>
      </div>
    </div>
  );
};

export default InfoReducer;
