import React, { Fragment } from "react";
import Board from "../../components/Board/Board";
import Options from "../../components/Options/Options";
import OptionsProvider from "../../providers/Options/OptionsProvider";
import "./Home.css";

const Home = () => (
  <Fragment>
    <div className="header">
      <h1>Coche Autonomo</h1>
    </div>
    <div className="main">
      <OptionsProvider>
        <Options />
        <Board />
      </OptionsProvider>
    </div>
    <div className="footer"></div>
  </Fragment>
);

export default Home;
