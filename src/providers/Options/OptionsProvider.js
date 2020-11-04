import React, { useState } from "react";
import OptionsContext from "../../contexts/Options/OptionsContext";
import { getDataFile } from '../../utils/FileParser'

const OptionsProvider = ({ children }) => {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [gridFile, setGridFile] = useState([[""]]);
  const [selectHeuristic, setSelectHeuristic] = useState("");
  const [selectTypeMode, setSelectTypeMode] = useState("");
  const [ChosenCellType, setChosenCellType] = useState("Start");
  const [activePath, setActivePath] = useState(false); 
  const [isBoard, setIsBoard] = useState(false);
  const [numMove, setNumMove ] = useState(0);
  const [timeCode, setTimeCode] = useState(0);

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

  const handleChangeSelectHeuristic = (e) => {
    setSelectHeuristic(e.value);
    setIsBoard(false);
    setActivePath(false);
  }

  const handleChangeInputFile = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      setRows(getDataFile(e.target.result)[0]);
      setCols(getDataFile(e.target.result)[1]);
      setGridFile(getDataFile(e.target.result)[2]);
    }
    reader.readAsText(file);
  }

  const boardActive = () => {
    if (rows && cols && selectTypeMode && selectHeuristic) {
      if (rows <= 200 && cols <= 200) {
        setIsBoard(true);
      } else {
        alert("You have exceeded the maximum size available. Max Size: 200");
      }
    } else {
      alert("Fill All Options");
    }
  }

  const showPath = () => {
    setActivePath(true);
  }
  const getResultsStatistics = (numMinMove, timeCode) => {
    setNumMove(numMinMove);
    setTimeCode(timeCode);
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
        handleChangeInputFile,
        gridFile,
        numMove,
        timeCode,
        getResultsStatistics,
        selectHeuristic,
        handleChangeSelectHeuristic,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};

export default OptionsProvider;
