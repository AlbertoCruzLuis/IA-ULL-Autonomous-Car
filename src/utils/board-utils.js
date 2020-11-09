import Node from "./Node";
import AStar from "./AStar";

export const createMatrix = (rows, cols, value) => {
  var arr = [];
  for (var i = 0; i < rows; i++) {
    arr.push([]);
    arr[i].push(new Array(cols));
    for (var j = 0; j < cols; j++) {
      arr[i][j] = value;
    }
  }

  return arr;
};

export const generateNeighbors = (posX, posY, grid) => {
  let neighbors = [];
  if (posX - 1 >= 0) {
    neighbors.push(new Node(grid[posX - 1][posY], [posX - 1, posY]));
  }
  if (posX + 1 < grid.length) {
    neighbors.push(new Node(grid[posX + 1][posY], [posX + 1, posY]));
  }
  if (posY - 1 >= 0) {
    neighbors.push(new Node(grid[posX][posY - 1], [posX, posY - 1]));
  }
  if (posY + 1 < grid.length) {
    neighbors.push(new Node(grid[posX][posY + 1], [posX, posY + 1]));
  }
  return neighbors;
};

export const createNode = (grid, typeCell) => {
  for (let posX = 0; posX < grid.length; posX++) {
    for (let posY = 0; posY < grid[posX].length; posY++) {
      if (grid[posX][posY] === typeCell) {
        return new Node(
          typeCell,
          [posX, posY],
          generateNeighbors(posX, posY, grid)
        );
      }
    }
  }
};

const resetGrid = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "Path") {
        grid[i][j] = "";
      }
    }
  }
  return grid;
}

const checkStartFinishInGrid = (grid) => {
  let cellNecesary = [["Start",0],["Finish",0]];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "Start") {
        cellNecesary[0][1]++;
      }
      if (grid[i][j] === "Finish") {
        cellNecesary[1][1]++;
      }
    }
  }
  return cellNecesary[0][1] === 1 && cellNecesary[1][1] === 1;
}

export const displayPath = (grid, heuristic, updateBoard) => {
  if (!checkStartFinishInGrid(grid)) {
    alert("You need to choose 1 start cell and 1 finish cell");
    return 0;
  }
  let start = createNode(grid, "Start");
  let finish = createNode(grid, "Finish");
  let newGrid = resetGrid(grid);

  let startClock = performance.now()
  let algorithm = new AStar(start, finish, newGrid, heuristic);
  let endClock = performance.now();
  let timeCode = endClock - startClock;
  if (algorithm.path[algorithm.path.length - 1].typeCell !== "Finish") {
    alert("This map has no solution");
    return 0;
  } else {
    for (let i = 0; i < algorithm.path.length; i++) {
      for (let j = 0; j < newGrid.length; j++) {
        for (let k = 0; k < newGrid[j].length; k++) {
          if (algorithm.path[i].pos[0] === j && algorithm.path[i].pos[1] === k) {
            newGrid[j][k] = algorithm.path[i].typeCell;
          }
        }
      }
    }
    updateBoard(newGrid);
    return [algorithm.path.length-1, timeCode, algorithm.totalNode];
  }
};

export const generateMatrixRandom = (rows, cols, typesCells, percentageObstacle) => {
  let numberObstacle = (percentageObstacle * (rows * cols)) - 2;
  let numberEmptyCell = (rows * cols) - numberObstacle - 2;
  let cont = [numberEmptyCell,numberObstacle,1,1];
  let typesCellsCont = [typesCells,cont]
  //Check all cont > 0
  for (let i = 0; i < typesCellsCont[0].length; i++) {
    if (typesCellsCont[1][i] <= 0) {
      typesCellsCont[0].splice(i, 1);
      typesCellsCont[1].splice(i, 1);
    }
    
  }
  let newGrid = [];  
  for (let posX = 0; posX < rows; posX++) {
    let newRow = [];
    for (let posY = 0; posY < cols; posY++) {
      let random_index = Math.floor(Math.random() * typesCellsCont[0].length);
      //Separate between Start and Finish Position
      if (posX <= (rows / 2)) {
        if (typesCellsCont[0][random_index] !== "Finish") {
          newRow.push(typesCellsCont[0][random_index]);
        } else {
          random_index = 0;
          newRow.push(typesCellsCont[0][random_index]);
        }
      }
      if (posX > (rows / 2)) {
        newRow.push(typesCellsCont[0][random_index]);
      }

      typesCellsCont[1][random_index]--;
      if (typesCellsCont[1][random_index] <= 0) {
        typesCellsCont[0].splice(random_index, 1);
        typesCellsCont[1].splice(random_index, 1);
      }
    }
    newGrid.push(newRow);
  }
  return newGrid;
}
