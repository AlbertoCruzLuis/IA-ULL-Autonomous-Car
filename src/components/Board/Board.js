import React, { Fragment, useContext } from "react";
import Cell from "../Cell/Cell";
import OptionsContext from "../../contexts/Options/OptionsContext";
import "./Board.scss";
import { createMatrix } from "../../utils/board-utils";
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
  } = useContext(OptionsContext);
  const [grid, setGrid] = useState([[""]]);

  useEffect(() => {
    setGrid(createMatrix(rows, cols, ""));
  }, [rows, cols, selectTypeMode]);

  const modeManual = (posX, posY) => {
    const newGrid = [...grid];
    console.log(newGrid);
    newGrid[posX][posY] === ChosenCellType
      ? (newGrid[posX][posY] = "")
      : (newGrid[posX][posY] = ChosenCellType);    
    setGrid(newGrid);
  };

  const updateBoard = (newGrid) => {
    setGrid(newGrid);
  }

  const modeRandom = (posX, posY) => {
    let random_index = Math.floor(Math.random() * typesCells.length + 1);
    const newGrid = [...grid];
    console.log(newGrid);
    newGrid[posX][posY] = typesCells[random_index];
    setGrid(newGrid);
    if (
      typesCells[random_index] === "Start" ||
      typesCells[random_index] === "Finish"
    ) {
      typesCells.splice(random_index, 1);
    }
  };

  return (
    <Fragment>
    <div className="board">
      {isBoard
        ? grid.map((row, posX) => (
            <div className="row" key={`${posX}`}>
              {row.map((element, posY) => (
                <Cell
                  key={`${posX}${posY}`}
                  type={element}
                  posX={posX}
                  posY={posY}
                  modeManual={() => modeManual(posX, posY)}
                  modeRandom={() => modeRandom(posX, posY)}
                />
              ))}
            </div>
          ))
        : ( <span>Board</span> )}
    </div>
    <DisplayPath board={grid} updateBoard={updateBoard}/>
    </Fragment>
  );
};

export default Board;
