import { createContext } from "react";

const OptionsContext = createContext({
  rows: 0,
  handleChangeRows: () => {},
  cols: 0,
  handleChangeCols: () => {},
  isBoard: false,
  boardActive: () => {},
  ChosenCellType: "",
  changeChosenCellType: () => {},
  selectTypeMode: "",
  handleChangeSelectTypeMode: () => {},
  typesCells: ["", "Start", "Obstacle", "Finish"],
  activePath: false,
  showPath: () => {},
  handleChangeInputFile: () => {},
  gridFile: [[""]],
  numMove: 0,
  timeCode: 0,
  totalNode: 0,
  getResultsStatistics: () => {},
  handleChangeSelectHeuristic: () => {},
  selectHeuristic: "",
  obstaclePercentage: 0,
  handleChangeObstaclePercentage: () => {}

});

OptionsContext.displayName = "OptionsContext";

export default OptionsContext;
