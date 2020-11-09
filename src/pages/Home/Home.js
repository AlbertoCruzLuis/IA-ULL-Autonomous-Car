import React, { Fragment } from "react";
import ContentHome from "../../components/ContentHome/ContentHome";
import Footer from "../../components/Footer/Footer";
import Information from "../../components/Information/Information";
import Navbar from "../../components/Navbar/Navbar";
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
        <ContentHome />
      </OptionsProvider>
    </div>
    <footer>
      <Footer/>
    </footer>
  </Fragment>
);

export default Home;
