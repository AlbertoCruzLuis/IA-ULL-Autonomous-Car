import React, { Fragment, useContext } from "react";
import Select from "react-select";
import OptionsContext from "../../contexts/Options/OptionsContext";
import "./Options.css";

const Options = () => {
  const {
    handleChangeRows,
    handleChangeCols,
    handleChangeSelectTypeMode,
    boardActive,
    changeChosenCellType,
    selectTypeMode,
  } = useContext(OptionsContext);

  const options = [
    { value: "Random", label: "Random" },
    { value: "Manual", label: "Manual" },
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
          <div className="option-select-obstacle">
            <Select
              options={options}
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
