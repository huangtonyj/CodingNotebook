const Graph = require('../data_structures/Graph');

function dfsGraph(graph, source, destination, visited) {
  // console.log(source);
  if (source == destination) {return true}
  visited = visited || new Set();

  let ans = false;
  
  for (let node_i in graph.nodes[source]) {
    if (visited.has(node_i)) {continue;}
    visited.add(node_i)
    ans = ans || dfsGraph(graph, node_i, destination, visited)
  }
  return ans
}

let theGraph = new Graph({
  0: {
    1: true,
    4: true,
    5: true
  },
  1: {
    3: true,
    4: true
  },
  2: {
    1: true
  },
  3: {
    2: true,
    4: true
  },
  4: {},
  5: {},
})

console.log(dfsGraph(theGraph, 0, 2), true);
console.log(dfsGraph(theGraph, 0, 5), true);
console.log(dfsGraph(theGraph, 4, 5), false);