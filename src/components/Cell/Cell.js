import React, { useState, useEffect, useContext, Fragment } from "react";
import "./Cell.scss";
import OptionsContext from "../../contexts/Options/OptionsContext";
import Finish from "./Finish/Finish";
import Obstacle from "./Obstacle/Obstacle";
import Start from "./Start/Start";
import Path from "./Path/Path";

const Cell = ({ type, posX, posY, modeManual }) => {
  const [cellSize, setCellSize] = useState("");
  const { selectTypeMode, activePath, rows, cols } = useContext(OptionsContext);

  const sizeResponsive = () => {
    if ((rows < 15) || (cols < 15)) {
      setCellSize("xs");
    }
    if ((rows >= 15 && rows <= 60) || (cols >= 15 && cols <= 60)) {
      setCellSize("ms");
      return;
    }
    if ((rows > 60 && rows < 100) || (cols > 60 && cols < 100)) {
      setCellSize("md");
      return;
    }
    if ((rows >= 100 && rows <= 200) || (cols >= 100 && cols <= 200)) {
      setCellSize("lg")
      return;
    }
  }

  useEffect(() => {
    sizeResponsive();
  }, [selectTypeMode, cellSize]);

  return (
    <Fragment>
      {!activePath ? (
        <div className={"Cell " + cellSize}>
          {selectTypeMode === "Random" ? (
            <button className={cellSize}>
              {type === "Start" ? (
                <Start cellSize={cellSize} />
              ) : type === "Finish" ? (
                <Finish cellSize={cellSize} />
              ) : type === "Obstacle" ? (
                <Obstacle cellSize={cellSize} />
              ) : null}
            </button>
          ) : (
            <button className={cellSize} onClick={modeManual}>
              {type === "" ? null : type === "Start" ? (
                <Start cellSize={cellSize} />
              ) : type === "Finish" ? (
                <Finish cellSize={cellSize} />
              ) : type === "Obstacle" ? (
                <Obstacle cellSize={cellSize} />
              ) : null}
            </button>
          )}
        </div>
      ) : (
        <div className={"Cell " + cellSize}>
          {activePath ? (
            <button className={cellSize}>
              {type === "Start" ? (
                <Start cellSize={cellSize} />
              ) : type === "Finish" ? (
                <Finish cellSize={cellSize} />
              ) : type === "Obstacle" ? (
                <Obstacle cellSize={cellSize} />
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
