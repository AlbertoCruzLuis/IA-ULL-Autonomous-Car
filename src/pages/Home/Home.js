import React, { Fragment } from "react";
import Board from "../../components/Board/Board";
import DisplayPath from "../../components/DisplayPath/DisplayPath";
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
        <DisplayPath/>
      </OptionsProvider>
    </div>
    <div className="footer">
      <span>Created by </span>
      <a href="https://github.com/AlbertoCruzLuis" target="blank">
        Alberto Cruz Luis
      </a>
    </div>
  </Fragment>
);

export default Home;
