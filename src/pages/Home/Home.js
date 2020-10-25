import React, { Fragment } from "react";
import Board from "../../components/Board/Board";
import DisplayPath from "../../components/DisplayPath/DisplayPath";
import Information from "../../components/Information/Information";
import Navbar from "../../components/Navbar/Navbar";
import Options from "../../components/Options/Options";
import OptionsProvider from "../../providers/Options/OptionsProvider";
import "./Home.css";

const Home = () => (
  <Fragment>
    <div className="header">
      <Navbar />
    </div>
    <div className="main">
      <Information />
      <div className="section">
        <OptionsProvider>
          <div className="section-options">
            <Options />
          </div>
          <div className="section-game">
            <Board />
            <DisplayPath />
          </div>
        </OptionsProvider>
      </div>
    </div>
    <div className="footer">
      <span>Created by </span>
      <a href="https://github.com/AlbertoCruzLuis" target="_blank" rel="noopener noreferrer">
        Alberto Cruz Luis
      </a>
    </div>
  </Fragment>
);

export default Home;
