import React, { Component } from "react";
import "./ValidationSample.css";

export default class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    console.log(this.state.clicked + ":" + this.state.validated);
    this.input.focus();
  };
  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
        />
        <button onClick={this.handleButtonClick}>Let's Validate!</button>
      </div>
    );
  }
}
