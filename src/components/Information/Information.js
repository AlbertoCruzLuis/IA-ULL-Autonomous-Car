import React from "react";
import "./Information.css";

const Information = () => {
  return (
    <div className="information">
      <div className="information-title">
        <h1>Manual</h1>
      </div>
      <div className="information-content">
        <div className="text">
          <p>
            The objective of this game is to use intelligence algorithms
            artificial to get the car to the finish line. For the closer and
            without crossing the obstacles that can find.
          </p>
        </div>
        <div className="paso">
          <div className="numero">1</div>
          <p>Create the Board</p>
        </div>
        <div className="paso">
          <div className="numero">2</div>
          <p>Display the minimum path</p>
        </div>
        <div className="social-network">
          <a
            href="https://github.com/AlbertoCruzLuis/IA-ULL-Autonomous-Car"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="github">
              <img src={require("../../assets/Github.svg")} alt="Github" />
            </div>
            <span>View Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Information;
