const Graph =  require('../dataStructures/Graph');

function topologicalSort(graph) {
  let graphLength = graph.length;
  let resultArr = [];

  let independentNode = graph.getIndependentNode();

  // iteratively look for a node with no dependenices, remove it and look again.
  while (independentNode !== null) {
    resultArr.push(independentNode);
    graph.removeNode(independentNode);
    independentNode = graph.getIndependentNode();
  }

  return resultArr.length === graphLength ? resultArr : null;
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