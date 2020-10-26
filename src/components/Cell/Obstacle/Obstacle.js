import React from "react";
import "./Obstacle.scss";

const Obstacle = () => {
  return (
    <div className="obstacle">
      <img src={require("../../../assets/Cone.svg")} alt="Cone" />
    </div>
  );
};

export default Obstacle;
