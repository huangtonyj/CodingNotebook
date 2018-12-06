const Graph = require('../data_structures/graph');

const A = new Graph.Vertex('A');
const B = new Graph.Vertex('B');
const C = new Graph.Vertex('C');
const D = new Graph.Vertex('D');
const E = new Graph.Vertex('E');
const F = new Graph.Vertex('F');

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

const myGraph = new Graph.Graph(vertices, edges);


