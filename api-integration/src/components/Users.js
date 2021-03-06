import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

const Users = () => {
  const [userId, setUserId] = useState(null);
  const [state, refetch] = useAsync(getUsers, [], true);
  const { loading, data: users, error } = state;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!users) return <button onClick={refetch}>Refetch</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>Refetch</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
