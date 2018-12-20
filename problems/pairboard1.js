const Graph = require('../data_structures/Graph');

// const theGraph = {
//   1: { 2: 1,
//        3: 1},
//   2: { 1: 1,
//        3: 1},
//   3: { 1: 1,
//        2: 1,
//        4: 1},
//   4: { 3: 1}
// };

const theGraph = {
  1: [2,3],
  2: [1,3],
  3: [1,2,4],
  4: [3]
};

const myGraph = new Graph(theGraph);

// Travser through all edges
  // remove the edge

  // BFS()
  // Traverse each node
    // BFS and mark all nodes it visited in the BFS
    // return false if # of nodes !== # nodes in the graph
    // else return true

  // add edge

function bridgeGraph(graph) {
  const bridges = [];
  let currentEdge;
  let edges;
  // let edgeCount = Object.values(graph).flatten().length;

  // for (let i =0; i < edgeCount; i++) { 
  // }

  for (vertex in graph) {
    edges = graph[vertex];
    edges.forEach((edge) => {
      graph.removeEdge(vertex, edge);
      graph.removeEdge(edge, vertex);
    
    for (vertex in graph) {

      // BFS()
        // Add each visited node to a set
        // return false if set.length !== graph.length
      
      // false 
    }
      bridges.push([edge, vertex]);
    })
    graph.addEdge(vertex, edge)
    graph.addEdge(edge, vertex)
  }
}

bridgeGraph(theGraph);

// for (vertex in theGraph) {
//   console.log(vertex)  
//   console.log(theGraph[vertex])  
// }