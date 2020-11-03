import React from "react";
import "./Finish.scss";

const Finish = ({cellSize}) => {
  
  return (
    <div className={"finish " + cellSize}>
      <img className={cellSize} src={require("../../../assets/Finish.svg")} alt="Finish" />
    </div>
  );
};

export default Finish;