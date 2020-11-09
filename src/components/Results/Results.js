import React, { Fragment, useContext } from 'react';
import OptionsContext from "../../contexts/Options/OptionsContext";
import './Results.scss'

const Results = () => {
  const { activePath, numMove, timeCode, totalNode } = useContext(OptionsContext);
  return (
    <Fragment>
      { activePath ? (
        <div className="results">
          <div className="results-title">
            <span>Results</span>
          </div>
          <div className="results-content">
            <div className="result">
              <span>Minimum number of movements: {numMove}</span>
            </div>
            <div className="result">
              <span>Time to run the algorithm: {timeCode} ms</span>
            </div>
            <div className="result">
              <span>Number of Total Node Visited: {totalNode}</span>
            </div>
          </div>
        </div>
      ) : null }
    </Fragment>
  );
}

export default Results;