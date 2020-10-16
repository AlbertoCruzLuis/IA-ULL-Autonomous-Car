import React, { useState } from "react";
import OptionsContext from "../../contexts/Options/OptionsContext";

const OptionsProvider = ({ children }) => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [selectTypeMode, setSelectTypeMode] = useState("");
  const [typeCeil, setTypeCeil] = useState("Start");
  const [isBoard, setIsBoard] = useState(false);

  const typesCeils = ["", "Start", "Obstacle", "Finish"];
  

  const handleChangeRows = (e) => {
    setRows(e.target.value);
    setIsBoard(false);
  }

  const handleChangeCols = (e) => {
    setCols(e.target.value);
    setIsBoard(false);
  }

  const changeTypeCeil = (type) => {
    setTypeCeil(type);
  }

  const handleChangeSelectTypeMode = (e) => {
    setSelectTypeMode(e.value);
    setIsBoard(false);
  }

  const boardActive = () => {
    if (rows && cols && selectTypeMode) {
      setIsBoard(true);
    } else {
      alert("Fill All Options");
    }
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
        typeCeil,
        changeTypeCeil,
        selectTypeMode,
        handleChangeSelectTypeMode,
        typesCeils,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsProvider;
