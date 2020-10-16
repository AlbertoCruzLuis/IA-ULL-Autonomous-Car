import React, { useContext } from "react";
import Ceil from "../Ceil/Ceil";
import OptionsContext from "../../contexts/Options/OptionsContext";
import "./Board.css";

const Board = () => {
  const { rows, cols, isBoard } = useContext(OptionsContext);

  const createBoard = (rows,cols) => {
    let board = []
    for (let i = 0; i < rows; i++) {
      let ceils = []
      for (let j = 0; j < cols; j++) {
        ceils.push(<Ceil key={`${i}${j}`} />)
      }
      board.push(<div className="row" key={`${i}`}>{ceils}</div>)
    }
    return board
  }
  
  return (
    <div className="board">
      { isBoard ? createBoard(rows, cols) : null}
    </div>
  );
};

export default Board;
