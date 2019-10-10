const Graph = require('../dataStructures/Graph');

Graph.prototype.dijkstra = function(source) {
  const unVisited = new Set(this.nodes());
  const distance = {};

  let currentStep, currentDistance, nextSteps, nextDistance;
  
  this.nodes().forEach(node => {distance[node] = Infinity;});
  
  // Start with source node
  distance[source] = 0;
  currentStep = source;
  
  while (unVisited.size > 0) {
    unVisited.delete(currentStep);
    nextSteps = this.graph[currentStep];
    currentDistance = distance[currentStep];
    
    // Look at neighbors and update discovered distance, take minimum if needed.
    for (let step in nextSteps) {     
      nextDistance = currentDistance + this.graph[currentStep][step];
      distance[step] = Math.min(distance[step], nextDistance);
    }
    
    // Look at explored nodes, find shortest one so far.
    currentStep = findMinCostUnvisitedNode(unVisited, distance);
    
    // console.log('distance', distance, 'unVisited', unVisited);
    // console.log('currentStep', currentStep);
  }

  return distance;
};

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