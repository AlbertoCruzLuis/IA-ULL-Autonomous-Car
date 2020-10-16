import { createContext } from "react";

const OptionsContext = createContext({
  rows: 0,
  handleChangeRows: () => {},
  cols: 0,
  handleChangeCols: () => {},
  isBoard: false,
  boardActive: () => {},
  typeCeil: "",
  changeTypeCeil: () => {},
  selectTypeMode: "",
  handleChangeSelectTypeMode: () => {},
  typesCeils: ["", "Start", "Obstacle", "Finish"],
});

OptionsContext.displayName = "OptionsContext";

export default OptionsContext;
