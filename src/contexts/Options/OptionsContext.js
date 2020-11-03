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
});

OptionsContext.displayName = "OptionsContext";

export default OptionsContext;
