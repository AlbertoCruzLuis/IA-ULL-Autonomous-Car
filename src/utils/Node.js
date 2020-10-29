class Node {
  constructor(typeCell = "", pos = [], neighbors = []) {
    this.typeCell = typeCell;
    this.pos = pos;
    this.neighbors = neighbors;
    this.parent = null;
    this.realCost = 0;
    this.estimatedCost = 0;
    this.totalCost = 0;
  }
  isEqual(other) {
    if (this.pos[0] === other.pos[0] && this.pos[1] === other.pos[1]) {
      return true;
    }
    return false;
  }
}

export default Node;