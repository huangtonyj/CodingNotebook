const Graph = require('../data_structures/Graph');

function dijkstra(graph, source, destination) {
  
  const unVisited = new Set(graph.nodes());
  const distance = {};
  
  let currentStep;
  let nextSteps;
  
  graph.nodes().forEach(node => {
    distance[node] = Infinity;
  });
  
  distance[source] = 0;
  currentStep = source;
  unVisited.delete(currentStep);

  while (unVisited.has(destination)) {
    nextSteps = graph.graph[currentStep];
    
    for (let step in nextSteps) {     
      distance[step] = graph.graph[currentStep][step];
    }

    currentStep = findMinCostUnvisitedNode(graph, unVisited, distance);
    unVisited.delete(currentStep);
    console.log('currentStep', currentStep);
  }

  return distance;
}

function findMinCostUnvisitedNode(graph, unVisited, distance) {
  let minNode = null;
  let minDistance = Infinity;
  
  unVisited.forEach((node) => {
    if (distance[node] < minDistance) {
      minNode = node;
      minDistance = graph.graph[node];
    }
  });

  return minNode;
}

const myGraph = new Graph(
  {
    'a': {
      'b': 7,
      'c': 9,
      'f': 14,
    },
    'b': {
      'a': 7,
      'c': 10,
      'd': 15,
    },
    'c': {
      'a': 9,
      'b': 10,
      'd': 11,
      'f': 2,
    },
    'd': {
      'b': 15,
      'c': 11,
      'e': 6,
    },
    'e': {
      'd': 6,
      'f': 9,
    },
    'f': {
      'a': 14,
      'c': 2,
      'e': 9,
    },
  }
);
// const myGraph = new Graph(
//   {
//     1: {
//       2: 7,
//       3: 9,
//       6: 14,
//     },
//     2: {
//       1: 7,
//       3: 10,
//       4: 15,
//     },
//     3: {
//       1: 9,
//       2: 10,
//       4: 11,
//       6: 2,
//     },
//     4: {
//       2: 15,
//       3: 11,
//       5: 6,
//     },
//     5: {
//       4: 6,
//       6: 9,
//     },
//     6: {
//       1: 14,
//       3: 2,
//       5: 9,
//     },
//   }
// );


// console.log(dijkstra(myGraph, 1, 5));
console.log(dijkstra(myGraph, 'a', 'e'));


