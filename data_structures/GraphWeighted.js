// Directed Graph with default weight 1
class GraphWeighted {
  constructor(vertices, edges) {
    this.vertices = [];
    this.edges = [];

    vertices.forEach((vertex) => this.add_vertex(vertex))
    edges.forEach((edge) => this.add_edge(...edge))
  }

  add_vertex(vertex) {
    this.vertices.push(vertex)
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

module.exports = { GraphWeighted, Vertex, Edge }