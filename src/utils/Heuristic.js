class Heuristic {
  constructor(initialPos, endPos) {
    this.initialPos = initialPos;
    this.endPos = endPos;
  }
  euclidea() {
    return Math.sqrt(
      Math.pow(this.initialPos[0] - this.endPos[0], 2) +
        Math.pow(this.initialPos[1] - this.endPos[1], 2)
    );
  }

  manhattan() {
    return (
      Math.abs(this.initialPos[0] - this.endPos[0]) +
      Math.abs(this.initialPos[1] - this.endPos[1])
    );
  }
}

export const getHeuristic = (typefunc, initial, end) => {
  let f_heuristic = new Heuristic(initial, end);
  if (typefunc === "euclidea") {
    return f_heuristic.euclidea();
  }
  if (typefunc === "manhattan") {
    return f_heuristic.manhattan();
  }
};

export default Heuristic;
