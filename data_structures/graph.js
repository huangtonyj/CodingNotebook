// Directed Graph with default weight 1
class Graph {
  constructor(vertices) {
    this.vertices = [];
    this.edges = [];

    vertices.forEach((vertex) => this.add_vertex(vertex))
  }

  add_vertex(value) {
    this.vertices.push(new Vertex(value))
  }

  add_edge(from_vertex, to_vertex, cost = 1) {
    this.edges.push(new Edge(from_vertex, to_vertex, cost))
  }
}
class Vertex {
  constructor(value) {
    this.value = value;
    this.in_edges = [];
    this.out_edges = [];
  }
}
class Edge {
  constructor(from_vertex, to_vertex, cost) {
    this.from_vertex = from_vertex;
    this.to_vertex = to_vertex;
    this.cost = cost;
    
    from_vertex.out_edges.push(this);
    to_vertex.in_edges.push(this);
  }
}

const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const D = new Vertex('D');
const E = new Vertex('E');
const F = new Vertex('F');

const myGraph = new Graph([A, B, C, D, E, F]);

// console.log(myGraph);
console.log(myGraph.vertices);
