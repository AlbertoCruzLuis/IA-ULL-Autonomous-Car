import React from "react";
import "./Start.scss";

const Start = ({cellSize}) => {
  return (
    <div className="start">
      <img className={cellSize} src={require("../../../assets/Car.svg")} alt="Car" />
    </div>
  );
};

export default Start;