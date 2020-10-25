import React, { Fragment, useContext } from "react";
import "./DisplayPath.css";
import OptionsContext from "../../contexts/Options/OptionsContext";

const DisplayPath = () => {
  const { isBoard } = useContext(OptionsContext);
  return (
    <Fragment>
      {isBoard ? (
        <div className="display-path">
          <button>Display Path</button>
        </div>
      ) : null}
    </Fragment>
  );
};

export default DisplayPath;
