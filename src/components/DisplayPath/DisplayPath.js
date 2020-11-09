import React, { Fragment, useContext } from "react";
import "./DisplayPath.scss";
import OptionsContext from "../../contexts/Options/OptionsContext";
import { displayPath } from '../../utils/board-utils'

const DisplayPath = ({ board, updateBoard }) => {
  const { isBoard, selectHeuristic, showPath, getResultsStatistics } = useContext(OptionsContext);

  const activeDisplayPath = () => {
    if (displayPath(board, selectHeuristic, updateBoard) === 0) {
      return;
    }
    showPath();
    let [numMinMove, timeCode, totalNode] = displayPath(board, selectHeuristic, updateBoard);
    getResultsStatistics(numMinMove, timeCode, totalNode); 
  }

  return (
    <Fragment>
      {isBoard ? (
        <div className="display-path">
          <button onClick={activeDisplayPath}>Display Path</button>
        </div>
      ) : null}
    </Fragment>
  );
};

export default DisplayPath;
