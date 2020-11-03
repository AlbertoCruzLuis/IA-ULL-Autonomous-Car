import React from "react";
import "./Obstacle.scss";

const Obstacle = ({cellSize}) => {
  return (
    <div className={"obstacle " + cellSize}>
      <img className={cellSize} src={require("../../../assets/Cone.svg")} alt="Cone" />
    </div>
  );
};

export default Obstacle;
