/* eslint-disable no-loop-func */
/*
  You're given a list of edges representing an unweighted, directed
  graph with at least one node. Write a function that returns a boolean
  representing whether the given graph contains a cycle.

  For the purpose of this question, a cycle is defined as any number of
  vertices, including just one vertex, that are connected in a closed chain. A
  cycle can also be defined as a chain of at least one vertex in which the first
  vertex is the same as the last.

  The given list is what's called an adjacency list, and it represents a graph.
  The number of vertices in the graph is equal to the length of
  edges, where each index i in
  edges contains vertex i's outbound edges, in no
  particular order. Each individual edge is represented by a positive integer
  that denotes an index (a destination vertex) in the list that this vertex is
  connected to. Note that these edges are directed, meaning that you can only
  travel from a particular vertex to its destination, not the other way around
  (unless the destination vertex itself has an outbound edge to the original
  vertex).

  Also note that this graph may contain self-loops. A self-loop is an edge that
  has the same destination and origin; in other words, it's an edge that
  connects a vertex to itself. For the purpose of this question, a self-loop is
  considered a cycle.

  For a more detailed explanation, please refer to the Conceptual Overview
  section of this question's video explanation.

  Sample Input
    edges = [
      [1, 3],
      [2, 3, 4],
      [0],
      [],
      [2, 5],
      [],
    ]

    Sample Output
    true 
    // There are multiple cycles in this graph: 
    // 1) 0 -> 1 -> 2 -> 0
    // 2) 0 -> 1 -> 4 -> 2 -> 0
    // 3) 1 -> 2 -> 0 -> 1
    // These are just 3 examples; there are more.
*/

// BFS O(v + e) time O(v + e) space
function cycleInGraphBFS2(edges) {
  const reversedGraph = _reverseGraph(edges);
  const zeroInEdgesQueue = [];

  for (let [vertex, inEdges] of reversedGraph) {
    if (inEdges.size === 0) {
      zeroInEdgesQueue.push(vertex);
      reversedGraph.delete(vertex);
    }
  }

  while (zeroInEdgesQueue.length) {
    const currentVertex = zeroInEdgesQueue.shift();

    for (let [key, value] of reversedGraph) {
      if (value.has(currentVertex)) {
        reversedGraph.get(key).delete(currentVertex);

        if (reversedGraph.get(key).size === 0) {
          zeroInEdgesQueue.push(key);
          reversedGraph.delete(key);
        }
      }
    }
  }

  return reversedGraph.size > 0;
}

function _reverseGraph(edges) {
  const reversed = new Map();

  edges.forEach((outVertices, currentVertex) => {
    if (!reversed.has(currentVertex)) reversed.set(currentVertex, new Map());

    outVertices.forEach((outVertex) => {
      if (!reversed.has(outVertex)) reversed.set(outVertex, new Map());
      reversed.get(outVertex).set(currentVertex, true);
    });
  });

  return reversed;
}

module.exports = cycleInGraph;

