import React, { useEffect, useContext } from "react";
import "./Cell.css";
import OptionsContext from "../../contexts/Options/OptionsContext";
import Finish from "./Finish/Finish";
import Obstacle from "./Obstacle/Obstacle";
import Start from "./Start/Start";

const Cell = ({ type, posX, posY, modeManual, modeRandom }) => {
  
  const { selectTypeMode } = useContext(OptionsContext);

  useEffect(() => {
    if (selectTypeMode === "Random") {
      modeRandom();
    }
  }, [selectTypeMode]);

  

  return (
    <div className="Cell">
      {selectTypeMode === "Random" ? (
        <button>
          {type === "Start" ? (
            <Start />
          ) : type === "Finish" ? (
            <Finish />
          ) : type === "Obstacle" ? (
            <Obstacle />
          ) : null}
        </button>
      ) : (
        <button onClick={modeManual}>
          {type === "" ? null : type === "Start" ? (
            <Start />
          ) : type === "Finish" ? (
            <Finish />
          ) : type === "Obstacle" ? (
            <Obstacle />
          ) : null}
        </button>
      )}
    </div>
  );
};

export default Cell;
