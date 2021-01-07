import React from "react";
import "./component.css";
import PropTypes from "prop-types";

const PropComponent = ({ name, age }) => {
  //const { name, age } = props;
  return (
    <div>
      <h1 className="test2">props name: {name} </h1>
      <h1>props age: {age} </h1>
    </div>
  );
};

PropComponent.defaultProps = {
  name: "TESTETTEAT",
  age: 213314,
};

PropComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  favoriteNumber: PropTypes.number.isRequired,
};

export default PropComponent;
