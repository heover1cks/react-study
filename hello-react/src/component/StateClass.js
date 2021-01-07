import React, { Component } from "react";
import styles from "./StateClass.css";
import classNames from "classnames";

export default class StateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      count: 0,
    };
  }
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1> {number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}
