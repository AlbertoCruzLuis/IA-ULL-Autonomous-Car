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
    changeTypeCeil,
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
              <span>Rows</span>
              <input type="text" onChange={handleChangeRows} />
            </div>
            <div className="option-col">
              <span>Cols</span>
              <input type="text" onChange={handleChangeCols} />
            </div>
          </div>
          <div className="option-select-obstacle">
            <Select
              options={options}
              onChange={handleChangeSelectTypeMode}
            ></Select>
          </div>
          <div className="option-submit">
            <button type="submit" onClick={boardActive}>
              Create
            </button>
          </div>
        </div>
      </div>
      {selectTypeMode === "Manual" ? (
        <div className="options-extra">
          <div className="option">
            <button onClick={() => changeTypeCeil("Start")}>
              <span>Start</span>
              <img src={require("../../assets/Car.png")} alt="Car" />
            </button>
          </div>
          <div className="option">
            <button onClick={() => changeTypeCeil("Finish")}>
              <span>Finish</span>
              <img src={require("../../assets/Finish.jpg")} alt="Finish" />
            </button>
          </div>
          <div className="option">
            <button onClick={() => changeTypeCeil("Obstacle")}>
              <span>Obstacle</span>
              <img src={require("../../assets/Cone.png")} alt="Cone" />
            </button>
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Options;
