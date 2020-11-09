import React, { useState, useContext, useEffect, Fragment } from "react";
import OptionsContext from '../../contexts/Options/OptionsContext'
import Board from "../../components/Board/Board";
import Options from "../../components/Options/Options";
import Results from "../../components/Results/Results";
import './ContentHome.scss'

const ContentHome = () => {
  const {rows, cols } = useContext(OptionsContext);

  const [modeResponsive, setModeResponsive] = useState("");

  const sizeResponsive = () => {
    if ((rows >= 100 && rows <= 200) || (cols >= 100 && cols <= 200)) {
      setModeResponsive("mobile");
    }
  }

  useEffect(() => {
    sizeResponsive();
  }, [modeResponsive,cols,rows]);


  return (
    <Fragment>
      <div className={"section " + modeResponsive}>
        <div className="section-options">
          <Options />
        </div>
        <div className="section-game">
          <Board />
        </div>
      </div>
      <Results />
    </Fragment>
  );
}

export default ContentHome;
