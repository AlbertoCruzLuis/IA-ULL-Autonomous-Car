import React, { Fragment, useContext } from 'react';
import OptionsContext from "../../contexts/Options/OptionsContext";
import './Results.scss'

const Results = () => {
  const { activePath, numMove } = useContext(OptionsContext);
  return (
    <Fragment>
      { activePath ? (
        <div className="results">
          <div className="results-title">
            <span>Results</span>
          </div>
          <div className="results-content">
            <span>Minimum number of movements: {numMove}</span>
          </div>
        </div>
      ) : null }
    </Fragment>
  );
}

export default Results;