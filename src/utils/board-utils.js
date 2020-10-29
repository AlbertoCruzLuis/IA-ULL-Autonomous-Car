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

export const displayPath = (grid, updateBoard) => {
  let start = createNode(grid, "Start");
  let finish = createNode(grid, "Finish");

  let algorithm = new AStar(start, finish, grid, "euclidea");
  for (let i = 0; i < algorithm.path.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      for (let k = 0; k < grid[j].length; k++) {
        if (algorithm.path[i].pos[0] === j && algorithm.path[i].pos[1] === k) {
          grid[j][k] = algorithm.path[i].typeCell;
        }
      }
    }
  }
  console.log(algorithm.path);
  updateBoard(grid);
};
