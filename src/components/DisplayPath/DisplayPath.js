import React, { Fragment, useContext } from "react";
import "./DisplayPath.scss";
import OptionsContext from "../../contexts/Options/OptionsContext";
import { displayPath } from '../../utils/board-utils'

const DisplayPath = ({ board, updateBoard }) => {
  const { isBoard, showPath } = useContext(OptionsContext);

  const activeDisplayPath = () => {
    showPath();
    displayPath(board,updateBoard);
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
