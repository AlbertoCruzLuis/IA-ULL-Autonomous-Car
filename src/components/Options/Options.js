import React, { Fragment, useContext } from "react";
import Select from "react-select";
import Upload from "../../assets/Upload.svg";
import OptionsContext from "../../contexts/Options/OptionsContext";
import "./Options.scss";

const Options = () => {
  const {
    handleChangeRows,
    handleChangeCols,
    handleChangeSelectTypeMode,
    boardActive,
    changeChosenCellType,
    handleChangeInputFile,
    handleChangeSelectHeuristic,
    selectTypeMode,
    handleChangeObstaclePercentage,
  } = useContext(OptionsContext);

  const optionsObstacle = [
    { value: "Random", label: "Random" },
    { value: "Manual", label: "Manual" },
    { value: "File", label: "File" },
  ];

  const optionsHeuristic = [
    { value: "euclidea", label: "Euclidea" },
    { value: "manhattan", label: "Manhattan" },
  ];

  return (
    <Fragment>
      <div className="options">
        <div className="options-header">
          <span>Options</span>
        </div>
        <div className="options-content">
          <div className="option-dimensions">
            <div className="option-row">
              <input
                type="text"
                placeholder="Rows..."
                onChange={handleChangeRows}
              />
            </div>
            <div className="option-col">
              <input
                type="text"
                placeholder="Cols..."
                onChange={handleChangeCols}
              />
            </div>
          </div>
          <div className="option-heuristic-function">
            <Select
              placeholder="Select Heuristic"
              options={optionsHeuristic}
              onChange={handleChangeSelectHeuristic}
            ></Select>
          </div>
          <div className="option-select-obstacle">
            <Select
              placeholder="Select Mode"
              options={optionsObstacle}
              onChange={handleChangeSelectTypeMode}
            ></Select>
          </div>
          {selectTypeMode === "Manual" ? (
            <div className="options-extra">
              <div className="option">
                <button onClick={() => changeChosenCellType("Start")}>
                  <span>Start</span>
                  <img src={require("../../assets/Car.svg")} alt="Car" />
                </button>
              </div>
              <div className="option">
                <button onClick={() => changeChosenCellType("Finish")}>
                  <span>Finish</span>
                  <img src={require("../../assets/Finish.svg")} alt="Finish" />
                </button>
              </div>
              <div className="option">
                <button onClick={() => changeChosenCellType("Obstacle")}>
                  <span>Obstacle</span>
                  <img src={require("../../assets/Cone.svg")} alt="Cone" />
                </button>
              </div>
            </div>
          ) : null}
          {selectTypeMode === "Random" ? (
            <div className="options-extra">
              <div className="option">
                <input
                  className="percentage-obstacle"
                  type="text"
                  placeholder="% Obstacle..."
                  onChange={handleChangeObstaclePercentage}
                />
              </div>
            </div>
          ) : null}
          {selectTypeMode === "File" ? (
            <div className="options-extra">
              <div className="option">
                <label>
                  Choose File Txt
                  <img src={Upload} alt="" />
                  <input
                    type="file"
                    onChange={handleChangeInputFile}
                    accept=".txt"
                  />
                </label>
              </div>
            </div>
          ) : null}
        </div>
        <div className="option-submit">
          <button type="submit" onClick={boardActive}>
            Create
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Options;
