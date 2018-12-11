const Graph = require('../data_structures/Graph');
const Queue = require('../data_structures/Queue');

function biDirSearchGraph(graph, source, destination) {
  const visitedA = new Set();
  const visitedB = new Set();
  
  const queueA = new Queue([source]);
  const queueB = new Queue([destination]);
  
  let currentNodeA, currentNodeB;

  while (!queueA.isEmpty() || !queueB.isEmpty()) {
    currentNodeA = queueA.dequeue();
    currentNodeB = queueB.dequeue();

    visitedA.add(currentNodeA);
    visitedB.add(currentNodeB);

    if (visitedA.has(destination) || visitedB.has(source)) {return true;}

    for (let nodeA in graph.nodes[currentNodeA]) {queueA.enqueue(nodeA)}
    for (let nodeB in graph.nodes[currentNodeB]) {queueB.enqueue(nodeB)}
  }

  return false;
}

var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');


console.log(biDirSearchGraph(graph, 'A', 'C'), true);
console.log(biDirSearchGraph(graph, 'A', 'E'), false);
console.log(biDirSearchGraph(graph, 'B', 'A'), true);
console.log(biDirSearchGraph(graph, 'D', 'E'), true);