import React, { useState } from "react";
import OptionsContext from "../../contexts/Options/OptionsContext";

const OptionsProvider = ({ children }) => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [selectTypeMode, setSelectTypeMode] = useState("");
  const [ChosenCellType, setChosenCellType] = useState("Start");
  const [activePath, setActivePath] = useState(false); 
  const [isBoard, setIsBoard] = useState(false);

  const typesCells = ["", "Start", "Obstacle", "Finish"];
  

  const handleChangeRows = (e) => {
    setRows(e.target.value);
    setIsBoard(false);
    setActivePath(false);
  }

  const handleChangeCols = (e) => {
    setCols(e.target.value);
    setIsBoard(false);
    setActivePath(false);
  }

  const changeChosenCellType = (type) => {
    setChosenCellType(type);
    setActivePath(false);
  }

  const handleChangeSelectTypeMode = (e) => {
    setSelectTypeMode(e.value);
    setIsBoard(false);
    setActivePath(false);
  }

  const boardActive = () => {
    if (rows && cols && selectTypeMode) {
      setIsBoard(true);
    } else {
      alert("Fill All Options");
    }
  }

  const showPath = () => {
    setActivePath(true);
  }
  return (
    <OptionsContext.Provider
      value={{
        rows,
        handleChangeRows,
        cols,
        handleChangeCols,
        isBoard,
        boardActive,
        ChosenCellType,
        changeChosenCellType,
        selectTypeMode,
        handleChangeSelectTypeMode,
        typesCells,
        activePath,
        showPath,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsProvider;
