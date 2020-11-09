import React, { useState } from "react";
import Modal from "react-modal";
import "./Information.scss";

const Information = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, .5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="information">
      <div className="information-title">
        <h1>Manual</h1>
      </div>
      <div className="information-content">
        <div className="text">
          <p>
            The objective of this game is to use intelligence algorithms
            artificial to get the car to the finish line. Searching for the
            nearest road using the A* Algorithm
          </p>
        </div>
        <div className="information-help">
          <button className="btn-help" onClick={openModal}>
            <img
              className="info-icon"
              src={require("../../assets/Info.svg")}
              alt="Info"
            />
            Information
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="modal-container">
              <div className="modal-close">
                <button className="btn-close" onClick={closeModal}>
                  <img
                    className="close-icon"
                    src={require("../../assets/Close.svg")}
                    alt="Close"
                  />
                </button>
              </div>
              <div className="mode">
                <div className="title">
                  <span>Mode Manual</span>
                </div>
                <div className="container">
                  <div className="info">
                    <span>Select a cell type and put in the board</span>
                    <span>To place or remove a cell click on it</span>
                  </div>
                  <span>Example</span>
                  <img
                    className="example-img"
                    src={require("../../assets/ManualExample.png")}
                    alt="FileExample"
                  />
                </div>
              </div>
              <div className="mode">
                <div className="title">
                  <span>Mode File</span>
                </div>
                <div className="container">
                  <div className="info">
                    <span>s (Start Position)</span>
                    <span>f (Finish Position)</span>
                    <span>o (Obstacle)</span>
                    <span>- (Empty)</span>
                  </div>
                  <span>Example</span>
                  <img
                    className="example-img"
                    src={require("../../assets/FileExample.png")}
                    alt="FileExample"
                  />
                </div>
              </div>
            </div>
          </Modal>
        </div>
        <div className="step">
          <div className="number">1</div>
          <p>Create the Board</p>
        </div>
        <div className="step">
          <div className="number">2</div>
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
