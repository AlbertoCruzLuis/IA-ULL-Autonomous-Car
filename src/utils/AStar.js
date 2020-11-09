import Node from "./Node";
import { getHeuristic } from "./Heuristic";
import { generateNeighbors } from "./board-utils";

class AStar {
  constructor(start, finish, grid, type_heuristic) {
    this.type_heuristic = type_heuristic;
    this.totalNode = 0;
    this.path = this.findPath(start, finish, grid);
    this.grid = grid;
  }

  findPath(start, finish, grid) {
    let openSet = [start];
    let closeSet = [];
    let current;

    while (openSet.length) {
      current = this.getNodeLessCost(openSet);
      if (current.isEqual(finish)) {
        break;
      }
      if (current.totalCost === Infinity) {
        break;
      }
      closeSet.push(current);
      openSet = openSet.filter((node) => !node.isEqual(current));

      if (!current.neighbors.length) {
        current.neighbors = generateNeighbors(
          current.pos[0],
          current.pos[1],
          grid
        );
      }

      for (let i = 0; i < current.neighbors.length; i++) {
        let neighbour = current.neighbors[i];
        if (
          this.detectObstacle(neighbour) ||
          this.getNodeInSet(closeSet, neighbour)
        ) {
          continue;
        }

        let totalCost = current.realCost + 1;

        let nextNode = this.getNodeInSet(openSet, neighbour);
        if (nextNode === null) {
          this.totalNode += 1;
          nextNode = neighbour;
          nextNode.parent = current;
          nextNode.realCost = totalCost;
          nextNode.estimatedCost = getHeuristic(
            this.type_heuristic,
            nextNode.pos,
            finish.pos
          );
          nextNode.totalCost = nextNode.realCost + nextNode.estimatedCost;
          openSet.push(nextNode);
        } else if (totalCost < nextNode.realCost) {
          nextNode.realCost = totalCost;
          nextNode.totalCost = nextNode.realCost + nextNode.estimatedCost;
          nextNode.parent = current;
        }
      }
    }
    return this.rebuildPath(current,start);
  }

  rebuildPath(current,start) {
    let path = [];
    while (current.parent !== null) {
      if (current.typeCell === "") {
        current.typeCell = "Path";
      }
      path.push(current);
      current = current.parent;
    }
    path.push(start);
    return path.reverse();
  }

  getNodeInSet(set, node) {
    for (let i = 0; i < set.length; i++) {
      if (set[i].isEqual(node)) {
        return set[i];
      }
    }
    return null;
  }

  getNodeLessCost(setNode) {
    let nodeMinCost = new Node();
    nodeMinCost.totalCost = Infinity;
    for (let i = 0; i < setNode.length; i++) {
      if (setNode[i].totalCost < nodeMinCost.totalCost) {
        nodeMinCost = setNode[i];
      }
    }
    return nodeMinCost;
  }

  detectObstacle(node) {
    if (node.typeCell === "Obstacle") {
      return true;
    }
    return false;
  }
}

export default AStar;
