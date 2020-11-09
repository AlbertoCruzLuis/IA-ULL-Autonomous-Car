export const getDataFile = (dataFile) => {
  // [0]: Rows, [1]: Cols, [2]: MatrixGrid
  let arrInfo = [];

  let lineFile = dataFile.split('\n');
  let matrixGrid = []
  for (let i = 0; i < lineFile.length; i++) {
    let arrRow = [];
    for (let j = 0; j < lineFile[i].length; j++) {
      if (lineFile[i][j] === "-") {
        arrRow.push("");
      }
      if (lineFile[i][j] === "o") {
        arrRow.push("Obstacle");
      }
      if (lineFile[i][j] === "s") {
        arrRow.push("Start");
      }
      if (lineFile[i][j] === "f") {
        arrRow.push("Finish");
      }
    }
    matrixGrid.push(arrRow);
  }
  let rows = matrixGrid.length;
  let cols = matrixGrid[0].length;
  arrInfo.push(rows);
  arrInfo.push(cols);
  arrInfo.push(matrixGrid);
  
  return arrInfo;
};