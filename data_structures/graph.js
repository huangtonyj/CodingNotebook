class Vertex {
  constructor(value) {
    this.value = value;
    this.in_edges = [];
    this.out_edges = [];
  }
}

class Edge {
  constructor(from_vertex, to_vertex, cost = 1) {
    this.from_vertex = from_vertex;
    this.to_vertex = to_vertex;
    this.cost = cost;

    this.from_vertex.out_edges.push(this);
    this.to_vertex.in_edges.push(this);
  }
}

a = new Vertex(1);
b = new Vertex(2);
c = new Vertex(3);

e1 = new Edge(a, b);
e2 = new Edge(a, c);

console.log(a)
console.log(a.out_edges.map((vertex) => vertex.to_vertex.value))