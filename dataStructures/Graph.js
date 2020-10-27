class Graph {
  constructor(nodes) {
    this.graph = nodes || {};
    this.length = Object.keys(this.graph).length;
  }

  hasNode(node) {
    return this.graph[node] !== undefined;
  }

  hasEdge(node, edge) {
    if (edge === undefined) { throw 'not enough arguments'; }
    return this.graph[node][edge] ? true : false;
  }

  addNode(value) {
    if (this.hasNode(value)) { throw `node ${value} already exist`; }

    this.graph[value] = {};
    this.length += 1;
    
    return this.graph;
  }

  addEdge(node, edge, cost = 1) {
    if (edge === undefined) { throw 'not enough arguments'; }
    if (!this.hasNode(node)) { throw `node ${node} does not exist`; }
    if (!this.hasNode(edge)) { throw `node ${edge} does not exist`; }
    if (this.hasEdge(node, edge)) { throw `node ${node} with edge ${edge} already exist`; }

    this.graph[node][edge] = cost;
    
    return this.graph;
  }

  removeNode(node) {
    if (!this.hasNode(node)) { throw `node ${node} does not exist`; } 
    
    // loop through each node edge and delete edge
    for (let iNode in this.graph) { 
      if (this.hasEdge(iNode, node)) { this.removeEdge(iNode, node); }
    }
    
    delete this.graph[node]; // delete actual node
    this.length -= 1;
  }

  removeEdge(node, edge) {
    if (edge === undefined) { throw 'not enough arguments'; }
    if (!this.hasNode(node)) { throw `node ${node} does not exist`; }
    if (!this.hasNode(edge)) { throw `node ${edge} does not exist`; }
    if (!this.hasEdge(node, edge)) { throw `node ${node} with edge ${edge} does not exist`; }

    delete this.graph[node][edge];
  }

  length() {
    return this.length;
  }

  nodes() {
    return Object.keys(this.graph);
  }

  edges() {
    const edgesArr = [];
    for (let node in this.graph) {
      for (let edge in this.graph[node]) {
        edgesArr.push([node, edge]);
      }
    }
    return edgesArr;
  }

  getIndependentNode() {
    for (let edge in this.graph) {
      let ans = edge;
      for (let node in this.graph) {
        if (this.hasEdge(node, edge)) {
          ans = null;
          break;
        };
      }
      if (ans) { return ans; }
    }
    return null;
  }
}

module.exports = Graph;
require('../algorithms/dijkstra');

// const myGraph = new Graph();
// myGraph.addNode(4, 1)
// myGraph.addNode(5)
// myGraph.addNode(6)
// myGraph.addEdge(4,6)
// myGraph.addEdge(6,5)
// myGraph.addEdge(5,4)

// const myGraph2 = new Graph(
//   {
//     4:{6: 1},
//     5:{4: 1},
//     6:{5: 1},
// });

// console.log(myGraph2.nodes());
// console.log(myGraph2.edges());

// const myGraph3 = new Graph(
//   // https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif
//   {
//     'A': {
//       'B': 7,
//       'C': 9,
//       'F': 14,
//     },
//     'B': {
//       'A': 7,
//       'C': 10,
//       'D': 15,
//     },
//     'C': {
//       'A': 9,
//       'B': 10,
//       'D': 11,
//       'F': 2,
//     },
//     'D': {
//       'B': 15,
//       'C': 11,
//       'E': 6,
//     },
//     'E': {
//       'D': 6,
//       'F': 9,
//     },
//     'F': {
//       'A': 14,
//       'C': 2,
//       'E': 9,
//     },
//   }
// );

// console.log(myGraph3.dijkstra('A'), {
//   A: 0,
//   B: 7,
//   C: 9,
//   D: 20,
//   E: 20,
//   F: 11
// });

// const myGraph4 = new Graph(
//   // https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
//   {
//     'A': {
//       'B': 4,
//       'H': 8,
//     },
//     'B': {
//       'A': 4,
//       'C': 8,
//       'H': 11,
//     },
//     'C': {
//       'B': 8,
//       'D': 7,
//       'F': 4,
//       'I': 2,
//     },
//     'D': {
//       'C': 7,
//       'E': 9,
//       'F': 14,
//     },
//     'E': {
//       'D': 9,
//       'F': 10,
//     },
//     'F': {
//       'C': 4,
//       'D': 14,
//       'E': 10,
//       'G': 2,
//     },
//     'G': {
//       'F': 2,
//       'H': 1,
//       'I': 6,
//     },
//     'H': {
//       'A': 8,
//       'G': 1,
//       'I': 7,
//     },
//     'I': {
//       'C': 2,
//       'G': 6,
//       'H': 7,
//     },
//   }
// );

// console.log(myGraph4.dijkstra('A'), {
//   A: 0,
//   B: 4,
//   C: 12,
//   D: 19,
//   E: 21,
//   F: 11,
//   G: 9,
//   H: 8,
//   I: 14
// });