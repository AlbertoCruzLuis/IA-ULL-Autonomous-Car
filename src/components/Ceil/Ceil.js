import React, { useState, useEffect, useContext } from "react";
import "./Ceil.css";
import OptionsContext from "../../contexts/Options/OptionsContext";
import Finish from "./Finish/Finish";
import Obstacle from "./Obstacle/Obstacle";
import Start from "./Start/Start";

const Ceil = () => {
  const [isActive, setIsActive] = useState(false);
  const [assignType, setAssignType] = useState("");
  const { typeCeil, selectTypeMode, typesCeils } = useContext(OptionsContext);

  useEffect(() => {
    if (selectTypeMode === "Random") {
      modeRandomActive();
    }
  }, [selectTypeMode]);

  const modeManualActive = () => {
    setIsActive(!isActive);
    setAssignType(typeCeil);
  };

  const modeRandomActive = () => {
    let random_index = Math.floor(Math.random() * typesCeils.length+1);
    setAssignType(typesCeils[random_index]);
    if (
      typesCeils[random_index] === "Start" ||
      typesCeils[random_index] === "Finish"
    ) {
      typesCeils.splice(random_index,1);
      console.log(typesCeils);
    }
  };

  return (
    <div className="ceil">
      {selectTypeMode === "Random" ? (
        <button>
          {assignType === "Start" ? (
            <Start />
          ) : assignType === "Finish" ? (
            <Finish />
          ) : assignType === "Obstacle" ? (
            <Obstacle />
          ) : null}
        </button>
      ) : (
        <button onClick={modeManualActive}>
          {isActive ? (
            assignType === "Start" ? (
              <Start />
            ) : assignType === "Finish" ? (
              <Finish />
            ) : assignType === "Obstacle" ? (
              <Obstacle />
            ) : null
          ) : null}
        </button>
      )}
    </div>
  );
};

export default Ceil;
