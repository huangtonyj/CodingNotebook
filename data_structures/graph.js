class Graph {
  constructor(nodes) {
    this.nodes = nodes || {};
    this.length = 0;
  }

  hasNode(node) {
    return this.nodes[node] !== undefined;
  }

  hasEdge(node, edge) {
    if (edge === undefined) {throw 'not enough arguments'}
    return this.nodes[node][edge] ? true : false
  }

  addNode(value) {
    if (this.hasNode(value)) {throw `node ${value} already exist`}

    this.nodes[value] = {};
    this.length += 1;
    
    return this.nodes;
  }

  addEdge(node, edge, cost = 1) {
    if (edge === undefined) {throw 'not enough arguments'}
    if (!this.hasNode(node)) {throw `node ${node} does not exist`}
    if (!this.hasNode(edge)) {throw `node ${edge} does not exist`}
    if (this.hasEdge(node, edge)) {throw `node ${node} with edge ${edge} already exist`}

    this.nodes[node][edge] = cost;
    
    return this.nodes;
  }

  removeNode(node) {
    if (!this.hasNode(node)) {throw `node ${node} does not exist`} 
    
    for (let node_i in this.nodes) { // loop through each node edge and delete edge
      if (this.hasEdge(node_i, node)) {this.removeEdge(node_i, node)}
    }
    
    delete this.nodes[node] // delete actual node
    this.length -= 1;
  }

  removeEdge(node, edge) {
    if (edge === undefined) {throw 'not enough arguments'}
    if (!this.hasNode(node)) {throw `node ${node} does not exist`}
    if (!this.hasNode(edge)) {throw `node ${edge} does not exist`}
    if (!this.hasEdge(node, edge)) {throw `node ${node} with edge ${edge} does not exist`}

    delete this.nodes[node][edge]
  }

  length() {
    return this.length;
  }

}

module.exports = Graph;

// let myGraph = new Graph();
// myGraph.addNode(4, 1)
// myGraph.addNode(5)
// myGraph.addNode(6)
// myGraph.addEdge(4,6)
// myGraph.addEdge(6,5)
// myGraph.addEdge(5,4)

let myGraph2 = new Graph(
  {
    4:{6: 1},
    5:{4: 1},
    6:{5: 1},
})