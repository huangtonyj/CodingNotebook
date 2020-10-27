const Graph = require('../dataStructures/Graph');

Graph.prototype.dijkstra = function(startingNode) {
  const unVisitedNodes = new Set(this.nodes());
  const distances = {};
  
  this.nodes().forEach(node => {
    distances[node] = Infinity;
  });
  
  // Start with startingNode node
  distances[startingNode] = 0;
  let currentNode = startingNode;
  
  while (unVisitedNodes.size > 0) {
    unVisitedNodes.delete(currentNode);
    const neighboringNodes = this.graph[currentNode];
    const currentDistance = distances[currentNode];
    
    // Look at neighbors and update discovered distance, take minimum if needed.
    for (let neighbor in neighboringNodes) {     
      const nextDistance = currentDistance + this.graph[currentNode][neighbor];
      distances[neighbor] = Math.min(distances[neighbor], nextDistance);
    }
    
    // Look at explored nodes, find shortest one so far.
    currentNode = findMinCostUnvisitedNode(unVisitedNodes, distances);
  }

  return distances;
};

function findMinCostUnvisitedNode(unVisitedNodes, distances) {
  let minNode = null;
  let minDistance = Infinity;
  
  unVisitedNodes.forEach((node) => {
    if (distances[node] < minDistance) {
      minNode = node;
      minDistance = distances[node];
    }
  });

  return minNode;
}