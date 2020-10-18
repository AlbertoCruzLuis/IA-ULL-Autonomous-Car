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