import React, { Fragment } from "react";
import Board from "../../components/Board/Board";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Information";
import Navbar from "../../components/Navbar/Navbar";
import Options from "../../components/Options/Options";
import Results from "../../components/Results/Results";
import OptionsProvider from "../../providers/Options/OptionsProvider";
import "./Home.scss";

const Home = () => (
  <Fragment>
    <div className="header">
      <Navbar />
    </div>
    <div className="main">
      <Information />
      <OptionsProvider>
      <div className="section">
          <div className="section-options">
            <Options />
          </div>
          <div className="section-game">
            <Board />
          </div>
      </div>
      <Results />
      </OptionsProvider>
    </div>
    <footer>
      <Footer/>
    </footer>
  </Fragment>
);

export default Home;
