import React, { useEffect, useContext, Fragment } from "react";
import "./Cell.scss";
import OptionsContext from "../../contexts/Options/OptionsContext";
import Finish from "./Finish/Finish";
import Obstacle from "./Obstacle/Obstacle";
import Start from "./Start/Start";
import Path from "./Path/Path";

const Cell = ({ type, posX, posY, modeManual, modeRandom }) => {
  const { selectTypeMode, activePath } = useContext(OptionsContext);

  useEffect(() => {
    if (selectTypeMode === "Random") {
      modeRandom();
    }
  }, [selectTypeMode]);

  return (
    <Fragment>
      {!activePath ? (
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
      ) : (
        <div className="Cell">
          {activePath ? (
            <button>
              {type === "Start" ? (
                <Start />
              ) : type === "Finish" ? (
                <Finish />
              ) : type === "Obstacle" ? (
                <Obstacle />
              ) : type === "Path" ? (
                <Path />
              ) : null}
            </button>
          ) : null}
        </div>
      )}
    </Fragment>
  );
};

export default Cell;
