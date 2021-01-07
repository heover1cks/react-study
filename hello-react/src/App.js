import React, { Component } from "react";
import ErrorBoundary from "./component/ErrorBoundary";
import LifeCycleSample from "./component/LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export default class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Color Change</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />{" "}
        </ErrorBoundary>
      </div>
    );
  }
}
