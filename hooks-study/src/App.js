import React, { useState } from "react";
import InfoReducer from "./components/InfoReducer.js";
import "./App.css";
import CounterReducer from "./components/CounterReducer.js";
import Avg from "./components/Avg.js";

function App() {
  const [userVisible, setUserVisible] = useState("false");
  const [counterVisible, setCounterVisible] = useState("false");

  return (
    <div>
      {/* <div>
        <button onClick={() => setUserVisible(!userVisible)}>
          {userVisible ? "User Hide" : "User Show"}
        </button>
        <button onClick={() => setCounterVisible(!counterVisible)}>
          {counterVisible ? "Counter Hide" : "Counter Show"}
        </button>
      </div>
      <hr />
      <div>{userVisible && <InfoReducer />}</div>
      <hr />
      <div>{counterVisible && <CounterReducer />}</div> */}
      <Avg />
    </div>
  );
}

export default App;
