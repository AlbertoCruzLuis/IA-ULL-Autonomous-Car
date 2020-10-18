import React from "react";
import "./Obstacle.css";

const Obstacle = () => {
  return (
    <div className="obstacle">
      <img src={require("../../../assets/Cone.png")} alt="Cone" />
    </div>
  );
};

export default Obstacle;
