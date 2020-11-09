import React, { Fragment, useContext } from "react";
import Cell from "../Cell/Cell";
import OptionsContext from "../../contexts/Options/OptionsContext";
import "./Board.scss";
import { createMatrix, generateMatrixRandom } from "../../utils/board-utils";
import { useState, useEffect } from "react";
import DisplayPath from "../DisplayPath/DisplayPath";

const Board = () => {
  const {
    rows,
    cols,
    isBoard,
    ChosenCellType,
    typesCells,
    selectTypeMode,
    gridFile,
    obstaclePercentage,
  } = useContext(OptionsContext);
  const [grid, setGrid] = useState([[""]]);

  useEffect(() => {
    if (rows <= 200 || cols <= 200) {
      setGrid(createMatrix(rows, cols, ""));
    }
    if (gridFile && selectTypeMode === "File") {
      modeFile();
    }
    if (isBoard && selectTypeMode === "Random") {
      modeRandom();
    }
  }, [rows, cols, selectTypeMode, gridFile, isBoard, obstaclePercentage]);

  const modeManual = (posX, posY) => {
    const newGrid = [...grid];
    newGrid[posX][posY] === ChosenCellType
      ? (newGrid[posX][posY] = "")
      : (newGrid[posX][posY] = ChosenCellType);
    setGrid(newGrid);
  };

  const updateBoard = (newGrid) => {
    setGrid(newGrid);
  };

  const modeRandom = () => {
    let decimalPercentage = obstaclePercentage / 100;
    let newGrid = generateMatrixRandom(rows, cols, typesCells, decimalPercentage);
    setGrid(newGrid);
  };

  const modeFile = () => {
    setGrid(gridFile);
  };

  return (
    <Fragment>
      <div className="board">
        {isBoard ? (
          grid.map((row, posX) => (
            <div className="row" key={`${posX}`}>
              {row.map((element, posY) => (
                <Cell
                  key={`${posX}${posY}`}
                  type={element}
                  posX={posX}
                  posY={posY}
                  board={grid}
                  setBoard={setGrid}
                  modeManual={() => modeManual(posX, posY)}
                />
              ))}
            </div>
          ))
        ) : (
          <span>Board</span>
        )}
      </div>
      <DisplayPath board={grid} updateBoard={updateBoard} />
    </Fragment>
  );
};

export default Board;
