const GraphWeighted = require('../data_structures/GraphWeighted');

const A = new GraphWeighted.Vertex('A');
const B = new GraphWeighted.Vertex('B');
const C = new GraphWeighted.Vertex('C');
const D = new GraphWeighted.Vertex('D');
const E = new GraphWeighted.Vertex('E');
const F = new GraphWeighted.Vertex('F');

const vertices = [A, B, C, D, E, F];
const edges = [
  [A, B, 7],
  [A, C, 9],
  [A, F, 14],
  [B, A, 7],
  [B, C, 10],
  [B, D, 15],
  [C, A, 9],
  [C, B, 10],
  [C, D, 11],
  [C, F, 2],
  [D, B, 15],
  [D, C, 11],
  [D, E, 6],
  [E, D, 6],
  [E, F, 9],
  [F, A, 14],
  [F, C, 2],
  [F, E, 9],
]

const myGraph = new GraphWeighted.GraphWeighted(vertices, edges);

function dijkstra(graph, source, destination) {
  let currentNode = source;

  let unVisitedSet = new Set(graph.vertices);
  let distance = {};

  graph.vertices.forEach((vertex) => distance[vertex.value] = Infinity);
  distance[source.value] = 0;

  unVisitedSet.delete(source);
  
  source.out_edges.forEach((edge) => {
    // console.log(edge.to_vertex.value, edge.cost)
    distance[edge.to_vertex.value] = edge.cost + distance[source.value]
    // unVisitedSet.delete(edge.to_vertex);
  })
  
  console.log(distance, unVisitedSet);

  while (distance[destination] == Infinity) {

  }
  // Look for min in unvisited set
  // explore the min until destination is found
  
}

// console.log(dijkstra(myGraph, A, E));
dijkstra(myGraph, A, E);
