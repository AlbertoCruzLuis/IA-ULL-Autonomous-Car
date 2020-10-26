import React from "react";
import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={require("../../assets/Logo.svg")} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-content">
        <div className="navbar-item">
          <h1>Autonomous Car</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
