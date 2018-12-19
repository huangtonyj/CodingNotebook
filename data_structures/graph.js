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

}

module.exports = Graph;

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