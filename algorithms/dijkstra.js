const Graph = require('../data_structures/Graph');

function dijkstra(graph, source) {
  
  const unVisited = new Set(graph.nodes());
  const distance = {};

  let currentStep, currentDistance, nextSteps, nextDistance;
  
  graph.nodes().forEach(node => {distance[node] = Infinity;});
  
  distance[source] = 0;
  currentStep = source;
  
  while (unVisited.size > 0) {
    unVisited.delete(currentStep);
    nextSteps = graph.graph[currentStep];
    currentDistance = distance[currentStep];
    
    for (let step in nextSteps) {     
      nextDistance = currentDistance + graph.graph[currentStep][step];
      distance[step] = Math.min(distance[step], nextDistance);
    }
    
    currentStep = findMinCostUnvisitedNode(unVisited, distance);
    console.log('distance', distance, 'unVisited', unVisited);
    console.log('currentStep', currentStep);
  }

  return distance;
}

function findMinCostUnvisitedNode(unVisited, distance) {
  let minNode = null;
  let minDistance = Infinity;
  
  unVisited.forEach((node) => {
    if (distance[node] < minDistance) {
      minNode = node;
      minDistance = distance[node];
    }
  });

  return minNode;
}

// https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif
// const myGraph = new Graph(
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

// console.log(dijkstra(myGraph, 'A'));


// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
// const myGraph2 = new Graph(
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

// console.log(dijkstra(myGraph2, 'A'));


