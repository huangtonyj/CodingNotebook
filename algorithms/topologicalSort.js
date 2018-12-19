const Graph =  require('../data_structures/Graph');

function topologicalSort(graph) {
  let graphLength = graph.length;
  let resultArr = [];

  let independentNode = findIndependentNode(graph);

  // iteratively look for a node with no dependenices, remove it and look again.
  while (independentNode !== null) {
    resultArr.push(independentNode);
    graph.removeNode(independentNode);
    independentNode = findIndependentNode(graph);
  }

  return resultArr.length === graphLength ? resultArr : null;
}

// Helper function to find an independent node.
function findIndependentNode(graph) {
  let ans = null;

  for (let edge in graph.graph) {
    ans = edge;
    for (let node in graph.graph) {
      if (graph.hasEdge(node, edge)) {
        ans = null;
        break;
      };
    }
    if (ans) { return ans; }
  }
  return null;
}


const theGraph1 = new Graph({
  0: { 1: 1 },
  1: { 2: 1 },
  2: {},
  3: { 2: 1 }
});

const theGraph2 = new Graph({
  0: { 1: 1 },
  1: { 2: 1 },
  2: {},
  3: { 2: 1 },
  4: { 0: 1,
       3: 2 },
  5: { 3: 10}
});

const theGraph3 = new Graph({
  0: { 1: 1 },
  1: { 2: 1 },
  2: { 0: 1},
});

console.log(topologicalSort(theGraph1), ['0', '1', '3', '2']);
console.log(topologicalSort(theGraph2), ['4', '0', '1', '5', '3', '2']);
console.log(topologicalSort(theGraph3), null);