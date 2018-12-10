class Graph {
  constructor(nodes) {
    this.nodes = nodes || {};
  }

  addNode(value) {
    this.nodes[value] = new Array();
  }

  addEdge(node, edge) {
    this.nodes[node][edge] = 1;
  }
}

let myGraph = new Graph();
myGraph.addNode(4)
myGraph.addNode(5)
myGraph.addNode(6)

myGraph.addEdge(4,6)
myGraph.addEdge(6,5)
myGraph.addEdge(5,4)

